<?php

return [
    'webhook_secret' => 'Webhook Secret',
    'webhook_setup_guide' => [
        'title' => 'دليل إعداد خطاف Webhook الشريطي',
        'description' => 'اتبع هذه الخطوات لإعداد خطاف ويب Stripe',
        'step_1_label' => 'قم بتسجيل الدخول إلى لوحة تحكم Stripe',
        'step_1_description' => 'قم بالوصول إلى الرابط: وانقر فوق الزر "إضافة نقطة نهاية" في قسم "Webhooks" في علامة التبويب "المطورين".',
        'step_2_label' => 'حدد الحدث وقم بتكوين نقطة النهاية',
        'step_2_description' => 'حدد الحدث "Payment_intent.succeeded" وأدخل عنوان URL التالي في حقل "عنوان URL لنقطة النهاية": :url',
        'step_3_label' => 'أضف نقطة النهاية',
        'step_3_description' => 'انقر فوق الزر "إضافة نقطة نهاية" لحفظ خطاف الويب.',
        'step_4_label' => 'نسخ سر التوقيع',
        'step_4_description' => 'انسخ قيمة "سر التوقيع" من قسم "تفاصيل Webhook" وألصقها في الحقل "Stripe Webhook Secret" في قسم "Stripe" ضمن علامة التبويب "الدفع" في صفحة "الإعدادات".',
    ]
];
