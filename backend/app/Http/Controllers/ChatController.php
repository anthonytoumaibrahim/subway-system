<?php

namespace App\Http\Controllers;

use App\Models\Chat;
use App\Models\Station;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ChatController extends Controller
{
    public function getStations()
    {
        $stations = Station::select('id', 'name', 'manager_id')
            ->with('manager:id,username')
            ->whereNotNull('manager_id')
            ->get();

        return response()->json([
            'stations' => $stations
        ]);
    }

    public function getChats(Request $request)
    {
        $user_id = Auth::id();
        $station_id = $request->station_id;

        $chats = Chat::where(function ($query) use ($user_id) {
            $query->where("sender", $user_id)
                ->orWhere("receiver", $user_id);
        })
            ->where("station_id", $station_id)
            ->get();

        $mergedChats = $chats->each(function ($chat) use ($user_id) {
            if ($chat->sender != $user_id) {
                $chat->reply = true;
            }
            $chat->time = Carbon::parse($chat->created_at)->format('h:i A');
        })->groupBy(function ($chat) {
            return $chat->created_at->toDateString();
        });

        return response()->json([
            'chats' => $mergedChats
        ]);
    }

    public function sendMessage(Request $request)
    {
        $request->validate([
            'message' => 'required|max:600',
            'station_id' => 'required|exists:stations,id'
        ]);

        $user_id = Auth::id();
        $message = $request->message;
        $station_id = $request->station_id;

        $chat = new Chat();
        $chat->message = $message;
        $chat->sender = $user_id;
        $chat->station_id = $station_id;
        $chat->saveOrFail();

        return response()->json([
            "success" => true,
            "message" => "Chat has been sent successfully."
        ]);
    }
}
