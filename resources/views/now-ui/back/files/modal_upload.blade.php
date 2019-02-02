
<div class="modal fade" id="uploadFileModal">
  <div class="modal-dialog">
      <div class="modal-content">
          
        <form method="POST" action="{{ route('files.store') }}" id="fileUploadForm">
          <div class="modal-header">
            <h5 class="title my-0">Добавить файл</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body">

            <div class="row">
                @csrf
                <input type="text" class="form-control" name="id" hidden disable>
                <div class="col-md-12">
                  <div class="form-group mt-2">
                    <label for="title d-block">Файл</label>
                    <input type="file" class=" d-block" name="file" id="file" required>
                  </div>

                  <div class="form-group mt-2">
                    <label for="title">Название</label>
                    <input type="text" class="form-control" name="title" id="title" required>
                  </div>

                  <div class="form-group mt-2">
                    <label for="title">Тип файла</label>
                    <select type="select" class="form-control" name="type" id="type" required>
                      <option value='files'>Документы для статьи</option>
                      <option value='avatars'>Фотография пользователя</option>
                    </select>
                  </div>
                  
                </div>
              
            </div>

          </div>
          
          <div class="modal-footer">
            <button class="btn btn-primary float-right my-0" type="submit" id="saveFile" dismiss="modal">Добавить</button>
          </div>
        
        </form>
      </div>
    </div>
  </div>

@section('modal_upload_js')
<!-- Uploaded file modal scripts-->
<script type="text/javascript">
      
      // Event on Submit Form - save file
      //
      // !!! function $.doAfterUploaded(data) - required !!!
      //
      $('#fileUploadForm').submit(function(event) {
          event.preventDefault(); // avoid to execute the actual submit of the form.
          var form = $(this);
          $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
              },
            method: form.attr('method'),
            url: form.attr('action'),
            data: new FormData(this),
              contentType: false,
              cache: false,
              processData:false,
            
            dataType: 'json',
            success: function(data)
            {
              $('#uploadFileModal').modal('hide');
              form.cleanform();
              if (data.exception == undefined) {
                var color =  "success";
                var icon = "now-ui-icons ui-1_check";
                  $.doAfterUploaded(data);
              } else {
                var color = "warning";
                var icon = "now-ui-icons ui-1_bell-53";
              }
              nowuiDashboard.showNotification({
                color: color,
                message: data.message,
                icon: icon,
                from: 'top',
                align: 'right'
              });
            },
            error: function(data) {
              nowuiDashboard.showNotification({
                color: "danger",
                message: data.message,
                icon: "now-ui-icons ui-2_settings-90",
                from: 'top',
                align: 'right'
              });
            }
          });
        });

// Set up file's title on change
      $('#file').on('change', function(e){
        var filepath = $(this).val();
        {{--//var filename = filepath.replace(/^.*?([^\\\/]*)$/, '$1'); --}}
        var filename = filepath.split(/[\\/]/g).pop().split('.')[0];
        $('#title').val(filename); 
      });


// utility function
        (function( $ ) {

      //clean form upload
          $.fn.cleanform = function() {
            $(this).find("input[type=text], input[type=file]").val("");
            $(this).find("select").val("files");
          };

        })( jQuery );

</script>
@endsection