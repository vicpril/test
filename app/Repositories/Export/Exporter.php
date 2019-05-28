<?php

namespace App\Repositories\Export;

use App\Models\Issue;
use App\Models\Article;
use App\Repositories\Export\ExporterInterface;

abstract class Exporter implements ExporterInterface 
{
    protected $issue;
    protected $articles;

    public function __construct(Array $data) {
        $this->issue = Issue::find( $data['issue'] );
        $this->articles = Article::find( $data['articles'] );
    }
  
    public static function create($action, $data) 
    {
        $class = "App\Repositories\Export\Exporter" . ucfirst($action);
      
        return new $class($data);
    }
  
    public function getContent() {}
  
  
    public function getProperties() {
        return get_object_vars($this);
    }
  
}

?>