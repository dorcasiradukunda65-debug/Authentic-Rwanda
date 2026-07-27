<?php

namespace App\Http\Middleware;

use App\Models\Guide;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureGuideIsVerified
{
    /**
     * Blocks guide-role users from accessing guide features
     * unless their license has been verified by an admin.
     *
     * @param  Closure(Request): Response  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = $request->user();

        // Must be logged in as a guide or admin
        if (! $user || ($user->role !== 'guide' && $user->role !== 'admin')) {
            return redirect()->route('dashboard');
        }

        // If admin, they bypass the verification check
        if ($user->role === 'admin') {
            return $next($request);
        }

        // Must have a verified guide profile
        $guide = Guide::where('user_id', $user->id)->first();

        if (! $guide || $guide->verification_status !== 'verified') {
            return redirect()
                ->route('guide.profile.edit')
                ->with('warning', 'Your guide license must be approved by an admin before you can access this feature. Please upload your certificate and wait for verification.');
        }

        return $next($request);
    }
}
