<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            $table->dateTime("create_date");
            $table->dateTime("expire_date");
            $table->unsignedBigInteger("user_id");
            $table->forein("user_id")->references("id")->on("users");
            $table->unsignedBigInteger("station_id");
            $table->forein("station_id")->references("id")->on("stations");
            $table->station_id();
            
        });

    }
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};
