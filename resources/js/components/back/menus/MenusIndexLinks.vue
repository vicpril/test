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
					<div class="pages-panel mb-3">
						<ul class="page-list">
							<li v-for="(page, index) in pages" :key="'page-'+index">
								<b-form-checkbox
									:id="'add-page-' + page.id"
									:value="index"
									v-model="exportPagesIndex"
								>{{ page.title_ru }}</b-form-checkbox>
							</li>
						</ul>
					</div>
					<button class="btn btn-link" @click="selectAll">Выделить все</button>
					<button class="btn btn-secondary float-right" @click="addToMenu('page')">Добавить в меню</button>
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
<!-- 					<b-card-text> -->
								<div class="form-group">
										<label><i>Текст ссылки:</i></label>
										<input type="text" class="form-control" v-model="commonPage.title">
								</div>
								<div class="form-group">
										<label><i>Ссылка на страницу:</i></label>
										<input type="text" class="form-control" v-model="commonPage.url">
								</div>
						<button class="btn btn-secondary float-right mb-3" @click="addToMenu('common')">Добавить в меню</button>
<!-- 					</b-card-text> -->
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
			exportPagesIndex: [],
			commonPage: {
				title: "",
				url: "",
			}
		};
	},
	
	computed: {
// 		exportPages() {
// 			return this.pages.filter((page, index) => {
// 				return this.exportPagesIndex.includes(index);
// 			});
// 		}
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
			this.exportPagesIndex = [];
			this.pages.forEach(function(item, index) {
				this.exportPagesIndex.push(index);
			}, this);
		},

		addToMenu(type) {
			switch(type) {
				case "page":
					if(this.exportPagesIndex.length == 0) {
						alert("Выберите страницы для добавления в меню");
					} else {
						this.exportPagesIndex.forEach((index)=>{
							this.$emit('addPage', this.pages[index]);
						})
					}
					break;
				case "common":
					
					break;
			}
		}
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

