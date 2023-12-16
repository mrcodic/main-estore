<div @class(['tab-pane fade', 'show active' => $categoriesTabPosition === 'after_menu']) id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
    <div class="mobile-menu-container">
        <div class="mobile-menu-bar">
            <nav class="mobile-menu-nav">
                {!! Menu::renderMenuLocation('main-menu', ['view' => 'menu']) !!}
            </nav>
        </div>
    </div>
    <div class='clearfix'></div>
</div>
