<?php

namespace Database\Seeders;

use Botble\Base\Supports\BaseSeeder;
use Botble\Theme\Database\Traits\HasThemeOptionSeeder;

class ThemeOptionSeeder extends BaseSeeder
{
    use HasThemeOptionSeeder;

    public function run(): void
    {
        $this->uploadFiles('general');
        $this->uploadFiles('icons');

        $this->createThemeOptions([
            'site_title' => 'Pixbyte-Store',
            'favicon' => $this->filePath('general/favicon.png'),
            'logo_light' => $this->filePath('general/logo-white.png'),
            'logo' => $this->filePath('general/logo.png'),
            'primary_font' => 'Jost',
            'primary_color' => '#d51243',
            'hotline' => '908. 408. 501. 89',
            'homepage_id' => 1,
            'blog_page_id' => 6,
            'cart_footer_description' => 'Free shipping for orders <b>under 10km</b>',
            'breadcrumb_background' => $this->filePath('banners/breadcrumb-01.jpg'),
            'login_background' => $this->filePath('banners/login-bg.jpg'),
            'register_background' => $this->filePath('banners/sign-bg.jpg'),
            '404_not_found_icon' => $this->filePath('icons/error.png'),
            'default_product_list_layout' => 'grid',
            'number_of_products_per_page' => 30,
            'footer_background_color' => '#F8F8F8',
            'footer_text_color' => '#000000',
            'footer_text_muted_color' => '#777777',
            'footer_border_color' => '#E0E0E0',
            'footer_bottom_background_color' => '#ededed',
            'preloader_version' => 'v2',
            'header_messages' => [
                [
                    [
                        'key' => 'message',
                        'value' => 'Welcome to our international shop! Enjoy free shipping on orders $100 & up',
                    ],
                    ['key' => 'link', 'value' => '/'],
                    ['key' => 'link_text', 'value' => 'Shop now'],
                ],
                [
                    ['key' => 'message', 'value' => 'Trendy 25 silver jewelry, save up 35% off today'],
                    ['key' => 'link', 'value' => '/'],
                    ['key' => 'link_text', 'value' => 'Shop now'],
                ],
            ],
            'social_links' => [
                [
                    ['key' => 'name', 'value' => 'Facebook'],
                    ['key' => 'icon', 'value' => 'fab fa-facebook'],
                    ['key' => 'url', 'value' => 'https://www.facebook.com'],
                ],
                [
                    ['key' => 'name', 'value' => 'Twitter'],
                    ['key' => 'icon', 'value' => 'fab fa-twitter'],
                    ['key' => 'url', 'value' => 'https://twitter.com'],
                ],
                [
                    ['key' => 'name', 'value' => 'Behance'],
                    ['key' => 'icon', 'value' => 'fab fa-behance'],
                    ['key' => 'url', 'value' => 'https://www.behance.net'],
                ],
                [
                    ['key' => 'name', 'value' => 'Youtube'],
                    ['key' => 'icon', 'value' => 'fab fa-youtube'],
                    ['key' => 'url', 'value' => 'https://www.youtube.com'],
                ],
                [
                    ['key' => 'name', 'value' => 'LinkedIn'],
                    ['key' => 'icon', 'value' => 'fab fa-linkedin'],
                    ['key' => 'url', 'value' => 'https://www.linkedin.com'],
                ],
            ],
        ]);
    }
}
