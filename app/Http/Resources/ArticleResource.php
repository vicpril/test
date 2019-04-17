<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ArticleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "link" => $this->link,
            "status" => $this->status->type,

            "created_at" => $this->created_at->format('Y-m-d H:i'),
            "updated_at" => $this->updated_at->format('Y-m-d H:i'),

            "year" => $this->issue->year,
            "tom" => $this->issue->tom,
            "no" => $this->issue->no,
            "full_no" => $this->issue->full_no,
            "part" => $this->issue->part,

            "doi" => $this->doi,
            "udk" => $this->udk,
            "stol" => $this->stol,

            "users" => $this->users->map(function ($user) {
                return [
                    'id' => $user->id,
                    'name' => $user->ru->short_name,
                ];
            }),
            "tags" => $this->tags->map(function ($tag) {
//                 return $tag->id;
                return [
                  'id' => $tag->id,
                  'title_ru' => $tag->title_ru
                ];
            }),
            "categories" => $this->categories->map(function ($category) {
                return $category->id;
            }),

            "title_en" => $this->en->title,
            "title_ru" => $this->ru->title,
            "text_ru" => $this->ru->text,
            "text_en" => $this->en->text,
            "annotation_ru" => $this->ru->annotation,
            "annotation_en" => $this->en->annotation,
            "keywords_ru" => $this->ru->keywords,
            "keywords_en" => $this->en->keywords,
            "file_ru" => $this->ru->file,
            "file_en" => $this->en->file,
        ];
    }
}
