<?php

namespace App\Services;

use App\Models\Booking;
use Illuminate\Support\Facades\Log;

class MobileMoneyService
{
    /**
     * Simulate initiating a Mobile Money payment (MTN/Airtel).
     *
     * @param Booking $booking
     * @param string $phoneNumber
     * @param string $provider (e.g., 'mtn' or 'airtel')
     * @return array
     */
    public function initiatePayment(Booking $booking, string $phoneNumber, string $provider): array
    {
        // In a real integration, we would call the MTN/Airtel API here.
        // For example, Flutterwave, Paystack, or direct MoMo API.
        
        Log::info("Initiating {$provider} MoMo payment for booking {$booking->id} to {$phoneNumber}");

        // Simulating a successful API response
        return [
            'status' => 'success',
            'transaction_id' => 'MOMO_TXN_' . uniqid(),
            'message' => 'Payment push initiated. Please check your phone to confirm.'
        ];
    }
}
