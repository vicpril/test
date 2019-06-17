<template>
	<div class="card">
		<div class="card-header">
			<div class="form-inline">
				<i class="mr-1">Название меню</i>
				<input id="menu-title" type="text" class="form-control" :value="value.title">

				<button
					type="button"
					class="btn btn-primary text-nowrap ml-auto"
					@click="$emit('save')"
				>Сохранить изменения</button>
			</div>
		</div>
		<div class="card-body">
			<h5>Структура меню</h5>
			<p>Расположите элементы в желаемом порядке путём перетаскивания. Можно также щёлкнуть на стрелку справа от элемента, чтобы открыть дополнительные настройки.</p>

			<draggable 
								 v-model="links" 
								 
								 class="list-group" 
								 ghost-class="ghost"
								 >
				<div v-for="(link, index) in links" :key="'link-group-'+index">
					<div class="list-group-item mb-0" :key="'link-'+index">
						<strong>{{ link.title }}</strong>
						<div class="float-right m-0 p-0">
							<span class="text-grey mr-3">{{ getItemType(link.type) }}</span>
							<a
								class="item-edit text-grey collapsed"
								data-toggle="collapse"
								:href="'#link-content-'+index"
								aria-expanded="false"
								:aria-controls="'link-content-'+index"
							></a>
						</div>
					</div>
					<div class="collapse" :id="'link-content-'+index" :key="'link-content-'+index">
						<div class="card card-body link-info">
								<div class="form-group mb-2">
										<label><i>Текст ссылки:</i></label>
										<input type="text" class="form-control" v-model="link.title">
								</div>
								<div class="form-group mb-2">
										<label><i>Страница:</i></label>
										<a :href="link.url" target="_blank">{{link.path}}</a>
								</div>
								<div class="form-group mb-0">
										<a href="#" class="text-danger" @click.prevent="$emit('delete', index)">Удалить</a>
								</div>
						</div>
					</div>
				</div>
			</draggable>
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
			type: Object,
			default: () => ({})
		}
	},
	
	computed: {
		links: {
			get() {
				return this.value.links;
			},

			set(value) {
				value.forEach(function(link, index) {
					link.order = index + 1;
				});
				var newMenu = this.value;
				newMenu.links = value;
				this.$emit("input", newMenu);
			}
		}
	},

	methods: {
		getItemType($type) {
			switch ($type) {
				case "page":
					return "Страница";
					break;
				case "common":
					return "Произвольная ссылка";
					break;
				default:
					break;
			}
		},

		collapsedAll() {
			// var links = document.getElementsByClassName(
			// 	"item-edit:has(.collapsed)"
			// );
			// Array.prototype.forEach.call(links, function(el) {
			// 	el.classList.add("collapsed");
			// });
		}
	}
};
</script>

<style scoped>
#menu-title {
	width: 40%;
	/* font-size: 1.1em; */
}

.list-group {
	width: 400px;
}

.list-group-item {
	background: #fafafa;
	color: #23282d;
	border-radius: 0px;
	margin-top: 7px;
	
}

.list-group-item :hover {
	cursor: move;
	border-color: #999;
}

.ghost {
	opacity: 0.5;
	background: #c8ebfb;
}

a.item-edit {
	position: absolute;
	right: -1px;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 30px;
	height: 100%;
	margin-right: 0 !important;
	outline: 0;
	overflow: hidden;
	white-space: nowrap;
	cursor: pointer !important;
	text-decoration: none !important;
	color: #000;
}

a.item-edit.collapsed:before {
	content: "\f0d7";
	font-family: FontAwesome;
	text-indent: 0;
}

a.item-edit:before {
	content: "\f0d8";
	font-family: FontAwesome;
	text-indent: 0;
}

.link-info {
	border-radius: 0px;
	border-top: none;
	margin: 0px;
/* 	padding-left: 8px;
	padding-right: 8px; */
}
</style>


