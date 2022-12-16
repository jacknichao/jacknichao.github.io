<template>
	<p><img src="../assets/chaoni.png" style="max-width:15%;min-width:30px;float:right; border-radius: 50%" /></p>

	<h1 id="bissyande">Chao Ni, 倪超</h1>
	<font size="5">
		Distinguished Research Fellow (特聘研究员)<br />
		School of Software Technology<br />
		Zhejiang University <br />
	    Email: <span>{{ email }}</span>
	</font>

	<br /><br />
	<p style='text-align:justify;'>
		<Intro />
	</p>

	<strong><h3>Research Interests:</h3></strong>
	<p>
	<ul>
		<li v-for="interest in interests">
			{{ interest }}
		</li>
	</ul>
	</p>
	<template v-if="news.length > 0">
		<h2 id="news">News</h2>
		<ul>
			<li v-for="pub in news">
				<i><img src="../assets/new.png" style="max-width:3.5%;min-width:3.5%; border-radius: 50%"/></i>
				{{ pub.text }}
				<i v-if="pub.award_winning">获奖</i>
			</li>
		</ul>
	</template>
	<h2 id="publications">Selected Publications</h2>
	<!-- &#35; Co-First Author,&emsp;* Corresponding Author. -->

	<Publication v-for="pub in publications" :pubObject="pub">
		<!-- 假如说某一篇论文获奖或有CCF等级标记 -->
		<template v-if="pub.CCF_grade.length > 0" v-slot:CCF_grade>
			<i>{{ pub.CCF_grade }}</i> 
		</template>
		<template v-if="pub.award_winning" v-slot:award_winning>
			<i>获奖了</i> 
		</template>
	</Publication>


	<h2 v-if="awards.length > 0" id="professional-experience">Award</h2>
	<ul>
		<li v-for="award in awards">{{ award }}.</li>
	</ul>

	<h2 id="professional-experience">Work Experience</h2>
	<ul>
		<li v-for="exp in experiences">
			<strong>{{ exp.place }}</strong>,
			<em>{{ exp.start }}</em> - <em>{{ exp.end }}</em>,
			{{ exp.job }}.
		</li>
	</ul>


	<h2 id="Education">Education</h2>
	<ul>
		<li>Doctoral degree, Software Engineering, Department of Computer Science and Technology, Nanjing University,
			Nanjing, China, September 2017 - June 2020.</li>
		<li>Master's Degree, Software Engineering, Department of Computer Science and Technology, Nanjing University,
			Nanjing, China, September 2014 - June 2017.</li>
		<li>Bachelor's Degree, Software Engineering, School of Computer Science and Technology, Nantong University, Nantong,
			China, September 2010 - June 2014.</li>
	</ul>
