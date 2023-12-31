<?php

namespace Botble\Ecommerce\Forms;

use Botble\Base\Enums\BaseStatusEnum;
use Botble\Base\Forms\FormAbstract;
use Botble\Ecommerce\Facades\ProductCategoryHelper;
use Botble\Ecommerce\Forms\Fields\CategoryMultiField;
use Botble\Ecommerce\Http\Requests\ProductAttributeSetsRequest;
use Botble\Ecommerce\Models\ProductAttributeSet;
use Botble\Language\Facades\Language;

class ProductAttributeSetForm extends FormAbstract
{
    public function buildForm(): void
    {
        $displayLayout = [
            'dropdown' => trans('plugins/ecommerce::product-attribute-sets.dropdown_swatch'),
            'visual' => trans('plugins/ecommerce::product-attribute-sets.visual_swatch'),
            'text' => trans('plugins/ecommerce::product-attribute-sets.text_swatch'),
        ];

        $attributes = [];

        if ($this->getModel()) {
            $attributes = $this->getModel()->attributes;
        }

        $isNotDefaultLanguage = defined('LANGUAGE_ADVANCED_MODULE_SCREEN_NAME') &&
            $this->request->input('ref_lang') &&
            $this->request->input('ref_lang') != Language::getDefaultLocaleCode();

        $this
            ->setupModel(new ProductAttributeSet())
            ->setValidatorClass(ProductAttributeSetsRequest::class)
            ->addCustomField('categoryMulti', CategoryMultiField::class)
            ->setFormOption('class', 'update-attribute-set-form')
            ->withCustomFields()
            ->add('title', 'text', [
                'label' => trans('core/base::forms.title'),
                'required' => true,
                'attr' => [
                    'data-counter' => 120,
                ],
            ])
            ->add('slug', 'text', [
                'label' => trans('core/base::forms.slug'),
                'required' => true,
                'attr' => [
                    'data-counter' => 120,
                ],
            ])
            ->add('use_image_from_product_variation', 'onOff', [
                'label' => trans('plugins/ecommerce::product-attribute-sets.use_image_from_product_variation'),
                'default_value' => false,
            ])
            ->add('status', 'customSelect', [
                'label' => trans('core/base::tables.status'),
                'required' => true,
                'choices' => BaseStatusEnum::labels(),
            ])
            ->add('display_layout', 'customSelect', [
                'label' => trans('plugins/ecommerce::product-attribute-sets.display_layout'),
                'required' => true,
                'choices' => $displayLayout,
            ])
            ->add('is_searchable', 'onOff', [
                'label' => trans('plugins/ecommerce::product-attribute-sets.searchable'),
                'default_value' => false,
            ])
            ->add('is_comparable', 'onOff', [
                'label' => trans('plugins/ecommerce::product-attribute-sets.comparable'),
                'default_value' => false,
            ])
            ->add('is_use_in_product_listing', 'onOff', [
                'label' => trans('plugins/ecommerce::product-attribute-sets.use_in_product_listing'),
                'default_value' => false,
            ])
            ->add('order', 'number', [
                'label' => trans('core/base::forms.order'),
                'attr' => [
                    'placeholder' => trans('core/base::forms.order_by_placeholder'),
                ],
                'default_value' => 0,
            ])
            ->add('categories[]', 'categoryMulti', [
                'label' => trans('plugins/ecommerce::products.form.categories'),
                'choices' => ProductCategoryHelper::getActiveTreeCategories(),
                'value' => $this->getModel()->id ? $this->getModel()->categories->pluck('id')->all() : [],
            ])
            ->setBreakFieldPoint('status')
            ->addMetaBoxes([
                'attributes_list' => [
                    'title' => trans('plugins/ecommerce::product-attribute-sets.attributes_list'),
                    'content' => view(
                        'plugins/ecommerce::product-attributes.sets.list',
                        compact('attributes', 'isNotDefaultLanguage')
                    )->render(),
                ],
            ]);
    }
}
