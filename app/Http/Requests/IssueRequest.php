<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class IssueRequest extends FormRequest
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

        $rules = [
            'year' => 'required|integer',
            'no' => 'required|integer',
            'full_no' => 'required|integer',
            'part' => 'required|integer',
            'file_title_ru' => 'string|nullable',
            'file_title_en' => 'string|nullable',
            'articlesOrder' => 'array',
        ];

        return $rules;

        // switch ($this->getMethod()) {
        //     case 'POST':
        //         return $rules;
        //     case 'PUT':
        //         return [
        //             'title_ru' => 'required|max:250|unique:meta_articles,title,' . $this->article->ru->id,
        //         ] + $rules;
        //     default:
        //         return $rules;
        // }
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
