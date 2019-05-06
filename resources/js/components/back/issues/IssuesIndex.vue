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
				<div class="col-md-7">
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
							<table class="form-table">
								<tbody>
									<tr>
										<th>
											<label for="export_type">Шаблон выгрузки</label>
										</th>
										<td>
											<select id="export-type" name="export_type" style="width: 250px">
												<option value="rinc">РИНЦ</option>
												<option value="contents">Содержание</option>
												<option value="article">Статья</option>
												<option value="authors">Наши авторы</option>
												<option value="emails">Список E-mail'ов</option>
											</select>
										</td>
									</tr>

									<tr>
										<th>
											<label for="mag_title">Название журнала</label>
										</th>
										<td>
											<input
												class="for-export for-rinc for-emails"
												required
												type="text"
												name="mag_title"
												style="width: 250px"
												value="Журнал «Идеи и идеалы»"
											>
										</td>
										<td>
											<label style="font-size: 12px;">
												Название журнала
												<label></label>
											</label>
										</td>
									</tr>

									<tr>
										<th>
											<label for="mag_title">ISSN</label>
										</th>
										<td>
											<input
												class="for-export for-rinc for-emails"
												type="text"
												name="mag_issn"
												style="width: 250px"
												placeholder="xxxx-xxxx"
											>
										</td>
										<td>
											<label style="font-size: 12px;">
												Если ISSN не введен, то он будет взят из DOI статей. Если ни одна статья не содержит DOI, то ISSN выводиться не будет.
												<label></label>
											</label>
										</td>
									</tr>

									<tr class="add-field">
										<th>
											<label for="mag_title">Выгружать e-mail</label>
										</th>
										<td>
											<input class="for-export for-rinc" type="checkbox" name="email_on" checked>
										</td>
										<td>
											<label style="font-size: 12px;">
												Отображать email у автора, если он редактировался"
												<label></label>
											</label>
										</td>
									</tr>

									<tr class="add-field"></tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-md">
					<issue-articles v-model="currentIssue.articles"></issue-articles>
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
		}
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
			issues: []
		};
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