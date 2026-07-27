<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Experience;
use App\Models\Booking;
use App\Models\Guide;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    /**
     * Display the Admin Dashboard with full platform stats.
     */
    public function index()
    {
        // For this demo, we allow the main user to see the admin view
        // In production, we would check for role === 'admin'
        
        $stats = [
            'total_users' => User::count(),
            'total_guides' => User::where('role', 'guide')->count(),
            'total_experiences' => Experience::count(),
            'total_bookings' => Booking::count(),
            'total_revenue' => Booking::where('payment_status', 'paid')->sum('total_price'),
        ];

        $recentBookings = Booking::with(['experience', 'user'])->latest()->limit(10)->get();
        $recentUsers = User::latest()->limit(5)->get();
        $guides = Guide::with('user')->latest()->get();

        $notifications = Auth::user()->notifications()->take(50)->get();

        return Inertia::render('admin/dashboard', [
            'stats' => $stats,
            'recentBookings' => $recentBookings,
            'recentUsers' => $recentUsers,
            'guides' => $guides,
            'notifications' => $notifications,
        ]);
    }

    /**
     * Mark a specific notification as read.
     */
    public function markNotificationAsRead($id)
    {
        $notification = Auth::user()->notifications()->where('id', $id)->first();
        if ($notification) {
            $notification->markAsRead();
        }

        return redirect()->back();
    }

    /**
     * Verify and certify a guide.
     */
    public function verifyGuide(Guide $guide)
    {
        $guide->update([
            'verification_status' => 'verified',
            'is_verified' => true,
        ]);

        return redirect()->back()->with('status', 'Guide certified successfully!');
    }

    /**
     * Reject a guide's verification.
     */
    public function rejectGuide(Guide $guide)
    {
        $guide->update([
            'verification_status' => 'rejected',
            'is_verified' => false,
        ]);

        return redirect()->back()->with('status', 'Guide certification rejected.');
    }
}
