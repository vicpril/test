<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            // $table->string('name');
            $table->string('email')->unique();
            $table->string('alias')->unique();
            $table->string('password');
            // API authentication token
            $table->string('api_token', 80)
                        ->unique()
                        ->nullable()
                        ->default(null);
          
            $table->string('role');
//             $table->string('avatar_id')->nullable()->default(null);
            $table->rememberToken();
            $table->timestamps();

            $table->string('orcid')->nullable();
          

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
