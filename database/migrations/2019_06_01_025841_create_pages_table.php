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
            $table->string('alias')->unique()->nullable();
            $table->string('template')->default('common');
            $table->timestamps();
        });
        
        //create foreign key
        Schema::table('pages', function (Blueprint $table) {
            
            $table->integer('status_id')->unsigned()->default(2);
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
            $table->dropForeign('pages_tag_article_id_foreign');

            Schema::dropIfExists('pages');
        });
    }
}
