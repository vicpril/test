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
					:reduce="users => users.id"
					label="name"
					:value="value"
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
				<input
					v-for="(user, index) in value"
					:key="index"
					hidden
					type="number"
					readonly
					name="users[]"
					:value="user"
				>
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
		
	},

	async created() {
		await this.fetchUsers();
	},

	methods: {
		fetchUsers() {
			axios.get("/api/userslist").then(({ data }) => {
				this.users = data.data;
			});
		},

		input(val) {

			this.$emit("input", val);
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