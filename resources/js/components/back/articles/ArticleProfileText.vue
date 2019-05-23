<template>
	<div class="card">
		<div class="card-header">
			<span class="h5 mb-0">Текст статьи</span>
			<div v-if="collapsing" class="card-header-actions">
				<b-link class="card-header-action btn-minimize" @click="$emit('update:collapsed', !collapsed);">
					<i :class="collapsed ? 'icon-arrow-down' : 'icon-arrow-up'"></i>
				</b-link>
			</div>
		</div>
		<b-collapse id="text" v-bind:visible="!collapsed">
			<div class="card-body">
				<div class="form-group">
					<label class="h6">На русском</label>
					<vue-ckeditor
						class="mt-2"
						name="text_ru"
						id="text_ru"
						:value="text_ru"
						@input="$emit('update:text_ru', $event)"
					/>
				</div>

				<div class="form-group">
					<label class="h6">На английском</label>
					<vue-ckeditor
						class="mt-2"
						name="text_en"
						id="text_en"
						:value="text_en"
						@input="$emit('update:text_en', $event)"
					/>
				</div>
			</div>
		</b-collapse>
	</div>
</template>

<script>
import VueCkeditor from "../VueCkeditor.vue";
export default {
	components: {
		VueCkeditor
	},
	props: {
		text_ru: {
			type: String,
			default: ""
		},
		text_en: {
			type: String,
			default: ""
		},
		collapsing: {
			type: Boolean,
			default: false
		},
		collapsed: {
			type: Boolean,
			default: false
		}
	}
};
</script>