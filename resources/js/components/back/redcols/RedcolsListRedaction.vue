<template>
	<div>
		<b-card-text>
			<table v-if="value.length > 0" class="table table-sm table-responsive-md" style="width:100%" id>
				<thead class="text-black">
					<tr>
						<th></th>
						<th>Должность - RU</th>
						<th>Должность - EN</th>
						<th>Автор</th>
						<th></th>
					</tr>
				</thead>
				<draggable tag="tbody" v-model="redaction" 	handle=".handle">
					<tr v-for="(item,index) in redaction" :key="index">
						<td
							class="handle text-secondary my-auto px-2"
							@mouseover="$event.target.classList.add('text-warning')"
							@mouseout="$event.target.classList.remove('text-warning')"
						>
							<i class="fa fa-arrows-v fa-lg"></i>
						</td>
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
								@click="deleteRow(index)"
							></i>
						</td>
					</tr>
				</draggable>
			</table>
			<p v-else>В данном разделе еще нет позиций</p>
		</b-card-text>
		<b-card-footer class="pb-0 bg-white d-flex justify-content-end"
									>
			<button class="btn btn-outline-primary" @click="addNew">
				Добавить новую позицию
			</button>
		</b-card-footer>
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
		},
		type: {
			type: String,
		}
	},

	computed: {
		redaction: {
			get() {
				return this.value;
			},
			set(value) {
				value.forEach(function(item, index) {
					item.position = index + 1;
				});
				this.$emit("input", value);
			}
		}
	},
	
	methods: {
		addNew() {
			let item = {
				id: '',
				type: this.type,
				position: this.redaction.length + 1,
				post_ru: '',
				post_en: '',
				user_id: ''
			}
			console.log(item);
			this.redaction.push(item);
			this.$emit("input", this.redaction);
		},
		deleteRow(index){
			this.redaction.splice(index, 1);
			this.$emit("input", this.redaction);
		}
	}
	
};
</script>

<style scoped>
</style>

