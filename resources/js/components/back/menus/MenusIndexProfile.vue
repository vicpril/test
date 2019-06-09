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

			<draggable :list="value.links" class="list-group" ghost-class="ghost">
				<div v-for="(link, index) in value.links" :key="'link-'+index" class="list-group-item mb-1">
					<strong>{{ link.title }}</strong>
				</div>
			</draggable>
		</div>
		<div class="card-footer"></div>
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

	methods: {}
};
</script>

<style scoped>
#menu-title {
	width: 40%;
	/* font-size: 1.1em; */
}

.list-group-item {
	width: 400px;
	background: #fafafa;
	color: #23282d;
}

.list-group :hover {
	cursor: move;
	border-color: #999;
}

.ghost {
	opacity: 0.5;
	background: #c8ebfb;
}
</style>


