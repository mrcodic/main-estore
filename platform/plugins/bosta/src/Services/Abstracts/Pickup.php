<?php
namespace Botble\Bosta\Services\Abstracts;
// use Botble\Bosta\Services\Abstracts\ApiResource as Bosta_ApiResource;
class Bosta_Pickup extends Bosta_ApiResource
{
    /**
     * @param array|null $params
     * @param string|null $apiKey
     *
     * @return Bosta_Pickup Create a pickup.
     */
    public static function create($params = null, $apiKey = null)
    {
        $class = get_class();
        return self::_scopedCreate($class, $params, $apiKey);
    }
}
