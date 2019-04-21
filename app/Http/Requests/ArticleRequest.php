<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ArticleRequest extends FormRequest
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
        return [];

        $rules = [
//             'full_name' => 'required|max:50',
            //             'alias' => 'max:100|unique:users,alias',
            //             'email' => 'required|email|max:100|unique:users,email',
            //             'last_name_ru' => 'required|max:20',
            //             'first_name_ru' => 'required|max:20',
            //             'patronymic_ru' => 'max:20',
            //             'initials_ru' => 'max:20',
            //             'short_name_ru' => 'required|max:20',
            //             'last_name_en' => 'required|max:20',
            //             'first_name_en' => 'required|max:20',
            //             'patronymic_en' => 'max:20',
            //             'short_name_en' => 'required|max:20',
            //             'initials_en' => 'max:20',
            //             'avatar' => 'string|nullable',
            //             'orcid' => 'max:20|nullable',
            //             'post_ru' => 'string|max:250|nullable',
            //             'post_en' => 'string|max:250|nullable',
            //             'jobs_ru' => 'array|nullable',
            //             'jobs_en' => 'array|nullable',
        ];

        switch ($this->getMethod()) {
            case 'POST':
                return $rules;
            case 'PUT':
                return [
                    'alias' => 'max:100|unique:users,alias,' . $this->user->id,
                    'email' => 'required|email|max:100|unique:users,email,' . $this->user->id,
                ] + $rules;
            default:
                return $rules;
        }
    }

//     public function sanitize()
    //     {
    //         $input = $this->all();
    //
    //         $input = filter_var_array($input, FILTER_SANITIZE_STRING);
    //         $input = array_map(function($value){
    //             return Purifier::clean($value);
    //         }, $input);
    //
    //         $this->replace($input);
    //     }

    public function withValidator($validator)
    {
        $validator->after(function ($validator) {
            if ($validator->errors()->any()) {
                $validator->errors()->add('title', 'Неверное заполнение формы!');
            }
        });
    }
}
