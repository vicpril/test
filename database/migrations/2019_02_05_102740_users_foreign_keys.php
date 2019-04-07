<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UsersForeignKeys extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            //
            // create foreign keys
            // $table->integer('avatar_id')->unsigned()->nullable()->default(null);
            // $table->foreign('avatar_id')->references('id')->on('files')
            //                 ->onDelete('restrict')
            //                 ->onUpdate('restrict')
            // ;

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            //
            // $table->dropForeign('users_avatar_id_foreign');

        });
    }
}
