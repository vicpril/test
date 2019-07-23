<template>
	<div>
		<div class="d-flex mb-3 form-inline">
			<h2 class="mb-0 my-auto">Редколлегия и редсовет</h2>

			<button
				type="button"
				class="btn btn-primary text-nowrap ml-auto"
				@click="update"
			>Сохранить изменения</button>
		</div>
		<b-card no-body>
			<b-tabs card>
				<b-tab title="РЕДАКЦИЯ">
					<redaction-list v-model="redaction" type="red" :users="users"></redaction-list>
				</b-tab>

				<b-tab no-body title="РЕДАКЦИОННЫЙ СОВЕТ">
					<redaction-list v-model="sovet" type="sovet" :users="users"></redaction-list>
				</b-tab>

				<b-tab no-body title="МЕЖДУНАРОДНЫЙ РЕДАКЦИОННЫЙ СОВЕТ ">
					<redaction-list v-model="int_sovet" type="int-sovet" :users="users"></redaction-list>
				</b-tab>
			</b-tabs>
		</b-card>
	</div>
</template>

<script>
import RedactionList from "./RedcolsListRedaction";

export default {
	components: {
		RedactionList
	},

	data() {
		return {
			redcols: [],
			users: []
		};
	},

	computed: {
		redaction: {
			get() {
				return this.redcols.filter(item => {
					return item.type == "red";
				});
			},
			set(value) {
					let tmp = this.redcols.filter(el => {
						return el.type !== "red";
					});
					this.redcols = tmp.concat(value);
			}
		},
				sovet: {
					get() {
						return this.redcols.filter(item => {
							return item.type == "sovet";
						});
					},
					set(value) {
							let tmp = this.redcols.filter(el => {
								return el.type !== "sovet";
							});
							this.redcols = tmp.concat(value);
					}
				},
				int_sovet: {
					get() {
						return this.redcols.filter(item => {
							return item.type == "int-sovet";
						});
					},
					set(value) {
							let tmp = this.redcols.filter(el => {
								return el.type !== "int-sovet";
							});
							this.redcols = tmp.concat(value);
					}
				},
	},

	created() {
		this.fetchData();
	},

	methods: {
		async fetchData() {
			try {
				await this.fetchUsers();
			} catch (err) {
				console.error(err);
			}
			try {
				await this.fetchRedcols();
			} catch (err) {
				console.error(err);
			}
		},

		async fetchUsers() {
			await axios.get("/api/userslist").then(({ data }) => {
				this.users = data.data;
			});
		},
		async fetchRedcols() {
			await axios
				.get("/api/redcols?sortBy=position&orderBy=asc")
				.then(({ data }) => {
					this.redcols = data.data;
				});
		},
		
		update() {
			axios
				.post("/api/redcols/update", this.redcols)
				.then(resp => {
					if (resp.data.status === "success") {
						this.$notify({
							group: "custom-template",
							type: "alert-success",
							text: resp.data.message,
							duration: -1
						});
// 						this.fetch();
// 						this.clearForm();
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
		}
	}
};
</script>

<style scoped>
</style>

