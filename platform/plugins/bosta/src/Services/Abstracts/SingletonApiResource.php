<?php
namespace Botble\Bosta\Services\Abstracts;
// use Botble\Bosta\Services\Abstracts\ApiResource as Bosta_ApiResource;
abstract class Bosta_SingletonApiResource extends Bosta_ApiResource
{
    protected static function _scopedSingletonRetrieve($class, $apiKey = null)
    {
        $instance = new $class(null, $apiKey);
        $instance->refresh();
        return $instance;
    }

    /**
     * @param Bosta_SingletonApiResource $class
     * @return string The endpoint associated with this singleton class.
     */
    public static function classUrl($class)
    {
        $base = self::className($class);
        return "/${base}";
    }

    /**
     * @return string The endpoint associated with this singleton API resource.
     */
    public function instanceUrl()
    {
        $class = get_class($this);
        $base = self::classUrl($class);
        return "$base";
    }
}
