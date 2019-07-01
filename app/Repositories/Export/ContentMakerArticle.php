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
          'users' => function($query) {
              $query->with('meta');
          }, 
        ]);
        
        // get pages from DOI
        $this->articles->each(function($article) {
            $article->firstPage = $this->getDoiPage($article, 'first');
            $article->lastPage = $this->getDoiPage($article, 'last');
            $article->jobLinkTextRu = view(env('THEME_BACK').'.back.export.article.components.jobLinkTextRu')
              ->with([
                   'article' => $article,
                   'year' => $this->year,
                   'no' => $this->no,
                   'part' => $this->part,
            ])->render();
            $article->jobLinkTextEn = view(env('THEME_BACK').'.back.export.article.components.jobLinkTextEn')
              ->with([
                   'article' => $article,
                   'year' => $this->year,
                   'no' => $this->no,
                   'part' => $this->part,
            ])->render();

        });
      
//         $this->firstPage = $this->articles->first()->firstPage;
//         $this->lastPage = $this->articles->last()->lastPage;

    }  
  
    public function getContent() {
        Blade::include(env('THEME_BACK').'.back.export.article._header', 'header');
        Blade::include(env('THEME_BACK').'.back.export.article._body', 'body');
        Blade::include(env('THEME_BACK').'.back.export.article._footer', 'footer');

        return view(env('THEME_BACK').'.back.export.article.index')->with($this->getProperties())->render();
    }
  
}

?>