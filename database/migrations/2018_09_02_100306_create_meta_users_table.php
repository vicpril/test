<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMetaUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('meta_users', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned()->default(0);
            $table->string('lang');
            $table->string('full_name');
            $table->string('short_name')->nullable();
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('patronymic')->nullable();
            $table->string('initials')->nullable();
            $table->string('degree')->nullable();
            $table->string('jobs')->nullable();
            $table->string('description')->nullable();

            // $table->timestamps();
        });
        // create foreign keys
        Schema::table('meta_users', function (Blueprint $table) {

            $table->foreign('user_id')->references('id')->on('users')
                            ->onDelete('cascade')
                            ->onUpdate('cascade')
            ;
            });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('meta_users');
    }
}
