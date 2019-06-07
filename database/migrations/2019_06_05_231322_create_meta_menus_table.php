<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMetaMenusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('meta_menus', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->string('path')->nullable();
            $table->string('type');
            $table->integer('parent')->nullable();
            $table->integer('order')->default(1);
        });

        Schema::table('meta_menus', function (Blueprint $table) {
            $table->integer('menu_id')->unsigned()->default(0);
            $table->foreign('menu_id')->references('id')->on('menus')
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
        Schema::table('meta_menus', function (Blueprint $table) {
            $table->dropForeign('meta_menus_menus_id_foreign');
        });

        Schema::dropIfExists('meta_menus');
    }
}
