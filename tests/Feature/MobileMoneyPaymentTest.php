<?php

namespace Tests\Feature;

use App\Models\Booking;
use App\Models\Experience;
use App\Models\Guide;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class MobileMoneyPaymentTest extends TestCase
{
    use RefreshDatabase;

    public function test_user_can_checkout_with_momo(): void
    {
        $user = User::factory()->create();
        $guideUser = User::factory()->create(['role' => 'guide']);
        $guide = Guide::create([
            'user_id' => $guideUser->id,
            'national_id' => 'NID_'.$guideUser->id,
            'is_verified' => true,
        ]);
        $experience = Experience::create([
            'guide_id' => $guide->id,
            'title' => 'Test',
            'description' => 'Test',
            'location_name' => 'Kigali',
            'duration' => '2 hours',
            'price' => 50,
            'category' => 'Test',
            'is_active' => true,
        ]);

        $booking = Booking::create([
            'user_id' => $user->id,
            'experience_id' => $experience->id,
            'booking_date' => now()->addDay()->toDateString(),
            'number_of_people' => 2,
            'total_price' => 100,
            'payment_status' => 'pending',
        ]);

        $response = $this->actingAs($user)->postJson(route('momo.checkout', $booking), [
            'phone_number' => '0781234567',
            'provider' => 'mtn'
        ]);

        $response->assertStatus(200);
        $response->assertJson(['message' => 'Payment successful']);

        $this->assertEquals('paid', $booking->fresh()->payment_status);
    }
}
