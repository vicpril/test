<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateIssuesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('issues', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('year')->unsigned()->default(2000);
            $table->integer('tom')->unsigned()->default(1);
            $table->integer('no')->unsigned()->default(1);
            $table->integer('part')->unsigned()->default(1);
            $table->integer('full_no')->unsigned()->default(1);
            
            $table->string('file_title_ru')->nullable();
            $table->string('file_title_en')->nullable();



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
        Schema::dropIfExists('issues');
    }
}
