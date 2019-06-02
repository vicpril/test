<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PageListResource extends JsonResource
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
          'id' =>           $this->id,
          "alias" =>        $this->alias,
          'title_ru' =>     $this->ru->title,
          'title_en' =>     $this->en->title,
          'editLink' =>     $this->editLink,
          'status' =>       ($this->status->title_en === 'public') ? true : false,
          "updated_at" =>   $this->updated_at->format('Y-m-d H:i:s'),
          "created_at" =>   $this->created_at->format('Y-m-d H:i:s'),
        ];
    }
}
