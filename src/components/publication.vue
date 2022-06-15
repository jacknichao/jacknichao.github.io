<template lang="">
	<p style='text-align:justify;'><strong >{{pubObject.shortPublisher}}</strong>&emsp;<a href="">{{pubObject.paperName}}</a>
	<slot name="CCF_grade"></slot>
	<slot name="award_winning"></slot>
		<br>
		<span v-for="(auth,index) in pubObject.authors">
		<span v-if="(auth == 'Chao Ni') || (auth == 'Ni Chao')"><strong>{{auth}}</strong></span>
		<span v-else>{{auth}}</span>
		<template v-if="pubObject.comm_authors.indexOf(auth) != -1">*</template>
		<span v-if="index != pubObject.authors.length-1">, </span>
		<span v-else>. </span>
		</span>
		<small>Accepted for publication in <i>{{pubObject.longPublisher}}</i>. 
			{{pubObject.year}}.</small>
	</p>
</template>
<script>
export default {
	props: {
		pubObject: Object
	}
}
</script>
<style lang="">
	
</style>