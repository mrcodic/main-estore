@php
    $groupedCategories = $categories->groupBy('parent_id');

    $currentCategories = $groupedCategories->get(0);
    $limit = theme_option('ecommerce_header_categories_limit', 10);
@endphp

@if($currentCategories)
    @php
        $hasMoreCategories = $currentCategories->count() > $limit + 1;
    @endphp

    <div class="cat-menu__category p-relative">
        <a class="tp-cat-toggle">
            <i class="fal fa-bars"></i> {{ __('Categories') }}
        </a>
        <div class="category-menu category-menu-off">
            <ul class="cat-menu__list">
                @foreach ($currentCategories as $category)
                    @php
                        $hasChildren = $groupedCategories->has($category->id);
                    @endphp
                    <li @class(['menu-item-has-children' => $hasChildren, 'hidden-to-toggle' => $hasMoreCategories ? $loop->iteration > $limit : $loop->iteration > $limit + 1])>
                        <a href="{{ route('public.single', $category->url) }}">
                            @if ($categoryImage = $category->icon_image)
                                <img src="{{ RvMedia::getImageUrl($categoryImage) }}" alt="{{ $category->name }}" width="18" height="18">
                            @elseif ($categoryIcon = $category->icon)
                                <i class="{{ $categoryIcon }}"></i>
                            @endif
                            {{ $category->name }}
                        </a>
                        @if($hasChildren && $currentCategories = $groupedCategories->get($category->id))
                            <ul class="submenu">
                                @foreach($currentCategories as $childCategory)
                                    <li><a href="{{ route('public.single', $childCategory->url ) }}">{{ $childCategory->name }}</a></li>
                                @endforeach
                            </ul>
                        @endif
                    </li>
                @endforeach
            </ul>
            @if($hasMoreCategories)
                <div class="more-categories">
                    {{ __('More Categories') }}
                </div>
            @endif
        </div>
    </div>
@endif
