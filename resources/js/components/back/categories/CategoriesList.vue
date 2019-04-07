<template>
	<div>
		<div class="row">
			<div class="col-md-5">
				<div class="card">
					<div class="card-header">
						<h5 class="h5 mb-0">{{ title }}</h5>
					</div>
					<div class="card-body px-0">
						<div class="col-md-12">
							<div class="form-group">
								<label class="h6">Название - рус</label>
								<input type="text" class="form-control mr-2" v-model="currentCat.name_ru">
							</div>
						</div>
						<div class="col-md-12">
							<div class="form-group">
								<label class="h6">Название - eng</label>
								<input type="text" class="form-control mr-2" v-model="currentCat.name_en">
							</div>
						</div>
						<div class="col-md-12">
							<div class="form-group">
								<label class="h6">Родительская рубрика</label>
								<select class="form-control" v-model="currentCat.parent_id">
									<option value="0">Нет</option>
									<option
										v-for="(cat, index) in categories"
										:key="index"
										v-bind:value="cat.id"
										:disabled="currentCat.id === cat.id"
									>{{ cat.name_ru }}</option>
								</select>
							</div>
						</div>
					</div>
					<div class="card-footer">
						<button
							type="button"
							class="btn float-left"
							:class="clearBtnClass"
							@click.prevent="clearForm"
						>Очистить форму</button>
						<button
							type="button"
							class="btn btn-primary float-right"
							@click.prevent="saveCategory"
						>{{ submitBtnTitle }}</button>
					</div>
				</div>
			</div>

			<div class="col-md-7">
				<div class="card">
					<div class="card-header">
						<h5 class="h5 mb-0">Список рубрик</h5>
					</div>
					<div class="card-body">
						<div class="row mb-2">
							<div class="col-sm-12 col-md-6">
								<div class="form-inline">
									<label>
										Показать
										<select
											class="custom-select custom-select-sm form-control form-control-sm d-flex mx-1"
											v-model="paginateSelect"
											@change="page = 1"
										>
											<option v-for="(option, i) in paginateOptions" :key="i" :value="option">{{ option }}</option>
										</select> записей
									</label>
								</div>
							</div>

							<div class="col-sm-12 col-md-6">
								<div class="form-inline float-right">
									<label>
										Поиск:
										<input type="search" class="form-control form-control-sm ml-1" v-model="search">
									</label>
								</div>
							</div>
						</div>

						<table class="table table-striped table-responsive-md" style="width:100%">
							<thead class="text-black">
								<tr>
									<th
										class="sorting"
										:class="showOrder('name_ru')"
										@click="setOrder('name_ru')"
									>Название - рус</th>
									<th
										class="sorting"
										:class="showOrder('name_en')"
										@click="setOrder('name_en')"
									>Название - eng</th>
									<th>Род.</th>
									<th class="sorting" :class="showOrder('articles')" @click="setOrder('articles')">Статьи</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(cat, index) in showedCategories " :key="index">
									<td>
										<a href @click.prevent="showCategory(index)">{{ cat.name_ru }}</a>
									</td>
									<td>{{ cat.name_en }}</td>
									<td>{{ cat.parent_id }}</td>
									<td>{{ cat.articles }}</td>
									<td class="text-secondary">
										<i
											class="fa fa-close"
											@mouseover="$event.target.classList.add('text-danger')"
											@mouseout="$event.target.classList.remove('text-danger')"
											@click="deleteCategory(index)"
										></i>
									</td>
								</tr>
							</tbody>
						</table>
						<div class="row">
							<div class="col-sm-12 col-md-5">
								<div
									class="d-inline"
								>Записи с {{ pagination.from }} до {{ pagination.to }} из {{ pagination.total }} записей</div>
							</div>

							<div class="col-sm-12 col-md-7">
								<div class="float-right">
									<paginate
										v-model="page"
										:page-count="pagination.pageCount"
										:prev-text="'«'"
										:next-text="'»'"
										:container-class="'pagination mb-0'"
										:page-class="'page-item'"
										:prev-class="'page-item'"
										:next-class="'page-item'"
										:page-link-class="'page-link'"
										:prev-link-class="'page-link'"
										:next-link-class="'page-link'"
									></paginate>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Paginate from "vuejs-paginate";
