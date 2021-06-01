<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStoreUserSessionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('store_user_sessions', function (Blueprint $table) {
            $table->id();
            $table->string("ip_address")->nullable();
            $table->integer("tier_id")->nullable();
            $table->string("store_capacity")->nullable();
            $table->string("processor")->nullable();
            $table->string("ram")->nullable();
            $table->string("traffic")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('store_user_sessions');
    }
}
