<template>
	<div>
		<div class="card">
			<div class="card-header">
				<h5 class="h5 mb-0">Метки</h5>
			</div>
			<div class="card-body">
				<div class="d-flex">
					<v-select
						id="tags"
						class="flex-grow-1"
						multiple
						:options="tags"
						label="title_ru"
						:value="valueObject"
						@input="input"
					>
						<div slot="no-options">Меток по запросу не найдено.</div>
					</v-select>

					<input
						v-for="(tag, index) in value"
						:key="index"
						hidden
						type="number"
						readonly
						name="tags[]"
						:value="tag"
					>
					<b-button
						v-b-tooltip.hover
						v-b-modal.addNewTag
						title="Создать новую метку"
						type="button"
						variant="outline-secondary"
						class="btn-sm ml-2 my-auto"
					>
						<i class="fa fa-plus"></i>
					</b-button>
				</div>
			</div>
		</div>

		<!-- Model add new TAG-->
		<b-modal
			id="addNewTag"
			ref="addNewTag"
			title="Создать новую метку"
			@ok="handleSaveTag"
			ok-title="Создать"
			@shown="clearForm()"
			cancel-title="Отмена"
		>
			<form @submit.stop.prevent="saveNewTag">
				<div class="form-group">
					<label for="title_ru">Название на русском</label>
					<input type="text" class="form-control" v-model="newTag.title_ru">
				</div>
				<div class="form-group">
					<label for="title_en">Название на английском</label>
					<input type="text" class="form-control" v-model="newTag.title_en">
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
			tags: [],
			
			newTag: {
				title_ru: "",
				title_en: ""
			}
		};
	},

	computed: {
		valueObject() {
			return this.value.map(id => {
				return {
					id: id,
					title_ru: this.tags
						.filter(x => x.id === id)
						.map(x => x.title_ru)[0]
				};
			});
		}
	},

	created() {
		this.fetchTags();
	},

	methods: {
		fetchTags() {
			axios
				.get("/api/tags", {
					params: {
						sortBy: "used_at",
						orderBy: "desc"
					}
				})
				.then(({ data }) => {
					this.tags = data;
				});
		},

		input(val) {
			val = val.map(val => {
				return val.id;
			});
			this.$emit("input", val);
		},

		handleSaveTag(bvModalEvt) {
			// Prevent modal from closing
			bvModalEvt.preventDefault();
			if (!this.newTag.title_ru || !this.newTag.title_en) {
				alert("Пожалуйста, заполните поля.");
			} else {
				this.saveNewTag();
			}
		},

		saveNewTag() {
			axios
				.post("/api/tags", this.newTag)
				.then(resp => {
					if (resp.data.status === "success") {
						this.$notify({
							group: "custom-template",
							type: "alert-success",
							text: resp.data.message,
							duration: 5000
						});
						this.$emit("input", this.value.concat(resp.data.object.id));
						// this.input(this.value.concat(resp.data.object.id));
						this.fetchTags();
						this.clearForm(this.newTag);
					}
				})
				.catch(error => {
					console.log(error);
					this.errors = error.response.data.errors;
					this.$notify({
						group: "custom-template",
						type: "alert-danger",
						text: error.response.data.errors.title[0],
						duration: -1
					});
				});

			this.$nextTick(() => {
				// Wrapped in $nextTick to ensure DOM is rendered before closing
				this.$refs.addNewTag.hide();
			});
		},

		clearForm() {
			this.newTag.title_ru = "";
			this.newTag.title_en = "";
		}
	}
};
</script>

<style scope>
#tags .vs__selected {
	background-color: var(--warning);
	/* color: white; */
	/* font-weight: 600; */
	/* font-size: 1rem; */
}
</style>