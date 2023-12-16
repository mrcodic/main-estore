<div @class(['tab-pane fade', 'show active' => $categoriesTabPosition === 'before_menu']) id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
    <div class="mobile-menu-container">
        <div class="mobile-menu-bar">
            <nav class="mobile-menu-nav tpsidebar-categories">
                <ul>
                    {!! Theme::partial('categories-dropdown-mobile', compact('categories')) !!}
                </ul>
            </nav>
        </div>
    </div>
</div>
