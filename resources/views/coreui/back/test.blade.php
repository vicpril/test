@extends(env('THEME_BACK').'.back.layout')

@push('css')
<!-- MediaManager -->
<!-- <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css"> -->
<link rel="stylesheet" href="{{ asset('assets/vendor/MediaManager/style.css') }}"/>
@endpush


@section('sidebar')
      {!! $sidebar !!}
@endsection


@section('navbar')
      {!! $navbar !!}
@endsection

@section('content')
<div class="content">
	<example-comp inline-template>
			<div>
					{{-- manager --}}
					<div v-if="inputName">@include('MediaManager::extras.modal')</div>

					{{-- items selector --}}
					<media-modal item="cover" :name="inputName"></media-modal>
					<media-modal item="gallery" :name="inputName" type="folder"></media-modal>
					<media-modal item="links" :name="inputName" :multi="true"></media-modal>

					{{-- for editor --}}
					@include('MediaManager::extras.editor')

					{{-- form --}}
					<form action="..." method="...">
							{{-- cover --}}
							<section>
									<img :src="cover">
									<input type="hidden" name="cover" :value="cover"/>
									<button @click.prevent="toggleModalFor('cover')">select cover</button>
							</section>

							{{-- gallery --}}
							<section>
									<input type="text" name="gallery" :value="gallery"/>
									<button @click.prevent="toggleModalFor('gallery')">select gallery folder</button>
							</section>

							{{-- links --}}
							<section>
									<input v-for="item in links"
											:key="item"
											:value="item"
											type="text" 
											name="links[]"/>

									<button @click.prevent="toggleModalFor('links')">select gallery links</button>
							</section>

							
					</form>
			</div
	</example-comp>
</div>
@endsection


@section('modals')
@endsection

@section('footer')
  @include(env('THEME_BACK').'.back.footer')
@endsection

@push('lib')
		<!-- CKEditor -->
		<script type="text/javascript" src="{{ asset('vendor/ckeditor/ckeditor.js') }}"></script>
		<!-- MediaManager -->
    <script src="//cdnjs.cloudflare.com/ajax/libs/camanjs/4.1.2/caman.full.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jsmediatags/3.9.0/jsmediatags.min.js"></script>
@endpush

@push('js')
@endpush
 
