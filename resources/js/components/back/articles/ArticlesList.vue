<template>
	<div>
		<div class="row mb-2">
			<div class="col-sm-12 col-md-6">
				<div class="form-inline">
					<label>
						Показать
						<select
							class="custom-select custom-select-sm form-control form-control-sm d-flex mx-1"
							v-model="paginateSelect"
							@change="fetch"
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
						<input
							type="search"
							class="form-control form-control-sm ml-1"
							v-model="search"
							@blur="fetch"
						>
					</label>
				</div>
			</div>
		</div>
		<table
			class="table table-striped table-responsive-md"
			style="width:100%"
			id
		>
			<thead class="text-black">
				<tr>
					<th class="sorting" :class="showOrder('title')" @click="setOrder('title')">Заголовок</th>
					<th>Авторы</th>
					
					<th></th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(article, index) in articles" :key="index">
					<td>
						<a :href="article.editLink">{{ article.title_ru }}</a>
					</td>
					<td>
						<p class="my-0"
							 v-for="(user, index) in users"
							 :key="index">{{ user }}</p> 
					</td>
					
					<td class="text-secondary">
						<i
							class="fa fa-close"
							@mouseover="$event.target.classList.add('text-danger')"
							@mouseout="$event.target.classList.remove('text-danger')"
							@click="deleteArticle(index)"
						></i>
					</td>
				</tr>
			</tbody>
		</table>
		<div class="row">
			<div class="col-sm-12 col-md-5">
				<div
					class="form-inline"
				>Записи с {{ pagination.from }} до {{ pagination.to }} из {{ pagination.total }} записей</div>
			</div>

			<div class="col-sm-12 col-md-7">
				<div class="float-right">
					<paginate
						v-model="pagination.currentPage"
						:page-count="pagination.pageCount"
						:click-handler="fetch"
						:prev-text="'Предыдущая'"
						:next-text="'Следующая'"
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
</template>

<script>
import Paginate from "vuejs-paginate";

export default {
	data() {
		return {
			articles: [],
			paginateOptions: [5, 10, 25, 50, 100],
			paginateSelect: 10,
			search: "",
			sortBy: "title",
			// orderBy: "asc",
			orderByAsc: true
		};
	},

	computed: {
		orderedArticles: function() {
			return _.orderBy(this.articles, this.sortBy, this.orderBy);
		},

		pagination() {
			return {
				pageCount: 1,
				currentPage: 1,
				from: 1,
				to: 1,
				total: 1
			};
		},

		orderBy() {
			if (this.orderByAsc) {
				return "asc";
			} else {
				return "desc";
			}
		}
	},

	created() {
		this.fetch();
	},
	
	mounted() {
		if (this.$route.query.articledeleted) {
			this.$notify({
							group: "custom-template",
							type: "alert-success",
							text: "Статья удалена",
							duration: -1
						});
		};
	},

	methods: {
		fetch(page = 1) {
			axios
				.get("/api/articles", {
					params: {
						paginate: this.paginateSelect,
						page: page,
						sortBy: this.sortBy,
						orderBy: this.orderBy,
						search: this.search
					}
				})
				.then(({ data }) => {
					this.articles = data.data;
					this.pagination.pageCount = data.meta.last_page;
					this.pagination.currentPage = data.meta.current_page;
					this.pagination.from = data.meta.from;
					this.pagination.to = data.meta.to;
					this.pagination.total = data.meta.total;
				});
		},

		deleteArticle(index) {
			if (
				confirm("Удалить статью " + this.articles[index].full_name + "?")
			) {
				axios.delete("/api/articles/" + this.articles[index].id).then(resp => {
					if (resp.data.status === "success") {
						this.fetch();
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

		setOrder(sortBy) {
			this.sortBy = sortBy;
			this.orderByAsc = !this.orderByAsc;
			this.fetch();
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
	},

	components: {
		Paginate
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
