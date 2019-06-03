<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMetaPagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('meta_pages', function (Blueprint $table) {
            $table->increments('id');
            $table->boolean('on');
            $table->string('lang');
            $table->string('title')->nullable();
            $table->text('content')->nullable();
            $table->integer('page_id')->unsigned()->default(0);
        });
        
        // create foreign keys
        Schema::table('meta_pages', function (Blueprint $table) {
            $table->foreign('page_id')->references('id')->on('pages')
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
        Schema::table('meta_pages', function (Blueprint $table) {
            //
            $table->dropForeign('meta_pages_page_id_foreign');
        });

        Schema::dropIfExists('meta_pages');
    }
}