</template>
<script>
import Intro from "../components/intro.vue";
import Publication from "@/components/publication.vue";
function genPublicationObj(short, long, name, authors, comm_authors, year, CCF_grade = "", award_winning = false) {
	return {
		"shortPublisher": short,
		"longPublisher": long,
		"paperName": name,
		"authors": authors,
		"comm_authors": comm_authors,
		"year": year,
		"CCF_grade": CCF_grade,
		"award_winning": award_winning
	}
}
function genExpObj(place, start, end, job) {
	return {
		"place": place,
		"start": start,
		"end": end,
		"job": job,
	}
}
import confs from '../global/index'
export default {
	data() {
		return {
			email: "chaoni@zju.edu.cn",
			interests: [
				"Data Analysis",
				"Software Analytics: automated defect prediction, automated defect localization, and automated defect repair",
				"Software Security: automated vulnerability detection, automated vulnerability localization, and vulnerability explanation",				
				"BlockChain",
			],
			news: [//首页新闻相关的内容放这里
				{
					text:"2022/12: Our one paper was accepted by TOSEM'22!",
					award_winning: false //表示是否获奖，获奖的话，可以添加徽章
				},
				{
					text:"2022/06: Our one paper was accepted by FSE'22!",
					award_winning: false //表示是否获奖，获奖的话，可以添加徽章
				},
				{
					text:"2021/12: Our one paper was accepted by TOSEM'21!",
					award_winning: false
				},
				{
					text:"2020/07: Our one paper was accepted by TSE'20!",
					award_winning: false
				},
			],
			publications: [
				// genPublicationObj(
				// 	"会议简称",
				// 	"会议全称",
				// 	"paper题目",
				// 	["作者1", "作者2", "作者3", "作者4", "作者5"],
				// ["通讯作者"]
				// 	"地点和时间"
				// "CCF 等级"
				// "是否获奖"
				// ),
				genPublicationObj(
					"TOSEM'22",
					confs.TOSEM,
					"Code-line-level bugginess identification: How far have we come, and how far have we yet to go?",
					["Zhaoqiang Guo", "Shiran Liu", "Xutong Liu",  "Wei Lai", "Mingliang Ma", "Xu Zhang", "Chao Ni", "Yibiao Yang",  "Yanhui Li", "Lin Chen", "Guoqiang Zhou", "Yuming Zhou"],
					["Yuming Zhou"],
					"Dec 2022",
					"[CCF-A]", 
					false, 
				),
				genPublicationObj(
					"FSE'22",
					confs.FSE,
					"The Best of Both Worlds: Integrating Semantic Features with Expert Features for Defect Prediction and Localization",
					["Chao Ni", "Wei Wang", "Kaiwen Yang", "Xin Xia", "Kui Liu",  "David Lo"],
					["Xin Xia"],
					"June 2022",
					"[CCF-A]", 
					false, 
				),
				genPublicationObj(
					"TOSEM'21",
					confs.TOSEM,
					"Just-In-Time Defect Prediction on JavaScript Projects: A Replication Study",
					["Chao Ni", "Xin Xia", "David Lo", "Xiaohu Yang", "Ahmed E. Hassan"],
					["Xin Xia"],
					"December 2021",
					"[CCF-A]", 
					false, 
				),
				genPublicationObj(
					"TSE'20",
					confs.TSE,
					"Revisiting Supervised and Unsupervised Methods for Effort-Aware Cross-Project Defect Prediction",
					["Chao Ni", "Xin Xia", "David Lo", "Xiang Chen", "Qing Gu"],
					["Qing Gu"],
					"July 2020",
					"[CCF-A]",
					false
				),
				genPublicationObj(
					"JSS'19",
					confs.JSS,
					"An empirical study on pareto based multi-objective feature selection for software defect prediction",
					["Chao Ni", "Xiang Chen", "Fangfang Wu", "Yuxiang Shen", "Qing Gu"],
					["Qing Gu"],
					"June 2019",
					"[CCF-B]",
					false
				),
	
				genPublicationObj(
					"JSEP'19",
					confs.JSEP,
					"Multi-task Defect Prediction",
					["Chao Ni", "Xiang Chen", "Xin Xia", "Qing Gu", "Yingquan Zhao"],
					["Qing Gu"],
					"May 2019",
					"[CCF-B]",
					false
				),
			
			
				genPublicationObj(
					"JCST'17",
					confs.JCST,
					"A Cluster Based Feature Selection Method for Cross-Project Software Defect Prediction",
					["Chao Ni", "Wangshu Liu", "Xiang Chen", "Qing Gu", "Daoxu Chen", "Qiguo Huang"],
					["Qing Gu"],
					"November 2017",
					"[CCF-B]",
					false
				),
			],
			awards: [
				// "fjdak",
				// "fj;ladfl"
			],
			experiences: [
				// genExpObj(
				// 	"地点",
				// 	"起始",
				// 	"结束",
				// 	"岗位"
				// ),
				genExpObj(
					"School of Software Technology, Zhejiang University, Hangzhou, China",
					"July 2020",
					"Now",
					"Distinguished Research Fellow"
				),
				genExpObj(
					"Monash University, Melbourne, Australia. supported by China Scholarship Council (CSC.)",
					"October 2018",
					"October 2019",
					"Visiting scholar"
				),
			]
		};
	},
	components: { Intro, Publication }
}
</script>
<style lang="">
	
</style>