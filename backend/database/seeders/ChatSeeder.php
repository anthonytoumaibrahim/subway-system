<?php

namespace Database\Seeders;

use App\Models\Chat;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ChatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Chat::create([
            "message" => "Hello there, can I please get some help?",
            "sender" => 1,
            "receiver" => 2,
            "station_id" => 1,
            "created_at" => Carbon::now()->subDays(3)->subMinutes(21)->toDateTimeString()
        ]);

        Chat::create([
            "message" => "Hello! Yes, of course. What can I help you with?",
            "sender" => 2,
            "receiver" => 1,
            "station_id" => 1,
            "created_at" => Carbon::now()->subDays(3)->subMinutes(18)->toDateTimeString()
        ]);

        Chat::create([
            "message" => "What time does the station close?",
            "sender" => 1,
            "receiver" => 2,
            "station_id" => 1,
            "created_at" => Carbon::now()->subDays(3)->subMinutes(1)->toDateTimeString()
        ]);

        Chat::create([
            "message" => "The station closes at 11 PM.",
            "sender" => 2,
            "receiver" => 1,
            "station_id" => 1,
            "created_at" => Carbon::now()->subDays(1)->toDateTimeString()
        ]);
    }
}
