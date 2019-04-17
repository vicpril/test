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
						<div class="d-flex">
							<v-select
								id="users"
								class="flex-grow-1"
								multiple
								:options="users"
								label="name"
								v-model="article.users"
							>
								<div slot="no-options">
									Авторов по запросу не найдено.
									<a
										href="/admin/users/create"
										target="_blank"
									>Добавить нового автора</a>
								</div>
							</v-select>
							<b-button
								v-b-tooltip.hover
								title="Обновить список авторов"
								type="button"
								variant="outline-secondary"
								class="btn-sm ml-2 my-auto"
								@click="fetchUsers"
							>
								<i class="fa fa-refresh"></i>
							</b-button>
						</div>
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
				<div class="card">
					<div class="card-header">
						<h5 class="h5 mb-0">Опубликовать</h5>
					</div>
					<div class="card-body">
						<div class="form-group">
							<span class="text-muted">
								<i class="fa fa-check mr-1"></i>Статус:
							</span>
							<strong v-if="article.status">Опублиповано</strong>
							<strong v-else>Черновик</strong>
							<label
								class="float-right mx-1 switch switch-label switch-3d switch-success form-check-label"
							>
								<input
									type="checkbox"
									class="switch-input"
									v-model="article.status"
									@click="article.status = !article.status"
								>
								<span data-checked="✓" data-unchecked="✕" class="switch-slider"></span>
							</label>
						</div>
						<div class="form-group mb-0" v-if="article.updated_at">
							<span class="text-muted">
								<i class="fa fa-calendar mr-1"></i>Дата:
							</span>
							<strong>{{ article.updated_at }}</strong>
						</div>
					</div>
					<div class="card-footer">
						<button
							class="btn btn-link text-danger float-left"
							v-show="article.id"
							@click.prevent="deleteArticle"
						>Удалить</button>
						<input
							class="btn btn-primary btn-round float-right"
							type="submit"
							:value="newArticle ? 'Опубликовать' : 'Обновить' "
						>
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						<h5 class="h5 mb-0">Выпуск</h5>
					</div>
					<div class="card-body">
						<div class="input-group mb-2">
							<div class="input-group-prepend">
								<span class="input-group-text">Год</span>
							</div>
							<input type="number" min="2009" class="form-control" v-model="article.year">
							<div class="input-group-append">
								<span class="input-group-text">Том {{ tom }}</span>
							</div>
						</div>

						<div class="input-group mb-2">
							<div class="input-group-prepend">
								<span class="input-group-text">Номер</span>
							</div>
							<select class="form-control" v-model="article.no">
								<option v-for="(no, index) in noArray" :key="index" :value="no">{{ no }}</option>
							</select>
						</div>
						<div class="input-group mb-2">
							<div class="input-group-prepend">
								<span class="input-group-text">Полный номер</span>
							</div>
							<input type="number" min="1" class="form-control" v-model="article.full_no">
							<div class="input-group-append">
								<button type="button" class="btn btn-outline-info" @click.prevent="setFullNo">Авто</button>
							</div>
						</div>
						<div class="input-group mb-2">
							<div class="input-group-prepend">
								<span class="input-group-text">Часть</span>
							</div>
							<select class="form-control" v-model="article.part">
								<option v-for="(part, index) in partArray" :key="index" :value="part">{{ part }}</option>
							</select>
						</div>

						<div class="d-flex">
							<label class="align-self-start">Запись относится к круглому столу</label>
							<label
								class="align-self-end mx-1 my-auto switch switch-label switch-3d switch-warning form-check-label"
							>
								<input
									type="checkbox"
									class="switch-input"
									v-model="article.stol"
									@click="article.stol = !article.stol"
								>
								<span data-checked="✓" data-unchecked="✕" class="switch-slider"></span>
							</label>
						</div>
					</div>
				</div>

				<div class="card">
					<div class="card-header">
						<h5 class="h5 mb-0">Метки</h5>
					</div>
					<div class="card-body">
						<div class="d-flex">
							<v-select
								id="tags"
								class="flex-grow-1"
								multiple
								:options="tags"
								label="title_ru"
								v-model="article.tags"
							>
								<div slot="no-options">Меток по запросу не найдено.</div>
							</v-select>
							<b-button
								v-b-tooltip.hover
								v-b-modal.addNewTag
								title="Создать новую метку"
								type="button"
								variant="outline-secondary"
								class="btn-sm ml-2 my-auto"
							>
								<i class="fa fa-plus"></i>
							</b-button>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Model add new TAG-->
		<b-modal
      id="addNewTag"
      ref="addNewTag"
      title="Создать новую метку"
      @ok="handleSaveTag"
			ok-title="Создать"
      @shown="clearTagForm"
			cancel-title="Отмена"
    >
      <form @submit.stop.prevent="saveNewTag">
        <div class="form-group">
							<label for="title_ru">Название на русском</label>
							<input
								type="text"
								class="form-control"
								v-model="newTag.title_ru"
							>
						</div>
						<div class="form-group">
							<label for="title_en">Название на английском</label>
							<input
								type="text"
								class="form-control"
								v-model="newTag.title_en"
							>
						</div>
      </form>
    </b-modal>
		
