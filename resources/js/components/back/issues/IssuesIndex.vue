<template>
	<div>
		<div class="d-flex mb-4">
			<h3 class="mb-0 my-auto">Выпуск</h3>
			<select class="form-control flex-grow-1 mx-3" value="fetchIssue.id" @change="selectIssue">
				<option value="0">-- Выберите выпуск --</option>
				<option
					v-for="(issue, index) in issues"
					:key="index"
					:value="issue.id"
				>Год: {{issue.year}}, Номер {{issue.no}} ({{issue.full_no}}), Часть {{issue.part}}</option>
			</select>

			<button type="button" class="btn btn-primary text-nowrap">Создать новый выпуск</button>
		</div>

		<div class="row" v-if="currentIssue.id">
			<div class="col-md">
				<issue-articles v-model="currentIssue.articles"></issue-articles>
			</div>

			<div class="col-md right-sidebar">
				<div class="card">
					<div class="card-header">Выпуск</div>
					<div class="card-body"></div>
				</div>
				<div class="card">
					<div class="card-header">Титульный лист</div>
					<div class="card-body"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import IssueArticles from "./components/IssueArticles.vue";
export default {
	components: {
		IssueArticles
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