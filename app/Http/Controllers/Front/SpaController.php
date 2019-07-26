<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;

use Corcel\Model\Post as Post;
use Corcel\Model\User as User;
use Corcel\Model\Taxonomy as Taxonomy;


use App\Models\WP\Post as wpPost;


class SpaController extends SiteController
{
    //
  
    public function index() 
    {
      // $posts = Post::where('post_type', 'post')
      //               ->status('publish')
      //               ->hasMeta('_edit_last')
      //               ->newest()
      //               ->get();

      $post = Post::find(8719);
      // $post = wpPost::where('post_title', 'Современный подход к самоменеджменту: инверсивный анализ')->first();
  
      // dump(count($posts));
      // dump($posts);

      dump($post);
      
      /*
      *  TAXONOMIES
      *  Categories
      */ 
//       $tax_tr = Taxonomy::where('taxonomy', 'term_translations')
//                       // ->where('term_id', 911)
//                       // ->take(50)
//                       ->get();
//       $tax_tr = $tax_tr->map(function($item){
//           return (unserialize($item->description)) ?: false;
//       });

//       // $tax_ru = Taxonomy::where('taxonomy', 'category')
//       //                 ->where('term_id', 22)
//       //                 ->take(15)
//       //                 ->get()->first();
      
//       $tax_tr = $tax_tr->map(function($cat){
//           $cat = collect($cat);
//           $cat = $cat->map(function($tr_id){
//               $tax = Taxonomy::where('taxonomy', 'category')
//                           ->where('term_id', $tr_id)
//                           ->first();

//               return (is_object($tax))? $tax->name : false;
//           });
//           return $cat;
//       })->reject(function($cat){
//           return (isset($cat['ru']) && $cat['ru'] == false) || (isset($cat['en']) && $cat['en'] == false);
//       });


//       $tax_tr = $tax_tr->map(function($cat){
//           return count($cat);
//       });
                      

//       // dump($tax_ru);
      

//       var_dump($tax_tr->sum());                  

      // $tag = $post->taxonomies()->where('taxonomy', 'post_tag')->first()->name;
      // $cat = $post->taxonomies()->where('taxonomy', 'category')->first()->name;
      
      
      /*
      *  TAXONOMIES
      *  TAGS
      */ 
      
      $tax_tr = Taxonomy::where('taxonomy', 'term_translations')
                      // ->where('term_id', 911)
                      // ->take(50)
                      ->get();
      $tax_tr = $tax_tr->map(function($item){
          return (unserialize($item->description)) ?: false;
      });

      // $tax_ru = Taxonomy::where('taxonomy', 'category')
      //                 ->where('term_id', 22)
      //                 ->take(15)
      //                 ->get()->first();
      
      $tax_tr = $tax_tr->map(function($tag){
          $tag = collect($tag);
          $tag = $tag->map(function($tr_id){
              $tax = Taxonomy::where('taxonomy', 'post_tag')
                          ->where('term_id', $tr_id)
                          ->first();

              return (is_object($tax))? $tax->name : false;
          });
          return $tag;
      })
        ->reject(function($tag){
          return (isset($tag['ru']) && $tag['ru'] == false) || (isset($tag['en']) && $tag['en'] == false);
      })
        ;


//       $tax_tr = $tax_tr->map(function($tag){
//           return count($tag);
//       });
      
//       // dump($tax_ru);
      

      dump($tax_tr); 
                      
      
      // dump($post->fileUpload);

        // foreach ($post->meta as $meta) {
        //   echo $meta->meta_key . " -> " . $meta->meta_value . "<br>";
        // }


        // dump($posts);
//         dump($post->meta->where('meta_key', 'coauthor'));

     // USER 
//       $user = User::where('display_name', $post->coauthor)->first();
      
//       dump($user);
      
        // foreach( $post->users as $user) {
        //   dump($user->attr('us_name_en'));
          
        //     foreach ($user->meta as $meta) {
        //       echo $meta->meta_key . " -> " . $meta->meta_value . "<br>";
        //       echo $meta->meta_key . "<br>";

        //     }

        // }
      
          
      //Main FileUpload    
//       $fileId = $post->meta->where("meta_key", "File Upload")->first()->meta_value;
//         dump($post->find($fileId)->guid);
//         dump($post->find($fileId)->meta->first()->meta_value);

//         dump($post->title_en);





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
