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
		<h2 class="mb-3">
			Test vue + ckeditor 4
		</h2>

    <editor-test></editor-test>
      
</div>
@endsection


@section('modals')
@endsection

@section('footer')
  @include(env('THEME_BACK').'.back.footer')
@endsection


@push('js')

		<script type="text/javascript" src="{{ asset('vendor/ckeditor/ckeditor.js') }}"></script>

@endpush
 
