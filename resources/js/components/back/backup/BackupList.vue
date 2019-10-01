<template>
	<div class="card">
		<div class="card-header">
			<h4 class="d-inline-block mr-3 mb-0">Список всех копий в архиве</h4>
			<button class="btn btn-primary btn-round d-inline-block float-right my-0" @click.prevent="createDump">
				Создать новую копию базы данных
			</button>
		</div>
		<div class="card-body">
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
										<button class="btn btn-outline-primary" @click="fetch">Reload</button>
									</div>
								</div>

				</div>
				<table class="table table-striped table-responsive-md" style="width:100%" id>
					<thead class="text-black">
						<tr>
							<th>Фаил</th>
							<th>Дата создания</th>
							<th>Размер</th>
							<th class="link-column"></th>
							<th class="link-column"></th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(dump, index) in dumpsSorted" :key="index">
							<td>
								{{dump.title}}
							</td>
							<td>
								{{dump.created_at}}
							</td>
							<td>
								{{dump.size | prettyBytes}}
							</td>

							<td class="text-secondary">
								<a :href="dump.download_link" title='Загрузить рузервную копию на компьютер'>
									<i
										class="fa fa-download text-secondary"
										@mouseover="$event.target.classList.add('text-success')"
										@mouseout="$event.target.classList.remove('text-success')"
									></i>
								</a>		
								
							</td>
							<td class="text-secondary">
								<i
									title="Удалить"
									class="fa fa-close"
									@mouseover="$event.target.classList.add('text-danger')"
									@mouseout="$event.target.classList.remove('text-danger')"
									@click.stop="deleteDump(index)"
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
		</div>
	</div>
</template>

<script>
import Paginate from "vuejs-paginate";

export default {
	data() {
		return {
			dumps: [],
			paginateOptions: [5, 10, 25, 50, 100],
			paginateSelect: 10,
// 			search: "",
// 			sortBy: "updated_at",
// 			orderByAsc: false
		};
	},

	computed: {

		dumpsSorted() {
			function compare(a, b) {
				if (a.created_at < b.created_at)
					return 1;
				if (a.created_at > b.created_at)
					return -1;
				return 0;
			}

			return this.dumps.sort(compare);
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
		if (this.$route.query.dumpdeleted) {
			this.$notify({
				group: "custom-template",
				type: "alert-success",
				text: "Копия удалена",
				duration: 6000
			});
		}
	},

	methods: {
		fetch(page = 1) {
			axios
				.get("/api/backup")
				.then( resp  => {
					this.dumps = resp.data.data;
					this.pagination.pageCount = resp.meta.last_page;
					this.pagination.currentPage = resp.meta.current_page;
					this.pagination.from = resp.meta.from;
					this.pagination.to = resp.meta.to;
					this.pagination.total = resp.meta.total;
				});
		},
		
		createDump() {
			if( confirm("Создать резервную копию базы данных?")) {
				
				axios.get("/api/backup/dump")
				.then(( resp ) => {
					this.fetch();
					this.$notify({
									group: "custom-template",
									type: "alert-success",
									text: resp.data.message,
									duration: 6000
								});
				})
				.catch(err => {
					this.$notify({
									group: "custom-template",
									type: "alert-danger",
									text: err.data.message,
									duration: -1
								});
				})
			}
		},

		deleteDump(index) {
			if (
				confirm('Удалить резервую копию "' + this.dumpsSorted[index].title + '"?')
			) {
				axios
					.delete("/api/backup/" + this.dumpsSorted[index].title)
					.then(( resp ) => {
						this.fetch();
						this.$notify({
										group: "custom-template",
										type: "alert-success",
										text: resp.data.message,
										duration: 6000
									});
					})
					.catch(err => {
						this.fetch();
						this.$notify({
										group: "custom-template",
										type: "alert-danger",
										text: err.data.message,
										duration: -1
									});
					})
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
	},
	
};
</script>

<style scoped>
.link-column {
	width: 10% !important;
}
	
.title-column {
	width: 40% !important;
}

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
