<?php

return [
    'name' => 'النشرات الإخبارية',
    'settings' => [
        'email' => [
            'templates' => [
                'title' => 'النشرات الإخبارية',
                'description' => 'تكوين قوالب البريد الإلكتروني للنشرة الإخبارية',
                'to_admin' => [
                    'title' => 'إرسال البريد الإلكتروني إلى المشرف',
                    'description' => 'نموذج لإرسال البريد الإلكتروني إلى المشرف',
                ],
                'to_user' => [
                    'title' => 'إرسال البريد الإلكتروني إلى المستخدم',
                    'description' => 'نموذج لإرسال البريد الإلكتروني للمشترك',
                ],
            ],
        ],
        'title' => 'النشرة الإخبارية',
        'description' => 'إعدادات النشرة الإخبارية (إرسال رسالة إخبارية بالبريد الإلكتروني تلقائيًا إلى SendGrid وMailchimp... عندما يقوم شخص ما بتسجيل النشرة الإخبارية على موقع الويب).',
        'mailchimp_api_key' => 'مفتاح واجهة برمجة تطبيقات Mailchimp',
        'mailchimp_list_id' => 'معرف قائمة Mailchimp',
        'mailchimp_list' => 'قائمة ميل تشيمب',
        'sendgrid_api_key' => 'مفتاح API Sendgrid',
        'sendgrid_list_id' => 'معرف قائمة Sendgrid',
        'sendgrid_list' => 'قائمة سيندغريد',
        'enable_newsletter_contacts_list_api' => 'هل تريد تمكين API قائمة جهات اتصال الرسائل الإخبارية؟',
    ],
    'statuses' => [
        'subscribed' => 'مشترك',
        'unsubscribed' => 'غير مشترك',
    ],
];
