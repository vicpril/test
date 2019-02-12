@extends(env('THEME_BACK').'.back.layout')

@isset($datatables){!! $datatables !!}@endisset

@section('css')
<!--  Select2     -->
<link rel="stylesheet" href="{{ asset('vendor/select2/css/select2.css') }}">

<link rel="stylesheet" href="{{ asset('vendor/TableEditor/TableTools.min.css') }}">
    
@endsection


@section('sidebar')
      {!! $sidebar !!}
@endsection


@section('navbar')
      {!! $navbar !!}
@endsection


@section('content')
<div class="content">
    <form method="POST" action="{{ route('users.store') }}">
      @csrf
			<user-profile @isset($id):id="{{ $id }}"@endisset></user-profile>
      
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
    {{-- <!-- DataTables JavaScript -->
    <!-- <script type="text/javascript" src="{{ asset('js/datatables.js') }}" ></script> --> --}}
    <script type="text/javascript" src="{{ asset('vendor/TableEditor/TableTools.min.js') }}" ></script>
    <script type="text/javascript" src="{{ asset('vendor/TableEditor/TableEditor.js') }}" ></script>
    
    <!-- Set script -->
    @yield('modal_set_js')

    <!-- Upload script -->
    @yield('modal_upload_js')

		@include(env('THEME_BACK').'.back.files.autocomplite')


<script type="text/javascript">
	
$( document ).ready(function() {
	// initiate jobs tableEditor
	var jobsTable = $('#jobsTable').DataTable({
		language: {
					"url": "/dataTables.russian.lang"
		},
		columnDefs: [
            { orderable: true, class: 'reorder', targets: '0' },
            { orderable: false, targets: '_all' },
        ],
		rowReorder: true,
		paging:   false,
		info:     false,
    searching: false,
    lengthChange: false,
    select: {
            style: 'single',
						blurable: true,
        },
    dom: 'Bfrtip',
    buttons: [
        {
            text: 'Добавить',
            className: 'btn btn-simple btn-round btn-info',
            action: function ( e, dt, node, config ) {
                    $('#jobModal').find('.title').text('Добавить новое место работы')
										$('#jobModal').find('input').val('');
										$('#jobModal').find('textarea').val('');
                },
						attr: {
							"data-toggle": "modal",
							"data-target": "#jobModal",
						}
        },
        {
            text: 'Редактировать',
            className: 'btn btn-simple btn-round btn-info',
            action: function ( e, dt, node, config ) {
                var data = dt.row({selected:true}).data();
								console.log(data);
								$('#jobModal').find('.title').text('Редактировать место работы')
								$('#jobModal').find('input').val(data[0]);
								$('#jobModal').find('#job_ru').val(data[1]);
								$('#jobModal').find('#job_en').val(data[2]);
								$('#jobModal').modal('show');
            },
						enabled: false,
        },
        {
            text: 'Удалить',
            className: 'btn btn-simple btn-round btn-info',
            action: function ( e, dt, node, config ) {
								if(confirm('Удалить выбранное место работы?' )) {
									dt.row( {selected: true} ).remove().draw();
									$.each($('#jobsTable tr td:first-child'),function(index,val){
										$(this).html(index+1)
									});

									dt.rows().invalidate();
								}
						},
						enabled: false,
        }
    ],
  });
	
	jobsTable.on( 'select deselect', function () {
			var selectedRows = jobsTable.rows( { selected: true } ).count();
			jobsTable.button( 1 ).enable( selectedRows === 1 );
			jobsTable.button( 2 ).enable( selectedRows === 1 );
	} );
	
	
	
	// error alert
	@if($errors->all())
	$.notifyDefaults({
			type: "danger",
			allow_dismiss: true,
			delay: 8000
	});
	$.notify({
			title: "{{ $errors->first('title') }}",
			message: "",
		});
	@endif
	
	$('#saveJob').on('click', function(e){
		e.preventDefault();
		var modal = $('#jobModal');
		var data = [
				modal.find('input').val(),
				modal.find('#job_ru').val(),
				modal.find('#job_en').val(),
			];
		modal.modal('hide');
		if( data[0] == 0 ) {
			jobsTable.row.add( [
            jobsTable.rows().count() + 1,
            data[1],
            data[2],
        ] ).draw();
		}else{
			
			var row = $(jobsTable).find('tr td:first-child').filter(function() {
					return $(this).text() == Number(data[0]) - 1;
			}).parent('tr');
			$(row).remove().draw();	
// 			$(row).children('td')[2].innerHTML = data[2];	
			
			jobsTable.row.add( [
            data[0],
            data[1],
            data[2],
        ] ).draw();
			
			
			jobsTable.rows().invalidate().draw();
				console.log(data);
		}
	});
  
  $('#destroyImage').on('click', function(e){
    e.preventDefault();
    $.destroyImage();
  });
	
	$('#autocompliteBtn').on('click', function(e){
		e.preventDefault();
		$.autocomplite_fields($('input[name="full_name"]').val());
	});
  

  
(function( $ ) {

//after uploaded function
    $.doAfterUploaded = function (data) {
			$.loadSelect(data.id);
    };
    
    // Reload select and set up uploaded document
		$.doAfterSet = function (id = '') {
			$('#setFileModal').modal('hide');
			if(id) {
				$('input[name="avatar"]').val(id);
				$.setupImage(id);
			}else{
				$('input[name="avatar"]').val(-1);
			}
		};
    
    $.setupImage = function(id) {
      $.ajax({
        url: "{{ url('/admin/files') }}/" + id,
        dataType: "json",
        success: function(response) {
					$('#image img').attr("src", "{{ asset('storage') }}/"+response.data.url);
					$('#image').removeClass('d-none');
					$('#downloadImage').addClass('d-none');
        }
      })
    };
    
    $.destroyImage = function() {
      $('input[name="avatar"]').val('');
      $('#image img').attr("src", "");
      $('#image').addClass('d-none');
      $('#downloadImage').removeClass('d-none');
    }


  })( jQuery )
  
	// set avatar source
		if ( $('input[name="avatar"]').val() > 0 ) {
			$.setupImage( $('input[name="avatar"]').val() );
		}

})

</script>



@endsection
