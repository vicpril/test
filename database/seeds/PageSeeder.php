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
  /*1*/     $this->createPage('','mainpage','О журнале','Содержание русской части','About','English part content', true, true);
	/*2*/			$this->createPage('articles', "currentissue", "Свежий номер", 'Содержание русской части', 'New issue', 'English par content');
	/*3*/			$this->createPage('archive', "archive", "Архив", 'Содержание русской части', 'Archive', 'English par content');
	/*4*/			$this->createPage('redkollegiya', "redkollegiya", "Редколлегия и Редсовет", 'Содержание русской части', 'Editorial Board', 'English par content');
	/*5*/			$this->createPage('contacts', "contacts", "Контакты", 'Содержание русской части', 'Contacts', 'English par content');
	/*6*/			$this->createPage('authors', "authors", "Наши авторы", 'Содержание русской части', 'Our authors', 'English par content');
	/*7*/			$this->createPage('informaciya-dlya-avtorov', "common", "КАК ПОДАТЬ СТАТЬЮ", 'Содержание КАК ПОДАТЬ СТАТЬЮ', '', '', true, false, true);
			
  /*8*/     $this->createPage('missiya','common','МИССИЯ ЖУРНАЛА','Содержание МИССИЯ ЖУРНАЛА','MISSION OF JOURNAL','MISSION OF JOURNAL content', true, true);
  /*9*/     $this->createPage('deklaraciya-ob-etike','common','ДЕКЛАРАЦИЯ ОБ ЭТИКЕ','Содержание ДЕКЛАРАЦИЯ ОБ ЭТИКЕ', "ETHIC'S DECLARATION","ETHIC'S DECLARATION", true, true);
  /*10*/    $this->createPage('politics-of-journal','common','ПОЛИТИКА ЖУРНАЛА','Содержание ПОЛИТИКА ЖУРНАЛА','POLITICS OF JOURNAL','POLITICS OF JOURNAL', true, true);

	/*11*/			$this->createPage('poryadok-recenzirovaniya', "common", "ПОРЯДОК РЕЦЕНЗИРОВАНИЯ", 'Содержание ПОРЯДОК РЕЦЕНЗИРОВАНИЯ', '', '', true, false, true);
	/*12*/			$this->createPage('trebovaniya-k-oformleniyu-rukopisi', "common", "ТРЕБОВАНИЯ К ОФОРМЛЕНИЮ РУКОПИСИ", 'Содержание ТРЕБОВАНИЯ К ОФОРМЛЕНИЮ РУКОПИСИ', '', '', true, false, true);
	/*13*/			$this->createPage('primery-oformleniya-literatury', "common", "ПРИМЕРЫ ОФОРМЛЕНИЯ ЛИТЕРАТУРЫ", 'Содержание ПРИМЕРЫ ОФОРМЛЕНИЯ ЛИТЕРАТУРЫ', '', '', true, false, true);

    }
  
    private function createPage($alias, $template, $title_ru, $content_ru, $title_en, $content_en, $top_menu = true, $sb_menu = false, $review_menu = false) 
    {
        $page = Page::create([
          'alias' => $alias,
          'template' => $template,
					'show_top_menu' => $top_menu,
           'show_sidebar_menu' => $sb_menu,
           'show_review_menu' => $review_menu,
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
