<?php
namespace Botble\Bosta\Services\Abstracts;
class Bosta_List extends Bosta_Object
{
    public function all($params = null)
    {
        $requestor = new Bosta_ApiRequestor($this->_apiKey);
        list($response, $apiKey) = $requestor->request('get', $this['url'], $params);
        return Bosta_Util::convertToBostaObject($response, $apiKey);
    }

    public function create($params = null)
    {
        $requestor = new Bosta_ApiRequestor($this->_apiKey);
        list($response, $apiKey) = $requestor->request('post', $this['url'], $params);
        return Bosta_Util::convertToBostaObject($response, $apiKey);
    }

    public function retrieve($id, $params = null)
    {
        $requestor = new Bosta_ApiRequestor($this->_apiKey);
        $base = $this['url'];
        $id = Bosta_Util::utf8($id);
        $extn = urlencode($id);
        list($response, $apiKey) = $requestor->request('get', "$base/$extn", $params);
        return Bosta_Util::convertToBostaObject($response, $apiKey);
    }

}
