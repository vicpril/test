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
        return auth()->user()->role === 'admin';
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $this->sanitize();
      
        return [
            'full_name' => 'required|string|max:50', 
            'alias' => 'required|string|max:100',
            'email' => 'required|email|max:100', 
            'last_name_ru' => 'string|max:20', 
            'first_name_ru' => 'string|max:20', 
            'patronymic_ru' => 'string|max:20', 
            'initials_ru' => 'string|max:20', 
            'last_name_en' => 'string|max:20', 
            'first_name_en' => 'string|max:20', 
            'patronymic_en' => 'string|max:20', 
            'initials_en' => 'string|max:20', 
            'avatar' => 'integer', 
            'orcid' => 'string|max:20', 

        ];
    }
  
    public function sanitize()
    {
        $input = $this->all();

        $input = filter_var_array($input, FILTER_SANITIZE_STRING);

        $this->replace($input);     
    }
}
