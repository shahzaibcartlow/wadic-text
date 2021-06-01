<?php

namespace App\Http\Controllers;

use App\Models\Processor;
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
        $processors = Processor::getProcessors();
        return response()->json(compact('processors'), 200);
    }


}
