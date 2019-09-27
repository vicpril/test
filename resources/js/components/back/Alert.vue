<template>
	<notifications group="custom-template" position="top right" width="40%" class="mt-5">
		<template slot="body" slot-scope="props">
			<div class="alert alert-dismissible fade show mr-3" :class="props.item.type" role="alert">
				<strong>{{props.item.title}}</strong>
				<div v-html="props.item.text"></div>
				<button type="button" class="close" data-dismiss="alert" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
		</template>
	</notifications>
</template>

<script>
export default {
	props: {
		message: {
			type: Object,
			default: () => ({})
		}
	},

	mounted() {
		if (!this.isEmptyObject(this.message)) {
			this.$notify({
				group: "custom-template",
				text: this.message.message,
				type: "alert-" + this.message.status,
				duration: 6000
			});
		}
	}
};
</script>


