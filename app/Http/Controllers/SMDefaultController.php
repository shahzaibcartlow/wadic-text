<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SMDefaultController extends Controller
{
    public function __construct()
    {
//        $this->middleware('guest');
    }

    public function default(){
        return view('user');
    }
}
