<?php

namespace App\Http\Controllers;

use App\Models\Guide;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class GuideController extends Controller
{
    /**
     * Show the form for editing the guide profile.
     */
    public function edit()
    {
        $user = Auth::user();

        // Ensure the user is actually a guide
        if ($user->role !== 'guide') {
            return redirect()->route('dashboard');
        }

        $guide = Guide::where('user_id', $user->id)->first();

        return Inertia::render('guide/profile', [
            'guide' => $guide,
        ]);
    }

    /**
     * Update the guide profile.
     */
    public function update(Request $request)
    {
        $user = Auth::user();

        if ($user->role !== 'guide') {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $validated = $request->validate([
            'bio' => 'nullable|string|max:1000',
            'specialties' => 'nullable|string|max:500',
            'languages' => 'nullable|string|max:500',
            'license' => 'nullable|file|mimes:pdf,jpg,jpeg,png|max:5120',
            'photo' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
        ]);

        $specialties = $this->parseCsvList($validated['specialties'] ?? null);
        $languages = $this->parseCsvList($validated['languages'] ?? null);

        $existingGuide = Guide::where('user_id', $user->id)->first();

        $licensePath = null;
        if ($request->hasFile('license')) {
            $file = $request->file('license');
            $fileName = 'license_' . $user->id . '_' . time() . '.' . $file->getClientOriginalExtension();
            $path = $file->storeAs('licenses', $fileName, 'public');
            $licensePath = '/storage/' . $path;
        }

        $photoUrl = $existingGuide?->photo_url ?? null;
        if ($request->hasFile('photo')) {
            $file = $request->file('photo');
            $fileName = 'photo_' . $user->id . '_' . time() . '.' . $file->getClientOriginalExtension();
            $path = $file->storeAs('photos', $fileName, 'public');
            $photoUrl = '/storage/' . $path;
        }

        $updateData = [
            'bio' => $validated['bio'] ?? null,
            'specialties' => $specialties,
            'languages' => $languages,
            'photo_url' => $photoUrl,
            'is_verified' => $existingGuide?->is_verified ?? false,
            'national_id' => $existingGuide?->national_id ?? 'PENDING_'.$user->id,
        ];

        if ($licensePath) {
            $updateData['license_path'] = $licensePath;
            $updateData['verification_status'] = 'pending';
            // Reset is_verified when they upload a new license, so they must be re-verified
            $updateData['is_verified'] = false;
        }

        $guide = Guide::updateOrCreate(
            ['user_id' => $user->id],
            $updateData
        );

        return redirect()->back()->with('status', 'Profile updated successfully!');
    }

    /**
     * @return array<int, string>
     */
    private function parseCsvList(?string $value): array
    {
        if (! $value) {
            return [];
        }

        return collect(explode(',', $value))
            ->map(fn (string $item): string => trim($item))
            ->filter()
            ->unique()
            ->take(20)
            ->values()
            ->all();
    }
}
