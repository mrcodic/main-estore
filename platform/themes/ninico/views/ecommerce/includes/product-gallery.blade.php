<div class="tpproduct-details__nab pr-30 mb-40 product-gallery">
    <div class="product-gallery__wrapper">
        @foreach ($productImages as $img)
            <a href="{{ RvMedia::getImageUrl($img) }}">
                <img src="{{ RvMedia::getImageUrl($img) }}" alt="{{ $product->name }}" >
            </a>
        @endforeach
    </div>
    <div class="product-thumbnails">
        @foreach ($productImages as $img)
            <img src="{{ RvMedia::getImageUrl($img, 'thumb') }}" alt="{{ $product->name }}" >
        @endforeach
    </div>
</div>
