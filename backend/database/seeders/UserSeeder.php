<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'username' => 'Ali',
            'email' => 'ali@gmail.com',
            'password' => Hash::make('ali12345'),
            'role_id' => 1
        ]);
        User::create([
            'username' => 'Mariam',
            'email' => 'mariam@gmail.com',
            'password' => Hash::make('mariam123'),
            'role_id' => 2
        ]);
        User::create([
            'username' => 'Anthony',
            'email' => 'anthony@gmail.com',
            'password' => Hash::make('anthony123'),
            'role_id' => 3
        ]);
    }
}
