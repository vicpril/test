<template>
	<div>
		<!-- MediaManager -->
		<div class="row mb-5">
			<!--     <div class="form-group"> -->
			<h2>Elfinder</h2>

			<div class="input-group">
				<div class="input-group-btn">
					<a href="#" class="popup_selector btn btn-primary" data-inputid="file">Select a file</a>
				</div>
				<!-- /btn-group -->
			</div>
		</div>

		<div class>
			<div class="card">
				<div class="card-body col-4">
					<file-picker :path="file"></file-picker>
					<!-- <b-img thumbnail fluid :src="fileLink" alt="Image 1"></b-img> -->
					<input class="form-control" type="text" id="file" name="file" v-model="file" hidden>
				</div>
				<div class="card-footer">
					<button class="popup_selector btn btn-primary" data-inputid="file">Select a file</button>
				</div>
			</div>
		</div>

		<!--  CKEditor -->
		<div class="row">
			<div class="form-group">
				<h2>Test vue + ckeditor 4</h2>

				<vue-ckeditor class="mt-2" name="description_ru" id="description_ru" ref="description_ru"/>
			</div>
		</div>
	</div>
</template>

<script>
import VueCkeditor from "./VueCkeditor.vue";

export default {
	components: {
		VueCkeditor
	},

	data() {
		return {
			file: "",
			files: []
		};
	},

	computed: {
		fileLink() {
			return this.$store.state.storage.path + this.file;
		}
	},

	methods: {
		//     fileLink(file) {
		// 			console.log(this.$store.state.storage.path);
		// 		}
	}
};
</script>
