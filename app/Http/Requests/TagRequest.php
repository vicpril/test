<?php

namespace App\Http\Requests;

use App\Models\Tag;
use Illuminate\Foundation\Http\FormRequest;

class TagRequest extends FormRequest
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

        $rules = [
            'title_ru' => 'required|max:250|unique:tags,title_ru',
            'title_en' => 'max:250',
        ];

        switch ($this->getMethod()) {
            case 'POST':
                return $rules;
            case 'PUT':
                return [
                    'title_ru' => 'required|max:250|unique:tags,title_ru,' . $this->tag->id,
                ] + $rules;
            default:
                return $rules;
        }

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
