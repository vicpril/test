<?php

namespace Idea\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

use Illuminate\Support\Facades\Storage;


class User extends Authenticatable
{
    use Notifiable;

    protected $table = 'users';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'email', 'alias', 'role', 'password', 'orcid', 'avatar_id'
    ];

    protected $relation = ['meta', 'articles'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];


    public function articles() {
        return $this->belongsToMany('Idea\Models\Article', 'article_user');
    }

    public function jobs() {
        return $this->belongsToMany('Idea\Models\Job', 'user_job');
    }

    public function meta()  {
        return $this->hasMany('Idea\Models\MetaUser', 'user_id');
    }
  
    public function avatar()  {
        return $this->belongsTo('Idea\Models\File');
    }

    /*
    *   Locale getters
    */
  
    public function getLocAttribute(){
        return $this->meta->where('lang', app()->getLocale())->first();
    }

    public function getRuAttribute(){
        return $this->meta->where('lang', 'ru')->first();
    }

    public function getEnAttribute(){
        return $this->meta->where('lang', 'en')->first();
    }

  
    public function getDisplayNameAttribute() {
        $displayName = $this->meta->where('lang', app()->getLocale())->first();
        return ($displayName && $displayName->full_name) ? $displayName->full_name : $this->alias;
    }

    public function getShortNameAttribute() {
        
        if ($this->meta->where('lang', app()->getLocale())->first()) {
            return $this->meta->where('lang', app()->getLocale())->first()->shortName;
        } else {
            return $this->alias;
        }
    }
  
    public function getEditLinkAttribute(){
        return route('users.edit', $this->id);
    }
}
