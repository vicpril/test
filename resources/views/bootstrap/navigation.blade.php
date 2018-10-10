@if($menu)
	<nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars10" aria-controls="navbars10" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse justify-content-md-center" id="navbars10">
			<ul class="navbar-nav">

				@include(env('THEME').'.add.customMenuItems',['items'=>$menu->roots()])


			</ul>
		</div>
	</nav>

@endif