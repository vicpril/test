<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateArticleCategoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('article_category', function (Blueprint $table) {
            $table->increments('id');

            // create foreign key
            $table->integer('article_id')->unsigned()->default(1);
            $table->foreign('article_id')->references('id')->on('articles')
                            ->onDelete('cascade')
                            ->onUpdate('cascade')
                            ;

            $table->integer('category_id')->unsigned()->default(1);
            $table->foreign('category_id')->references('id')->on('categories')
                            ->onDelete('cascade')
                            ->onUpdate('cascade')
                            ;

            // $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('article_category', function(Blueprint $table) {
            $table->dropForeign('article_category_article_id_foreign');
            $table->dropForeign('article_category_category_id_foreign');
        });

        Schema::dropIfExists('article_category');
    }
}
