<?php

namespace Idea\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FileRequest extends FormRequest
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
            'file' => 'file|max:256',
//             'type' => 'required',
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
          if (true) {
              $validator->errors()->add('field', 'Something is wrong with this field!');
          }
      });
      return response()->json(['errors'=>$validator->errors()->all()]);
  }
}
