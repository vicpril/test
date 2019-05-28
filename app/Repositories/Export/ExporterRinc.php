<?php

namespace App\Repositories\Export;

use App\Repositories\Export\Exporter;

class ExporterRinc extends Exporter
{
    protected $title;
    protected $issn;
    protected $no;
    protected $full_no;   #mag_f_no
    protected $year;      #mag_yearno
    protected $tom;       #mag_vol
    protected $part;      #mag_tom       
    protected $f_page;
    protected $l_page;
  
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
        
        $this->title = $data['title'];
        $this->issn = $data['issn'];
        $this->no = $this->issue->no;
        $this->full_no = $this->issue->full_no;
        $this->year = $this->issue->year;
        $this->tom = $this->issue->tom;
        $this->part = $this->issue->part;




    }  
  
    public function getContent() {}
  
}

?>