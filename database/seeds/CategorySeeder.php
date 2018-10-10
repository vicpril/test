<?php

use Illuminate\Database\Seeder;
// use Idea\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        factory(Idea\Models\Category::class, 6)->create();
    }
}
