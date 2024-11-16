<?php
namespace Botble\Bosta\Services\Abstracts;
// use Botble\Bosta\Services\Abstracts\ApiResource as Bosta_ApiResource;
class Bosta_Track extends Bosta_ApiResource
{
    /**
    * @param string $class Ignored.
    *
    * @return string The class URL for this resource. It needs to be special
    *    cased because it doesn't fit into the standard resource pattern.
    *    The standard resource pattern is name + s, e.g. parcel becomes parcels.
    */
    public static function classUrl($class)
    {
        return "/tracks";
    }

    /**
     * @param array|null $params
     * @param string|null $apiKey
     *
     * @return Bosta_Tracking_Webhook Registers a webhook for the shipment
     */
    public static function create($params = null, $apiKey = null)
    {
        $class = get_class();
        return self::_scopedCreate($class, $params, $apiKey);
    }

    /**
     * @param array|null $params
     * @param string|null $apiKey
     *
     * @return Bosta_Get_Status Get the tracking status of a Shipment.
     */
    public static function get_status($params = null, $apiKey = null)
    {
        $class = get_class();
        $id = $params['id'];
        return self::_scopedGetStatus($class, $id, $params, $apiKey);
    }
}
