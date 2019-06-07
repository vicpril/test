<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MetaMenu extends Model
{
    protected $table = 'meta_menus';
  
    protected $fillable = [
    	'title', 'type', 'path', 'parent', 'menu_id', 'order'
    ];

    public $timestamps = false;

    public function menu() {
        return $this->belongsTo('App\Models\Menu');
    }

}
