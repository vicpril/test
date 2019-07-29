<?php 

namespace App\Models\WP;

// use Corcel\Model\Post as cPost;
use Corcel\Model\User as cUser;
use App\Models\WP\Post as wpPost;


class User extends cUser
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

    public function getRoleAttribute() {
        $roles = array_keys(unserialize($this->meta->wp_capabilities));
        return (count($roles) > 1) ? $roles : $roles[0];
    }

//     nickname
//     first_name
//     last_name
//     description
//     rich_editing
//     comment_shortcuts
//     admin_color
//     use_ssl
//     show_admin_bar_front
//     wp_capabilities
//     wp_user_level
//     dismissed_wp_pointers
//     us_full-name
//     us_last-name
//     us_first-name
//     us_patronymic
//     us_initials
//     us_name_en
//     us_initials_en
//     us_stepen
//     us_stepen_en
//     us_post
//     us_post_en
//     us_post2
//     us_post2_en
//     us_post3
//     us_post3_en
//     us_post4
//     us_post4_en
//     us_post5
//     us_post5_en
//     us_orcid
//     user_lang
//     description_en
//     first_name
//     nickname
//     rich_editing
//     comment_shortcuts
//     admin_color
//     wp_capabilities
//     description
//     description_en
//     us_full-name
//     us_first-name
//     us_patronymic
//     us_last-name
//     us_initials
//     us_name_en
//     us_initials_en
//     last_name
//     user_lang
//     use_ssl
//     show_admin_bar_front
//     us_stepen
//     us_stepen_en
//     us_post
//     us_post_en
//     us_post2
//     us_post2_en
//     us_post3
//     us_post3_en
//     us_post4
//     us_post4_en
//     us_post5
//     us_post5_en
//     us_orcid

}