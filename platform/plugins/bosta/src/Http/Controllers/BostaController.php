<?php

namespace Botble\Bosta\Http\Controllers;

use Botble\Bosta\Http\Requests\BostaRequest;
use Botble\Bosta\Models\Bosta;
use Botble\Base\Facades\PageTitle;
use Botble\Base\Http\Controllers\BaseController;
use Illuminate\Http\Request;
use Exception;
use Botble\Bosta\Tables\BostaTable;
use Botble\Base\Events\CreatedContentEvent;
use Botble\Base\Events\DeletedContentEvent;
use Botble\Base\Events\UpdatedContentEvent;
use Botble\Base\Http\Responses\BaseHttpResponse;
use Botble\Bosta\Forms\BostaForm;
use Botble\Base\Forms\FormBuilder;

class BostaController extends BaseController
{
    public function index(BostaTable $table)
    {
        PageTitle::setTitle(trans('plugins/bosta::bosta.name'));

        return $table->renderTable();
    }

    public function create(FormBuilder $formBuilder)
    {
        PageTitle::setTitle(trans('plugins/bosta::bosta.create'));

        return $formBuilder->create(BostaForm::class)->renderForm();
    }

    public function store(BostaRequest $request, BaseHttpResponse $response)
    {
        $bosta = Bosta::query()->create($request->input());

        event(new CreatedContentEvent(BOSTA_MODULE_SCREEN_NAME, $request, $bosta));

        return $response
            ->setPreviousUrl(route('bosta.index'))
            ->setNextUrl(route('bosta.edit', $bosta->getKey()))
            ->setMessage(trans('core/base::notices.create_success_message'));
    }

    public function edit(Bosta $bosta, FormBuilder $formBuilder)
    {
        PageTitle::setTitle(trans('core/base::forms.edit_item', ['name' => $bosta->name]));

        return $formBuilder->create(BostaForm::class, ['model' => $bosta])->renderForm();
    }

    public function update(Bosta $bosta, BostaRequest $request, BaseHttpResponse $response)
    {
        $bosta->fill($request->input());

        $bosta->save();

        event(new UpdatedContentEvent(BOSTA_MODULE_SCREEN_NAME, $request, $bosta));

        return $response
            ->setPreviousUrl(route('bosta.index'))
            ->setMessage(trans('core/base::notices.update_success_message'));
    }

    public function destroy(Bosta $bosta, Request $request, BaseHttpResponse $response)
    {
        try {
            $bosta->delete();

            event(new DeletedContentEvent(BOSTA_MODULE_SCREEN_NAME, $request, $bosta));

            return $response->setMessage(trans('core/base::notices.delete_success_message'));
        } catch (Exception $exception) {
            return $response
                ->setError()
                ->setMessage($exception->getMessage());
        }
    }
}
