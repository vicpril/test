<?php

namespace Idea\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class JobRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        $role = \Auth::user()->role;
        return $role === 'admin' || $role === 'redac';
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title_ru' => 'required|max:100',
            'city_ru' => 'max:20',
            'address_ru' => 'max:250',
            'title_en' => 'max:100',
            'city_en' => 'max:20',
            'address_en' => 'max:250'
        ];
    }
}