<!-- 		<div class="modal fade" id="addNewTag">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Создать новую метку</h5>
						<button class="close" data-dismiss="modal">×</button>
					</div>
					<div class="modal-body">
						
					</div>
					<div class="modal-footer">
						<button class="btn btn-primary" data-dismiss="modal" @click.prevent="saveNewTag">Создать</button>
					</div>
				</div>
			</div>
		</div> -->
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
		}
	},

	data: function() {
		return {
			users: [],
			tags: [],
			noArray: [1, 2, 3, 4, 5],
			partArray: [1, 2],
			article: {
				id: "",
				link: "",
				status: false,

				created_at: "",
				updated_at: "",

				year: new Date().getFullYear(),
				tom: "",
				no: 1,
				full_no: "",
				part: "",

				doi: "",
				udk: "",
				stol: false,

				users: [],
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
			newTag: {
				title_ru: "",
				title_en: ""
			},
			collapsed: {
				text: true
			}
		};
	},

	computed: {
		newArticle() {
			return this.article.id ? false : true;
		},
		tom() {
			this.article.tom = this.article.year - 2009 + 1;
			return this.article.tom;
		}
	},

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

		// fetching Tags
		this.fetchTags();

		// fetching article
		if (!this.isEmptyObject(this.old)) {
			this.user = this.old;
		} else if (this.id !== 0) {
			this.fetchArticle(this.id);
		}
	},

	mounted() {},

	watch: {},

	methods: {
		fetchUsers() {
			axios.get("/api/userslist").then(({ data }) => {
				this.users = data.data;
			});
		},
		fetchTags() {
			axios.get("/api/tags").then(({ data }) => {
				this.tags = data;
			});
		},
		fetchArticle(id) {
			axios
				.get("/api/articles/" + id)
				.then(({ data }) => {
					this.article = data.data;
				})
				.then(() => {
					this.collapsed.text =
						this.article.text_ru !== "" || this.article.text_ru !== ""
							? false
							: true;
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
		
		handleSaveTag(bvModalEvt) {
			// Prevent modal from closing
        bvModalEvt.preventDefault()
        if (!this.newTag.title_ru || !this.newTag.title_en) {
          alert('Пожалуйста, заполните поля.')
        } else {
          this.saveNewTag();
        }
		},

		saveNewTag() {
			axios
				.post("/api/tags", this.newTag)
				.then(resp => {
					if (resp.data.status === "success") {
						this.$notify({
							group: "custom-template",
							type: "alert-success",
							text: resp.data.message,
							duration: 5000
						});
						this.fetchTags();
						this.clearTagForm();
						this.article.tags.push(resp.data.object);
					}
				})
				.catch(error => {
					this.errors = error.response.data.errors;
					this.$notify({
						group: "custom-template",
						type: "alert-danger",
						text: error.response.data.errors.title[0],
						duration: -1
					});
				});
			
			this.$nextTick(() => {
          // Wrapped in $nextTick to ensure DOM is rendered before closing
          this.$refs.addNewTag.hide()
        })
		},

		clearTagForm() {
			this.newTag.title_ru = "";
			this.newTag.title_en = "";
		},

		setFullNo() {
			this.article.full_no =
				(this.article.year - 2009 - 1) * 4 + 2 + this.article.no;
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

/* v-select */
.vs__dropdown-toggle {
	/* border: none; */
	/* height: 100%; */
}

#users .vs__selected {
	background-color: var(--primary);
	color: white;
	font-weight: 600;
	/* font-size: 1rem; */
}
#tags .vs__selected {
	background-color: var(--warning);
	/* color: white; */
	/* font-weight: 600; */
	/* font-size: 1rem; */
}
</style>
