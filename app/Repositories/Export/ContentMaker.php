<?php

namespace App\Repositories\Export;

use App\Models\Issue;
use App\Models\Article;
use App\Repositories\Export\ContentMakerInterface;

abstract class ContentMaker implements ContentMakerInterface 
{
    protected $issue;
    protected $articles;
    protected $email_on;

    public function __construct(Array $data) {
        $this->issue = Issue::find( $data['issue'] );
      
        $this->articles = Article::find( $data['articles'] )
                                 ->sortBy(function($article) use ($data) {
                                      return array_search($article->id, $data['articles']);
                                  })
                                  ->values();
//       dump($data['articles']);
//             $this->articles->each(function($a) {
//               dump($a->id . ' - '. $a->doi);
//             });

    }
  
    public static function create($action, $data) 
    {
        $class = "App\Repositories\Export\ContentMaker" . ucfirst($action);
      
        return new $class($data);
    }
  
    public function getContent() {}
  
  
    protected function getProperties() {
        return get_object_vars($this);
    }
  
}

?>