<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ArticleListResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
//       return parent::toArray($request);
//         dd($this->users->toArray());
        return [
          'id' =>           $this->id,
//           "alias" => $this->alias,
//           'email' => $this->email,
          'title_ru' =>     $this->ru->title,
          'title_en' =>     (isset($this->en->title)) ? $this->en->title : '',
          'editLink' =>     $this->editLink,
          'users' =>        ($this->users) ? $this->users->map(function($user) {
                                  return [
                                          'editLink' => $user->editLink,
                                          "short_name_ru" =>  $user->ru->short_name,
                                          "short_name_en" =>  $user->en->short_name,
                                        ];
                                }) : [],
          'categories' =>   $this->categories->map(function($cat) {
                                  return $cat->title_ru;
                            }),
          'tags' =>         $this->tags->map(function($tag) {
                                  return $tag->title_ru;
                            }),
          'year' =>         $this->issue->year,
          'tom' =>          $this->issue->tom,
          'no' =>           $this->issue->no,
          'part' =>         $this->issue->part,
          'full_no' =>      $this->issue->full_no,
          'status' =>       ($this->status->title_en === 'public') ? true : false,
          "updated_at" =>   $this->updated_at->format('Y-m-d H:i:s'),
          "created_at" =>   $this->created_at->format('Y-m-d H:i:s'),
        ];
    }
}
