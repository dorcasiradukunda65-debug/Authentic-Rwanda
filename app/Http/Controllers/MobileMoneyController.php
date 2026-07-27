<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Services\MobileMoneyService;
use Illuminate\Http\Request;

class MobileMoneyController extends Controller
{
    protected MobileMoneyService $momoService;

    public function __construct(MobileMoneyService $momoService)
    {
        $this->momoService = $momoService;
    }

    public function checkout(Request $request, Booking $booking)
    {
        $request->validate([
            'phone_number' => 'required|string|max:15',
            'provider' => 'required|in:mtn,airtel'
        ]);

        if ($booking->payment_status === 'paid') {
            return response()->json(['error' => 'Booking is already paid'], 400);
        }

        $response = $this->momoService->initiatePayment($booking, $request->phone_number, $request->provider);

        if ($response['status'] === 'success') {
            // In a real app, this would be pending until webhook confirmation.
            // For this mock, we'll mark it as paid.
            $booking->update(['payment_status' => 'paid']);
            return response()->json(['message' => 'Payment successful', 'booking' => $booking]);
        }

        return response()->json(['error' => 'Payment failed'], 500);
    }
}
