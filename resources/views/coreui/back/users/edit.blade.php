@extends(env('THEME_BACK').'.back.layout')

@section('css')
<!--  Select2     -->
<link rel="stylesheet" href="{{ asset('vendor/select2/css/select2.css') }}">

@endsection


@section('sidebar')
      {!! $sidebar !!}
@endsection


@section('navbar')
      {!! $navbar !!}
@endsection


@section('content')
<div class="content">
		<h2 class="mb-3">@isset($id)
			Редактировать автора
			@elseНовый автор
			@endisset
		</h2>
		<div class="mb-3">
		<textarea class="mb-3" name="editor1" id="editor1" rows="10" cols="80">
<p>xyz</p>
<p>n (untested); hope this helps.</p>
<blockquote>
<p style="margin-left:80px; text-align:justify">In the&nbsp;<a href="https://ckeditor.com/cke4/addon/pastefromword" rel="nofollow noreferrer">Paste from Word plugin&#39;s page</a>, co</p>
<hr />
<h5 style="margin-left:80px; text-align:justify">mpatibility with CKEditor 4.6 is not specified (it is guaranteed just with 4.9+).</h5>
</blockquote>
<h5 style="color:#aaaaaa; font-style:italic">n (untested); hope this helps.</h5>
<h5 style="color:#aaaaaa; font-style:italic">CKFinder.widget( &#39;ckfinder-widget&#39;, { wi<span style="color:#000000; font-family:Consolas,Menlo,Monaco,&quot;Lucida Console&quot;,&quot;Liberation Mono&quot;,&quot;DejaVu Sans Mono&quot;,&quot;Bitstream Vera Sans Mono&quot;,&quot;Courier New&quot;,monospace,serif; font-size:11.888px">dth</span><span style="color:#666600; font-family:Consolas,Menlo,Monaco,&quot;Lucida Console&quot;,&quot;Liberation Mono&quot;,&quot;DejaVu Sans Mono&quot;,&quot;Bitstream Vera Sans Mono&quot;,&quot;Courier New&quot;,monospace,serif; font-size:11.888px">:</span><span style="color:#000000; font-family:Consolas,Menlo,Monaco,&quot;Lucida Console&quot;,&quot;Liberation Mono&quot;,&quot;DejaVu Sans Mono&quot;,&quot;Bitstream Vera Sans Mono&quot;,&quot;Courier New&quot;,monospace,serif; font-size:11.888px"> </span><span style="color:#008800; font-family:Consolas,Menlo,Monaco,&quot;Lucida Console&quot;,&quot;Liberation Mono&quot;,&quot;DejaVu Sans Mono&quot;,&quot;Bitstream Vera Sans Mono&quot;,&quot;Courier New&quot;,monospace,serif; font-size:11.888px">&#39;100%&#39;</span><span style="color:#666600; font-family:Consolas,Menlo,Monaco,&quot;Lucida Console&quot;,&quot;Liberation Mono&quot;,&quot;DejaVu Sans Mono&quot;,&quot;Bitstream Vera Sans Mono&quot;,&quot;Courier New&quot;,monospace,serif; font-size:11.888px">,</span><span style="color:#000000; font-family:Consolas,Menlo,Monaco,&quot;Lucida Console&quot;,&quot;Liberation Mono&quot;,&quot;DejaVu Sans Mono&quot;,&quot;Bitstream Vera Sans Mono&quot;,&quot;Courier New&quot;,monospace,serif; font-size:11.888px"> height</span><span style="color:#666600; font-family:Consolas,Menlo,Monaco,&quot;Lucida Console&quot;,&quot;Liberation Mono&quot;,&quot;DejaVu Sans Mono&quot;,&quot;Bitstream Vera Sans Mono&quot;,&quot;Courier New&quot;,monospace,serif; font-size:11.888px">:</span><span style="color:#000000; font-family:Consolas,Menlo,Monaco,&quot;Lucida Console&quot;,&quot;Liberation Mono&quot;,&quot;DejaVu Sans Mono&quot;,&quot;Bitstream Vera Sans Mono&quot;,&quot;Courier New&quot;,monospace,serif; font-size:11.888px"> </span><span style="color:#006666; font-family:Consolas,Menlo,Monaco,&quot;Lucida Console&quot;,&quot;Liberation Mono&quot;,&quot;DejaVu Sans Mono&quot;,&quot;Bitstream Vera Sans Mono&quot;,&quot;Courier New&quot;,monospace,serif; font-size:11.888px">500</span><span style="color:#666600; font-family:Consolas,Menlo,Monaco,&quot;Lucida Console&quot;,&quot;Liberation Mono&quot;,&quot;DejaVu Sans Mono&quot;,&quot;Bitstream Vera Sans Mono&quot;,&quot;Courier New&quot;,monospace,serif; font-size:11.888px">,</span><span style="color:#000000; font-family:Consolas,Menlo,Monaco,&quot;Lucida Console&quot;,&quot;Liberation Mono&quot;,&quot;DejaVu Sans Mono&quot;,&quot;Bitstream Vera Sans Mono&quot;,&quot;Courier New&quot;,monospace,serif; font-size:11.888px"> plugins</span><span style="color:#666600; font-family:Consolas,Menlo,Monaco,&quot;Lucida Console&quot;,&quot;Liberation Mono&quot;,&quot;DejaVu Sans Mono&quot;,&quot;Bitstream Vera Sans Mono&quot;,&quot;Courier New&quot;,monospace,serif; font-size:11.888px">:</span><span style="color:#000000; font-family:Consolas,Menlo,Monaco,&quot;Lucida Console&quot;,&quot;Liberation Mono&quot;,&quot;DejaVu Sans Mono&quot;,&quot;Bitstream Vera Sans Mono&quot;,&quot;Courier New&quot;,monospace,serif; font-size:11.888px"> </span><span style="color:#666600; font-family:Consolas,Menlo,Monaco,&quot;Lucida Console&quot;,&quot;Liberation Mono&quot;,&quot;DejaVu Sans Mono&quot;,&quot;Bitstream Vera Sans Mono&quot;,&quot;Courier New&quot;,monospace,serif; font-size:11.888px">[</span><span style="color:#000000; font-family:Consolas,Menlo,Monaco,&quot;Lucida Console&quot;,&quot;Liberation Mono&quot;,&quot;DejaVu Sans Mono&quot;,&quot;Bitstream Vera Sans Mono&quot;,&quot;Courier New&quot;,monospace,serif; font-size:11.888px"> </span><span style="color:#880000; font-family:Consolas,Menlo,Monaco,&quot;Lucida Console&quot;,&quot;Liberation Mono&quot;,&quot;DejaVu Sans Mono&quot;,&quot;Bitstream Vera Sans Mono&quot;,&quot;Courier New&quot;,monospace,serif; font-size:11.888px">// Th<span style="font-size:11px">e path must be relative to the location of the ckfinder.js file.</span></span><span style="font-size:11px"><span style="color:#000000; font-family:Consolas,Menlo,Monaco,&quot;Lucida Console&quot;,&quot;Liberation Mono&quot;,&quot;DejaVu Sans Mono&quot;,&quot;Bitstream Vera Sans Mono&quot;,&quot;Courier New&quot;,monospace,serif"> </span><span style="color:#008800; font-family:Consolas,Menlo,Monaco,&quot;Lucida Console&quot;,&quot;Liberation Mono&quot;,&quot;DejaVu Sans Mono&quot;,&quot;Bitstream Vera Sans Mono&quot;,&quot;Courier New&quot;,monospace,serif">&#39;../samples/plugins/StatusBarInfo/StatusBarInfo&#39;</span><span style="color:#000000; font-family:Consolas,Menlo,Monaco,&quot;Lucida Console&quot;,&quot;Liberation Mono&quot;,&quot;DejaVu Sans Mono&quot;,&quot;Bitstream Vera Sans Mono&quot;,&quot;Courier New&quot;,monospace,serif"> </span><span style="color:#666600; font-family:Consolas,Menlo,Monaco,&quot;Lucida Console&quot;,&quot;Liberation Mono&quot;,&quot;DejaVu Sans Mono&quot;,&quot;Bitstream Vera Sans Mono&quot;,&quot;Courier New&quot;,monospace,serif">]</span> </span></h5>
<p style="margin-left:0px; margin-right:0px; text-align:left"><span style="font-size:11px">In the&nbsp;<a href="https://ckeditor.com/cke4/addon/pastefromword" rel="nofollow noreferrer" style="margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; box-sizing: inherit; color: rgb(0, 89, 153); text-decoration: underline; cursor: pointer;">Paste from Word plugin&#39;s p<span style="font-family:Comic Sans MS,cursive">age</span></a><span style="font-family:Comic Sans MS,cursive">, compatibility with CKEdito</span>r 4.6 is not specified (it is gua</span>ranteed just with 4.9+).</p>
<p>&nbsp;</p>

            </textarea>
		</div>

    <form method="POST" action="{{ route('users.store') }}">
      @csrf
			<user-profile @isset($id):id="{{ $id }}"@endisset :old="{{ json_encode(Session::getOldInput()) }}"></user-profile>
      
    </form>
</div>
@endsection


@section('modals')
    <!-- SET FILE MODAL -->
    @include(env('THEME_BACK').'.back.files.modal_set')
    <!-- END SET FILE MODAL -->

    <!-- UPLOAD FILE MODAL -->
    @include(env('THEME_BACK').'.back.files.modal_upload')
    <!-- END UPLOAD FILE MODAL -->
		
		<!-- JOB MODAL -->
		<div class="modal fade" id="jobModal">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="title my-0">Добавить новое место работы</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
					</div>
					
					<div class="modal-body">
						<div class="form-group">
							<label for="row">Строка</label>
							<input type="text" class="form-control" id="jobRow">
						</div>
						<div class="form-group">
							<label for="job_ru">На русском</label>
							<textarea id="job_ru" cols="30" rows="10" class="form-control"></textarea>
						</div>
						<div class="form-group">
							<label for="job_en">На английском</label>
							<textarea id="job_en" cols="30" rows="10" class="form-control"></textarea>
						</div>
					</div>
					
					<div class="modal-footer">
						<button class="btn btn-primary float-right my-0" type="button" id="saveJob" dismiss="modal">Добавить</button>
					</div>
					
				</div>
			</div>
		</div>
		<!-- END JOB MODAL -->

@endsection


@section('footer')
  {!! $footer !!}
@endsection


@section('js')
    <!-- Select 2 -->
    <script type="text/javascript" src="{{ asset('vendor/select2/js/select2.full.min.js') }}"></script>

		<!-- CKEditor -->
		<script type="text/javascript" src="{{ asset('vendor/ckeditor/ckeditor.js') }}"></script>
		<script src="{{ URL::to('ckeditor/ckeditor.js') }}"></script>

		<script>
                // Replace the <textarea id="editor1"> with a CKEditor
								// instance, using default configuration.
								CKEDITOR.basePath = '/ckeditor/';
								CKEDITOR.replace( 'editor1' );
								CKEDITOR.cleanWord = function( data, editor )
								{
									alert("clean word called");
									return 'xyz';
								}
            </script>


    <!-- Set script -->
    @yield('modal_set_js')

    <!-- Upload script -->
    @yield('modal_upload_js')

		{{-- @include(env('THEME_BACK').'.back.users.autocomplite') --}}

@endsection
