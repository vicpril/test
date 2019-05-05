<template>
	<div class="card">
		<div class="card-header">
			<h4 class="d-inline-block mr-3 mb-0">Список статей выпуска</h4>
			<a
				class="btn btn-primary btn-round d-inline-block float-right my-0"
				href="/admin/articles/create"
			>Добавить новую статью</a>
		</div>
		<div class="card-body">
			<table class="table table-sm table-striped table-responsive-md" style="width:100%" id>
				<thead class="text-black">
					<tr>
						<th></th>
						<th>Заголовок</th>
						<th>Авторы</th>
						<th>Рубрики</th>
						<th>Метки</th>
						<th>Опуб.</th>
						<th></th>
					</tr>
				</thead>
				<draggable tag="tbody" handle=".handle" v-model="articles">
					<template v-for="(article, index) in articles">
						<td
							colspan="7"
							class="text-center h6"
							:key="article.id + 9999"
						>{{ article.categories[0].title_ru }}</td>
						<tr :key="article.id">
							<td
								class="handle text-secondary my-auto"
								@mouseover="$event.target.classList.add('text-success')"
								@mouseout="$event.target.classList.remove('text-success')"
							>
								<i class="fa fa-arrows-v"></i>
								{{ article.position }}
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
								>{{ category.title_ru | cutString}}</p>
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
										@change="statusChange(index, article.status)"
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
		}
	},
	data() {
		return {
			articles: this.value
		};
	},

	// computed: {
	// 	articles() {
	// 		return this.value;
	// 	}
	// },
	watch: {
		articles(value, oldValue) {
			// value.forEach(function(article, index) {
			// 	article.position = index + 1;
			// });
			this.$emit("update", value);
		},
		value(value, oldValue) {
			// value.forEach(function(article, index) {
			// 	article.position = index + 1;
			// });
			this.articles = value;
		}
	},

	methods: {
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
				this.articles[index].status = !newStatus;
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
table {
	width: 100%;
}
td.trunc {
	max-width: 0;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
td.title {
	width: 40%;
}
</style>

