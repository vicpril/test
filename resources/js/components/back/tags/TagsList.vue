<template>
	<div>
		<div class="row">
			<div class="col-md-5">
				<div class="card">
					<div class="card-header">
						<h5 v-if="currentTag.id" class="h5 mb-0">Метка №{{ currentTag.id }}</h5>
						<h5 v-else class="h5 mb-0">Новая метка</h5>
					</div>
					<div class="card-body px-0">
						<div class="col-md-12">
							<div class="form-group">
								<label class="h6">Название - рус</label>
								<input type="text" 
											 class="form-control mr-2" 
											 :class="checkError('title_ru')"
											 v-model="currentTag.title_ru">
								<div
										class="invalid-feedback"
										v-for="(error, key) in errors['title_ru']"
										:key="key"
									>{{error}}</div>
							</div>
						</div>
						<div class="col-md-12">
							<div class="form-group">
								<label class="h6">Название - eng</label>
								<input type="text" class="form-control mr-2"
											 :class="checkError('title_en')"
											 v-model="currentTag.title_en">
								<div
										class="invalid-feedback"
										v-for="(error, key) in errors['title_en']"
										:key="key"
									>{{error}}</div>
							</div>
						</div>
					</div>
					<div class="card-footer">
						<button
							type="button"
							class="btn btn-outline-primary float-left "
							@click.prevent="clearForm"
						>Очистить форму</button>
						<button
							v-if="currentTag.id"
							type="button"
							class="btn btn-primary float-right"
							@click.prevent="update(currentTag.id)"
						>Обновить</button>
						<button
							v-else
							type="button"
							class="btn btn-primary float-right"
							@click.prevent="save"
						>Добавить новую метку</button>
					</div>
				</div>
			</div>

			<div class="col-md-7">
				<div class="card">
					<div class="card-header">
						<h5 class="h5 mb-0">Список меток</h5>
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
									<th>ID</th>
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
									<th class="sorting" :class="showOrder('articles')" @click="setOrder('articles')">Статьи</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(tag, index) in showedTags " :key="index">
									<td>{{ tag.id }}</td>
									<td>
										<a href @click.prevent="showTag(index)">{{ tag.title_ru }}</a>
									</td>
									<td>{{ tag.title_en }}</td>
									<td>{{ tag.articles }}</td>
									<td class="text-secondary">
										<i
											class="fa fa-close"
											@mouseover="$event.target.classList.add('text-danger')"
											@mouseout="$event.target.classList.remove('text-danger')"
											@click="deleteTag(index)"
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
			tags: [],
			currentTag: {
				id: "",
				title_ru: "",
				title_en: "",
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
		searchedTags: function() {
			if (!this.search) {
				return this.tags;
			}
			var self = this;
			return this.tags.filter(function(tag) {
				if (
					tag.title_ru.toLowerCase().indexOf(self.search.toLowerCase()) !==
						-1 ||
					tag.title_en.toLowerCase().indexOf(self.search.toLowerCase()) !==
						-1
				) {
					return true;
				} else {
					return false;
				}
			});
		},

		orderedTags: function() {
			return _.orderBy(this.searchedTags, this.sortBy, this.orderBy);
		},

		showedTags: function() {
			var self = this;
			return this.orderedTags.filter(function(tag, key) {
				if (
					key >= self.pagination.from - 1 &&
					key <= self.pagination.to - 1
				) {
					return tag;
				}
			});
		},

		pagination() {
			return {
				pageCount: Math.ceil(
					this.orderedTags.length / this.paginateSelect
				),
				currentPage: this.page,
				from: 1 + this.paginateSelect * (this.page - 1),
				to: Math.min(
					this.orderedTags.length,
					this.paginateSelect * this.page
				),
				total: this.orderedTags.length
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
			if (this.currentTag.id) {
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
				.get("/api/tags", {
					params: {
						sortBy: this.sortBy,
						orderBy: this.orderBy,
						search: this.search
					}
				})
				.then(({ data }) => {
					this.tags = data;
				});
		},
		
		save() {
				const params = {
					title_ru: this.currentTag.title_ru,
					title_en: this.currentTag.title_en,
				};
				axios
						.post("/api/tags", params)
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
						})
		},
		
		update(id) {
			const params = {
					title_ru: this.currentTag.title_ru,
					title_en: this.currentTag.title_en,
					id: id
			};
			axios
					.put("/api/tags/" + id, params)
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
					})
		},
		
		checkError(error) {
			if (this.errors.hasOwnProperty(error)) {
				return "is-invalid";
			}
		},

		showTag(index) {
			this.title = "Метка №" + this.showedTags[index].id;
			this.currentTag = _.cloneDeep(this.showedTags[index]);
		},

		deleteTag(index) {
			if (
				confirm("Удалить метку " + this.showedTags[index].title_ru + "?")
			) {
				axios
					.delete("/api/tags/" + this.showedTags[index].id)
					.then(resp => {
						if (resp.data.status === "success") {
							var self = this;
							const i = this.tags.findIndex((tag) => {return tag.id === self.showedTags[index].id});
							this.tags.splice(i, 1);
							
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
			this.currentTag = {
				id: "",
				title_ru: "",
				title_en: "",
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