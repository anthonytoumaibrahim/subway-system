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
        "receiver"
    ];

    public function sender()
    {
        return $this->hasOne(User::class, 'id', 'sender');
    }

    public function receiver()
    {
        return $this->hasOne(User::class, 'id', 'receiver');
    }
}
