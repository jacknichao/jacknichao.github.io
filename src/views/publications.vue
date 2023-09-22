<template lang="">



<h2 >Publication Summary</h2>
<ul>
	<li>
		<b>Journal Papers</b>: &emsp;IEEE Transactions on Software Engineering(TSE) * 1, &emsp; ACM Transactions on Software Engineering and Methodology(TOSEM) * 2,  &emsp;Journal of Systems and Software(JSS) *2.&emsp; Information and Software Technology(IST) * 2, &emsp; Journal of Software: Evolution and Process(JSEP) * 2; &emsp; Journal of Computer Science and Technology(JCST) * 1.
	</li>
	<li>
	<b>Conference Papers</b>: &emsp;FSE * 3, &emsp;ASE * 2, &emsp;SANER * 1,&emsp;ISSRE * 1,&emsp;ICPC * 1,&emsp;MSR * 1,&emsp;COMPSAC * 1,&emsp; Internetware * 1,&emsp;SEKE * 1.
	</li>
	<li>
		<b>Papers in Chinese</b>: &emsp;软件学报 * 3, &emsp;计算机科学 * 1,&emsp; 计算机工程与应用 * 1,&emsp; 高等工程教育研究 * 1.
	</li>
</ul>







	<h2 id="publications">Publications</h2>
        <!-- &#35; Co-First Author,&emsp;* Corresponding Author;&emsp;C: Conference Paper,&emsp;J: Journal Paper. -->
	<template v-for="pub in publications">
		<h2>
			<b>{{pub.year}}</b>
		</h2>
		<p style="text-align:justify" v-for="item in pub.items">
		<span v-if="item.id.length > 0">[{{item.id}}]</span>&nbsp;
		<strong>{{item.short}}.</strong>&emsp;
			<a v-if="item.doi.length>0" :href="item.doi">{{item.title}}</a>
			<span v-else>{{item.title}}</span>.&emsp;
			<i v-if="item.CCF_grade.length > 0">{{ item.CCF_grade }}</i>
			<!-- //这里写你想添加的badge,pub.CCF_grade是字符串,具体的等级 -->
			&nbsp;&nbsp;
			<i v-if="item.award_winning"><font color="#A92217"><b>[{{item.award_winning_title}}]</b></font> 
			<img src="../assets/award.png" style="max-width:2.5%;min-width:2.5%; border-radius: 50%"/>
			</i>
			<!-- //这里写你想添加的badge,award_winning是布尔型,所以只决定badge的有无即可 -->
			<br>
			<span v-for="(auth,index) in item.authors">
			
			<template v-if="auth == 'Ni Chao' || auth == 'Chao Ni' || auth == '倪超'">
				<b>
					<u>
					{{auth}}
					</u>
				</b>
			</template>
			<template v-else>
				{{auth}}
			</template>
			<template v-if="item.corresponding_authors.indexOf(auth) != -1">*</template>
			<template v-if="index != item.authors.length-1">, </template>
			<template v-else>.</template>
			</span>
			<small>
					Accepted in <i>{{item.long}}</i>, {{pub.year}}.
					&nbsp;<a :href="item.pdf" :download="`item.title`.pdf">[pdf]</a>
					&nbsp;<a v-if="item.doi.length>0" :href="item.doi">[doi]</a>
			</small>
		</p>
	</template>
