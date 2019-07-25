<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;

use Corcel\Model\Post as Post;

class SpaController extends SiteController
{
    //
  
    public function index() 
    {
      // $posts = Post::newest()->get();
      $post = Post::find(8706);
      // $post = Post::find(8773);


        // dump($posts);
        dump($post);
        dump($post->meta('File Upload'))->first();

        dump($post->title_en);
        dump($post->FileUpload);


        foreach ($post->meta as $meta) {
          echo $meta->meta_key . " -> " . $meta->meta_value . "<br>";
        }

        dump($post->acf->meta);

        // dump( $post->title);
        // dump( $post->slug);
        // dump( $post->content);
        // dump( $post->type);
        // dump( $post->mime_type);
        // dump( $post->url);
        // dump( $post->author_id);
        // dump( $post->parent_id);
        // dump( $post->created_at);
        // dump( $post->updated_at);
        // dump( $post->excerpt);
        // dump( $post->status);
        // dump( $post->image);
        // dump( $post->terms);
        // dump( $post->main_category);
        // dump( $post->keywords);
        // dump( $post->keywords_str);

        // dump($post->taxonomies);

      return'hello';

      return view('spa');
    }
}
