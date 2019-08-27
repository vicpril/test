<template>
	<div>
		<div class="row">
			<div class="col-md-5">
				<div class="card">
					<div class="card-header">
						<h5 v-if="currentCat.id" class="h5 mb-0">Редактировать рубрику</h5>
						<h5 v-else class="h5 mb-0">Новая рубрика</h5>
					</div>
					<div class="card-body">
						<div class="form-group">
							<label class="h6">Название - рус</label>
							<input
								type="text"
								class="form-control mr-2"
								:class="checkError('title_ru')"
								v-model="currentCat.title_ru"
							>
							<div class="invalid-feedback" v-for="(error, key) in errors['title_ru']" :key="key">{{error}}</div>
						</div>
						<div class="form-group">
							<label class="h6">Название - eng</label>
							<input
								type="text"
								class="form-control mr-2"
								:class="checkError('title_en')"
								v-model="currentCat.title_en"
							>
							<div class="invalid-feedback" v-for="(error, key) in errors['title_en']" :key="key">{{error}}</div>
						</div>
						<div class="form-group">
							<label class="h6">Родительская рубрика</label>
							<select class="form-control" :class="checkError('parent_id')" v-model="currentCat.parent_id">
								<option value="0">Нет</option>
								<option
									v-for="(cat, index) in categories"
									:key="index"
									v-bind:value="cat.id"
									:disabled="currentCat.id === cat.id"
								>{{ cat.title_ru }}</option>
							</select>
							<div
								class="invalid-feedback"
								v-for="(error, key) in errors['parent_id']"
								:key="key"
							>{{error}}</div>
						</div>
					</div>
					<div class="card-footer">
						<button
							type="button"
							class="btn btn-outline-primary float-left"
							@click.prevent="clearForm"
						>Очистить форму</button>
						<button
							v-if="currentCat.id"
							type="button"
							class="btn btn-primary float-right"
							@click.prevent="update(currentCat.id)"
						>Обновить</button>
						<button
							v-else
							type="button"
							class="btn btn-primary float-right"
							@click.prevent="save"
						>Добавить новую рубрику</button>
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
									<!-- 									<th>ID</th> -->
									<th
										class="sorting"
										:class="showOrder('title_ru')"
										@click="setOrder('title_ru')"
									>Название - рус</th>
									<th
										class="sorting"
										:class="showOrder('title_en')"
										@click="setOrder('title_en')"
									>Название - eng</th>
									<th>Род.</th>
									<th class="sorting" :class="showOrder('articles')" @click="setOrder('articles')">Статьи</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(cat, index) in showedCategories " :key="index">
									<!-- 									<td>{{ cat.id }}</td> -->
									<td>
										<a href @click.prevent="showCategory(index)">{{ cat.title_ru }}</a>
									</td>
									<td>{{ cat.title_en }}</td>
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
				title_ru: "",
				title_en: "",
				parent_id: 0
			},
			
			paginateOptions: [5, 10, 25, 50, 100],
			
			paginateSelect: 10,

			search: "",
			
			sortBy: "title_ru",
			
			orderByAsc: true,

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
					cat.title_ru.toLowerCase().indexOf(self.search.toLowerCase()) !==
						-1 ||
					cat.title_en.toLowerCase().indexOf(self.search.toLowerCase()) !==
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
			var self = this;
			return this.orderedCategories.filter(function(cat, key) {
				if (
					key >= self.pagination.from - 1 &&
					key <= self.pagination.to - 1
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

	mounted() {
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

		save() {
			const params = {
				title_ru: this.currentCat.title_ru,
				title_en: this.currentCat.title_en,
				parent_id: this.currentCat.parent_id
			};
			axios
				.post("/api/categories", params)
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
		},

		update(id) {
			const params = {
				title_ru: this.currentCat.title_ru,
				title_en: this.currentCat.title_en,
				parent_id: this.currentCat.parent_id,
				id: id
			};
			axios
				.put("/api/categories/" + id, params)
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
		},

		checkError(error) {
			if (this.errors.hasOwnProperty(error)) {
				return "is-invalid";
			}
		},

		showCategory(index) {
			this.errors = {};
			this.title = "Рубрика №" + this.showedCategories[index].id;
			this.currentCat = _.cloneDeep(this.showedCategories[index]);
		},

		deleteCategory(index) {
			if (
				confirm(
					"Удалить рубрику " + this.showedCategories[index].title_ru + "?"
				)
			) {
				axios
					.delete("/api/categories/" + this.showedCategories[index].id)
					.then(resp => {
						if (resp.data.status === "success") {
							var self = this;
							const i = this.categories.findIndex(cat => {
								return cat.id === self.showedCategories[index].id;
							});
							this.categories.splice(i, 1);

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
			this.currentCat = {
				id: "",
				title_ru: "",
				title_en: "",
				parent_id: 0
			};
			this.errors = {};
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