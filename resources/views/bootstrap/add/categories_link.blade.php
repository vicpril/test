@if($categories)
	@foreach($categories as $key => $category)<a href="{{ route('categories.show', ['alias'=>$category->alias ]) }}" class="category-link">{{ $category->loc }}</a>@if($key < ($categories->count() - 1))<span> -> </span>@endif @endforeach
@endif

