<template>
	<div>
		<div class="row">
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
		<table class="table table-striped table-bordered table-responsive-md" style="width:100%" id>
			<thead class="text-primary">
				<tr>
					<th>
						<span @click="setOrder('full_name')">Автор</span>
					</th>
					<th>Eng</th>
					<th>
						<span @click="setOrder('email')">E-mail</span>
					</th>
					<th>Роль</th>
					<th>
						<span @click="setOrder('articles')">Статьи</span>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(user, index) in users" :key="index">
					<td>
						<a :href="user.editLink">{{ user.full_name }}</a>
					</td>
					<td>{{ user.last_name_en }} {{ user.initials_en }}</td>
					<td>{{ user.email }}</td>
					<td>{{ user.role }}</td>
					<td>{{ user.articles }}</td>
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
			users: [],
			paginateOptions: [5, 10, 25, 50],
			paginateSelect: 5,
			search: "",
			sortBy: "full_name",
			orderBy: "asc"
		};
	},

	computed: {
		orderedUsers: function() {
			return _.orderBy(this.users, this.sortBy, this.orderBy);
		},

		pagination() {
			return {
				pageCount: 1,
				currentPage: 1,
				from: 1,
				to: 1,
				total: 1
			};
		}
	},

	created: function() {
		this.fetch();
	},

	methods: {
		fetch(page = 1) {
			axios
				.get("/api/users", {
					params: {
						paginate: this.paginateSelect,
						page: page,
						sortBy: this.sortBy,
						search: this.search
					}
				})
				.then(({ data }) => {
					this.users = data.data;
					this.pagination.pageCount = data.meta.last_page;
					this.pagination.currentPage = data.meta.current_page;
					this.pagination.from = data.meta.from;
					this.pagination.to = data.meta.to;
					this.pagination.total = data.meta.total;
				});
		},

		setOrder(sortBy) {
			this.sortBy = sortBy;
			this.fetch();
		}
	},

	components: {
		paginate: Paginate
	}
};
</script>

<style scoped>
th span {
	cursor: pointer;
}
</style>
