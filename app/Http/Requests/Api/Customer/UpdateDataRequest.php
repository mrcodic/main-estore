<?php

namespace App\Http\Requests\Api\Customer;

use Botble\Base\Facades\BaseHelper;
use Illuminate\Foundation\Http\FormRequest;

class UpdateDataRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'phone' => 'sometimes|' . BaseHelper::getPhoneValidationRule(),
            'dob' => 'date|max:20|sometimes',
        ];
    }
}
