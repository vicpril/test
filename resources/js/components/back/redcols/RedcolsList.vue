<template>
	<div>
		<b-card no-body>
			<b-tabs card>
				<b-tab title="РЕДАКЦИЯ">
					<redaction-list></redaction-list>
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
			redcols: []
		};
	},

	computed: {
		redaction() {
			return this.redcols.filter($item => {
				return $item.type == "red";
			});
		},
		sovet() {
			return this.redcols.filter($item => {
				return $item.type == "sovet";
			});
		},
		int_sovet() {
			return this.redcols.filter($item => {
				return $item.type == "int-sovet";
			});
		}
	},

	created() {
		this.fetchRedcols();
	},

	methods: {
		fetchRedcols() {
			axios
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

