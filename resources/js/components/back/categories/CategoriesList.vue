<template>
<div>
  <div class="row">
    <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h5 class="h5 mb-0">Список категорий</h5>
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
              class="table table-striped table-bordered table-responsive-md"
              style="width:100%"
            >
              <thead class="text-black">
								<tr>
									<th class="sorting" :class="showOrder('name_ru')" @click="setOrder('name_ru')">Название - рус</th>
									<th class="sorting" :class="showOrder('name_en')" @click="setOrder('name_en')">Название - eng</th>
									<th
										class="sorting"
										:class="showOrder('articles')"
										@click="setOrder('articles')"
									>Статьи</th>
									<th class="sorting" :class="showOrder('updated_at')" @click="setOrder('updated_at')">Дата</th>
									<th></th>
								</tr>
              </thead>
              <tbody>
                <tr v-for="(cat, index) in categories" :key="index">
                  <td>
                    <a  href=""
                        @click.prevent="showCategory(index)"
                        >{{ cat.name_ru }}</a>
                  </td>
                  <td>
                    {{ cat.name_en }}
                  </td>
                  <td>{{ cat.articles }}</td>
                  <td>{{ cat.updated_at }}</td>
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
    
<!--     <div class="col-md-5"></div> -->
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
      paginateOptions: [5, 10, 25, 50, 100],
			paginateSelect: 10,
			search: "",
			sortBy: "name_ru",
			// orderBy: "asc",
			orderByAsc: true
    }
  },
  
  computed: {
		orderedCategories: function() {
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
    this.fetch()
  },
  
  methods: {
    fetch(page = 1) {
			axios
				.get("/api/categories", {
					params: {
						paginate: this.paginateSelect,
						page: page,
						sortBy: this.sortBy,
						orderBy: this.orderBy,
						search: this.search
					}
				})
				.then(({ data }) => {
					this.categories = data.data;
					this.pagination.pageCount = data.last_page;
					this.pagination.currentPage = data.current_page;
					this.pagination.from = data.from;
					this.pagination.to = data.to;
					this.pagination.total = data.total;
				});
		},
    
    saveCategory(index) {
      
    },
    
    showCategory(index) {
      
    },
    
    deleteCategory(index) {
      
    },
    
    clearForm() {
      
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
  }
  
  
}

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