@foreach($items as $item)
	<li class="p-2 p-md-0" {{ (URL::current() == $item->url()) ? "class=active" : '' }} >
	
		<a class="m-0 p-2 text-dark" href="{{ $item->url() }}">{{ $item->title }}</a>
		@if($item->hasChildren())
			
			<ul class="sub-menu">
				@include(env('THEME').'.customMenuItems',['items'=>$item->children()])
			</ul>
			
		@endif
	
	</li>
@endforeach

