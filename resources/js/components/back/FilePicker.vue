<template>
	<div>
		<div v-if="type === 'none'" class="text-center">
			<p class="my-0">Фаил не выбран</p>
		</div>
		<b-img v-if="type === 'image'" thumbnail fluid :src="link" :alt="name"></b-img>
		<div v-if="type === 'doc'" class="text-center">
			<img src="/images/document.png" style="vertical-align:middle;" width="32">
			<p class="my-0">{{ name }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		path: ""
	},

	computed: {
		link() {
			if (!this.path) return null;
			// for Windows
			var tmp = this.path.replace(/\\/gi, "/");
			return this.$store.state.storage.path + tmp;
		},
		type() {
			if (!this.path) return "none";
			const mime = this.path.substr(this.path.lastIndexOf("."));
			if (mime.match(/\.(jpg|jpeg|png|gif)$/)) {
				return "image";
			} else {
				return "doc";
			}
		},
		name() {
			if (!this.link) return "";
			return this.link.substr(this.link.lastIndexOf("/") + 1);
		}
	}
};
</script>

