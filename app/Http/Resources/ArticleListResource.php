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
          'title_ru' =>        $this->ru->title,
          'title_en' =>        $this->en->title,
          'editLink' =>        $this->editLink,
          'users' =>           $this->users->map(function($user) {
                                  return [
                                          'editLink' => $user->editLink,
                                          "short_name_ru" =>  $user->ru->short_name,
                                          "short_name_en" =>  $user->en->short_name,
                                        ];
                                }),
          'categories' =>   $this->categories->map(function($cat) {
                                  return $cat->title_ru;
                            }),
          'tags' =>   $this->tags->map(function($tag) {
                                  return $tag->title_ru;
                            }),
          'year' =>         $this->issue->year,
          'tom' =>          $this->issue->tom,
          'no' =>           $this->issue->no,
          'part' =>         $this->issue->part,
          'full_no' =>      $this->issue->full_no,
          'status' =>       $this->status->title_ru,
          "updated_at" =>   $this->updated_at->format('Y-m-d H:i:s'),
          "created_at" =>   $this->created_at->format('Y-m-d H:i:s'),
          
          
//           'articles' => $this->articles->count(),
//           'role' => $this->role,
//           "avatar" => $this->avatar,
//           "description_en" => $this->en->description,
//           "description_ru" => $this->ru->description,
//           "first_name_en" => $this->en->first_name,
//           "first_name_ru" => $this->ru->first_name,
//           "full_name" =>  $this->ru->full_name,
//           "short_name_ru" =>  $this->ru->short_name,
//           "short_name_en" =>  $this->en->short_name,
//           "degree_en" => $this->en->degree,
//           "degree_ru" => $this->ru->degree,
//           "jobs_en" => ($this->en->jobs) ?: [],
//           "jobs_ru" => ($this->ru->jobs) ?: [],
//           "initials_en" => $this->en->initials,
//           "initials_ru" => $this->ru->initials,
//           "last_name_en" => $this->en->last_name,
//           "last_name_ru" => $this->ru->last_name,
//           "orcid" => $this->orcid,
//           "patronymic_en" => $this->en->patronymic,
//           "patronymic_ru" => $this->ru->patronymic,
//           "updated_at" => $this->updated_at->format('Y-m-d H:i:s'),
//           "created_at" => $this->created_at->format('Y-m-d H:i:s'),
//           'date' => $this->created_at->diffForHumans()
          
        ];
    }
}
