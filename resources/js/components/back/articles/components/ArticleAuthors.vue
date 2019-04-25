<template>
	<div class="card">
		<div class="card-header">
			<h5 class="h5 mb-0">Авторы</h5>
		</div>
		<div class="card-body">
			<div class="d-flex">
				<v-select
					id="users"
					class="flex-grow-1"
					multiple
					:options="users"
					label="name"
					:value="valueObject"
					@input="input"
				>
					<div slot="no-options">
						Авторов по запросу не найдено.
						<a
							href="/admin/users/create"
							target="_blank"
						>Добавить нового автора</a>
					</div>
				</v-select>
				<select name="users[]" v-model="value" multiple>
					<option v-for="(user, index) in users" :key="index" :value="user.id">{{ user.name }}</option>
				</select>
				<b-button
					v-b-tooltip.hover
					title="Обновить список авторов"
					type="button"
					variant="outline-secondary"
					class="btn-sm ml-2 my-auto"
					@click="fetchUsers"
				>
					<i class="fa fa-refresh"></i>
				</b-button>
			</div>
					<div>{{ value }}</div>
		</div>
	</div>
</template>

<script>
import vSelect from "vue-select";
export default {
	components: {
		vSelect
	},
	props: ["value"],

	data: function() {
		return {
			users: []
		};
	},

	computed: {
		valueId() {
			return this.value.map(val => {
				return val.id;
			});
		},
		valueObject() {
			return this.value.map(id => {
				return {
					id: id,
					name: this.users.filter(x => x.id === id).map(x => x.name)[0],
// 					name: this.users.findr(x => x.id === id).name,

				}
			}) 
		}
		
	},
	filters: {
		
	},

	created() {
		this.fetchUsers();
	},

	methods: {
		fetchUsers() {
			axios.get("/api/userslist").then(({ data }) => {
				this.users = data.data;
			});
		},
		
		input(val) {
			val = val.map(val => {
				return val.id;
			});
			this.$emit('input', val);
		}
	}
};
</script>

<style scope>
#users .vs__selected {
	background-color: var(--primary);
	color: white;
	font-weight: 600;
	/* font-size: 1rem; */
}
</style>