<?php

namespace App\Http\Requests;

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
        return $role === 'admin';
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
            'title_ru' => 'required|max:100',
            'city_ru' => 'max:20',
            'address_ru' => 'max:250',
            'title_en' => 'max:100',
            'city_en' => 'max:20',
            'address_en' => 'max:250',
        ];
    }

    public function sanitize()
    {
        $input = $this->all();

        $input = filter_var_array($input, FILTER_SANITIZE_STRING);

        $this->replace($input);
    }
}
