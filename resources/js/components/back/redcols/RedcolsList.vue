<template>
	<div>
		<b-card no-body>
			<b-tabs card>
				<b-tab title="РЕДАКЦИЯ">
					<redaction-list v-model="redaction" :users="users"></redaction-list>
				</b-tab>

				<b-tab no-body title="РЕДАКЦИОННЫЙ СОВЕТ">
					<b-card-img bottom src="https://picsum.photos/600/200/?image=25"></b-card-img>
					<b-card-footer>Picture 2 footer</b-card-footer>
				</b-tab>

				<b-tab no-body title="МЕЖДУНАРОДНЫЙ РЕДАКЦИОННЫЙ СОВЕТ ">
					<b-card-img bottom src="https://picsum.photos/600/200/?image=26"></b-card-img>
					<b-card-footer>Picture 3 footer</b-card-footer>
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
				return this.redcols.filter($item => {
					return $item.type == "red";
				});
			},
			set(value) {
				// value.forEach(item => {
				// 	let index = this.redcols.find(el => {
				// 		return el.id == item.id;
				// 	});
				// 	if (index !== -1) {
				// 		this.redcols.splice(index, 1);
				// 		this.redcols.push(item);
				// 	}
				// });
				let red = this.redcols.filter($item => {
					return $item.type == "red";
				});
				red.forEach(item => {
					let index = this.redcols.findIndex(el => {
						return el.id == item.id;
					});
					this.redcols.splice(index, 1);
					this.redcols.push(item);
				});
				// value.forEach(item => {
				// 	this.redcols.push(item);
				// });
			}
		}
		// 		sovet() {
		// 			return this.redcols.filter($item => {
		// 				return $item.type == "sovet";
		// 			});
		// 		},
		// 		int_sovet() {
		// 			return this.redcols.filter($item => {
		// 				return $item.type == "int-sovet";
		// 			});
		// 		}
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
		}
	}
};
</script>

<style scoped>
</style>

