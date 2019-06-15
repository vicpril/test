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
				<menus-links @addPage="addLink"></menus-links>
			</div>
			<div class="col-md">
				<menu-profile 
											v-model="menus[currentMenuIndex]"
											@delete="deleteLink"></menu-profile>
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
		
		addLink(link){
			var newLink = {
					id: 0,
					menu_id: this.menus[this.currentMenuIndex].id,
// 					order:6,
					parent:0,
					path: link.alias,
					title: link.title_ru,
					type: link.type,
					url: link.path,

			}
			
			this.menus[this.currentMenuIndex].links.push(newLink);
		},
		
		deleteLink(index) {
			this.menus[this.currentMenuIndex].links.splice(index, 1);
		},
		
		

		// selectMenu(e) {
		// 	window.location =
		// 		e.target.options[e.target.options.selectedIndex].dataset.link;
		// },

		// fetchMenu(id) {
		// 	if (id != 0) {
		// 		axios.get("/api/menus/" + id).then(({ data }) => {
		// 			this.currentMenu = data.data;
		// 		});
		// 	}
		// },
		// setFullNo() {
		// 	this.currentMenu.full_no =
		// 		(this.currentMenu.year - 2009 - 1) * 4 + 2 + this.currentMenu.no;
		// },
		saveMenu() {
			// 	var data = Object.assign({}, this.currentMenu);
			// 	delete data.articles;
			// 	data.articlesOrder = this.currentMenu.articles.map(function(a) {
			// 		return a.id;
			// 	});
			// 	axios
			// 		.put("/api/menus/" + this.id, data)
			// 		.then(resp => {
			// 			if (resp.data.status === "success") {
			// 				this.fetchMenusList();
			// 				this.$notify({
			// 					group: "custom-template",
			// 					type: "alert-success",
			// 					text: resp.data.message,
			// 					duration: 5000
			// 				});
			// 			} else {
			// 				this.$notify({
			// 					group: "custom-template",
			// 					type: "alert-danger",
			// 					text: resp.data.message,
			// 					duration: -1
			// 				});
			// 			}
			// 		})
			// 		.catch(error => {
			// 			this.errors = error.response.data.errors;
			// 			this.$notify({
			// 				group: "custom-template",
			// 				type: "alert-danger",
			// 				text: error.response.data.errors.title[0],
			// 				duration: -1
			// 			});
			// 		});
		}

		// deleteMenu() {
		// 	if (this.currentMenu.articles.length > 0) {
		// 		alert(
		// 			"Во избежании случайной потери статей удалите статьи вручную или перенесите их в другой выпуск."
		// 		);
		// 	} else {
		// 		if (confirm("Вы хотите удалить выпуск?")) {
		// 			document.getElementById("formDelete").submit();
		// 		}
		// 	}
		// }
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
