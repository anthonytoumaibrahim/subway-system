<?php

namespace Database\Seeders;

use App\Models\Chat;
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
            "station_id" => 1
        ]);

        Chat::create([
            "message" => "Hello! Yes, of course. What can I help you with?",
            "sender" => 2,
            "receiver" => 1,
            "station_id" => 1
        ]);

        Chat::create([
            "message" => "Where can I find my coins balance?",
            "sender" => 1,
            "receiver" => 2,
            "station_id" => 1
        ]);

        Chat::create([
            "message" => "HIIII! :D",
            "sender" => 2,
            "receiver" => 3,
            "station_id" => 2
        ]);
        Chat::create([
            "message" => "Hellooo!",
            "sender" => 3,
            "receiver" => 2,
            "station_id" => 2
        ]);
    }
}
