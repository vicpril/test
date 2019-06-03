<?php

namespace App\Repositories\Export;

use Blade;
use App\Repositories\Export\ContentMaker;

class ContentMakerArticle extends ContentMaker
{
    protected $title;
    protected $issn;
    protected $no;
    protected $full_no;   #mag_f_no
    protected $year;      #mag_yearno
    protected $tom;       #mag_vol
    protected $part;      #mag_tom       
    protected $firstPage; #mag_f_page;
    protected $lastPage;  #mag_l_page;
  
    protected $articles;
  
    ## title;
    ## notice;
    ## udk;
    ## doi;
    ## keywords;
    ## lit;
    ## date_arrival;
    ## cat_en;
    ## title_en;
    ## notice_en;
    ## key_en;
    ## fin;
    ## text;
    ## f_page;
    ## l_page;
  
    public function __construct(Array $data) 
    {
        parent:: __construct($data);
      
        $this->articles->loadMissing([
          'categories',
          'users'
        ]);
        
        $this->title = $data['title'];
        $this->issn = $data['issn'] ? "ISSN {$data['issn']}" : $this->getISSN();
        $this->emails = $data['emails'];

        $this->no = $this->issue->no;
        $this->full_no = $this->issue->full_no;
        $this->year = $this->issue->year;
        $this->tom = $this->issue->tom;
        $this->part = $this->issue->part;
      
        // get pages from DOI
        $this->articles->each(function($article) {
            $article->firstPage = $this->getDoiPage($article, 'first');
            $article->lastPage = $this->getDoiPage($article, 'last');
        });
      
        $this->firstPage = $this->articles->first()->firstPage;
        $this->lastPage = $this->articles->last()->lastPage;

    }  
  
    public function getContent() {
        Blade::include(env('THEME_BACK').'.back.export.article._header', 'header');
        Blade::include(env('THEME_BACK').'.back.export.article._article', 'article');
        Blade::include(env('THEME_BACK').'.back.export.article._footer', 'footer');

        return view(env('THEME_BACK').'.back.export.article.index')->with($this->getProperties())->render();
    }
  
    private function getISSN()
    {
        foreach ($this->articles as $article) {
            if (!empty($article->doi)) {
                $doi_str = explode('/', $article->doi);
                $doi_str[1] = explode('-', $doi_str[1]);
                return "ISSN {$doi_str[1][0]}-{$doi_str[1][1]}";
            }
        }
        return '';
    }
  
  
    private function getDoiPage($article, $page = 'first')
    {
        $doi_str = explode('/', $article->doi);
        $doi_str[1] = (isset($doi_str[1])) ? explode('-', $doi_str[1]) : '';
        
        switch($page) {
          case 'first': $result = $doi_str[1][4] ?? ''; break; // первая страница первой статьи
          case 'last': $result = $doi_str[1][5] ?? ''; break;  // последняя страница последней статьи
        }

        if ($result) {
            return $result;
        } else {
            return '';
        }
    }
  
  
}

?>