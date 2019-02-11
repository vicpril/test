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
          'email' => $this->email,
          'editLink' => $this->editLink,
          'meta' => $this->meta,
          'avatar_id' => $this->avatar_id,
          'articles' => $this->articles->count(),
          'role' => $this->role,
//           'date' => $this->created_at->diffForHumans()
          
        ];
    }
}
