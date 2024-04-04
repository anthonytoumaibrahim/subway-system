<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
    use HasFactory;

    protected $fillable = [
        "message",
        "sender",
        "receiver",
        "station_id",
        "created_at"
    ];

    public function station()
    {
        return $this->belongsTo(Station::class, 'station_id', 'id');
    }

    public function sender()
    {
        return $this->belongsTo(User::class, 'sender', 'id');
    }

    public function receiver()
    {
        return $this->belongsTo(User::class, 'receiver', 'id');
    }
}
