<template lang="">
	<h2 id="artifacts">Artifacts</h2>
	<ul>
		<li v-for="art in artifacts">
		{{art.name}} -- {{art.description}}.<br>
		Open Sourced, See: <a :href="art.url">{{art.url}}</a>.
		</li>
	</ul>
</template>
<script>
export default {
	data() {
		return {
			artifacts: [
				{
					name: "JIT-Fine",
					description: "The Best of BothWorlds: Integrating Semantic Features with Expert Features for Defect Prediction and Localization",
					url: "https://zenodo.org/record/6347097#.YpGcIOxBz9A"
				},
				{
					name: "CompDefect",
					description: "Defect Identification, Categorization, and Repair: Better Together",
					url: "https://zenodo.org/record/5353354#.YpGb8OxBz9B"
				},
				{
					name: "JavaScript-features",
					description: "Just-In-Time Defect Prediction on JavaScript Projects: A Replication Study",
					url:"https://github.com/jacknichao/JIT-on-JavaScript-projects"
				},			
			]
		}
	}
}
</script>
<style lang="">
	
</style>