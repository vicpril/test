<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MenuRequest extends FormRequest
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
            'title' => 'required|max:250|unique:menus,title',
        ];

        switch ($this->getMethod()) {
            // case 'POST':
            // return $rules;
            case 'PUT':
                return [
                    'title' => 'required|max:250|unique:menus,title,' . $this->menu->id,
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
