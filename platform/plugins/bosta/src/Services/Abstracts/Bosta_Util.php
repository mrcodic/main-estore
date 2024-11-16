<?php
namespace Botble\Bosta\Services\Abstracts;
abstract class Bosta_Util
{
    /**
     * Whether the provided array (or other) is a list rather than a dictionary.
     *
     * @param array|mixed $array
     * @return boolean True if the given object is a list.
     */
    public static function isList($array)
    {
        if (!is_array($array))
            return false;

        // TODO: generally incorrect, but it's correct given Bosta's response
        foreach (array_keys($array) as $k) {
            if (!is_numeric($k))
                return false;
        }
        return true;
    }

    /**
     * Recursively converts the PHP Bosta object to an array.
     *
     * @param array $values The PHP Bosta object to convert.
     * @return array
     */
    public static function convertBostaObjectToArray($values)
    {
        $results = array();
        foreach ($values as $k => $v) {
            // FIXME: this is an encapsulation violation
            if (is_string($k) && $k[0] == '_') {
                continue;
            }
            if ($v instanceof Bosta_Object) {
                $results[$k] = $v->__toArray(true);
            } else if (is_array($v)) {
                $results[$k] = self::convertBostaObjectToArray($v);
            } else {
                $results[$k] = $v;
            }
        }
        return $results;
    }

    /**
     * Converts a response from the Bosta API to the corresponding PHP object.
     *
     * @param array $resp The response from the Bosta API.
     * @param string $apiKey
     * @return Bosta_Object|array
     */
    public static function convertToBostaObject($resp, $apiKey)
    {
        // TODO: Have API Return Object: Type in order to cast properly
        $types = array(
            'QUOTE' => 'Bosta_Address'
        );
        if (self::isList($resp)) {
            $mapped = array();
            foreach ($resp as $i)
                array_push($mapped, self::convertToBostaObject($i, $apiKey));
            return $mapped;
        } else if (is_array($resp)) {
            if (isset($resp['object_purpose']) && is_string($resp['object_purpose']) && isset($types[$resp['object_purpose']])) {
                $class = $types[$resp['object_purpose']];
            } else {
                $class = 'Bosta_Object';
            }
            return $resp;
            return Bosta_Object::scopedConstructFrom($class, $resp, $apiKey);
        } else {
            return $resp;
        }
    }

    /**
     * @param string|mixed $value A string to UTF8-encode.
     *
     * @returns string|mixed The UTF8-encoded string, or the object passed in if
     *    it wasn't a string.
     */
    public static function utf8($value)
    {
        if (is_string($value) && mb_detect_encoding($value, "UTF-8", TRUE) != "UTF-8") {
            return utf8_encode($value);
        } else {
            return $value;
        }
    }
}
