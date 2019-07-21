<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRedcolsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('redcols', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('type')->default('red');
            $table->string('post_ru')->nullable();
            $table->string('post_en')->nullable();
            $table->integer('position')->default(1);

        });

        Schema::table('redcols', function (Blueprint $table) {
            $table->integer('user_id')->unsigned()->nullable();
            $table->foreign('user_id')->references('id')->on('users')
                            ->onDelete('restrict')
                            ->onUpdate('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('redcols', function (Blueprint $table) {
            $table->dropForeign('redcols_user_id_foreign');
        });
        
        Schema::dropIfExists('redcols');
    }
}
