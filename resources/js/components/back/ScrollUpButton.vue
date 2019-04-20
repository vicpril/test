<template>
	<transition name="fade">
		<a v-if="btnScrollUpShow" id="btn-scroll-up" v-scroll-to="'body'"></a>
	</transition>
</template>

<script>
import VueScrollTo from "vue-scrollto";
export default {
	directives: {
		VueScrollTo
	},

	data() {
		return {
			btnScrollUpShow: false,
			startHeight: 350
		};
	},

	created() {
		window.addEventListener("scroll", this.handleScroll);
	},
	destroyed: function() {
		window.removeEventListener("scroll", this.handleScroll);
	},

	methods: {
		handleScroll(event) {
			this.btnScrollUpShow =
				window.pageYOffset > this.startHeight ? true : false;
		},
		checkSticky() {
			const sticky = this.$refs.sticky.offsetTop;
			this.isSticky = window.pageYOffset > sticky ? true : false;
		}
	}
};
</script>

<style scope>
a#btn-scroll-up {
	display: inline-block;
	background-color: transparent;
	width: 50px;
	height: 50px;
	text-align: center;
	border: 1px solid var(--secondary);
	border-radius: 4px;
	margin: 30px;
	position: fixed;
	bottom: 30px;
	right: 30px;
	/* transition: background-color 0.3s; */
	z-index: 1000;
}

a#btn-scroll-up:hover {
	cursor: pointer;
	background-color: var(--secondary);
	transition: background-color 0.3s;
}
a#btn-scroll-up:hover::after {
	cursor: pointer;
	color: #fff;
}
a#btn-scroll-up:active {
	background-color: #555;
}

a#btn-scroll-up::after {
	content: "\f077";
	font-family: FontAwesome;
	font-weight: normal;
	font-style: normal;
	font-size: 2em;
	line-height: 50px;
	color: var(--secondary);
}

.fade-enter {
	opacity: 0;
}

.fade-enter-active {
	transition: opacity 1s;
}

.fade-leave {
	/*opacity: 1;*/
}

.fade-leave-active {
	transition: opacity 1s;
	opacity: 0;
}
</style>

