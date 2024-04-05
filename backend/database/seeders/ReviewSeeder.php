<?php

namespace Database\Seeders;

use App\Models\Review;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ReviewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Review::create([
            'rating' => 4.5,
            'text' => 'This ride was the best!',
            'user_id' => 4,
            'ride_id' => 1
        ]);

        Review::create([
            'rating' => 2,
            'text' => 'The subway was uncleaned and late to arrive.',
            'user_id' => 4,
            'ride_id' => 2
        ]);

        Review::create([
            'rating' => 5,
            'text' => 'Loved this station.',
            'user_id' => 1,
            'ride_id' => 1
        ]);

        Review::create([
            'rating' => 5,
            'text' => 'Loved this station.',
            'user_id' => 1,
            'ride_id' => 1
        ]);
        Review::create([
            'rating' => 5,
            'text' => 'Loved this station.',
            'user_id' => 1,
            'ride_id' => 1
        ]);
        Review::create([
            'rating' => 5,
            'text' => 'Loved this station.',
            'user_id' => 4,
            'ride_id' => 1
        ]);
    }
}
