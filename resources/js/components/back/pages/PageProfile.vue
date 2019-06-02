<template>
	<div>
		<div class="form-group" v-if="!newPage">
			<label>Ссылка на сайте:</label>
			<a :href="page.link" class="ml-1" target="_blank">{{ page.link }}</a>
		</div>
		<div class="row">
			<div class="col-md">
				<!-- RU PART -->
				<div class="card">
					<div class="card-header">
						<h4 class="d-inline-block mr-1 my-auto">Для русской части</h4>
						<!-- <div class="form-group"> -->
						<div class="float-right">
							<label class="mr-1 my-auto">Включить:</label>
							<label
								class="float-right mx-1 switch switch-label switch-3d switch-success form-check-label"
							>
								<input
									type="checkbox"
									class="switch-input"
									v-model="page.on_ru"
									@click="page.on_ru = !page.on_ru"
								>
								<span data-checked="✓" data-unchecked="✕" class="switch-slider"></span>
							</label>
							<input type="text" name="on_ru" :value="page.on_ru" hidden>
						</div>
					</div>
					<!-- </div> -->
					<div class="card-body">
						<div class="form-group">
							<label class="h6">Название</label>
							<input
								id="title_ru"
								name="title_ru"
								class="form-control"
								v-model="page.title_ru"
								:class="{'is-invalid' : errors.hasOwnProperty('title_ru')}"
								:readOnly="!page.on_ru"
							>
							<div class="invalid-feedback" v-for="(error, key) in errors['title_ru']" :key="key">{{error}}</div>
						</div>

						<div class="form-group">
							<label class="h6">Содержание</label>
							<vue-ckeditor
								class="mt-2"
								name="content_ru"
								id="content_ru"
								v-model="page.content_ru"
								:readOnlyMode="!page.on_ru"
							/>
						</div>
					</div>
				</div>
				<!-- END RU PART -->

				<!-- EN PART -->
				<div class="card">
					<div class="card-header">
						<h4 class="d-inline-block mr-1 my-auto">Для английкой части</h4>
						<!-- <div class="form-group"> -->
						<div class="float-right">
							<label class="mr-1 my-auto">Включить:</label>
							<label
								class="float-right mx-1 switch switch-label switch-3d switch-success form-check-label"
							>
								<input
									type="checkbox"
									class="switch-input"
									v-model="page.on_en"
									@click="page.on_en = !page.on_en"
								>
								<span data-checked="✓" data-unchecked="✕" class="switch-slider"></span>
							</label>
							<input type="text" name="on_en" :value="page.on_en" hidden>
						</div>
					</div>
					<!-- </div> -->
					<div class="card-body">
						<div class="form-group">
							<label class="h6">Название</label>
							<input
								id="title_en"
								name="title_en"
								class="form-control"
								v-model="page.title_en"
								:class="{'is-invalid' : errors.hasOwnProperty('title_en')}"
								:readOnly="!page.on_en"
							>
							<div class="invalid-feedback" v-for="(error, key) in errors['title_en']" :key="key">{{error}}</div>
						</div>

						<div class="form-group">
							<label class="h6">Содержание</label>
							<vue-ckeditor
								class="mt-2"
								name="content_en"
								id="content_en"
								v-model="page.content_en"
								:readOnlyMode="!page.on_en"
							/>
						</div>
					</div>
				</div>
				<!-- END EN PART -->

				<!-- END MAIN -->
			</div>

			<!-- RIGHT SIDEBAR -->
			<!-- STATUS -->
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
							<strong v-if="page.status">Опублиповано</strong>
							<strong v-else>Черновик</strong>
							<label
								class="float-right mx-1 switch switch-label switch-3d switch-success form-check-label"
							>
								<input
									type="checkbox"
									class="switch-input"
									v-model="page.status"
									@click="page.status = !page.status"
								>
								<span data-checked="✓" data-unchecked="✕" class="switch-slider"></span>
							</label>
							<input type="text" name="status" :value="page.status" hidden>
						</div>
						<div class="form-group" v-if="page.updated_at">
							<span class="text-muted">
								<i class="fa fa-calendar mr-1"></i>Дата:
							</span>
							<strong>{{ page.updated_at }}</strong>
						</div>

						<div class="form-group mb-0">
							<span class="text-muted">
								<i class="fa fa-newspaper-o mr-1"></i>Шаблон:
							</span>
							<select name="template" v-model="page.template" class="form-control mt-1">
								<option
									v-for="(option, index) in options"
									:key="index"
									:value="option.value"
								>{{ option.text }}</option>
							</select>
						</div>
					</div>
					<div class="card-footer">
						<button
							class="btn btn-link text-danger float-left sticky-top"
							v-show="page.id"
							@click.prevent="deletePage"
						>Удалить</button>
						<input
							class="btn btn-primary btn-round float-right"
							type="submit"
							:value="newPage ? 'Опубликовать' : 'Обновить' "
						>
					</div>
				</div>
				<!-- END STATUS -->

				<!-- </div> -->
			</div>
		</div>
	</div>
</template>

<script>
import VueCkeditor from "../VueCkeditor.vue";

export default {
	components: {
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
			page: {
				id: "",
				alias: "",
				link: "",
				status: false,
				template: "common",
				created_at: "",
				updated_at: "",
				on_en: false,
				on_ru: true,
				title_en: "",
				title_ru: "",
				content_ru: "",
				content_en: ""
			},

			options: [
				{ value: "common", text: "Базовый шаблон" },
				{ value: "mainpage", text: "Главная страница" },
				{ value: "currentissue", text: "Свежий номер" },
				{ value: "archive", text: "Архив" },
				{ value: "redkollegiya", text: "Редколлегия и Редсовет" },
				{ value: "contacts", text: "Контакты" },
				{ value: "authors", text: "Наши авторы" }
			]
		};
	},

	computed: {
		newPage() {
			return this.page.id ? false : true;
		}
	},

	created() {
		// fetching page
		if (!this.isEmptyObject(this.old)) {
			this.page = this.old;
		} else if (this.id !== 0) {
			this.fetchPage(this.id);
		}
	},

	mounted() {
		// show errors
		if (!this.isEmptyObject(this.errors)) {
			this.$notify({
				group: "custom-template",
				text: this.errors.title[0],
				type: "alert-danger",
				duration: -1
			});
		}
	},

	methods: {
		fetchPage(id) {
			axios.get("/api/pages/" + id).then(({ data }) => {
				this.page = data.data;
			});
			// .then(() => {
			// 	this.collapsed.text =
			// 		this.page.text_ru !== "" || this.page.text_ru !== ""
			// 			? false
			// 			: true;
			// })
		},

		deletePage() {
			if (confirm("Удалить страницу ?")) {
				document.getElementsByName("_method")[0].value = "DELETE";
				document.getElementById("form").submit();
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
