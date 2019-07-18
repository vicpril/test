<?php

namespace App\Repositories\Export;

use Blade;
use App\Repositories\Export\ContentMaker;

class ContentMakerContent extends ContentMaker
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

    }  
  
    public function getContent() {
        Blade::include('back.export.content._header', 'header');
        Blade::include('back.export.content._contentRu', 'contentRu');
        Blade::include('back.export.content._contentEn', 'contentEn');

        Blade::include('back.export.content._footer', 'footer');

        return view('back.export.content.index')->with($this->getProperties())->render();
    }
  
}

?>