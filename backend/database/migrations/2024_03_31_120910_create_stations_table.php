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
        Schema::create('stations', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('image')->nullable();
            $table->string('status')->default('active');
            $table->double('longtitude')->nullable();
            $table->double('latitude')->nullable();
            $table->time('opening')->nullable();
            $table->time('closing')->nullable();
            $table->unsignedBigInteger('manager_id')->nullable();
            $table->timestamps();

            $table->foreign('manager_id')->references('id')->on('users')->cascadeOnDelete()->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stations');
    }
};
