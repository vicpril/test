<template>
	<div class="card">
		<div class="card-header d-flex">
			<h5 class="mr-1 my-auto">Список статей выпуска</h5>
			<a
				class="btn btn-outline-primary btn-round my-0 ml-auto"
				href="/admin/articles/create"
			>Добавить новую статью</a>
		</div>
		<div class="card-body">
			<table
				v-if="value.length > 0"
				class="table table-sm table-striped table-responsive-md"
				style="width:100%"
				id
			>
				<thead class="text-black">
					<tr>
						<th></th>
						<th>
							<b-form-checkbox v-model="isCheckAll" :indeterminate="indeterminate" @change="checkAll"></b-form-checkbox>
						</th>
						<th>Заголовок</th>
						<th>Авторы</th>
						<th>Рубрики</th>
						<th>Метки</th>
						<th>Опуб.</th>
						<th></th>
					</tr>
				</thead>
				<draggable
					tag="tbody"
					handle=".handle"
					v-model="articles"
					@choose="showCat=false"
					@end="showCat=true"
				>
					<template v-for="(article, index) in articles">
						<!-- <tr v-if="showCat" :key="article.id+1000">
							<td
								colspan="7"
								class="text-center h6"

							>{{ article.categories[0].title_ru }}</td>
						</tr>-->
						<tr :key="article.id">
							<td
								class="handle text-secondary my-auto px-2"
								@mouseover="$event.target.classList.add('text-warning')"
								@mouseout="$event.target.classList.remove('text-warning')"
							>
								<i class="fa fa-arrows-v fa-lg"></i>
								<!-- {{ article.position }} -->
							</td>
							<td>
								<b-form-checkbox
									:id="'export-article-' + article.id"
									:value="article.id"
									v-model="exportArticles"
								></b-form-checkbox>
							</td>
							<td class="title trunc">
								<a :href="article.editLink">{{ article.title_ru }}</a>
							</td>
							<td>
								<p class="my-0" v-for="(user, index) in article.users" :key="index">
									<a :href="user.editLink">{{ user.short_name_ru }}</a>
								</p>
							</td>
							<td>
								<p
									class="my-0"
									v-for="(category, index) in article.categories"
									:key="index"
								>{{ category.title_ru }}</p>
							</td>
							<td>
								<p class="my-0" v-for="(tag, index) in article.tags" :key="index">{{ tag }}</p>
							</td>
							<td>
								<label class="mx-1 switch switch-label switch-3d switch-success form-check-label">
									<input
										type="checkbox"
										class="switch-input"
										v-model="article.status"
										@click="statusChange(index, !article.status)"
									>
									<span data-checked="✓" data-unchecked="✕" class="switch-slider"></span>
								</label>
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
					</template>
				</draggable>
			</table>
			<span v-else class="d-flex justify-content-center">В этом выпуске пока нет статей</span>
		</div>
	</div>
</template>

<script>
import draggable from "vuedraggable";
	
export default {
	components: {
		draggable
	},
	
	props: {
		value: {
			type: Array,
			default: () => {
				[];
			}
		},
		
		export: {
			type: Array,
			default: () => {
				[];
			}
		}
	},
	
	data() {
		return {
			exportArticles: [],
			isCheckAll: false,
			indeterminate: false
		};
	},

	computed: {
		articles: {
			get() {
				return this.value;
			},
			
			set(value) {
				value.forEach(function(article, index) {
					article.position = index + 1;
				});
				this.$emit("input", value);
				this.updateExportArticles();
			}
		}
	},
	
	watch: {
		exportArticles(value) {
			this.changeCheckAll(value);
			var exp = this.articles
				.filter(article => {
					return value.includes(article.id) ? true : false;
				})
				.map(article => {
					return article.id;
				});
			this.$emit("update:export", exp);
		}
	},

	methods: {
		checkAll(checked) {
			var selected = [];
			if (checked) {
				this.articles.forEach(function(a) {
					selected.push(a.id);
				});
			}
			this.exportArticles = selected;
		},
		
		changeCheckAll(value) {
			if (value.length === 0) {
				this.indeterminate = false;
				this.allSelected = false;
			} else if (value.length === this.articles.length) {
				this.indeterminate = false;
				this.allSelected = true;
			} else {
				this.indeterminate = true;
				this.allSelected = false;
			}
		},

		updateExportArticles() {
			this.exportArticles.push("0");
			this.exportArticles.splice(-1, 1);
		},

		statusChange(index, newStatus) {
			const message = newStatus
				? 'Опубликовать статью "'
				: 'Снять с публикации статью "';
			if (confirm(message + this.articles[index].title_ru + '"?')) {
				axios
					.post("/api/articles/status/" + this.articles[index].id, {
						status: newStatus ? "public" : "private"
					})
					.then(resp => {
						if (resp.data.status === "success") {
							// 						this.fetch();
							this.$notify({
								group: "custom-template",
								type: "alert-success",
								text: resp.data.message,
								duration: 5000
							});
						} else {
							this.$notify({
								group: "custom-template",
								type: "alert-danger",
								text: resp.data.message,
								duration: 5000
							});
							this.articles[index].status = !newStatus;
						}
					});
			} else {
				event.preventDefault();
			}
			this.$emit("update", this.articles);
		},

		deleteArticle(index) {
			if (
				confirm('Удалить статью "' + this.articles[index].title_ru + '"?')
			) {
				axios
					.delete("/api/articles/" + this.articles[index].id)
					.then(resp => {
						if (resp.data.status === "success") {
							// this.fetch();
							this.$notify({
								group: "custom-template",
								type: "alert-success",
								text: resp.data.message,
								duration: 8000
							});
							this.$emit("update", this.articles.splice(index, 1));
						}
					});
			}
		}
	}
};
</script>

<style scope>
/* tablestyle */
table {
	width: 100%;
}
table tr td {
	vertical-align: middle !important;
}
td.trunc {
	max-width: 0;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
td.title {
	width: 30%;
}

/* checkbox color */
table .custom-control-input:checked ~ .custom-control-label::before {
	color: #fff;
	border-color: var(--success);
	background-color: var(--success);
}

table
	.custom-checkbox
	.custom-control-input:indeterminate
	~ .custom-control-label::before {
	border-color: var(--secondary);
	background-color: var(--secondary);
}
</style>

