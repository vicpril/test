<template>
	<div>
		<div class="row">
			<div class="col-md">
				<div class="card">
					<div class="card-header">
						<h5 class="h5 mb-0">Название</h5>
					</div>
					<div class="card-body">
						<div class="form-group">
							<label>На русском</label>
							<input id="title_ru" class="form-control" v-model="article.title_ru">
						</div>
						<div class="form-group">
							<label>На английском</label>
							<input type="text" class="form-control" v-model="article.title_en">
						</div>
						<div class="form-group mb-0">
							<label>Ссылка на сайте:</label>
							<a :href="article.link" class="ml-1" target="_blank">{{ article.link }}</a>
						</div>
					</div>
				</div>
				
				<div class="card">
					<div class="card-header">
						<h5 class="h5 mb-0">Авторы</h5>
					</div>
					<div class="card-body">
							<v-select :options="users" 
												label="name_ru"
												v-model="article.users"
												:reduce="name_ru => name_ru.id"
												multiple ></v-select>
					</div>
					<div class="card-footer">
						{{ article.users }}
					</div>
				</div>

				<div class="card">
					<div class="card-header">
						<span class="h5 mb-0">Текст статьи</span>
						<div class="card-header-actions">
							<b-link class="card-header-action btn-minimize" @click="collapsed.text = !collapsed.text">
								<i :class="collapsed.text ? 'icon-arrow-down' : 'icon-arrow-up'"></i>
							</b-link>
						</div>
					</div>
					<b-collapse id="text" v-bind:visible="!collapsed.text">
						<div class="card-body">
							<div class="form-group">
								<label class="h6">На русском</label>
								<vue-ckeditor
									class="mt-2"
									name="article.text_ru"
									id="article.text_ru"
									ref="article.text_ru"
									v-model="article.text_ru"
								/>
							</div>

							<div class="form-group">
								<label class="h6">На английском</label>
								<vue-ckeditor
									class="mt-2"
									name="article.text_en"
									id="article.text_en"
									ref="article.text_en"
									v-model="article.text_en"
								/>
							</div>
						</div>
					</b-collapse>
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
import vSelect from "vue-select";

export default {
	components: {
		// 		draggable,
		VueCkeditor,
		vSelect
	},

	props: {
		old: {
			type: Object,
			default: () => ({})
		},
		id: {
			type: Number,
			default: 0
		},
  },

	data: function() {
		return {
			users: [],
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
				file_en: ""
			},
			collapsed: {
				text: true
			}
		};
	},

	computed: {},

	created() {
		// show errors
		if (!this.isEmptyObject(this.errors)) {
			this.$notify({
				group: "custom-template",
				text: this.errors.title[0],
				type: "alert-danger",
				duration: -1
			});
		}
		// fetching users
			this.fetchUsers();
		
		// fetching article
		if (!this.isEmptyObject(this.old)) {
			this.user = this.old;
		} else if (this.id !== 0) {
			this.fetchArticle(this.id);
		}
		
		
	},
	
	mounted() {
		
	},

	methods: {
		fetchUsers() {
			axios.get("/api/userslist").then(({ data }) => {
				this.users = data.data;
			})
		},
		fetchArticle(id) {
			axios.get("/api/articles/" + id).then(({ data }) => {
				this.article = data.data;
			}).then(() => {
				this.collapsed.text =	(this.article.text_ru !== "" || this.article.text_ru !== "")? false : true;
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
		}
	}
};
</script>

<style scope>
/* ADMIN right sidebar */
.right-sidebar {
	-ms-flex: 0 0 320px !important;
	flex: 0 0 320px;
}

#title_ru {
	font-size: 20px;
	height: calc(1.7em + 1px);
	padding: 3px 8px 3px 8px;
}
</style>
