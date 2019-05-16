<template>
	<div>
		<!-- ISSUE SELECT -->
		<div class="d-flex mb-4 form-inline">
			<h3 class="mb-0 my-auto">Выпуск</h3>
			<select class="form-control mx-3" v-model="currentIssue.id" @change="selectIssue">
<!-- 				<option value="0">-- Выберите выпуск --</option> -->
				<option
					v-for="(issue, index) in issues"
					:key="index"
					:value="issue.id"
					:data-link="issue.editLink"
				>Год: {{issue.year}}, Номер {{issue.no}} ({{issue.full_no}}), Часть {{issue.part}}</option>
			</select>

			<b-button 
						v-b-modal.addNewIssue 
						type="button" 
						variant="outline-primary"
								>Создать новый выпуск</b-button>
			<button
				type="button"
				class="btn btn-primary text-nowrap ml-auto"
				v-if="currentIssue.id"
				@click="saveIssue"
			>Сохранить изменения</button>
		</div>
		<!-- END ISSUE SELECT -->

		<div v-if="currentIssue.id">
			<div class="row">
				<!-- INFO -->
				<div class="col-md-4 d-flex">
					<div class="card flex-fill">
						<div class="card-header">
							<h5 class="h5 mb-0">Информация</h5>
						</div>
						<div class="card-body">
							<div class="input-group mb-2">
								<div class="input-group-prepend">
									<span class="input-group-text">Год</span>
								</div>
								<input
									type="number"
									name="year"
									min="2009"
									class="form-control"
									v-model="currentIssue.year"
								>
								<div class="input-group-append">
									<span class="input-group-text">Том {{ currentIssue.tom }}</span>
									<input type="number" name="tom" v-model="currentIssue.tom" hidden>
								</div>
							</div>
							<div class="input-group mb-2">
								<div class="input-group-prepend">
									<span class="input-group-text">Номер</span>
								</div>
								<select name="no" class="form-control" v-model="currentIssue.no">
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
									v-model="currentIssue.full_no"
								>
								<div class="input-group-append">
									<button type="button" class="btn btn-outline-info" @click.prevent="setFullNo">Авто</button>
								</div>
							</div>
							<div class="input-group mb-2">
								<div class="input-group-prepend">
									<span class="input-group-text">Часть</span>
								</div>
								<select name="part" class="form-control" v-model="currentIssue.part">
									<option v-for="(part, index) in partArray" :key="index" :value="part">{{ part }}</option>
								</select>
							</div>
						</div>
						<div class="card-footer">
							<button
								class="btn btn-link text-danger float-left sticky-top"
								@click.prevent="deleteIssue"
							>Удалить выпуск</button>
						</div>
					</div>
				</div>
				<!-- end INFO -->

				<!-- ISSUE FILES -->
				<div class="col-md-4 d-flex">
					<issue-files
						:file_ru.sync="currentIssue.file_title_ru"
						:file_en.sync="currentIssue.file_title_en"
					></issue-files>
				</div>
				<!-- END ISSUE FILES -->

				<!-- EXPORT ARTICLES -->
				<div class="col-md-4">
					<div class="card">
						<div class="card-header d-flex">
							<h5 class="mr-1 my-auto">Выгрузка статей в шаблоны</h5>
						</div>
						<div class="card-body">
							<div class="form-group">
								<label class="h6">Название журнала</label>
								<input type="text" class="form-control" v-model="exportIssue.title">
							</div>
							<div class="form-group">
								<label class="h6">
									ISSN
									<i
										v-b-tooltip.hover
										title="Если ISSN не введен, то он будет взят из DOI статей. Если ни одна статья не содержит DOI, то ISSN выводиться не будет."
										class="fa fa-info-circle ml-2 text-secondary"
									></i>
								</label>
								<input type="text" class="form-control" v-model="exportIssue.issn" placeholder="хххх-хххх">
							</div>

							<div class="form-group">
								<label class="h6">Выгружать e-mail</label>
								<b-form-checkbox
									id="export-emails"
									v-model="exportIssue.emails"
								>Отображать email у автора, если он редактировался</b-form-checkbox>
							</div>
							<hr>
							<div class="btn-group float-right">
								<button
									id="tooltip-button"
									type="button"
									class="btn btn-outline-info dropdown-toggle"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
									:disabled="exportDisabled"
								>Выгрузить</button>
								<div class="dropdown-menu">
									<a class="dropdown-item" href="#">РИНЦ</a>
									<a class="dropdown-item" href="#">Содержание</a>
									<a class="dropdown-item" href="#">Статья</a>
									<a class="dropdown-item" href="#">Наши авторы</a>
									<a class="dropdown-item" href="#">Список E-mail'ов</a>
								</div>
								<!-- <b-tooltip target="tooltip-button">Выберите статьи для выгрузки</b-tooltip> -->
							</div>
						</div>
					</div>
				</div>
				<!-- end EXPORT ARTICLES -->
			</div>

			<!-- ISSUE ARTICLES -->
			<div class="row">
				<div class="col-md">
					<issue-articles v-model="currentIssue.articles" :export.sync="exportIssue.articles"></issue-articles>
				</div>
			</div>
			<!-- end ISSUE ARTICLES -->
		</div>
