<?php

namespace Tests\Feature;

use Tests\TestCase;

class HealthCheckTest extends TestCase
{
    /**
     * Test that the health check endpoint returns a 200 response.
     * This is required for 99.5% uptime monitoring in Sprint 5.
     */
    public function test_health_check_endpoint_is_accessible(): void
    {
        $response = $this->get('/up');
        $response->assertStatus(200);
    }
}
