<?php

namespace App\Repositories;

use DB;
use App\Models\Issue;
use App\Models\Article;

class ExportRepository extends Repository
{
    public function __construct(Article $article)
    {
        $this->model = $article;
    }

    public function prepareTo_rinc($articles) 
    {
        $result = ['result' => date('D, d M Y H:i:s') . '<br>' . print_r($articles, true)];

        return $result;
    }

}
