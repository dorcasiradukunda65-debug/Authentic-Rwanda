<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $email = 'admin@authenticrwanda.com';
        $password = Str::random(16);

        // Check if admin already exists
        $admin = User::where('role', 'admin')->first();

        if (!$admin) {
            $admin = User::create([
                'name' => 'Authentic Rwanda Admin',
                'email' => $email,
                'password' => Hash::make($password),
                'role' => 'admin',
                'email_verified_at' => now(),
            ]);

            $this->command->info("------------------------------------------------");
            $this->command->info("Admin account created successfully!");
            $this->command->info("Email: {$email}");
            $this->command->info("Password: {$password}");
            $this->command->info("Please keep this password secure. It will not be shown again.");
            $this->command->info("------------------------------------------------");
        } else {
            $this->command->info("Admin account already exists.");
        }
    }
}