<!-- 		NEW ISSUE MODAL -->
		<new-issue></new-issue>
<!-- 	END	NEW ISSUE MODAL -->

		
	</div>
</template>

<script>
import IssueArticles from "./components/IssueArticles.vue";
import IssueFiles from "./components/IssueFiles.vue";
import NewIssue from "./components/NewIssue.vue";


export default {
	components: {
		IssueArticles,
		IssueFiles,
		NewIssue
	},

	props: {
		old: {
			type: Object,
			default: () => ({})
		},
		id: {
			type: Number,
			default: ""
		}
	},

	data() {
		return {
			currentIssue: {
				id: "",
				link: "",
				created_at: "",
				updated_at: "",
				year: "",
				tom: "",
				no: "",
				full_no: "",
				part: "",
				articles: [],
				file_title_ru: "",
				file_title_en: ""
			},
			issues: [],
			noArray: [1, 2, 3, 4, 5],
			partArray: [1, 2],
			exportIssue: {
				title: "Журнал «Идеи и идеалы»",
				issn: "",
				emails: true,
				articles: [],
				disabledInfo: false
			}
		};
	},

	computed: {
		exportDisabled() {
			return !this.exportIssue.articles.length > 0;
		},
		disabledExportInfo() {
			return this.exportIssue.articles.length > 0;
		}
	},

	created() {
		this.fetchIssuesList();
		// fetching article
		if (!this.isEmptyObject(this.old)) {
			console.log("old exist");
		} else if (this.id !== 0) {
			console.log("old doesnt exist");
			this.fetchIssue(this.id);
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
		fetchIssuesList() {
			axios.get("/api/issues").then(({ data }) => {
				this.issues = data;
			});
		},

		selectIssue(e) {
			window.location =
				e.target.options[e.target.options.selectedIndex].dataset.link;
		},

		fetchIssue(id) {
			if (id != 0) {
				axios.get("/api/issues/" + id).then(({ data }) => {
					this.currentIssue = data.data;
				});
			}
		},
		setFullNo() {
			this.currentIssue.full_no =
				(this.currentIssue.year - 2009 - 1) * 4 + 2 + this.currentIssue.no;
		},
		saveIssue() {
			var data = Object.assign({}, this.currentIssue);
			delete data.articles;
			data.articlesOrder = this.currentIssue.articles.map(function(a) {
				return a.id;
			});
			axios
				.put("/api/issues/" + this.id, data)
				.then(resp => {
					if (resp.data.status === "success") {
						this.fetchIssuesList();
						this.$notify({
							group: "custom-template",
							type: "alert-success",
							text: resp.data.message,
							duration: 5000
						});
					} else {
						this.$notify({
							group: "custom-template",
							type: "alert-danger",
							text: resp.data.message,
							duration: -1
						});
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
		},
		
		deleteIssue() {
			if (this.currentIssue.articles.length > 0) {
				alert(
					"Во избежании случайной потери статей удалите статьи вручную или перенесите их в другой выпуск."
				);
			} else {
				if (confirm("Вы хотите удалить выпуск?")) {
					document.getElementById("formDelete").submit();
				}
			}
		}
	}
};
</script>

<style scope>
</style>