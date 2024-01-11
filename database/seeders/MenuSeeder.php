<?php

namespace Database\Seeders;

use Botble\Base\Supports\BaseSeeder;
use Botble\Blog\Models\Post;
use Botble\Ecommerce\Models\Product;
use Botble\Menu\Database\Traits\HasMenuSeeder;
use Botble\Page\Models\Page;

class MenuSeeder extends BaseSeeder
{
    use HasMenuSeeder;

    public function run(): void
    {
        $menus = [
            [
                'name' => 'القائمة الرئيسية',
                'location' => 'main-menu',
                'items' => [
                    [
                        'title' => 'الرئيسيه',
                        'url' => '/',
                        'children' => [
                            [
                                'title' => 'Wooden Home',
                                'reference_type' => Page::class,
                                'reference_id' => 1,
                            ],
                            [
                                'title' => 'Fashion Home',
                                'reference_type' => Page::class,
                                'reference_id' => 2,
                            ],
                            [
                                'title' => 'Furniture Home',
                                'reference_type' => Page::class,
                                'reference_id' => 3,
                            ],
                            [
                                'title' => 'Cosmetics Home',
                                'reference_type' => Page::class,
                                'reference_id' => 4,
                            ],
                            [
                                'title' => 'Food Grocery',
                                'reference_type' => Page::class,
                                'reference_id' => 5,
                            ],
                        ],
                    ],
                    [
                        'title' => 'Shop',
                        'url' => '/',
                        'children' => [
                            [
                                'title' => 'Shop Grid',
                                'url' => '/products',
                            ],
                            [
                                'title' => 'Shop List',
                                'url' => '/products?layout=list',
                            ],
                            [
                                'title' => 'Shop Detail',
                                'url' => Product::query()->inRandomOrder()->first()->url,
                            ],
                            [
                                'title' => 'Shop Location',
                                'reference_type' => Page::class,
                                'reference_id' => 10,
                            ],
                            [
                                'title' => 'Cart',
                                'url' => '/cart',
                            ],
                            [
                                'title' => 'Wishlist',
                                'url' => '/wishlist',
                            ],
                        ],
                    ],
                    [
                        'title' => 'الصفحات',
                        'url' => '/',
                        'children' => [
                            [
                                'title' => 'About',
                                'reference_type' => Page::class,
                                'reference_id' => 7,
                            ],
                            [
                                'title' => 'Sign up',
                                'url' => '/register',
                            ],
                            [
                                'title' => 'Login',
                                'url' => '/login',
                            ],
                            [
                                'title' => '404 / Error',
                                'url' => url('/404'),
                            ],
                            [
                                'title' => 'Coming soon',
                                'reference_type' => Page::class,
                                'reference_id' => 9,
                            ],
                        ],
                    ],
                    [
                        'title' => 'Blog',
                        'url' => '/',
                        'children' => [
                            [
                                'title' => 'Blog',
                                'reference_type' => Page::class,
                                'reference_id' => 6,
                            ],
                            [
                                'title' => 'Blog Detail',
                                'url' => Post::query()->first()->url,
                            ],
                        ],
                    ],
                    [
                        'title' => 'Contact',
                        'reference_type' => Page::class,
                        'reference_id' => 8,
                    ],
                ],
            ],
            [
                'name' => 'معلومة',
                'location' => 'information',
                'items' => [
                    [
                        'title' => 'خدمة مخصصة',
                        'reference_type' => Page::class,
                        'reference_id' => 1,
                    ],
                    [
                        'title' => 'FAQs',
                        'reference_type' => Page::class,
                        'reference_id' => 1,
                    ],
                    [
                        'title' => 'تتبع الطلب',
                        'reference_type' => Page::class,
                        'reference_id' => 1,
                    ],
                    [
                        'title' => 'جهات الاتصال',
                        'reference_type' => Page::class,
                        'reference_id' => 1,
                    ],
                    [
                        'title' => 'الأحداث',
                        'reference_type' => Page::class,
                        'reference_id' => 1,
                    ],
                ],
            ],
            [
                'name' => 'حسابي',
                'location' => 'my-account',
                'items' => [
                    [
                        'title' => 'معلومات التوصيل',
                        'reference_type' => Page::class,
                        'reference_id' => 1,
                    ],
                    [
                        'title' => 'سياسة الخصوصية',
                        'reference_type' => Page::class,
                        'reference_id' => 1,
                    ],
                    [
                        'title' => 'تخفيض',
                        'reference_type' => Page::class,
                        'reference_id' => 1,
                    ],
                    [
                        'title' => 'خدمة مخصصة',
                        'reference_type' => Page::class,
                        'reference_id' => 1,
                    ],
                    [
                        'title' => 'الشروط والأحكام',
                        'reference_type' => Page::class,
                        'reference_id' => 1,
                    ],
                ],
            ],
            [
                'name' => 'شبكة اجتماعية',
                'location' => 'social-network',
                'items' => [
                    [
                        'title' => 'فيسبوك',
                        'icon_font' => 'fab fa-facebook',
                        'url' => '#',
                    ],
                    [
                        'title' => 'Dribble',
                        'icon_font' => 'fab fa-dribbble',
                        'url' => '#',
                    ],
                    [
                        'title' => 'تويتر',
                        'icon_font' => 'fab fa-twitter',
                        'url' => '#',
                    ],
                    [
                        'title' => 'Behance',
                        'icon_font' => 'fab fa-behance',
                        'url' => '#',
                    ],
                    [
                        'title' => 'يوتيوب',
                        'icon_font' => 'fab fa-youtube',
                        'url' => '#',
                    ],
                ],
            ],
        ];

        $this->createMenus($menus);
    }
}
