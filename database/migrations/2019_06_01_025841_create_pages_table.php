<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pages', function (Blueprint $table) {
            $table->increments('id');
            $table->string('alias')->unique();
            $table->string('template')->default('common');
            $table->boolean('show_top_menu')->default(true);
            $table->boolean('show_sidebar_menu')->default(false);
            $table->boolean('show_review_menu')->default(false);

            $table->timestamps();
        });
        
        //create foreign key
        Schema::table('pages', function (Blueprint $table) {
            
            $table->integer('status_id')->unsigned()->default(1);
            $table->foreign('status_id')->references('id')->on('status')
                            ->onDelete('restrict')
                            ->onUpdate('restrict')
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
        Schema::table('pages', function (Blueprint $table) {
            $table->dropForeign('pages_status_id_foreign');

            Schema::dropIfExists('pages');
        });
    }
}
