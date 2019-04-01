@extends(env('THEME_BACK').'.back.layout')

@push('css')
@endpush


@section('sidebar')
      {!! $sidebar !!}
@endsection


@section('navbar')
      {!! $navbar !!}
@endsection

@section('content')
<div class="content">

<div class="my-4 py-4"></div>
<div class="container is-fluid">
            <div class="columns">
                {{-- media manager --}}
                <div class="column">
                    123 @include('MediaManager::_manager')
                </div>
            </div>
        </div>

		<!-- <vue-test></vue-test> -->
		
		
	</div>
      
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
@endpush

@push('js')
@endpush
 
