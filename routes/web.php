<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\Auth\FirebaseAuthController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DiscoveryController;
use App\Http\Controllers\ExperienceController;
use App\Http\Controllers\GuideController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\StripePaymentController;
use Illuminate\Support\Facades\Route;

// Public Routes
Route::get('explore', [DiscoveryController::class, 'index'])
    ->middleware('throttle:app-public')
    ->name('explore');

Route::get('/', [DiscoveryController::class, 'index'])
    ->middleware('throttle:app-public')
    ->name('home');

Route::post('firebase/auth', [FirebaseAuthController::class, 'store'])
    ->middleware('throttle:firebase-auth')
    ->name('firebase.auth');

// Auth Required Routes
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // Admin Routes
    Route::get('admin', [AdminController::class, 'index'])
        ->middleware('admin')
        ->name('admin.dashboard');
    Route::post('admin/guides/{guide}/verify', [AdminController::class, 'verifyGuide'])
        ->middleware('admin')
        ->name('admin.guides.verify');
    Route::post('admin/guides/{guide}/reject', [AdminController::class, 'rejectGuide'])
        ->middleware('admin')
        ->name('admin.guides.reject');
    Route::patch('admin/notifications/{id}/read', [AdminController::class, 'markNotificationAsRead'])
        ->middleware('admin')
        ->name('admin.notifications.read');

    // Booking Flow
    Route::post('bookings', [BookingController::class, 'store'])
        ->middleware('throttle:app-actions')
        ->name('bookings.store');
    Route::get('bookings/{id}/payment', [BookingController::class, 'payment'])->name('bookings.payment');
    Route::post('bookings/{id}/confirm', [BookingController::class, 'confirm'])
        ->middleware('throttle:app-actions')
        ->name('bookings.confirm');
    Route::post('bookings/{booking}/stripe/checkout', [StripePaymentController::class, 'checkout'])
        ->middleware('throttle:app-actions')
        ->name('stripe.checkout');
    Route::post('bookings/{booking}/momo/checkout', [\App\Http\Controllers\MobileMoneyController::class, 'checkout'])
        ->middleware('throttle:app-actions')
        ->name('momo.checkout');
    Route::get('bookings/{booking}/stripe/success', [StripePaymentController::class, 'success'])
        ->name('stripe.checkout.success');
    Route::get('bookings/{booking}/stripe/cancel', [StripePaymentController::class, 'cancel'])
        ->name('stripe.checkout.cancel');

    // Review Flow
    Route::post('reviews', [ReviewController::class, 'store'])
        ->middleware('throttle:app-actions')
        ->name('reviews.store');

    // Guide Profiles
    Route::post('profile/become-guide', [DashboardController::class, 'becomeGuide'])->name('profile.become-guide');
    Route::get('profile/guide', [GuideController::class, 'edit'])->name('guide.profile.edit');
    Route::post('profile/guide', [GuideController::class, 'update'])
        ->middleware('throttle:app-actions')
        ->name('guide.profile.update');

    // Experience Management (requires verified guide)
    Route::middleware('verified-guide')->group(function () {
        Route::get('experiences', [ExperienceController::class, 'index'])->name('experiences.index');
        Route::get('experiences/create', [ExperienceController::class, 'create'])->name('experiences.create');
        Route::post('experiences', [ExperienceController::class, 'store'])
            ->middleware('throttle:app-actions')
            ->name('experiences.store');
        Route::get('experiences/{id}', [ExperienceController::class, 'show'])->name('experiences.show');
        Route::get('experiences/{id}/edit', [ExperienceController::class, 'edit'])->name('experiences.edit');
        Route::put('experiences/{id}', [ExperienceController::class, 'update'])
            ->middleware('throttle:app-actions')
            ->name('experiences.update');
        Route::delete('experiences/{id}', [ExperienceController::class, 'destroy'])
            ->middleware('throttle:app-actions')
            ->name('experiences.destroy');
    });
});

Route::post('stripe/webhook', [StripePaymentController::class, 'webhook'])
    ->name('stripe.webhook');

require __DIR__.'/settings.php';
