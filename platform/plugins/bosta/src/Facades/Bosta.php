<?php

namespace Botble\Bosta\Facades;

use Botble\Bosta\Bosta as BaseBosta;
use Illuminate\Support\Facades\Facade;

/**
 * @method static array getStates()
 * @method static array getCitiesByState(string|int|null $stateId)
 * @method static \Botble\Bosta\Models\City|\Illuminate\Database\Eloquent\Model|null getCityById(string|int|null $cityId)
 * @method static string|null getCityNameById(string|int|null $cityId)
 * @method static string|null getStateNameById(string|int|null $stateId)
 * @method static bool isSupported(object|string $model)
 * @method static array supportedModels()
 * @method static array getSupported(object|string|null $model = null)
 * @method static bool registerModule(string $model, array $keys = [])
 * @method static array getRemoteAvailableBostas()
 * @method static array downloadRemoteBosta(string $countryCode)
 * @method static mixed filter($model, string|int|null $cityId = null, string|null $Bosta = null, string|int|null $stateId = null)
 *
 * @see \Botble\Bosta\Bosta
 */
class Bosta extends Facade
{
    protected static function getFacadeAccessor(): string
    {
        return BaseBosta::class;
    }
}
