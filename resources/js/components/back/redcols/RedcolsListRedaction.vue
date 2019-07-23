<template>
	<div>
		<b-card-title>
			This tab does not have the
			<code>no-body</code> prop set
		</b-card-title>
		<b-card-text>
			<table v-if="value.length > 0" class="table table-sm table-responsive-md" style="width:100%" id>
				<thead class="text-black">
					<tr>
						<th></th>
						<th>Pos</th>
						<th>Должность - RU</th>
						<th>Должность - EN</th>
						<th>Автор</th>
						<th></th>
					</tr>
				</thead>
				<draggable tag="tbody" v-model="redaction">
					<tr v-for="(item) in redaction" :key="item.id">
						<td
							class="handle text-secondary my-auto px-2"
							@mouseover="$event.target.classList.add('text-warning')"
							@mouseout="$event.target.classList.remove('text-warning')"
						>
							<i class="fa fa-arrows-v fa-lg"></i>
						</td>
						<td>{{ item.position }}</td>
						<td class>
							<input type="text" class="form-control" v-model="item.post_ru" />
						</td>
						<td>
							<input type="text" class="form-control" v-model="item.post_en" />
						</td>
						<td>
							<v-select
								class="flex-grow-1"
								v-model="item.user_id"
								:options="users"
								:reduce="u => u.id"
								label="name"
							>
								<div slot="no-options">Авторов по запросу не найдено.</div>
							</v-select>
						</td>
						<td class="text-secondary">
							<i
								class="fa fa-close"
								@mouseover="$event.target.classList.add('text-danger')"
								@mouseout="$event.target.classList.remove('text-danger')"
								@click="$emit('deleteUser', item.id)"
							></i>
						</td>
					</tr>
				</draggable>
			</table>
		</b-card-text>
	</div>
</template>

<script>
import draggable from "vuedraggable";
import vSelect from "vue-select";

export default {
	components: {
		draggable,
		vSelect
	},
	props: {
		value: {
			type: Array,
			default: () => []
		},
		users: {
			type: Array,
			default: () => []
		}
	},

	computed: {
		redaction: {
			get() {
				return this.value;
			},
			set(value) {
				// console.log(value);
				// console.log(value);
				value.forEach(function(item, index) {
					item.position = index + 1;
				});
				this.$emit("input", value);
			}
		}
	}
};
</script>

<style scoped>
</style>

