<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Request;

class StoreUserSession extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id',
        'ip_address',
        'tier_id',
        'store_capacity',
        'processor',
        'ram',
        'traffic',
    ];

    public static function createUserDetail($request){

        try {
            $checkUserExist = StoreUserSession::where('ip_address', $request->post('ipAddress') )->first();

            if($checkUserExist) {
                if( $request->has("ipAddress") ){
                    $checkUserExist->ip_address = $request->post('ipAddress');
                }
                if( $request->has("tierId") ) {
                    $checkUserExist->tier_id = $request->post('tierId');
                }
                if( $request->has("storeCapacity") ){
                    $checkUserExist->store_capacity = $request->post('storeCapacity');
                }
                if( $request->has("processor") ){
                    $checkUserExist->processor = $request->post('processor');
                }
                if( $request->has("ram") ){
                    $checkUserExist->ram = $request->post('ram');
                }
                if( $request->has("traffic") ){
                    $checkUserExist->traffic = $request->post('traffic');
                }
                $checkUserExist->save();
            } else {
                $createUserDetail = new StoreUserSession();
                if( $request->has("ipAddress") ){
                    $checkUserExist->ip_address = $request->post('ipAddress');
                }
                if( $request->has("tierId") ) {
                    $checkUserExist->tier_id = $request->post('tierId');
                }
                if( $request->has("storeCapacity") ){
                    $checkUserExist->store_capacity = $request->post('storeCapacity');
                }
                if( $request->has("processor") ){
                    $checkUserExist->processor = $request->post('processor');
                }
                if( $request->has("ram") ){
                    $checkUserExist->ram = $request->post('ram');
                }
                if( $request->has("traffic") ){
                    $checkUserExist->traffic = $request->post('traffic');
                }
                $createUserDetail->save();
            }

            $userDetail = StoreUserSession::where( 'ip_address', $request->post('ipAddress') )
                ->select('ip_address as ipAddress', 'tier_id as tierId', 'store_capacity as storeCapacity', 'processor as processor', 'ram as ram', 'traffic as traffic')
                ->first();

            return $userDetail;
        } catch (\Exception $e) {
            return $e->getMessage();
        }

    }

    public static function getUserCart($ip){

        try {

            $userDetail = StoreUserSession::where( 'ip_address', $ip )
                ->select('ip_address as ipAddress', 'tier_id as tierId', 'store_capacity as storeCapacity', 'processor as processor', 'ram as ram', 'traffic as traffic')
                ->first();
            return $userDetail;

        } catch (\Exception $e) {
            return $e->getMessage();
        }

    }
}
