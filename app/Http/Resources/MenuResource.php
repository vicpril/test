<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MenuResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $menus = parent::toArray($request);

        $menus['links'] = $menus['meta'];
        unset($menus['meta']);

        return $menus;
    }
}
