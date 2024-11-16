<div>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th></th>
                <th>{{ trans('plugins/bosta::bosta.from_address') }}</th>
                <th>{{ trans('plugins/bosta::bosta.to_address') }}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td scope="row">{{ trans('plugins/ecommerce::payment.full_name') }}</td>
                <td>{{ Arr::get($shipmentBosta, 'address_from.name') }}</td>
                <td>{{ Arr::get($shipmentBosta, 'address_to.name') }}</td>
            </tr>
            <tr>
                <td scope="row">{{ trans('plugins/ecommerce::payment.email') }}</td>
                <td>{{ Arr::get($shipmentBosta, 'address_from.email') }}</td>
                <td>{{ Arr::get($shipmentBosta, 'address_to.email') }}</td>
            </tr>
            <tr>
                <td scope="row">{{ trans('plugins/ecommerce::payment.phone') }}</td>
                <td>{{ Arr::get($shipmentBosta, 'address_from.phone') }}</td>
                <td>{{ Arr::get($shipmentBosta, 'address_to.phone') }}</td>
            </tr>
            <tr>
                <td scope="row">{{ trans('plugins/ecommerce::order.country') }}</td>
                <td>{{ Arr::get($shipmentBosta, 'address_from.country') }}</td>
                <td>{{ Arr::get($shipmentBosta, 'address_to.country') }}</td>
            </tr>
            <tr>
                <td scope="row">{{ trans('plugins/ecommerce::order.state') }}</td>
                <td>{{ Arr::get($shipmentBosta, 'address_from.state') }}</td>
                <td>{{ Arr::get($shipmentBosta, 'address_to.state') }}</td>
            </tr>
            <tr>
                <td scope="row">{{ trans('plugins/ecommerce::order.city') }}</td>
                <td>{{ Arr::get($shipmentBosta, 'address_from.city') }}</td>
                <td>{{ Arr::get($shipmentBosta, 'address_to.city') }}</td>
            </tr>
            <tr>
                <td scope="row">{{ trans('plugins/ecommerce::payment.address') }}</td>
                <td>{{ Arr::get($shipmentBosta, 'address_from.street1') }}</td>
                <td>{{ Arr::get($shipmentBosta, 'address_to.street1') }}</td>
            </tr>
            <tr>
                <td scope="row">{{ trans('plugins/ecommerce::order.zip_code') }}</td>
                <td>{{ Arr::get($shipmentBosta, 'address_from.zip') }}</td>
                <td>{{ Arr::get($shipmentBosta, 'address_to.zip') }}</td>
            </tr>
        </tbody>
    </table>
</div>
