<?php

use Illuminate\Database\Seeder;

use App\Models\Page;
use App\Models\Menu;
use App\Models\MetaMenu;


class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $top_ru = Menu::create([
              'position' => 'top',
              'lang' => 'ru',
              'title' => 'Горизантальное русское',
            ]);
        $top_en = Menu::create([
              'position' => 'top',
              'lang' => 'en',
              'title' => 'Горизантальное английское',
            ]);
      
        $pages = Page::with('meta')->get();
      
        $i = 1;
        $pages->each(function($page) use (&$i, $top_ru, $top_en) {
            $top_ru->meta()->create([
                  'title' => $page->ru->title,
                //   'path' => $page->id,
                  'path' => $page->alias,
                  'type' => 'page',
                  'parent' => '0',
                  'order' => $i,
              ]); 
            $top_en->meta()->create([
                  'title' => $page->en->title,
                //   'path' => $page->id,
                  'path' => $page->alias,
                  'type' => 'page',
                  'parent' => '0',
                  'order' => $i,
            ]); 

            $i++;

        });
  
    }
}
