<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;

use Corcel\Model\Post as Post;

class SpaController extends SiteController
{
    //
  
    public function index() 
    {
      $post = Post::find(205);

        dump($post);

      return'hello';

      return view('spa');
    }
}
