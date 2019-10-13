<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PageRequest extends FormRequest
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
            'title_ru' => 'required|max:250|unique:meta_pages,title',
            'title_en' => 'max:250',
            'template' => 'required',
        ];

        switch ($this->getMethod()) {
            case 'POST':
                return $rules;
            case 'PUT':
                return [
                    'title_ru' => 'required|max:250|unique:meta_pages,title,' . $this->page->ru->id,
                ] + $rules;
            default:
                return $rules;
        }
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
