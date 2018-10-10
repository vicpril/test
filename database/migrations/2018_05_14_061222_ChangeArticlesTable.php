<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ChangeArticlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('articles', function (Blueprint $table) {
            //
            // create foreign keys
            $table->integer('status_id')->unsigned()->default(1);
            $table->foreign('status_id')->references('id')->on('status')
                            ->onDelete('restrict')
                            ->onUpdate('restrict')
            ;

            $table->integer('issue_id')->unsigned()->default(1);
            $table->foreign('issue_id')->references('id')->on('issues')
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
        Schema::table('articles', function (Blueprint $table) {
            //
            $table->dropForeign('articles_status_id_foreign');
            $table->dropForeign('articles_issue_id_foreign');

        });
    }
}
