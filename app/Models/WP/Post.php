<?php 

namespace App\Models\WP;

use Corcel\Model\Post as cPost;
// use Corcel\Model\User as cUser;
use App\Models\WP\User as wpUser;


class Post extends cPost
{
    protected $connection = 'wordpress';

    public function getUsersAttribute() {
        if (!$this->coauthor) {
            return null;
        }
      
        $d_names = $this->meta->where('meta_key', 'coauthor')
                              ->map(function($meta){
                                 return $meta->meta_value;
                              })->toArray();
        $users = wpUser::select();
      
        foreach($d_names as $d_name) {
            $users->orWhere('display_name', $d_name);
        }
      
        $users = $users->get();
        $users = $users->sortBy(function($user) use ($d_names){
            return array_search($user->display_name, $d_names);
        })->values();
      
        return $users;
    }
  
  
    public function getFileUploadAttribute() {
        $meta_id = $this->meta->where("meta_key", "File Upload")->first()->meta_value;
        return $this->find($meta_id)->meta->first()->meta_value;
    }
  
    
  
  
  
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
}