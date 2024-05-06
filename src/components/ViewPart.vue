<template>
<el-collapse accordion>
	<el-text class="mx-1" type="primary" tag="p">
	简单来讲，视图就是不同样式的图/表。在这一章里，我们将开始进行View(视图)粒度的操作。
	<br />详细内容您可参考☞
	<el-link :href="apilink" target="_blank" type="danger">多维表格View Api</el-link>
	</el-text>

    <el-collapse-item title="P1 基础能力" class="ViewP1">
        <p1/>
    </el-collapse-item>

    <el-collapse-item title="P2 Grid表格视图" class="ViewP2">
        <p2/>
    </el-collapse-item>

    <el-collapse-item title="P3 kanban看板视图" class="ViewP3">
		<p3/>
    </el-collapse-item>
	
	<el-collapse-item title="P4 Calendar日历视图" class="ViewP4">
		<p4/>
	</el-collapse-item>
	
	<el-collapse-item title="P5 Gantt甘特图视图" class="ViewP5">
		<p5/>
	</el-collapse-item>
	
	<el-collapse-item title="P6 Gallery画册视图" class="ViewP6">
		<p6/>
	</el-collapse-item>

	<el-collapse-item title="P7 Form表单视图" class="ViewP7">
			<p7/>
	</el-collapse-item>
</el-collapse>
    
</template>

<script>
import p1 from './ViewP1.vue';
import p2 from './ViewP2Grid.vue';
import p3 from './ViewP3Kanban.vue';
import p4 from './ViewP4Calendar.vue';
import p5 from './ViewP5Gantt.vue';
import p6 from './ViewP6Gallery.vue';
import p7 from './ViewP7Form.vue';
export default{
    components:{
        p1,
        p2,
		p3,
		p4,
		p5,
		p6,
		p7
    }
}


</script>