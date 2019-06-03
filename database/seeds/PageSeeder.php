<?php

use Illuminate\Database\Seeder;
use App\Models\Page;
use App\Models\MetaPage as MP;


class PageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->createPage('','mainpage','О журнале','Содержание русской части','About','English part content');
				$this->createPage('currentissue', "currentissue", "Свежий номер", 'Содержание русской части', 'New issue', 'English par content');
				$this->createPage('archive', "archive", "Архив", 'Содержание русской части', 'Archive', 'English par content');
				$this->createPage('redkollegiya', "redkollegiya", "Редколлегия и Редсовет", 'Содержание русской части', 'Editorial Board', 'English par content');
				$this->createPage('contacts', "contacts", "Контакты", 'Содержание русской части', 'Contacts', 'English par content');
				$this->createPage('authors', "authors", "Наши авторы", 'Содержание русской части', 'Our authors', 'English par content');
        
    }
  
    private function createPage($alias, $template, $title_ru, $content_ru, $title_en, $content_en) 
    {
        $page = Page::create([
          'alias' => $alias,
          'template' => $template,
        ]);
      
        $page->status()->associate(1);
        
        $page->meta()->create([
          'lang' => 'ru',
          'on' => 1,
          'title' => $title_ru,
          'content' => $content_ru
        ]);
      
        $page->meta()->create([
          'lang' => 'en',
          'on' => 1,
          'title' => $title_en,
          'content' => $content_en
        ]);
    }
}
