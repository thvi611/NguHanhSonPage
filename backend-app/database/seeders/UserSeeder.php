<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        User::insert([
            'name' => 'admin',
            'email' => 'admin@app.com',
            'password' => Hash::make(12345678),
            'email_verified_at' => now(),
            'remember_token' => '1234567890',
        ]);
        User::factory(10)->create();
    }
}
