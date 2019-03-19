<template>
    <notifications group="custom-template"  
               position="bottom right"
									 width="60%">
			 <template slot="body" slot-scope="props">
				 
				 <div class="alert alert-warning alert-dismissible fade show" role="alert">
					 <strong>{{props.item.title}}</strong> <div v-html="props.item.text"></div>
					<button type="button" class="close" data-dismiss="alert" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
			</template>
		</notifications>
</template>

<script>

</script>

<style scoped>
</style>