<?php

namespace Botble\Ecommerce\Traits;

use Botble\Ecommerce\Facades\EcommerceHelper;
use Botble\Location\Models\City;
use Botble\Location\Models\Country;
use Botble\Location\Models\State;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Http;

/**
 * @mixin \Eloquent
 */
trait BostaTrait
{

    public function getBostaEndpointsAndToken(): array
    {
        $url = config('plugins.bosta.general.url');
        $key = config('plugins.bosta.general.key');

        return [
            'url' => $url,
            'key' => $key,
        ];
    }


    public function addDelivery()
    {

        $curl = curl_init();

        curl_setopt_array($curl, [
        CURLOPT_URL => "http://app.bosta.co/api/v2/deliveries",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_POSTFIELDS => "{\n  \"type\": 10,\n  \"specs\": {\n    \"packageType\": \"Parcel\",\n    \"size\": \"MEDIUM\",\n    \"packageDetails\": {\n      \"itemsCount\": 2,\n      \"description\": \"Desc.\"\n    }\n  },\n  \"notes\": \"Welcome Note\",\n  \"cod\": 50,\n  \"dropOffAddress\": {\n    \"city\": \"Helwan\",\n    \"zoneId\": \"NQz5sDOeG\",\n    \"districtId\": \"aiJudRHeOt\",\n    \"firstLine\": \"Helwan street x\",\n    \"secondLine\": \"Near to Bosta school\",\n    \"buildingNumber\": \"123\",\n    \"floor\": \"4\",\n    \"apartment\": \"2\"\n  },\n  \"pickupAddress\": {\n    \"city\": \"Helwan\",\n    \"zoneId\": \"NQz5sDOeG\",\n    \"districtId\": \"aiJudRHeOt\",\n    \"firstLine\": \"Helwan street x\",\n    \"secondLine\": \"Near to Bosta school\",\n    \"buildingNumber\": \"123\",\n    \"floor\": \"4\",\n    \"apartment\": \"2\"\n  },\n  \"returnAddress\": {\n    \"city\": \"Helwan\",\n    \"zoneId\": \"NQz5sDOeG\",\n    \"districtId\": \"aiJudRHeOt\",\n    \"firstLine\": \"Maadi\",\n    \"secondLine\": \"Nasr  City\",\n    \"buildingNumber\": \"123\",\n    \"floor\": \"4\",\n    \"apartment\": \"2\"\n  },\n  \"businessReference\": \"43535252\",\n  \"receiver\": {\n    \"firstName\": \"Sasuke\",\n    \"lastName\": \"Uchiha\",\n    \"phone\": \"01065685435\",\n    \"email\": \"ahmed@ahmed.com\"\n  },\n  \"webhookUrl\": \"https://www.google.com/\"\n}",
        CURLOPT_HTTPHEADER => [
            "Authorization: d2ac576a6ac5e8875dbbf2b7e572fd68a02370f2369ad184fa746dcbbeac5eaf",
            "Content-Type: application/json"
        ],
        ]);

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);

        if ($err) {
            echo "cURL Error #:" . $err;
        } else {
            echo $response;
        }

        return $response;
    }

    public function createDelivery()
    {
        // dd($this->getBostaEndpointsAndToken());
        $response = Http::withHeaders([
                'Authorization' => $this->getBostaEndpointsAndToken()['key'],
                'Content-Type'  => 'application/json',
            ])
            ->post($this->getBostaEndpointsAndToken()['url'].'deliveries', [
                'type' => 10,
                'specs' => [
                    'packageType' => 'Parcel',
                    'size' => 'MEDIUM',
                    'packageDetails' => [
                        'itemsCount' => 2,
                        'description' => 'Desc.',
                    ],
                ],
                'notes' => 'Welcome Note',
                'cod' => 50,
                'dropOffAddress' => [
                    'city' => 'Helwan',
                    'zoneId' => 'NQz5sDOeG',
                    'districtId' => 'aiJudRHeOt',
                    'firstLine' => 'Helwan street x',
                    'secondLine' => 'Near to Bosta school',
                    'buildingNumber' => '123',
                    'floor' => '4',
                    'apartment' => '2',
                ],
                'pickupAddress' => [
                    'city' => 'Helwan',
                    'zoneId' => 'NQz5sDOeG',
                    'districtId' => 'aiJudRHeOt',
                    'firstLine' => 'Helwan street x',
                    'secondLine' => 'Near to Bosta school',
                    'buildingNumber' => '123',
                    'floor' => '4',
                    'apartment' => '2',
                ],
                'returnAddress' => [
                    'city' => 'Helwan',
                    'zoneId' => 'NQz5sDOeG',
                    'districtId' => 'aiJudRHeOt',
                    'firstLine' => 'Maadi',
                    'secondLine' => 'Nasr City',
                    'buildingNumber' => '123',
                    'floor' => '4',
                    'apartment' => '2',
                ],
                'businessReference' => '43535252',
                'receiver' => [
                    'firstName' => 'Sasuke',
                    'lastName' => 'Uchiha',
                    'phone' => '01065685435',
                    'email' => 'ahmed@ahmed.com',
                ],
                'webhookUrl' => 'https://www.google.com/',

            ]);

        if ($response->failed()) {
            // dd($response->json());
            // معالجة الخطأ هنا
            // return response()->json(['error' => $response->body()], $response->status());
        }

        return $response->json();
    }

}






