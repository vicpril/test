@foreach($items as $item)
	<li class="nav-item" {{ (URL::current() == $item->url()) ? "class=active" : '' }} >
	
		<a class="nav-link" href="{{ $item->url() }}">{{ $item->title }}</a>
		@if($item->hasChildren())
			
			<ul class="sub-menu">
				@include(env('THEME').'.customMenuItems',['items'=>$item->children()])
			</ul>
			
		@endif
	
	</li>
@endforeach

