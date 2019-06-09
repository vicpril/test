<template>
	<div role="tablist">
		<b-card no-body class="mb-1">
			<b-card-header header-tag="header" class="p-1" role="tab">
				<b-button block href="#" v-b-toggle.accordion-1 variant="light">
					<strong>Страницы</strong>
				</b-button>
			</b-card-header>
			<b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
				<b-card-body>
					<div class="pages-panel mb-2">
						<ul class="page-list">
							<li v-for="(page, index) in pages" :key="'page-'+index">
								<b-form-checkbox
									:id="'add-page-' + page.id"
									:value="index"
									v-model="exportPages"
								>{{ page.title_ru }}</b-form-checkbox>
							</li>
						</ul>
					</div>
					<button class="btn btn-link" @click="selectAll">Выделить все</button>
					<button class="btn btn-secondary float-right" @click="addToMenu">Добавить в меню</button>
				</b-card-body>
			</b-collapse>
		</b-card>

		<b-card no-body class="mb-1">
			<b-card-header header-tag="header" class="p-1" role="tab">
				<b-button block href="#" v-b-toggle.accordion-2 variant="light">
					<strong>Произвольные ссылки</strong>
				</b-button>
			</b-card-header>
			<b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
				<b-card-body>
					<b-card-text></b-card-text>
				</b-card-body>
			</b-collapse>
		</b-card>
	</div>
</template>

<script>
export default {
	data() {
		return {
			pages: [],
			exportPages: []
		};
	},

	created() {
		this.fetchPages();
	},

	methods: {
		fetchPages() {
			axios.get("/api/pages?sortBy=title&orderBy=asc").then(({ data }) => {
				this.pages = data.data;
			});
		},

		selectAll() {
			this.exportPages = [];
			this.pages.forEach(function(item, index) {
				this.exportPages.push(index);
			}, this);
		},

		addToMenu() {}
	}
};
</script>

<style scoped>
ul.page-list {
	list-style: none;
	padding: 0;
	margin: 13px 0;
}

.pages-panel {
	min-height: 42px;
	max-height: 200px;
	overflow: auto;
	padding: 0 0.9em;
	border: 1px solid #ddd;
	background-color: #fdfdfd;
}
</style>

