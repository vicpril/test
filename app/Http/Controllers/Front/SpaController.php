<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;

use Corcel\Model\Post as Post;
use Corcel\Model\User as User;

use App\Models\WP\Post as wpPost;


class SpaController extends SiteController
{
    //
  
    public function index() 
    {
      // $posts = Post::newest()->get();
//       $post = Post::find(8707);
      $post = wpPost::where('post_title', 'Современный подход к самоменеджменту: инверсивный анализ')->first();
  
      dump($post);
      
      dump($post->users);
      dump($post->fileUpload);


        // dump($posts);
//         dump($post->meta->where('meta_key', 'coauthor'));

     // USER 
//       $user = User::where('display_name', $post->coauthor)->first();
      
//       dump($user);
      
        foreach( $post->users as $user) {
          dump($user->attr('us_name_en'));
          
            foreach ($user->meta as $meta) {
              echo $meta->meta_key . " -> " . $meta->meta_value . "<br>";
              echo $meta->meta_key . "<br>";

            }

        }
      
          
      //Main FileUpload    
//       $fileId = $post->meta->where("meta_key", "File Upload")->first()->meta_value;
//         dump($post->find($fileId)->guid);
//         dump($post->find($fileId)->meta->first()->meta_value);

//         dump($post->title_en);


//         foreach ($post->meta as $meta) {
//           echo $meta->meta_key . " -> " . $meta->meta_value . "<br>";
//         }


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
