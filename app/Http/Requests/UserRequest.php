<?php

namespace Idea\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'full_name' => '', 
            'alias' => '', 
            'last_name_ru' => '', 
            'first_name_ru' => '', 
            'patronymic_ru' => '', 
            'initials_ru' => '', 
            'last_name_en' => '', 
            'first_name_en' => '', 
            'patronymic_en' => '', 
            'initials_en' => '', 
            'avatar' => '', 
        ];
    }
}
