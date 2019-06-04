<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    protected $fillable = [
    	'title', 'title_en', 'path', 'parent'
    ];


    public function getLocAttribute() {
        switch (app()->getLocale()) {
            case 'ru': return $this->title_ru;
            case 'en': return $this->title_en;
        }
    }

    public function getRuAttribute() {
        return $this->title_ru;
    }

    public function getEnAttribute() {
        return $this->title_en;
    }


    
}
