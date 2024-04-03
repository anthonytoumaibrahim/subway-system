<?php

namespace App\Http\Middleware;
use App\Models\Role;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class ManagerAuth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = Auth::user();
        $role = Role::find($user->role_id)->type;
        if ($role !== "admin" && $role !=="manager" ) {
            return response()->json([
                'error' => true,
                'message' => 'Unauthorized.'
            ], 401);
        
        }
        return $next($request);
    }
}