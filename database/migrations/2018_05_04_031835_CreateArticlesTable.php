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
            $table->string('alias')->unique();
            // issue_id as forein key
            // status_id as forein key

            $table->string('doi', 100)->nullable();
            $table->string('udk', 100)->nullable();
            $table->boolean('stol')->default(0);
            $table->timestamp('date_arrival')->nullable();
            $table->timestamp('date_review')->nullable();
            $table->text('applications')->nullable();
            $table->text('finance')->nullable();
            $table->string('file_audio')->nullable();

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
