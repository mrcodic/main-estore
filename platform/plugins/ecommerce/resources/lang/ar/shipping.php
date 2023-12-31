<?php

return [
    'name' => 'قواعد الشحن',
    'shipping' => 'شحن',
    'title' => 'عنوان',
    'amount' => 'كمية',
    'enable' => 'يُمكَِن',
    'enabled' => 'ممكّن',
    'disable' => 'إبطال',
    'disabled' => 'عاجز',
    'create_shipping' => 'إنشاء الشحن',
    'edit_shipping' => 'تحرير الشحن: كود',
    'status' => 'حالة',
    'shipping_methods' => 'طرق الشحن',
    'create_shipping_method' => 'إنشاء طريقة الشحن',
    'edit_shipping_method' => 'تعديل طريقة الشحن',
    'add_shipping_region' => 'إضافة منطقة الشحن',
    'country' => 'دولة',
    'state' => 'ولاية',
    'city' => 'مدينة',
    'address' => 'عنوان',
    'phone' => 'هاتف',
    'email' => 'بريد إلكتروني',
    'zip_code' => 'الرمز البريدي',
    'methods' => [
        'default' => 'افتراضي',
    ],
    'statuses' => [
        'not_approved' => 'غير مقبول',
        'approved' => 'موافقة',
        'pending' => 'قيد الانتظار',
        'arrange_shipment' => 'ترتيب شحن',
        'ready_to_be_shipped_out' => 'جاهز للشحن للخارج',
        'picking' => 'اختيار',
        'delay_picking' => 'تأخير الانتقاء',
        'picked' => 'اختار',
        'not_picked' => 'لم يتم اختياره',
        'delivering' => 'تسليم',
        'delivered' => 'تم التوصيل',
        'not_delivered' => 'لم يتم تسليمها',
        'audited' => 'مدققة',
        'canceled' => 'ألغيت',
    ],
    'cod_statuses' => [
        'pending' => 'قيد الانتظار',
        'completed' => 'مكتمل',
    ],
    'delete' => 'يمسح',
    'shipping_rules' => 'قواعد الشحن',
    'shipping_rules_description' => 'قواعد حساب رسوم الشحن.',
    'select_country' => 'حدد الدولة',
    'add_shipping_rule' => 'إضافة قاعدة الشحن',
    'delete_shipping_rate' => 'حذف سعر الشحن للمنطقة',
    'delete_shipping_rate_confirmation' => 'هل أنت متأكد من أنك تريد حذف <strong class="region-price-item-label"></strong> من منطقة الشحن هذه؟',
    'delete_shipping_area' => 'حذف منطقة الشحن',
    'delete_shipping_area_confirmation' => 'هل أنت متأكد من أنك تريد حذف منطقة الشحن <strong class="region-item-label"></strong>؟',
    'add_shipping_fee_for_area' => 'إضافة رسوم الشحن للمنطقة',
    'confirm' => 'يتأكد',
    'save' => 'يحفظ',
    'greater_than' => 'أكثر من',
    'type' => 'يكتب',
    'shipping_rule_name' => 'اسم قاعدة الشحن',
    'shipping_fee' => 'رسوم الشحن',
    'cancel' => 'يلغي',
    'based_on_weight' => 'بناءً على وزن المنتج (:الوحدة)',
    'based_on_price' => 'بناء على سعر المنتج',
    'shipment_canceled' => 'تم إلغاء الشحنة',
    'at' => 'في',
    'cash_on_delivery' => 'الدفع عند التسليم (COD)',
    'update_shipping_status' => 'تحديث حالة الشحن',
    'update_cod_status' => 'تحديث حالة COD',
    'history' => 'تاريخ',
    'shipment_information' => 'معلومات الشحنة',
    'order_number' => 'رقم الأمر',
    'shipping_method' => 'طريقة الشحن',
    'select_shipping_method' => 'إختر طريقة الشحن',
    'cod_status' => 'حالة COD',
    'shipping_status' => 'حالة الشحن',
    'customer_information' => 'معلومات العميل',
    'sku' => 'رمز التخزين التعريفي',
    'change_status_confirm_title' => 'تأكيد <span class="shipment-status-label"></span>؟',
    'change_status_confirm_description' => 'هل أنت متأكد أنك تريد تأكيد <span class="shipment-status-label"></span> لهذه الشحنة؟',
    'accept' => 'يقبل',
    'weight_unit' => 'وحدة الوزن)',
    'updated_at' => 'اخر تحديث',
    'cod_amount' => 'الدفع عند الاستلام (COD)',
    'cancel_shipping' => 'إلغاء الشحن',
    'shipping_address' => 'عنوان الشحن',
    'packages' => 'الحزم',
    'edit' => 'يحرر',
    'fee' => 'مصاريف',
    'note' => 'ملحوظة',
    'finish' => 'ينهي',
    'shipping_fee_cod' => 'رسوم الشحن / COD',
    'send_confirmation_email_to_customer' => 'إرسال رسالة تأكيد بالبريد الإلكتروني إلى العميل',
    'form_name' => 'اسم',
    'changed_shipping_status' => 'تم تغيير حالة الشحن إلى::status. تم التحديث بواسطة: %user_name%',
    'order_confirmed_by' => 'تم تأكيد الطلب بواسطة %user_name%',
    'shipping_canceled_by' => 'تم إلغاء الشحن بواسطة %user_name%',
    'update_shipping_status_success' => 'تم تحديث حالة الشحن بنجاح!',
    'update_cod_status_success' => 'تم تحديث حالة COD للشحن بنجاح!',
    'updated_cod_status_by' => 'تم تحديث حالة COD إلى:status . تم التحديث بواسطة: %user_name%',
    'all' => 'الجميع',
    'error_when_adding_new_region' => 'هناك خطأ عند إضافة منطقة جديدة!',
    'delivery' => 'توصيل',
    'adjustment_price_of' => 'تعديل سعر :المفتاح',
    'warehouse' => 'مستودع',
    'delivery_note' => 'مذكرة تسليم',
    'shipments' => 'الشحنات',
    'order_id' => 'رقم التعريف الخاص بالطلب',
    'not_available' => 'غير متاح',
    'shipping_amount' => 'كمية الشحن',
    'additional_shipment_information' => 'معلومات شحنة إضافية',
    'shipping_company_name' => 'اسم شركة الشحن',
    'tracking_id' => 'معرف التتبع',
    'tracking_link' => 'رابط التتبع',
    'estimate_date_shipped' => 'تقدير تاريخ الشحن',
    'date_shipped' => 'تاريخ شحنها',
    'add_note' => 'اضف ملاحظة...',
    'view_order' => 'عرض الطلب :order_id',
    'rule' => [
        'types' => [
            'based_on_weight' => 'بناءً على وزن المنتج (:الوحدة)',
            'based_on_price' => 'بناء على سعر المنتج',
            'based_on_zipcode' => 'بناء على الرمز البريدي',
            'based_on_location' => 'بناء على الموقع',
            'unavailable' => 'غير متوفره',
        ],
        'item' => [
            'name' => 'عناصر قاعدة الشحن',
            'edit' => 'تعديل عنصر',
            'create' => 'إنشاء عنصر جديد',
            'delete' => 'حذف عنصر قاعدة الشحن',
            'confirmation' => 'هل أنت متأكد أنك تريد حذف عنصر قاعدة الشحن <strong class="item-label"></strong>؟',
            'load_data_table' => 'تحميل جدول البيانات (:الإجمالي)',
            'tables' => [
                'shipping_rule' => 'قاعدة الشحن',
                'country' => 'دولة',
                'state' => 'ولاية',
                'city' => 'مدينة',
                'zip_code' => 'الرمز البريدي',
                'adjustment_price' => 'سعر التعديل',
                'is_enabled' => 'هل تم تمكينه؟',
            ],
            'forms' => [
                'country' => 'دولة',
                'country_placeholder' => 'دولة',
                'state' => 'ولاية',
                'state_placeholder' => 'ولاية',
                'city' => 'مدينة',
                'city_placeholder' => 'مدينة',
                'zip_code' => 'الرمز البريدي',
                'zip_code_placeholder' => 'الرمز البريدي',
                'adjustment_price' => 'سعر التعديل',
                'adjustment_price_placeholder' => 'سعر التعديل',
                'is_enabled' => 'هل تم تمكينه؟',
                'shipping_rule' => 'قاعدة الشحن',
                'no_shipping_rule' => 'لا توجد قاعدة الشحن',
            ],
            'bulk-import' => [
                'menu' => 'استيراد بالجملة عناصر قاعدة الشحن',
                'greater_than_or_equal' => 'يتم قبول الأرقام أو الكسور العشرية فقط والتي تكون أكبر من أو تساوي :min.',
                'less_than_or_equal' => 'يتم قبول الأرقام أو الكسور العشرية فقط وتكون أقل من أو تساوي:max.',
                'between' => 'يتم قبول الأرقام أو الكسور العشرية فقط وبين:min و:max.',
                'overwrite' => 'الكتابة فوق',
                'add_new' => 'اضف جديد',
                'skip' => 'يتخطى',
            ],
        ],
        'select_type' => 'اختر صنف',
        'cannot_create_rule_type_for_this_location' => 'لا يمكن إنشاء نوع القاعدة ":type" في هذا الموقع!',
    ],
];
