<template lang="">
	
	<h2 id="services">Services</h2>

	<ul>
		<li v-for="item in services">
		{{item.title}} -- {{item.organization}}
		<span v-if="item.abbr.length>0"> ({{item.abbr}})</span>
		, {{item.year}}.
		</li>
	</ul>
</template>
<script>
export default {
	data(){
		return {
			services:[
			{
					title:"Journal referee",
					organization:"Journal of Software: Evolution and Process",
					abbr:"JSEP",
					year:"2025"
				},
			{
					title:"Journal referee",
					organization:"Software: Testing, Verification and Reliabllity",
					abbr:"STVR",
					year:"2025"
				},
			{
					title:"Program Committee",
					organization:"The 32th Asia-Pacific Software Engineering Conference.",
					abbr:"APSEC",
					year:"2025"
				},
			{
					title:"Journal referee",
					organization:"IEEE Transactions on Software Engineering",
					abbr:"TSE",
					year:"2025"
				},
			{
					title:"Journal referee",
					organization:"ACM Transactions on Software Engineering and Methodology",
					abbr:"TOSEM",
					year:"2025"
				},
			{
					title:"Journal referee",
					organization:"Automated Software Engineering-Journal",
					abbr:"ASEJ",
					year:"2025"
				},
			{
					title:"Program Committee",
					organization:"The 31th Asia-Pacific Software Engineering Conference.",
					abbr:"APSEC",
					year:"2024"
				},
			{
					title:"Program Committee",
					organization:"The Asia-Pacific Symposium on Internetware (Intelligent Software Engineering Track)",
					abbr:"Internetware",
					year:"2024"
				},
			{
					title:"Journal referee",
					organization:"Empirical Software Engineering",
					abbr:"EMSE",
					year:"2024"
				},
			{
					title:"Journal referee",
					organization:"IEEE Transactions on Software Engineering",
					abbr:"TSE",
					year:"2024"
				},
			{
					title:"Journal referee",
					organization:"ACM Transactions on Software Engineering and Methodology",
					abbr:"TOSEM",
					year:"2024"
				},
				{
					title:"Journal referee",
					organization:"IEEE Transactions on Reliability",
					abbr:"TR",
					year:"2023"
				},
				{
					title:"Journal referee",
					organization:"ACM Transactions on Software Engineering and Methodology",
					abbr:"TOSEM",
					year:"2023"
				},
				{
					title:"Journal referee",
					organization:"IEEE Transactions on Software Engineering",
					abbr:"TSE",
					year:"2023"
				},
				{
					title:"Journal referee",
					organization:"Empirical Software Engineering",
					abbr:"EMSE",
					year:"2023"
				},
				{
					title:"Journal referee",
					organization:"Journal of Software: Evolution and Process",
					abbr:"JSEP",
					year:"2023"
				},
				{
					title:"Journal referee",
					organization:"Blockchain: Research and Applications",
					abbr:"BCRA",
					year:"2023"
				},
				{
					title:"Journal referee",
					organization:"Automated Software Engineering-Journal",
					abbr:"ASEJ",
					year:"2023"
				},
				{
					title:"Program Committee",
					organization:"The 30th Asia-Pacific Software Engineering Conference.",
					abbr:"APSEC",
					year:"2023"
				},
				{
					title:"Program Committee",
					organization:"The 31th ACM Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering - Student Research Competition.",
					abbr:"FSE",
					year:"2023"
				},
				{
					title:"Journal referee",
					organization:"Information and Software Technology",
					abbr:"IST",
					year:"2023"
				},
				{
					title:"Program Committee",
					organization:"The 30th IEEE International Conference on Software Analysis, Evolution and Reengineering.",
					abbr:"SANER",
					year:"2023"
				},
				{
					title:"Program Committee",
					organization:"The 45th International Conference on Software Engineering-Tool Demo",
					abbr:"ICSE",
					year:"2023"
				},

				{
					title:"Journal referee",
					organization:"Blockchain: Research and Applications",
					abbr:"BCRA",
					year:"2022"
				},
				{
					title:"Journal referee",
					organization:"Empirical Software Engineering",
					abbr:"EMSE",
					year:"2022"
				},
				{
					title:"Journal referee",
					organization:"IEEE Transactions on Software Engineering",
					abbr:"TSE",
					year:"2022"
				},
				{
					title:"Journal referee",
					organization:"Journal of Software: Evolution and Process",
					abbr:"JSEP",
					year:"2022"
				},
				{
					title:"Journal referee",
					organization:" IET Software",
					abbr:"IET",
					year:"2022"
				},
				{
					title:"Program Committee",
					organization:"International Conference on Technical Debt",
					abbr:"TechDebt",
					year:"2022"
				},
				{
					title:"Program Committee",
					organization:"The 13th Asia-Pacific Symposium on Internetware (Intelligent Software Engineering Track)",
					abbr:"Internetware",
					year:"2022"
				},
				{
					title:"Program Committee",
					organization:"The 7th National Software and Application Conference & The National Conference on Formal Method and Application(软件缺陷的自动发现与修复)",
					abbr:"ChinaSoft",
					year:"2022"
				},
				{
					title:"Journal referee",
					organization:"Information and Software Technology",
					abbr:"IST",
					year:"2022"
				},
				{
					title:"Journal referee",
					organization:"Information and Software Technology",
					abbr:"IST",
					year:"2021"
				},
				{
					title:"Journal referee",
					organization:"IEEE Transactions on Software Engineering",
					abbr:"TSE",
					year:"2021"
				},
				{
					title:"Journal referee",
					organization:"Journal of Software: Evolution and Process",
					abbr:"JSEP",
					year:"2021"
				},
				{
					title:"Sub-Reviewer",
					organization:"The 25th Asia-Pacific Software Engineering Conference",
					abbr:"APSEC",
					year:"2018"
				},
				{
					title:"Sub-Reviewer",
					organization:"The 14th International Conference on Predictive Models and Data Analytics in Software Engineering",
					abbr:"PROMISE",
					year:"2018"
				},
			]
		}
	}
}
</script>
<style lang="">
	
</style>