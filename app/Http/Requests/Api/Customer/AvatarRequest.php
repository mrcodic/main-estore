<?php

namespace App\Http\Requests\Api\Customer;

use Botble\Media\Facades\RvMedia;
use Botble\Support\Http\Requests\Request;

class AvatarRequest extends Request
{
    public function rules(): array
    {
        return [
            'avatar_file' => RvMedia::imageValidationRule(),
            'avatar_data' => 'required|string',
        ];
    }
}
