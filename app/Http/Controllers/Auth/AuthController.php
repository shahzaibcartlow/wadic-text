<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Laravel\Socialite\Facades\Socialite;

class AuthController extends Controller
{

    public function __construct()
    {
    }

    function checkUser(Request $request)
    {
        $checkUser = Auth::check();
        $getUserId = ($checkUser) ? \auth()->user()->only(['id']) : false;
        $user = User::where('id', $getUserId['id'])->select('is_author as user_type')->first();

        if($checkUser){
            return response()->json(['user'=>$user], 200);
        }
        else{
            return response()->json(['user'=>null], 200);
        }
    }

    function init(Request $request)
    {
        $user = $this->_getUser();
        return response()->json(['user'=>$user], 200);
    }

    public function login(Request $request){

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = $this->_getUser();

            return response()->json(['user' => $user], 200);
        }
        else {
            return response()->json(['error' => 'Unauthorized Access'], 401);
        }
    }

    public function register(Request $request){

        $user = User::where('email', $request->email)->orwhere('number', $request->number)->first();
        if(isset($user->id)){
            return response()->json(['error'=>'This User already exists. Please try with unique Phone Number or Email'], 401);
        }
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->number = $request->number;
        $user->status = 1;
        $user->password = Hash::make($request->password);
        $user->save();

        Auth::login($user);
        $getUser = $this->_getUser();

        return response()->json(['user' => $getUser], 200);
    }

    public function logout(Request $request){
        Auth::logout();
    }


    public function check_user_history(Request $request){
        $active_users = User::where('status', 1)->select('id as user_id', 'name as user_name', 'email as user_email', 'number as user_number', 'address as user_address', 'status as user_status')->get();
        $disable_users = User::where('status', 0)->select('id as user_id', 'name as user_name', 'email as user_email', 'number as user_number', 'address as user_address', 'status as user_status')->get();

//        dd($active_users, $disable_users);

        return response()->json(compact('active_users', 'disable_users'), 200);
    }

    public function user_status(Request $request){
//        dd($request->user_status);
        $proUpdate = User::find($request->user_id);
        if($request->has('user_status')){
            $proUpdate->status = $request->user_status;
        }
        if($proUpdate->update()){
            $active_users = User::where('status', 1)->select('id as user_id', 'name as user_name', 'email as user_email', 'number as user_number', 'address as user_address', 'status as user_status')->get();
            $disable_users = User::where('status', 0)->select('id as user_id', 'name as user_name', 'email as user_email', 'number as user_number', 'address as user_address', 'status as user_status')->get();
            return response()->json(compact('active_users', 'disable_users'), 200);
        }
    }

    private function _getUser(){

        $checkUser = Auth::check();
        $getUserId = ($checkUser) ? \auth()->user()->only(['id']) : false;
        $user = User::where('id', $getUserId['id'])->select('name as user_name', 'email as user_email', 'number as user_number', 'status as user_status', 'created_at as user_join', 'is_author as user_type')->first();
        return $user;

    }

}