</template>
<script>
import confs from '../global/index'
export default {
	data() {
		return {
			publications: [
			{
					year: "2023",
					items: [
						{
							id: "J10",
							short: "JSS",
							long: confs["JSS"],
							title: "Boosting Multi-objective Just-in-time Software Defect Prediction by Fusing Expert Metrics and Semantic Metrics",
							authors: ["Xiang Chen", "Hongling Xia", "Wenlong Pei",  "Chao Ni", "Ke Liu"],
 							corresponding_authors: ["Xiang Chen"],
							pdf: "",
							doi: "",
							CCF_grade: "(CCF-B)",
							award_winning: false
						},
						{
							id: "C12",
							short: "ASE",
							long: confs["ASE_I"],
							title: " Unifying Defect Prediction, Categorization, and Repair by Multi-task Deep Learning",
							authors: ["Chao Ni", "Kaiwen Yang", "Yan Zhu", "Xiang Chen", "Xiaohu Yang"],
 							corresponding_authors: ["Yan Zhu"],
							pdf: "",
							doi: "",
							CCF_grade: "(CCF-A)",
							award_winning: false
						},
						{
							id: "C11",
							short: "ASE",
							long: confs["ASE_I"],
							title: "Function-level Vulnerability Detection Through Fusing Multi-Modal Knowledge",
							authors: ["Chao Ni", "Xinrong Guo", "Yan Zhu", "Xiaodan Xu", "Xiaohu Yang"],
 							corresponding_authors: ["Yan Zhu"],
							pdf: "",
							doi: "",
							CCF_grade: "(CCF-A)",
							award_winning: false
						},

						{
							id: "C10",
							short: "FSE",
							long: confs["FSE_I"],
							title: "C3: Code Clone-based Identification of Duplicated Components",
							authors: ["Yanming Yang", "Ying Zou", "Xing Hu", "David Lo", "Chao Ni", "John Grundy", "Xin Xia"],
 							corresponding_authors: [],
							pdf: "",
							doi: "",
							CCF_grade: "(CCF-A)",
							award_winning: false
						},
						{
							id: "C9",
							short: "Internetware",
							long: confs["Internetware"],
							title: "An Empirical Study of the Apache Voting Process on Open Source Community Governance",
							authors: ["Jisheng Wang", "Lingfeng Bao", "Chao Ni"],
 							corresponding_authors: ["Lingfeng Bao"],
							pdf: "",
							doi: "",
							CCF_grade: "(CCF-C)",
							award_winning: false
						},
						{
							id: "C8",
							short: "FSE",
							long: confs["FSE"],
							title: "Distinguishing Look-Alike Innocent and Vulnerable Code by Subtle Semantic Representation Learning and Explanation",
							authors: ["Chao Ni", "Xin Yin", "Kaiwen Yang", "Dehai Zhao", "Zhenchang Xing", "Xin Xia"],
 							corresponding_authors: ["Xin Xia"],
							pdf: "",
							doi: "https://doi.org/10.1145/3611643.3616358",
							CCF_grade: "(CCF-A)",
							award_winning: false
						},
						{
							id: "C7",
							short: "MSR",
							long: confs["MSR"],
							title: "Boosting Just-in-Time Defect Prediction with Specific Features of C/C++ Programming Languages in Code Changes",
							authors: ["Chao Ni", "Xiaodan Xu", "Kaiwen Yang", "David Lo"],
 							corresponding_authors: ["Chao Ni"],
							pdf: "./pdf/msr23-technical91.pdf",
							doi: "https://doi.org/10.1109/MSR59073.2023.00072",
							CCF_grade: "(CCF-C)",
							award_winning: false
						},
						{
							id: "C6",
							short: "ICPC",
							long: confs["ICPC"],
							title: "FVA: Assessing Function-Level Vulnerability by Integrating Flow-Sensitive Structure and Code Statement Semantic",
							authors: ["Chao Ni", "Liyu Shen", "Wei Wang", "Xiang Chen", "Xin Yin", "Lexiao Zhang"],
 							corresponding_authors: ["Chao Ni"],
							pdf: "./pdf/icpc23-p34.pdf",
							doi: "https://doi.org/10.1109/ICPC58990.2023.00048",
							CCF_grade: "(CCF-B)",
							award_winning: false
						},
					]
				},
				{
					year: "2022",
					items: [
					{
							id: "J9",
							short: "TOSEM",
							long: confs["TOSEM"],
							title: "Code-line-level bugginess identification: How far have we come, and how far have we yet to go?",
							authors: ["Zhaoqiang Guo", "Shiran Liu", "Xutong Liu",  "Wei Lai", "Mingliang Ma", "Xu Zhang", "Chao Ni", "Yibiao Yang",  "Yanhui Li", "Lin Chen", "Guoqiang Zhou", "Yuming Zhou"],
 							corresponding_authors: ["Yuming Zhou"],
							pdf: "./pdf/tosem-2022-codeline.pdf",
							doi: "https://doi.org/10.1145/3582572",
							CCF_grade: "(CCF-A)",
							award_winning: false
						},
						{
							id: "C5",
							short: "SANER",
							long: confs["SANER"],
							title: "Automatic Identification of Crash-inducing Smart Contracts",
							authors: ["Chao Ni", "Cong Tian", "Kaiwen Yang", "David Lo", "Jiachi Chen",  "Xiaohu Yang"],
 							corresponding_authors: ["Chao Ni"],
							pdf: "./pdf/saner23-p1836.pdf",
							doi: "https://doi.org/10.1109/SANER56733.2023.00020",
							CCF_grade: "(CCF-B)",
							award_winning: false
						},
					
						{
							id: "C4",
							short: "ISSRE",
							long: confs["ISSRE"],
							title: "Detecting and Defending CSRF at API-Level",
							authors: ["Shun Wang", "Chao Ni", "Jianbo Wang",  "Changhai Nie"],
 							corresponding_authors: ["Chao Ni"],
							pdf: "./pdf/issre22-p3938.pdf",
							doi: "https://doi.org/10.1109/ISSREW55968.2022.00043",
							CCF_grade: "(CCF-B) - Industry Track",
							award_winning: false
						},
						{
							id: "C3",
							short: "FSE",
							long: confs["FSE"],
							title: "The Best of Both Worlds: Integrating Semantic Features with Expert Features for Defect Prediction and Localization",
							authors: ["Chao Ni", "Wei Wang", "Kaiwen Yang", "Xin Xia", "Kui Liu",  "David Lo"],
 							corresponding_authors: ["Xin Xia"],
							pdf: "./pdf/fse22main-p1305.pdf",
							doi: "https://doi.org/10.1145/3540250.3549165",
							CCF_grade: "(CCF-A)",
							award_winning: false
						},
					]
				},
				{
					year: "2021",
					items: [
						{
							id: "J8",
							short: "TOSEM",
							long: confs["TOSEM"],
							title: "Just-In-Time Defect Prediction on JavaScript Projects: A Replication Study",
							authors: ["Chao Ni", "Xin Xia", "David Lo", "Xiaohu Yang", "Ahmed E. Hassan"],
 							corresponding_authors: ["Xin Xia"],
							pdf: "./pdf/tosem-2020-0133.pdf",
							doi: "https://doi.org/10.1145/3508479",
							CCF_grade: "(CCF-A)",
							award_winning: false
						},
						{
							id: "J7",
							short: "IST",
							long: confs["IST"],
							title: "Revisiting Heterogeneous Defect Prediction: How Far Are We?",
							authors: ["Xiang Chen", "Yanzhou Mu", "Ke Liu", "Zhanqi Cui", "Chao Ni"],
							corresponding_authors: ["Xiang Chen"],
							pdf: "./pdf/chen2020.pdf",
							doi: "https://doi.org/10.1016/j.infsof.2020.106441",
							CCF_grade: "(CCF-B)",
							award_winning: false
						},
					]
				},
				{
					year: "2020",
					items: [
						{
							id: "J6",
							short: "TSE",
							long: confs["TSE"],
							title: "Revisiting Supervised and Unsupervised Methods for Effort-Aware Cross-Project Defect Prediction",
							authors: ["Chao Ni", "Xin Xia", "David Lo", "Xiang Chen", "Qing Gu"],
							corresponding_authors: ["Qing Gu"],
							pdf: "./pdf/ni2020easc.pdf",
							doi: "https://doi.org/10.1109/TSE.2020.3001739",
							CCF_grade: "(CCF-A)",
							award_winning: false
						},
					]
				},
				{
					year: "2019",
					items: [
						{
							id: "J5",
							short: "JSEP",
							long: confs["JSEP"],
							title: "Do different cross-project defect prediction methods identify the same defective modules?",
							authors: ["Xiang Chen", "Yanzhou Mu", "Yubin Qu", "Chao Ni", "Meng Liu", "Tong He", "Shangqing Liu"],
							corresponding_authors: ["Xiang Chen"],
							pdf: "./pdf/chen2019smr.2234.pdf",
							doi: "https://doi.org/10.1002/smr.2234",
							CCF_grade: "(CCF-B)",
							award_winning: false
						},
						{
							id: "C2",
							short: "SEKE",
							long: confs["SEKE"],
							title: "Multi-project Regression based Approach for Software Defect Number Prediction",
							authors: ["Qiguo Huang", "Chao Ni", "Xiang Chen", "Qing Gu", "Kaibo Cao"],
							corresponding_authors: ["Chao Ni", "Qing Gu"],
							pdf: "./pdf/huang2019sdnp.pdf",
							doi: "https://doi.org/10.18293/SEKE2019-019",
							CCF_grade: "(CCF-C)",
							award_winning: false
						},
						{
							id: "J4",
							short: "JSEP",
							long: confs["JSEP"],
							title: "Multi-task Defect Prediction",
							authors: ["Chao Ni", "Xiang Chen", "Xin Xia", "Qing Gu", "Yingquan Zhao"],
							corresponding_authors: ["Qing Gu"],
							pdf: "./pdf/ni2019mask.pdf",
							doi: "https://doi.org/10.1002/smr.2203",
							CCF_grade: "(CCF-B)",
							award_winning: false
						},
						{
							id: "J3",
							short: "JSS",
							long: confs["JSS"],
							title: "An empirical study on pareto based multi-objective feature selection for software defect prediction",
							authors: ["Chao Ni", "Xiang Chen", "Fangfang Wu", "Yuxiang Shen", "Qing Gu"],
							corresponding_authors: ["Qing Gu"],
							pdf: "./pdf/ni2019mofes.pdf",
							doi: "https://doi.org/10.1016/j.jss.2019.03.012",
							CCF_grade: "(CCF-B)",
							award_winning: false
						},						
					]
				},
				{
					year: "2018",
					items: [
						{
							id: "J2",
							short: "IST",
							long: confs["IST"],
							title: "Software Defect Number Prediction: Unsupervised v.s. Supervised Methods",
							authors: ["Xiang Chen", "Dun Zhang", "Yingquan Zhao", "Zhanqi Cui", "Chao Ni"],
							corresponding_authors: ["Xiang Chen"],
							pdf: "./pdf/chen2018sdnp.pdf",
							doi: "https://doi.org/10.1016/j.infsof.2018.10.003",
							CCF_grade: "(CCF-B)",
							award_winning: false
						},
					]
				},
				{
					year: "2017",
					items: [
						{
							id: "J1",
							short: "JCST",
							long: confs["JCST"],
							title: "A Cluster Based Feature Selection Method for Cross-Project Software Defect Prediction",
							authors: ["Chao Ni", "Wangshu Liu", "Xiang Chen", "Qing Gu", "Daoxu Chen", "Qiguo Huang"],
							corresponding_authors: ["Qing Gu"],
							pdf: "./pdf/ni2017cluster.pdf",
							doi: "https://doi.org/10.1007/s11390-017-1785-0",
							CCF_grade: "(CCF-B)",
							award_winning: false
						},						 
						{
							id: "C1",
							short: "COMPSAC",
							long: confs["COMPSAC"],
							title: "FeSCH: A Feature Selection Method using Clusters of Hybrid-data for Cross-Project Defect Prediction",
							authors: ["Chao Ni", "Wangshu Liu", "Qing Gu", "Xiang Chen", "Daoxu Chen"],
							corresponding_authors: ["Qing Gu"],
							pdf: "./pdf/ni2017fesch.pdf",
							doi: "https://doi.org/10.1109/COMPSAC.2017.127",
							CCF_grade: "(CCF-C)",
							award_winning: false
						},
					]
				},
				{
					year: "中文/教育论文",
					items: [	
						{
							id: "CJ7",
							short: "CEISEE-2023",
							long: "China-Europe International Symposium on Software Engineering Education",
							title: "A New Talent Cultivation Model Under Open-Source Environment: A Case Study at Zhejiang University",
							authors: ["Chao Ni", "Jianwei Yin","Li Chen"],
							corresponding_authors: ["Chao Ni"],
							pdf: "./pdf/*.pdf",
							doi: "",
							CCF_grade: "(教育)",
							award_winning: true,
							award_winning_title:"Best Paper Award"
						},			
						{
							id: "CJ6",
							short: "高等工程教育研究-2022",
							long: "高等工程教育研究",
							title: "开源模式下我国软件人才培养的挑战和对策",
							authors: ["陈丽", "赵斌","倪超", "杨小虎"],
							corresponding_authors: ["陈丽"],
							pdf: "./pdf/开源模式下我国软件人才培养的挑战和对策.pdf",
							doi: "https://doi.org/10.13328/j.cnki.jos.005836",
							CCF_grade: "(教育)",
							award_winning: false
						},			
						
						{
							id: "CJ5",
							short: "软件学报-2020",
							long: "软件学报",
							title: "一种基于卷积神经网络的砂岩显微图像特征表示方法",
							authors: ["李娜", "顾庆","姜枫", "郝慧珍", "于华", "倪超"],
							corresponding_authors: ["顾庆"],
							pdf: "./pdf/一种基于卷积神经网络的砂岩显微图像特征表示方法.pdf",
							doi: "https://doi.org/10.13328/j.cnki.jos.005836",
							CCF_grade: "(CCF-A)",
							award_winning: false
						},
						{
							id: "CJ4",
							short: "软件学报-2019",
							long: "软件学报",
							title: "基于特征迁移和实例迁移的跨项目缺陷预测方法",
							authors: ["倪超", "陈翔", "刘望舒", "顾庆", "黄启国", "李娜"],
							corresponding_authors: ["顾庆"],
							pdf: "./pdf/基于特征迁移和实例迁移的跨项目缺陷预测方法.pdf",
							doi: "https://doi.org/10.13328/j.cnki.jos.005712",
							CCF_grade: "(CCF-A)",
							award_winning: false
						},
						{
							id: "CJ3",
							short: "计算机工程与应用-2019",
							long: "计算机工程与应用",
							title: "FSDNP：针对软件缺陷数预测的特征选择方法",
							authors: ["李叶飞", "官国飞", "葛崇慧", "陈翔", "倪超", "钱柱中"],
							corresponding_authors: ["倪超"],
							pdf: "./pdf/FSDNP：针对软件缺陷数预测的特征选择方法.pdf",
							doi: "https://doi.org/10.3778/j.issn.1002-8331.1811-0103",
							CCF_grade: "(CCF-C， 中文核心)",
							award_winning: false
						},
						{
							id: "CJ2",
							short: "计算机学报-2018",
							long: "计算机学报",
							title: "跨项目软件缺陷预测方法研究综述",
							authors: ["陈翔","王莉萍", "顾庆","王赞", "倪超", "刘望舒", "王秋萍"],
							corresponding_authors: ["陈翔"],
							pdf: "./pdf/跨项目软件缺陷预测方法研究综述.pdf",
							doi: "https://doi.org/10.11897/SP.J.1016.2018.00254",
							CCF_grade: "(CCF-A)",
							award_winning: false
						},
						
						{
							id: "CJ1",
							short: "软件学报-2016",
							long: "软件学报",
							title: "静态软件缺陷预测方法研究",
							authors: ["陈翔", "顾庆", "刘望舒", "刘树龙", "倪超"],
							corresponding_authors: ["陈翔"],
							pdf: "./pdf/静态软件缺陷预测方法研究.pdf",
							doi: "https://doi.org/10.13328/j.cnki.jos.004923",
							CCF_grade: "(CCF-A)",
							award_winning: false
						},				
					]
				},

			]
		}
	}
}
</script>
<style lang="">
	
</style>