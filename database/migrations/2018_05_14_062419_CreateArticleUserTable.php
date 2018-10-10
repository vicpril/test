<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateArticleUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('article_user', function (Blueprint $table) {
            $table->increments('id');

            // create foreign key
            $table->integer('article_id')->unsigned()->default(1);
            $table->foreign('article_id')->references('id')->on('articles')
                            ->onDelete('cascade')
                            ->onUpdate('cascade')
                            ;

            $table->integer('user_id')->unsigned()->default(1);
            $table->foreign('user_id')->references('id')->on('users')
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
        Schema::table('article_user', function(Blueprint $table) {
            $table->dropForeign('article_user_article_id_foreign');
            $table->dropForeign('article_user_user_id_foreign');
        });

        Schema::dropIfExists('article_user');
    }
}
