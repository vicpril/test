<template>
<div>
<!-- Filemanager -->
<div class="row mb-5">
<!--     <div class="form-group"> -->
      <h2>Test vue + filemanager</h2>
      
      <file-manager style="width: 100%"></file-manager>
    
<!--     </div> -->
  </div>
  
  <div class="row mb-5">
    
    <div class="input-group">
        <input type="text" id="image_label" class="form-control" name="image"
               aria-label="Image" aria-describedby="button-image">
        <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" id="button-image">Select</button>
        </div>
    </div>
    
  </div>



<!--  CKEditor -->
  <div class="row">
    <div class="form-group">
      <h2>Test vue + ckeditor 4</h2>

      <vue-ckeditor
        class="mt-2"
        name="description_ru"
        id="description_ru"
        ref="description_ru"
      />
    </div>
  </div>
  
  
</div>
</template>

<script>
  import VueCkeditor from "./VueCkeditor.vue";

  export default {
    components: { VueCkeditor },
  }
  
  document.addEventListener("DOMContentLoaded", function() {

      document.getElementById('button-image').addEventListener('click', (event) => {
        event.preventDefault();

        window.open('/file-manager/fm-button', 'fm', 'width=1400,height=800');
      });
    });

    // set file link
    function fmSetLink($url) {
      document.getElementById('image_label').value = $url;
    }

</script>