export default {
	components: {
		Paginate
	},

	data() {
		return {
			categories: [],
			currentCat: {
				id: "",
				name_ru: "",
				name_en: "",
				parent_id: 0
			},
			paginateOptions: [5, 10, 25, 50, 100],
			paginateSelect: 10,

			search: "",
			sortBy: "name_ru",
			// orderBy: "asc",
			orderByAsc: true,

			title: "Новая рубрика",
			submitBtnTitle: "Добавить новую рубрику",

			page: 1
		};
	},

	computed: {
		searchedCategories: function() {
			if (!this.search) {
				return this.categories;
			}
			var self = this;
			return this.categories.filter(function(cat) {
				if (
					cat.name_ru.toLowerCase().indexOf(self.search.toLowerCase()) !==
						-1 ||
					cat.name_en.toLowerCase().indexOf(self.search.toLowerCase()) !==
						-1
				) {
					return true;
				} else {
					return false;
				}
			});
		},

		orderedCategories: function() {
			return _.orderBy(this.searchedCategories, this.sortBy, this.orderBy);
		},

		showedCategories: function() {
			return this.orderedCategories.filter(function(cat, key) {
				if (
					key >= this.pagination.from - 1 &&
					key <= this.pagination.to - 1
				) {
					return cat;
				}
			});
		},

		pagination() {
			return {
				pageCount: Math.ceil(
					this.orderedCategories.length / this.paginateSelect
				),
				currentPage: this.page,
				from: 1 + this.paginateSelect * (this.page - 1),
				to: Math.min(
					this.orderedCategories.length,
					this.paginateSelect * this.page
				),
				total: this.orderedCategories.length
			};
		},

		orderBy() {
			if (this.orderByAsc) {
				return "asc";
			} else {
				return "desc";
			}
		},

		clearBtnClass() {
			if (this.currentCat.id) {
				return "btn-outline-primary";
			} else {
				return "btn-outline-secondary disabled";
			}
		}
	},

	created() {
		this.fetch();
	},

	methods: {
		fetch(page = 1) {
			axios
				.get("/api/categories", {
					params: {
						sortBy: this.sortBy,
						orderBy: this.orderBy,
						search: this.search
					}
				})
				.then(({ data }) => {
					this.categories = data;
				});
		},

		saveCategory() {
			const params = {
				name_ru: this.currentCat.name_ru,
				name_en: this.currentCat.name_en,
				parent_id: this.currentCat.parent_id
			};
			if (this.currentCat.id) {
				axios
					.put("/api/categories/" + this.currentCat.id, params)
					.then(resp => {
						if (resp.data.status === "success") {
							this.$notify({
								group: "custom-template",
								type: "alert-success",
								text: resp.data.message,
								duration: -1
							});
							this.fetch();
						}
					});
			} else {
				axios.post("/api/categories", params).then(resp => {
					if (resp.data.status === "success") {
						this.$notify({
							group: "custom-template",
							type: "alert-success",
							text: resp.data.message,
							duration: -1
						});
						this.fetch();
					}
				});
			}
		},

		showCategory(index) {
			this.title = "Рубрика №" + this.categories[index].id;
			this.submitBtnTitle = "Обновить";
			this.currentCat = _.cloneDeep(this.categories[index]);
		},

		deleteCategory(index) {
			if (
				confirm("Удалить рубрику " + this.categories[index].name_ru + "?")
			) {
				axios
					.delete("/api/categories/" + this.categories[index].id)
					.then(resp => {
						if (resp.data.status === "success") {
							this.categories.splice(index, 1);
							this.$notify({
								group: "custom-template",
								type: "alert-success",
								text: resp.data.message,
								duration: -1
							});
						}
					});
			}
		},

		clearForm() {
			this.title = "Новая рубрика";
			this.submitBtnTitle = "Добавить новую рубрику";
			this.currentCat = {
				id: "",
				name_ru: "",
				name_en: "",
				parent_id: 0
			};
		},

		setOrder(sortBy) {
			this.sortBy = sortBy;
			this.orderByAsc = !this.orderByAsc;
			this.page = 1;
		},

		showOrder(linkOrder) {
			if (linkOrder === this.sortBy) {
				if (this.orderBy === "asc") {
					return "sorting_asc";
				} else {
					return "sorting_desc";
				}
			}
		}
	}
};
</script>

<style scoped>
thead > tr > th.sorting_asc,
thead > tr > th.sorting_desc,
thead > tr > th.sorting,
thead > tr > td.sorting_asc,
thead > tr > td.sorting_desc,
thead > tr > td.sorting {
	padding-right: 30px;
	color: var(--primary);
}
thead > tr > th:active,
thead > tr > td:active {
	outline: none;
}
thead .sorting,
thead .sorting_asc,
thead .sorting_desc,
thead .sorting_asc_disabled,
thead .sorting_desc_disabled {
	cursor: pointer;
	position: relative;
}
thead .sorting:before,
thead .sorting:after,
thead .sorting_asc:before,
thead .sorting_asc:after,
thead .sorting_desc:before,
thead .sorting_desc:after,
thead .sorting_asc_disabled:before,
thead .sorting_asc_disabled:after,
thead .sorting_desc_disabled:before,
thead .sorting_desc_disabled:after {
	position: absolute;
	bottom: 0.9em;
	display: block;
	opacity: 0.3;
}
thead .sorting:before,
thead .sorting_asc:before,
thead .sorting_desc:before,
thead .sorting_asc_disabled:before,
thead .sorting_desc_disabled:before {
	right: 1em;
	content: "\2191";
}
thead .sorting:after,
thead .sorting_asc:after,
thead .sorting_desc:after,
thead .sorting_asc_disabled:after,
thead .sorting_desc_disabled:after {
	right: 0.5em;
	content: "\2193";
}
thead .sorting_asc:before,
thead .sorting_desc:after {
	opacity: 1;
}
thead .sorting_asc_disabled:before,
thead .sorting_desc_disabled:after {
	opacity: 0;
}
</style>