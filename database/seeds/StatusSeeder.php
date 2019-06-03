<?php

use Illuminate\Database\Seeder;

class StatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
	 	DB::table('status')->insert([
																	'title_en'=>'public',
																	'title_ru'=>'Опубликована'
																]);
	 	DB::table('status')->insert([
																	'title_en'=>'private',
																	'title_ru'=>'Черновик'
																]);
    }
}
