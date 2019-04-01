<?php

namespace App\Http\Requests;

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
//         $user = (isset($this->route()->parameter('user')->id)) ? $this->route()->parameter('user') : '';
        
        $this->sanitize();
        
        return [
            'full_name' => 'required|max:50', 
            'alias' => 'unique:users,alias|max:100'.$this->user,
            'email' => 'required|unique:users,email|email|max:100'.$this->user, 
            'last_name_ru' => 'required|max:20', 
            'first_name_ru' => 'required|max:20', 
            'patronymic_ru' => 'max:20', 
            'initials_ru' => 'max:20',
            'short_name_ru' => 'required|max:20', 
            'last_name_en' => 'required|max:20', 
            'first_name_en' => 'required|max:20', 
            'patronymic_en' => 'max:20',
            'short_name_en' => 'required|max:20',
            'initials_en' => 'max:20', 
            'avatar' => 'integer|nullable', 
            'orcid' => 'max:20|nullable',
            'post_ru' => 'string|max:250|nullable',
            'post_en' => 'string|max:250|nullable',
            'jobs_ru' => 'array|nullable',
            'jobs_en' => 'array|nullable',
        ];
    }
  
    public function sanitize()
    {
        $input = $this->all();

        $input = filter_var_array($input, FILTER_SANITIZE_STRING);

        $this->replace($input);     
    }
  
    public function withValidator($validator)
    {
        $validator->after(function ($validator) {
            if ($validator->errors()->any()) {
                $validator->errors()->add('title', 'Неверное заполнение формы!');
            }
        });
    }
}
