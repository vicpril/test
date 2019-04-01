<template>
	<div>
		<!-- MediaManager -->
		<div class="row mb-5">
			<!--     <div class="form-group"> -->
			<h2>Mediamanager</h2>

			<!--     </div> -->
		</div>

		<div class="row mb-5">
			<div class="input-group">
				<input
					type="text"
					id="image_label"
					class="form-control"
					name="image"
					aria-label="Image"
					aria-describedby="button-image"
				>
				<div class="input-group-append">
					<button
						class="btn btn-outline-secondary"
						type="button"
						id="button-image"
						@click.prevent="openFinder"
					>Select</button>
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
	components: { VueCkeditor },

	methods: {
		openFinder() {}
	}
};
</script>
