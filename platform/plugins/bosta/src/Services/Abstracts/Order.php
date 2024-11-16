<?php
namespace Botble\Bosta\Services\Abstracts;
// use Botble\Bosta\Services\Abstracts\ApiResource as Bosta_ApiResource;
class Order extends Bosta_ApiResource
{
    /**
     * @param array|null $params
     * @param string|null $apiKey
     *
     * @return Bosta_Order Create an order.
     */
    public static function create($params = null, $apiKey = null)
    {
        // dd($params);
        $class = get_class();
        return self::_scopedCreate($class, $params, $apiKey ,'/deliveries');
    }

    /**
     * @param array|null $params
     *
     * @return Bosta_Retrieve Get an order.
     */
    public static function retrieve($id, $apiKey = null)
    {
        $class = get_class();
        return self::_scopedRetrieve($class, $id, $apiKey);
    }

    /**
     * @param array|null $params
     *
     * @return Bosta_All Get all the orders.
     */
    public static function all($params = null, $apiKey = null)
    {
        $class = get_class();
        return self::_scopedAll($class, $params, $apiKey);
    }
}
