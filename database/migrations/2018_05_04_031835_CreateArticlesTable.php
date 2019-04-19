<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArticlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->increments('id');
            // $table->string('title');
            $table->string('alias')->unique();
            // $table->integer('year')->unsigned();
            // $table->integer('tom')->unsigned()->default(1);

            // issue_id as forein key
            // status_id as forein key

            // $table->text('text');
            // $table->text('annotation');
            $table->string('doi', 100)->nullable();
            $table->string('udk', 100)->nullable();
            $table->boolean('stol')->default(0);
            $table->timestamp('date_arrival')->nullable();
            $table->timestamp('date_review')->nullable();
            $table->text('applications')->nullable();
            $table->text('finance')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('articles');
    }
}
