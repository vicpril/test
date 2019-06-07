<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    protected $fillable = [
    	'position', 'lang', 'title'
    ];
  
    public $timestamps = false;

    public function meta() {
        return $this->hasMany('App\Models\MetaMenu', 'menu_id');
    }
    
}
