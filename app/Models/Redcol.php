<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Redcol extends Model
{
    protected $table = 'redcols';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'type',
        'user_id',
        'post_ru',
        'post_en',
        'position',
    ];

    public $timestamps = false;

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    public function getPostLocAttribute()
    {
        switch (app()->getLocale()) {
            case 'ru':return ($this->post_ru) ?: '';
                break;
            case 'en':return ($this->post_en) ?: '';
                break;
        }
    }

}
