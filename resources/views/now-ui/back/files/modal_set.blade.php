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
              <option></option>
              <!-- <optgroup label="Alaskan/Hawaiian Time Zone" data-select2-id="11">
                <option value="AK" data-select2-id="10">Alaska</option>
                <option value="HI" data-select2-id="12">Hawaii</option>
              </optgroup>
              <optgroup label="Pacific Time Zone" data-select2-id="13">
                <option value="CA" data-select2-id="14">California</option>
                <option value="NV" data-select2-id="15">Nevada</option>
                <option value="OR" data-select2-id="16">Oregon</option>
                <option value="WA" data-select2-id="17">Washington</option>
              </optgroup>
              <optgroup label="Mountain Time Zone" data-select2-id="18">
                <option value="AZ" data-select2-id="19">Arizona</option>
                <option value="CO" data-select2-id="20">Colorado</option>
                <option value="ID" data-select2-id="21">Idaho</option>
                <option value="MT" data-select2-id="22">Montana</option>
                <option value="NE" data-select2-id="23">Nebraska</option>
                <option value="NM" data-select2-id="24">New Mexico</option>
                <option value="ND" data-select2-id="25">North Dakota</option>
                <option value="UT" data-select2-id="26">Utah</option>
                <option value="WY" data-select2-id="27">Wyoming</option>
              </optgroup>
              <optgroup label="Central Time Zone" data-select2-id="28">
                <option value="AL" data-select2-id="29">Alabama</option>
                <option value="AR" data-select2-id="30">Arkansas</option>
                <option value="IL" data-select2-id="31">Illinois</option>
                <option value="IA" data-select2-id="32">Iowa</option>
                <option value="KS" data-select2-id="33">Kansas</option>
                <option value="KY" data-select2-id="34">Kentucky</option>
                <option value="LA" data-select2-id="35">Louisiana</option>
                <option value="MN" data-select2-id="36">Minnesota</option>
                <option value="MS" data-select2-id="37">Mississippi</option>
                <option value="MO" data-select2-id="38">Missouri</option>
                <option value="OK" data-select2-id="39">Oklahoma</option>
                <option value="SD" data-select2-id="40">South Dakota</option>
                <option value="TX" data-select2-id="41">Texas</option>
                <option value="TN" data-select2-id="42">Tennessee</option>
                <option value="WI" data-select2-id="43">Wisconsin</option>
              </optgroup>
              <optgroup label="Eastern Time Zone" data-select2-id="44">
                <option value="CT" data-select2-id="45">Connecticut</option>
                <option value="DE" data-select2-id="46">Delaware</option>
                <option value="FL" data-select2-id="47">Florida</option>
                <option value="GA" data-select2-id="48">Georgia</option>
                <option value="IN" data-select2-id="49">Indiana</option>
                <option value="ME" data-select2-id="50">Maine</option>
                <option value="MD" data-select2-id="51">Maryland</option>
                <option value="MA" data-select2-id="52">Massachusetts</option>
                <option value="MI" data-select2-id="53">Michigan</option>
                <option value="NH" data-select2-id="54">New Hampshire</option>
                <option value="NJ" data-select2-id="55">New Jersey</option>
                <option value="NY" data-select2-id="56">New York</option>
                <option value="NC" data-select2-id="57">North Carolina</option>
                <option value="OH" data-select2-id="58">Ohio</option>
                <option value="PA" data-select2-id="59">Pennsylvania</option>
                <option value="RI" data-select2-id="60">Rhode Island</option>
                <option value="SC" data-select2-id="61">South Carolina</option>
                <option value="VT" data-select2-id="62">Vermont</option>
                <option value="VA" data-select2-id="63">Virginia</option>
                <option value="WV" data-select2-id="64">West Virginia</option>
              </optgroup> -->
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
<style rel="stylesheet">

</style>
<script>
  $(document).ready(function(){

    $('#setFileSelect').select2({
        placeholder: 'Выберите файл',
        allowClear: true,
				width: "100%",
        containerCssClass: ':all:',
        ajax: {
          url: "{{ route('files.index') }}",
          data: {
            format: "select2"
          },
          dataType: 'json',
          processResults: function (data) {
            // Tranforms the top-level key of the response object from 'items' to 'results'
            return {
              results: data.data.results
            };
          },
          cache: true,
        }
       
        
    });

  })


</script>


@endsection