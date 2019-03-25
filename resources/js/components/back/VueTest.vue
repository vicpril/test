<template>
<div>
<!-- Filemanager -->
<div class="row">
    <div class="form-group">
      <h2>Test vue + filemanager</h2>
      
      <file-manager></file-manager>
    
    </div>
  </div>


<!--  CKEditor -->
  <div class="row">
    <div class="form-group">
      <h2>Test vue + ckeditor 4</h2>

<!--       <vue-ckeditor
        class="mt-2"
        name="description_ru"
        id="description_ru"
        ref="description_ru"
      /> -->
    </div>
  </div>
  
  
</div>
</template>

<script>
  import VueCkeditor from "./VueCkeditor.vue";

  export default {
    components: { VueCkeditor },
  }

</script>