<?php 

namespace App\Models\WP;

use Corcel\Model\Post as cPost;
// use Corcel\Model\User as cUser;
use App\Models\WP\User as wpUser;


class Post extends cPost
{
    protected $connection = 'wordpress';

    public function attr($key) {
        $attr = $this->meta->where('meta_key', $key)->pluck('meta_value')->toArray();
        // dump($attr);
        switch(count($attr)) {
                    case 0: return null; break;
                    case 1: return $attr[0]; break;
                    default: return $attr; break;
                };
    }

    public function getUsersAttribute() {
        if (!$this->coauthor) {
            return null;
        }
      
        $d_names = $this->meta->where('meta_key', 'coauthor')
                              ->pluck('meta_value')
                              ->toArray();
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
        $meta_file = $this->meta->where("meta_key", "File Upload")->first();
        return ($meta_file) ? $this->find($meta_file->meta_value)->meta->first()->meta_value : null;
    }
    public function getFileTitleRuAttribute() {
        $meta_file = $this->meta->where("meta_key", "file-title-rus")->first();
        return ($meta_file) ? $this->find($meta_file->meta_value)->meta->first()->meta_value : null;
    }
    public function getFileTitleEnAttribute() {
        $meta_file = $this->meta->where("meta_key", "file-title-en")->first();
        // return $meta_file;
        return ($this->find($meta_file->meta_value)) ? $this->find($meta_file->meta_value)->meta->first()->meta_value : null;
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