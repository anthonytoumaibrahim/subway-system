<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ride extends Model
{
    use HasFactory;

    protected $fillable = [
        "departure_date",
        "arrival_date",
        "price",
        "departure_station_id",
        "arrival_station_id"
    ];

    public function reviews()
    {
        return $this->hasMany(Reviews::class);
    }

    public function user()
    {
        return $this->hasMany(user::class);
    }
}
