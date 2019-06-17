<template>
	<div>
		<!-- MENU SELECT -->
		<div class="d-flex mb-4 form-inline">
			<h3 class="mb-0 my-auto">Меню</h3>
			<select class="form-control mx-3" v-model="currentMenuIndex">
				<option v-for="(menu, index) in menus" :key="index" :value="index">{{ menu.title }}</option>
			</select>
		</div>
		<!-- END MENU SELECT -->

		<div class="row">
			<div class="col-md left-column">
				<menus-links @addPage="addPage" @addCustomLink="addCustomLink"></menus-links>
			</div>
			<div class="col-md">
				<menu-profile v-model="menus[currentMenuIndex]" @delete="deleteLink" @save="saveMenu"></menu-profile>
			</div>
		</div>
	</div>
</template>

<script>
import MenusLinks from "./MenusIndexLinks";
import MenuProfile from "./MenusIndexProfile";

export default {
	components: {
		MenusLinks,
		MenuProfile
	},

	data() {
		return {
			menus: [],
			currentMenuIndex: 0
		};
	},

	computed: {},

	created() {
		this.fetchMenus();
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
		fetchMenus() {
			axios.get("/api/menus").then(resp => {
				this.menus = resp.data.data;
			});
		},

		addPage(link) {
			var newLink = {
				// 					id: 0,
				menu_id: this.menus[this.currentMenuIndex].id,
				order: this.menus[this.currentMenuIndex].links.length + 1,
				parent: 0,
				path: link.alias,
				title: link.title_ru,
				type: "page",
				url: link.link
			};
			this.menus[this.currentMenuIndex].links.push(newLink);
		},

		addCustomLink(link) {
			var newLink = {
				// 					id: 0,
				menu_id: this.menus[this.currentMenuIndex].id,
				order: this.menus[this.currentMenuIndex].links.length + 1,
				parent: 0,
				path: link.url,
				title: link.title,
				type: "common",
				url: link.url
			};
			this.menus[this.currentMenuIndex].links.push(newLink);
		},

		deleteLink(index) {
			this.menus[this.currentMenuIndex].links.splice(index, 1);
		},

		saveMenu(menu) {
			axios
				.put("/api/menus/" + menu.id, menu)
				.then(resp => {
					if (resp.data.status === "success") {
						this.$notify({
							group: "custom-template",
							type: "alert-success",
							text: resp.data.message,
							duration: -1
						});
						this.fetch();
						this.clearForm();
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
/* ADMIN right sidebar */
.left-column {
	-ms-flex: 0 0 320px !important;
	flex: 0 0 320px;
}
</style>
