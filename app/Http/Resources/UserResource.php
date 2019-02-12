<?php

namespace Idea\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
        return [
          'id' => $this->id,
          "alias" => $this->alias,
          'email' => $this->email,
          'editLink' => $this->editLink,
          'articles' => $this->articles->count(),
          'role' => $this->role,
          "avatar" => $this->avatar_id,
          "description_en" => $this->en->description,
          "description_ru" => $this->ru->description,
          "first_name_en" => $this->en->first_name,
          "first_name_ru" => $this->ru->first_name,
          "full_name" =>  $this->ru->full_name,
          "graduate_en" => $this->en->graduate,
          "graduate_ru" => $this->ru->graduate,
          "initials_en" => $this->en->initials,
          "initials_ru" => $this->ru->initials,
          "last_name_en" => $this->en->last_name,
          "last_name_ru" => $this->ru->last_name,
          "orcid" => $this->orcid,
          "patronymic_en" => $this->en->patronymic,
          "patronymic_ru" => $this->ru->patronymic,
//           'date' => $this->created_at->diffForHumans()
          
        ];
    }
}
