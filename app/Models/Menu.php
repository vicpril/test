<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

abstract class Menu extends Model
{
    protected $fillable = [
    	'position', 'lang', 'title'
    ];

    public $timestamps = false;

    public function meta() {
        $this->hasMany('App\Models\MetaMenu', 'menu_id');
    }

    
    static function top() {
        return self::where('position', 'top')->get();
    }

    static function side() {
        return self::where('position', 'side')->get();
    }
    
    public function getLocAttribute() {
        switch (app()->getLocale()) {
            case 'ru': return $this->title_ru; break;
            case 'en': return $this->title_en; break;
        }
    }

    public function getRuAttribute() {
        return $this->title_ru;
    }

    public function getEnAttribute() {
        return $this->title_en;
    }


    
}
