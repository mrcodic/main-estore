<?php

namespace Botble\Bosta\Services\Abstracts;

abstract class Bosta_ApiResource extends Bosta_Object
{
    protected static function _scopedRetrieve($class, $id, $apiKey = null)
    {
        $instance = new $class($id, $apiKey);
        $instance->refresh();
        return $instance;
    }

    /**
     * @returns Bosta_ApiRequestor The refreshed resource.
     */
    public function refresh()
    {
        $requestor = new Bosta_ApiRequestor($this->_apiKey);
        $url = $this->instanceUrl();

        list($response, $apiKey) = $requestor->request('get', $url, $this->_retrieveOptions);
        $this->refreshFrom($response, $apiKey);
        return $this;
    }

    /**
     * @param string $class
     *
     * @returns string The name of the class, with namespacing and underscores
     *    stripped.
     */
    public static function className($class)
    {
        // Useful for namespaces: Foo\Bosta_Shipment
        if ($postfixNamespaces = strrchr($class, '\\')) {
            $class = substr($postfixNamespaces, 1);
        }
        // Useful for underscored 'namespaces': Foo_Bosta_Shipment
        if ($postfixFakeNamespaces = strrchr($class, 'Bosta_')) {
            $class = $postfixFakeNamespaces;
        }
        if (substr($class, 0, strlen('Bosta')) == 'Bosta') {
            $class = substr($class, strlen('Bosta'));
        }
        $class = str_replace('_', '', $class);
        $name = urlencode($class);
        $name = strtolower($name);
        return $name;
    }

    /**
     * @param string $class
     *
     * @returns string The endpoint URL for the given class.
     */
    public static function classUrl($class)
    {
        $base = self::_scopedLsb($class, 'className', $class);
        return "/${base}s";
    }

    /**
     * @returns string The full API URL for this API resource.
     */
    public function instanceUrl()
    {
        $id = $this['id'];
        $class = get_class($this);
        if ($id === null) {
            $message = "Could not determine which URL to request: " . "$class instance has invalid ID: $id";
            throw new Bosta_InvalidRequestError($message, null);
        }
        $id = Bosta_Util::utf8($id);
        $base = $this->_lsb('classUrl', $class);
        $extn = urlencode($id);
        return "$base/$extn";
    }

    private static function _validateCall($method, $params = null, $apiKey = null)
    {
        if ($params && !is_array($params)) {
            $message = "You must pass an array as the first argument to Bosta API ";
            throw new Bosta_Error($message);
        }

        if ($apiKey && !is_string($apiKey)) {
            $message = 'The second argument to Bosta API method calls is an ' . 'optional per-request apiKey (credentials base_64 encoded), which must be a string';
            throw new Bosta_Error($message);
        }
    }

    protected static function _scopedAll($class, $params = null, $apiKey = null, $url = null)
    {
        self::_validateCall('all', $params, $apiKey);
        $requestor = new Bosta_ApiRequestor($apiKey);
        if(!$url){
            $url = self::_scopedLsb($class, 'classUrl', $class);
        }
        list($response, $apiKey) = $requestor->request('get', $url, $params);
        return Bosta_Util::convertToBostaObject($response, $apiKey);
    }

    protected static function _scopedCreate($class, $params = null, $apiKey = null, $url = null)
    {
        self::_validateCall('create', $params, $apiKey);
        $requestor = new Bosta_ApiRequestor($apiKey);
        if(!$url){
            $url = self::_scopedLsb($class, 'classUrl', $class);
            // Correction for malformed Bosta URLs
            $url = $url . "/";
        }
        list($response, $apiKey) = $requestor->request('post', $url, $params);
        return Bosta_Util::convertToBostaObject($response, $apiKey);
    }

    protected static function _scopedUpdate($class, $id, $params = null, $apiKey = null, $url = null)
    {
        self::_validateCall('update', $params, $apiKey);
        $requestor = new Bosta_ApiRequestor($apiKey);
        if(!$url) $url = self::_scopedLsb($class, 'classUrl', $class);
        $url = $url . "/" . $id;
        list($response, $apiKey) = $requestor->request('put', $url, $params);
        return Bosta_Util::convertToBostaObject($response, $apiKey);
    }

    // Special Case for Rates which has parameters of the format: /url/parameter/url
    protected static function _scopedGet($class, $id, $params = null, $apiKey = null, $url = null)
    {
        self::_validateCall('create', $params, $apiKey);
        $requestor = new Bosta_ApiRequestor($apiKey);
        if(!$url) $url = "/shipments/" . $id . "/rates/{$params['currency']}";
        list($response, $apiKey) = $requestor->request('get', $url, $params);
        return Bosta_Util::convertToBostaObject($response, $apiKey);
    }

    // Special case for Address Validation
    protected static function _scopedValidate($class, $id, $params = null, $apiKey = null, $url = null)
    {
        self::_validateCall('create', $params, $apiKey);
        $requestor = new Bosta_ApiRequestor($apiKey);
        $url = self::_scopedLsb($class, 'classUrl', $class) . "/" . $id . "/validate/";
        list($response, $apiKey) = $requestor->request('get', $url, $params);
        return Bosta_Util::convertToBostaObject($response, $apiKey);
    }

    //Special case for Tracking Status
    protected static function _scopedGetStatus($class, $id, $params = null, $apiKey = null, $url = null)
    {
        self::_validateCall('create', $params, $apiKey);
        $requestor = new Bosta_ApiRequestor($apiKey);
        $url = self::_scopedLsb($class, 'classUrl', $class) . "/{$params['carrier']}/" . $id;
        list($response, $apiKey) = $requestor->request('get', $url, array());
        return Bosta_Util::convertToBostaObject($response, $apiKey);
    }

    protected static function _scopedAddBatch($class, $id, $params = null, $apiKey = null, $url = null)
    {
        self::_validateCall('add', $params, $apiKey);
        $requestor = new Bosta_ApiRequestor($apiKey);
        $url = self::_scopedLsb($class, 'classUrl', $class) . "/" . $id ."/" . 'add_shipments/';
        list($response, $apiKey) = $requestor->request('post', $url, $params);
        return Bosta_Util::convertToBostaObject($response, $apiKey);
    }

    protected static function _scopedRemoveBatch($class, $id, $params = null, $apiKey = null, $url = null)
    {
        self::_validateCall('add', $params, $apiKey);
        $requestor = new Bosta_ApiRequestor($apiKey);
        $url = self::_scopedLsb($class, 'classUrl', $class) . "/" . $id ."/" .  'remove_shipments/';
        list($response, $apiKey) = $requestor->request('post', $url, $params);
        return Bosta_Util::convertToBostaObject($response, $apiKey);
    }

    protected static function _scopedPurchaseBatch($class, $id, $apiKey = null)
    {
        self::_validateCall('purchase', null, $apiKey);
        $requestor = new Bosta_ApiRequestor($apiKey);
        $url = self::_scopedLsb($class, 'classUrl', $class) . "/" . $id ."/" .  'purchase/';
        list($response, $apiKey) = $requestor->request('post', $url, null);
        return Bosta_Util::convertToBostaObject($response, $apiKey);
    }
}
