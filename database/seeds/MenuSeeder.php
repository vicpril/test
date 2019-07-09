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
              'title' => 'Горизантальное (русское)',
            ]);
        $top_en = Menu::create([
              'position' => 'top',
              'lang' => 'en',
              'title' => 'Горизантальное (английское)',
            ]);
      
        $pages = Page::with('meta')->find([1,2,3,4,5,6,7]);
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
      
        $sb_ru = Menu::create([
              'position' => 'sidebar',
              'lang' => 'ru',
              'title' => 'Вертикальное (русское)',
            ]);
        $sb_en = Menu::create([
              'position' => 'sidebar',
              'lang' => 'en',
              'title' => 'Вертикальное (английское)',
            ]);
      
      $pages = Page::with('meta')->find([8,9,10]);
        $i = 1;
        $pages->each(function($page) use (&$i, $sb_ru, $sb_en) {
            $sb_ru->meta()->create([
                  'title' => $page->ru->title,
                //   'path' => $page->id,
                  'path' => $page->alias,
                  'type' => 'page',
                  'parent' => '0',
                  'order' => $i,
              ]); 
            $sb_en->meta()->create([
                  'title' => $page->en->title,
                //   'path' => $page->id,
                  'path' => $page->alias,
                  'type' => 'page',
                  'parent' => '0',
                  'order' => $i,
            ]); 

            $i++;
        });
      
        $review_ru = Menu::create([
              'position' => 'review',
              'lang' => 'ru',
              'title' => 'Для рецензирования (русское)',
            ]);
        $review_en = Menu::create([
              'position' => 'review',
              'lang' => 'en',
              'title' => 'Для рецензирования (английское)',
            ]);
        $pages = Page::with('meta')->find([11,12,13]);
        $i = 1;
        $pages->each(function($page) use (&$i, $review_ru, $review_en) {
            $review_ru->meta()->create([
                  'title' => $page->ru->title,
                //   'path' => $page->id,
                  'path' => $page->alias,
                  'type' => 'page',
                  'parent' => '0',
                  'order' => $i,
              ]); 
            // $review_en->meta()->create([
            //       'title' => $page->en->title,
            //     //   'path' => $page->id,
            //       'path' => $page->alias,
            //       'type' => 'page',
            //       'parent' => '0',
            //       'order' => $i,
            // ]); 

            $i++;
        });
      
  
    }
}
