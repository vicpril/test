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
            <select class="" name="set-file-id" id="setFileSelect">
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
// $(document).ready(function () {

    $('#setFileSelect').select2({
        placeholder: "Выберите файл",
        allowClear: true,
				width: "100%",
        containerCssClass: ':all:',
    });

    $(document).on('show.bs.modal', '#setFileModal', function() {
      $.loadSelect();
    });


  (function ($) {

    function format(file) {
        return "<span class='text-muted'>"+file.year+"/"+file.month+"/<span>" + file.title;
    }
    $.loadSelect = function () {
      $.ajax({
        url: "{{ route('files.index') }}",
        data: { format: "select2" },
        dataType: "json",
      }).done(function(data) {
        $('#setFileSelect').select2({
          placeholder: "Выберите файл",
          allowClear: true,
          width: "100%",
          containerCssClass: ':all:',
          data: data.data.results,
          templateResult: format,
          templateSelection: format,
          // escapeMarkup: function(m) { return m; }
        }).val(data.data.selected).trigger('change');
      })
    }
  })( jQuery )


</script>


@endsection