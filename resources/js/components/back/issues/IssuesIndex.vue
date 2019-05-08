<template>
	<div>
		<div class="d-flex mb-4 form-inline">
			<h3 class="mb-0 my-auto">Выпуск</h3>
			<select class="form-control mx-3" value="fetchIssue.id" @change="selectIssue">
				<option value="0">-- Выберите выпуск --</option>
				<option
					v-for="(issue, index) in issues"
					:key="index"
					:value="issue.id"
				>Год: {{issue.year}}, Номер {{issue.no}} ({{issue.full_no}}), Часть {{issue.part}}</option>
			</select>

			<button type="button" class="btn btn-outline-primary text-nowrap">Создать новый выпуск</button>
			<button
				type="button"
				class="btn btn-primary text-nowrap ml-auto"
				v-if="currentIssue.id"
			>Сохранить изменения</button>
		</div>

		<div v-if="currentIssue.id">
			<div class="row">
				<div class="col-md-7 d-flex">
					<issue-files
						:file_ru.sync="currentIssue.file_title_ru"
						:file_en.sync="currentIssue.file_title_en"
					></issue-files>
				</div>
				<div class="col-md-5">
					<div class="card">
						<div class="card-header d-flex">
							<h5 class="mr-1 my-auto">Выгрузка статей в шаблоны</h5>
						</div>
						<div class="card-body">
							<div class="form-group">
									<label class="h6">Название журнала</label>
									<input
										type="text"
										class="form-control"
										v-model="exportIssue.title"
									>
							</div>
							<div class="form-group">
									<label class="h6">ISSN 
										<i v-b-tooltip.hover title="Если ISSN не введен, то он будет взят из DOI статей. Если ни одна статья не содержит DOI, то ISSN выводиться не будет."
											 class="fa fa-info-circle ml-2 text-secondary" 
											></i>
										</label>
									<input
										type="text"
										class="form-control"
										v-model="exportIssue.issn"
										placeholder="хххх-хххх"
									>
							</div>
							
							<div class="form-group">
									<label class="h6">Выгружать e-mail</label>
									<b-form-checkbox
										id="export-emails"
										v-model="exportIssue.emails"
									>
										Отображать email у автора, если он редактировался
									</b-form-checkbox>
							</div>
							<hr>
							<div class="btn-group float-right">
								<button type="button" class="btn btn-outline-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
												:disabled="exportDisabled">
									Выгрузить
								</button>
								<div class="dropdown-menu">
									<a class="dropdown-item" href="#">РИНЦ</a>
									<a class="dropdown-item" href="#">Содержание</a>
									<a class="dropdown-item" href="#">Статья</a>
									<a class="dropdown-item" href="#">Наши авторы</a>
									<a class="dropdown-item" href="#">Список E-mail'ов</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-md">
					<issue-articles v-model="currentIssue.articles"
													:export.sync="exportIssue.articles"></issue-articles>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import IssueArticles from "./components/IssueArticles.vue";
import IssueFiles from "./components/IssueFiles.vue";

export default {
	components: {
		IssueArticles,
		IssueFiles
	},

	props: {
		old: {
			type: Object,
			default: () => ({})
		},
		id: {
			type: Number,
			default: 1
		},
		
	},

	data() {
		return {
			currentIssue: {
				id: 0,
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
			exportIssue: {
				title: "Журнал «Идеи и идеалы»",
				issn: "",
				emails: true,
				articles: [],
			}
		};
	},
	
	computed: {
		exportDisabled() {
			return !this.exportIssue.articles.length > 0
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

		selectIssue(event) {
			this.fetchIssue(event.target.value);
		},

		fetchIssue(id) {
			if (id != 0) {
				axios.get("/api/issues/" + id).then(({ data }) => {
					this.currentIssue = data.data;
				});
			}
		}
	}
};
</script>

<style scope>

</style>