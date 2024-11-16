<?php
namespace Botble\Bosta\Services\Abstracts;
// use Botble\Bosta\Services\Abstracts\ApiResource as Bosta_ApiResource;
class Bosta_Rate extends Bosta_ApiResource
{
    /**
     * @param array|null $params
     *
     * @return Bosta_Retrieve Get a Rate.
     */
    public static function retrieve($id, $apiKey = null)
    {
        $class = get_class();
        return self::_scopedRetrieve($class, $id, $apiKey);
    }
}
