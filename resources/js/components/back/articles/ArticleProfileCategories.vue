<template>
	<div>
		<div class="card">
			<div class="card-header">
				<h5 class="h5 mb-0">Рубрика</h5>
			</div>
			<div class="card-body">
				<div class="d-flex">
					<v-select
						id="categories"
						class="flex-grow-1"
						:options="categories"
						label="title_ru"
						:value="valueObject"
						@input="input"
					>
						<div slot="no-options">Рубрик по запросу не найдено.</div>
					</v-select>
					<input type="text" name="categories" :value="value" hidden>
					<b-button
						v-b-tooltip.hover
						v-b-modal.addNewCategory
						title="Создать новую рубрику"
						type="button"
						variant="outline-secondary"
						class="btn-sm ml-2 my-auto"
					>
						<i class="fa fa-plus"></i>
					</b-button>
				</div>
			</div>
		</div>

		<!-- Model add new CATEGORY-->
		<b-modal
			id="addNewCategory"
			ref="addNewCategory"
			title="Создать новую рубрику"
			@ok="handleSaveCategory"
			ok-title="Создать"
			@shown="clearForm(newCategory)"
			cancel-title="Отмена"
		>
			<form @submit.stop.prevent="saveNewCategory">
				<div class="form-group">
					<label for="title_ru">Название на русском</label>
					<input type="text" class="form-control" v-model="newCategory.title_ru">
				</div>
				<div class="form-group">
					<label for="title_en">Название на английском</label>
					<input type="text" class="form-control" v-model="newCategory.title_en">
				</div>
			</form>
		</b-modal>
		<!-- 	end modal -->
	</div>
</template>

<script>
import vSelect from "vue-select";
export default {
	components: {
		vSelect
	},
	
	props: ["value"],

	data: function() {
		return {
			categories: [],
			newCategory: {
				title_ru: "",
				title_en: ""
			}
		};
	},

	computed: {
		valueObject() {
			return {
				id: this.value,
				title_ru: this.categories
					.filter(x => x.id === this.value)
					.map(x => x.title_ru)[0]
			};
		}
	},

	created() {
		this.fetchCategories();
	},

	methods: {
		fetchCategories() {
			axios
				.get("/api/categories", {
					params: {
						sortBy: "used_at",
						orderBy: "desc"
					}
				})
				.then(({ data }) => {
					this.categories = data;
				});
		},

		input(obj) {
			this.$emit("input", obj.id);
		},

		handleSaveCategory(bvModalEvt) {
			// Prevent modal from closing
			bvModalEvt.preventDefault();
			if (!this.newCategory.title_ru || !this.newCategory.title_en) {
				alert("Пожалуйста, заполните поля.");
			} else {
				this.saveNewCategory();
			}
		},

		saveNewCategory() {
			axios
				.post("/api/categories", this.newCategory)
				.then(resp => {
					if (resp.data.status === "success") {
						this.$notify({
							group: "custom-template",
							type: "alert-success",
							text: resp.data.message,
							duration: 5000
						});
						this.fetchCategories();
						this.clearForm();
						// this.$emit("input", resp.data.object);
						this.input(resp.data.object);
					}
				})
				.catch(error => {
					this.errors = error.data.errors;
					this.$notify({
						group: "custom-template",
						type: "alert-danger",
						text: error.response.data.errors.title[0],
						duration: -1
					});
				});

			this.$nextTick(() => {
				// Wrapped in $nextTick to ensure DOM is rendered before closing
				this.$refs.addNewCategory.hide();
			});
		},

		clearForm() {
			this.newCategory.title_ru = "";
			this.newCategory.title_en = "";
		}
	}
};
</script>