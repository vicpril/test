<template>
	<div>
		<div class="row">
			<div class="col-md">
				<div class="card">
					<div class="card-header">
						<h5 class="h5 mb-0">Персональные данные</h5>
					</div>
					<div class="card-body">
	
					</div>
						
				</div>

			</div>

			<div class="col-md right-sidebar">
				<div class="card mb-1">
					<div class="card-header">
						<h5 class="h5 mb-0">Сохранить изменения</h5>
					</div>
					<div class="card-body">
						<input class="btn btn-primary btn-round btn-block" type="submit" value="Сохранить">
					</div>
				</div>

				<button
					class="btn btn-link text-danger mb-3"
					v-show="article.id"
					@click.prevent="deleteArticle"
				>Удалить статью</button>
				
			</div>
		</div>
	</div>
</template>

<script>
// import translat from "../translat";
// import draggable from "vuedraggable";
import VueCkeditor from "../VueCkeditor.vue";
// import jsrender from "jsrender";

export default {
	components: {
// 		draggable,
		VueCkeditor
	},

	props: {
		old: {
			type: Object,
			default: () => ({})
		},
		id: {
			type: Number,
			default: 0
		}
	},

	data: function() {
		return {
			article: {
				id: "",
				link: "",
				status: false,
				
				created_at: "",
				updated_at: "",
				
				year: "",
				tom: "",
				no: "",
				full_no: "",
				part: "",
				
				doi: "",
				udk: "",
				stol: false,
				
				authors: [],
				tags: [],
				categories: [],
				
				title_en: "",
				title_ru: "",
        text_ru: "",
        text_en: "",
        annotation_ru: "",
        annotation_en: "",
        keywords_ru: "",
        keywords_en: "",
        file_ru: "",
        file_en: "",
			},
		};
	},

	created() {},

	mounted() {
		if (!this.isEmptyObject(this.errors)) {
			this.$notify({
				group: "custom-template",
				text: this.errors.title[0],
				type: "alert-danger",
				duration: -1
			});
		}

		if (!this.isEmptyObject(this.old)) {
			this.user = this.old;
		} else if (this.id !== 0) {
			this.fetch(this.id);
		}
	},

	methods: {
		fetch(id) {
			axios.get("/api/articles/" + id).then(({ data }) => {
				this.article = data.data;
			});
		},

		deleteArticle() {
			if (confirm("Удалить статью ?")) {
				axios.delete("/admin/articles/" + this.article.id).then(resp => {
					if (resp.data.status == "success") {
						window.location = resp.data.redirect + "?articledeleted=1";
					} else {
						this.$notify({
							group: "custom-template",
							text: resp.data.message.title[0],
							type: "alert-danger",
							duration: -1
						});
					}
				});
			}
		},

		checkError(error) {
			if (this.errors.hasOwnProperty(error)) {
				return "is-invalid";
			}
		},

		
		
		

		

		
	}
};
</script>

<style scope>
	.right-sidebar {
    -ms-flex: 0 0 300px;
    flex: 0 0 300px;
	}	
</style>