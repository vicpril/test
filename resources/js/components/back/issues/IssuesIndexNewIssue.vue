<template>
  <!-- Model add new CATEGORY-->
		<b-modal
			id="addNewIssue"
			ref="addNewIssue"
			title="Создать новый выпуск"
			@ok="handleSaveIssue"
			ok-title="Создать"
			@shown="clearForm(newIssue)"
			cancel-title="Отмена"
		>
			<form method="POST"
            action="/admin/issues"
            @submit.stop.prevent="saveNewIssue"
            ref="addNewIssueForm">
        <input type="hidden" name="_token" :value="csrf">
				<div class="input-group mb-2">
          <div class="input-group-prepend">
            <span class="input-group-text">Год</span>
          </div>
          <input
            type="number"
            name="year"
            min="2009"
            class="form-control"
            v-model="newIssue.year"
          >
          <div class="input-group-append">
            <span class="input-group-text">Том {{ tom }}</span>
            <input type="number" name="tom" v-model="tom" hidden>
          </div>
        </div>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <span class="input-group-text">Номер</span>
          </div>
          <select name="no" class="form-control" v-model="newIssue.no">
            <option v-for="(no, index) in noArray" :key="index" :value="no">{{ no }}</option>
          </select>
        </div>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <span class="input-group-text">Полный номер</span>
          </div>
          <input
            type="number"
            name="full_no"
            min="1"
            class="form-control"
            v-model="newIssue.full_no"
          >
          <div class="input-group-append">
            <button type="button" class="btn btn-outline-info" @click.prevent="setFullNo">Авто</button>
          </div>
        </div>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <span class="input-group-text">Часть</span>
          </div>
          <select name="part" class="form-control" v-model="newIssue.part">
            <option v-for="(part, index) in partArray" :key="index" :value="part">{{ part }}</option>
          </select>
        </div>
			</form>
		</b-modal>
		<!-- 	end modal -->
</template>

<script>
export default {
  data() {
    return {
      newIssue: {
        year: new Date().getFullYear(),
        tom: "",
				no: "",
				full_no: "",
				part: "",
      },
			
      noArray: [1, 2, 3, 4, 5],
			
			partArray: [1, 2],
			
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    }
  },
	
  computed: {
    tom() {
			this.newIssue.tom = this.newIssue.year - 2009 + 1;
			return this.newIssue.tom;
		}
  },
  
  methods: {
    setFullNo() {
			this.newIssue.full_no =
				(this.newIssue.year - 2009 - 1) * 4 + 2 + this.newIssue.no;
		},
    
    clearForm() {
			this.newIssue =  {
        year: new Date().getFullYear(),
				no: "",
				full_no: "",
				part: "",
      }
		},
    
    handleSaveIssue(bvModalEvt) {
			// Prevent modal from closing
			bvModalEvt.preventDefault();
			if (!this.newIssue.year || 
      		!this.newIssue.full_no || 
          !this.newIssue.no ||
          !this.newIssue.part
         ) {
				alert("Пожалуйста, заполните поля.");
			} else {
        axios
          .post("/api/issues/exists", this.newIssue)
          .then(resp => {
              if(resp.data.status === "success") {
                 this.$refs.addNewIssueForm.submit();
              } else {
                this.$notify({
                  group: "custom-template",
                  type: "alert-danger",
                  text: resp.data.message,
                  duration: -1
                });
              }
           })
			}
		},
  },
    
  
}

</script>