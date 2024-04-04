<?php

namespace Database\Seeders;

use App\Models\CoinRequest;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CoinRequestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        CoinRequest::create([
            "amount" => 100,
            "status" => "sent",
            "user_id" => 2
        ]);
        CoinRequest::create([
            "amount" => 1000,
            "status" => "sent",
            "user_id" => 1
        ]);
    }
}
