<div class="modal fade" id="setFileModal">
  <div class="modal-dialog">
    <div class="modal-content">
    
      <div class="modal-header">
          <h5 class="title my-0">Выбрать файл</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
      </div>

      <div class="modal-body">
          <div class="m-3 text-center">
            <label class="d-block">Загрузить новый файл на сайт</label>
            <button class="btn btn-simple btn-primary btn-round" data-toggle="modal" data-target="#uploadFileModal">Загрузить</button>
          </div>

          <hr>

          <div class="form-group col-10 mx-auto mt-1">
            <label class="d-block text-center" >Либо выберите из уже загруженных</label>
            <select class="" name="set-file-id" id="setFileSelect" placeholder="Выберите файл">
							<option value=""></option>
            </select>
          </div>

      </div>

      <div class="modal-footer">
        <button class="btn btn-primary float-right my-0" type="button" id="setFileButton" dismiss="modal">Выбрать</button>
      </div>

    </div>
  </div>
</div>

@section('modal_set_js')

<script type="text/javascript">
$( document ).ready(function() {
	
//select initiate		
    $('#setFileSelect').select2({
        placeholder: "Выберите файл",
        allowClear: true,
				width: "100%",
        containerCssClass: ':all:',
    });

//load select options on ahow Modal set
    $(document).on('show.bs.modal', '#setFileModal', function() {
      $.loadSelect();
    });

//action on submit file id
		$('#setFileButton').on('click', function(){
			$.doAfterSet();
		});

(function ($) {


// reload select sile
		$.loadSelect = function (id = null) {
      $.ajax({
        url: "{{ route('files.index') }}",
        data: { format: "select2" },
        dataType: "json",
      }).done(function(data) {
        $('#setFileSelect').empty();
				$('#setFileSelect').select2({
          placeholder: "Выберите файл",
          allowClear: true,
					useEmpty : true,
					emptyText : "",
          width: "100%",
          containerCssClass: ':all:',
          data: data.data.results,
          escapeMarkup: function(m) { return m; },
        })
					if (id) { $('#setFileSelect').val(id).trigger('change')}
					else { $('#setFileSelect').val('').trigger('change') }
      })
    }


		
		})( jQuery )
	
})
</script>


@endsection