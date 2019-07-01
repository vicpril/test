<?php

namespace App\Repositories\Export;

use Blade;
use App\Repositories\Export\ContentMaker;

class ContentMakerRinc extends ContentMaker
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
          'users' => function($query) {
              $query->with('meta');
          }, 
        ]);
        
        $this->title = $data['title'];
        $this->issn = $data['issn'] ? "ISSN {$data['issn']}" : $this->getISSN();
        $this->email_on = isset($data['emails']) ? true : false;

        // get pages from DOI
        $this->articles->each(function($article) {
            $article->firstPage = $this->getDoiPage($article, 'first');
            $article->lastPage = $this->getDoiPage($article, 'last');
        });
        $this->firstPage = $this->articles->first()->firstPage;
        $this->lastPage = $this->articles->last()->lastPage;
        
        //work with jobs
        //...
      

    }  
  
    public function getContent() {
      
//       dd($this->getProperties());
        Blade::include(env('THEME_BACK').'.back.export.rinc._header', 'header');
        Blade::include(env('THEME_BACK').'.back.export.rinc._articleHead', 'articleHead');
        Blade::include(env('THEME_BACK').'.back.export.rinc._body', 'body');
        Blade::include(env('THEME_BACK').'.back.export.rinc._footer', 'footer');

        return view(env('THEME_BACK').'.back.export.rinc.index')->with($this->getProperties())->render();
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
  
 
  
}

?>