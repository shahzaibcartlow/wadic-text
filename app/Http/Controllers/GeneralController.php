<?php

namespace App\Http\Controllers;

use App\Models\Processor;
use App\Models\StoreUserSession;
use App\Models\Tier;
use Illuminate\Http\Request;

class GeneralController extends Controller
{

    public function getTier(){
        $tiers = Tier::getTiers();
        return response()->json(compact('tiers'), 200);
    }

    public function getProcessors(){
        $processors = Processor::getProcessors();
        return response()->json(compact('processors'), 200);
    }

    public function getIpAddress(){
        $ip = \Request::getClientIp(true);
        return response()->json(['code'=>0, 'ip'=>$ip], 200);
    }

    public function storeUserSession( Request $request ){
        $createUserDetail = StoreUserSession::createUserDetail($request);
        return response()->json(['code'=>0, 'createUserDetail'=>$createUserDetail], 200);
    }

    public function getUserCartDetail( $ip ){
        if( isset($ip) ){
            $createUserDetail = StoreUserSession::getUserCart($ip);
        }
        return response()->json(['code'=>0, 'createUserDetail'=>$createUserDetail], 200);
    }


}
