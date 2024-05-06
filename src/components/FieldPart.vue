<template>
<el-collapse accordion>
	<el-text class="mx-1" type="primary" tag="p">
	字段，简单可以理解为列数据。<br />
	在这个章节中，我们将以Field粒度处理表格，同时也会使用更加完整和综合的代码进行演示。<br />
	部分不支持主动添加或比较简单的字段，暂未添加到本章节。
	</el-text>
	
    <el-collapse-item title="P1 基础字段" class="FieldP1">
        <p1/>
    </el-collapse-item>

    <el-collapse-item title="P2 Text文本字段" class="FieldP2">
        <p2/>
    </el-collapse-item>

    <el-collapse-item title="P3 SingleSelect单选字段" class="FieldP3">
		<p3/>
    </el-collapse-item>
	
	<el-collapse-item title="P4 MultiSelect多选字段" class="FieldP4">
		<p4/>
	</el-collapse-item>
	
	<el-collapse-item title="P5 Url超链接字段" class="FieldP5">
		<p5/>
	</el-collapse-item>
	
	<el-collapse-item title="P6 Date日期字段" class="FieldP6">
		<p6/>
	</el-collapse-item>

	<el-collapse-item title="P7 User人员字段" class="FieldP7">
			<p7/>
	</el-collapse-item>
	
	<el-collapse-item title="P8 Attachment附件字段" class="FieldP8">
			<p8/>
	</el-collapse-item>
	
	<el-collapse-item title="P9 Barcode条码字段" class="FieldP9">
			<p9/>
	</el-collapse-item>
	
	<el-collapse-item title="P10 Currency货币字段" class="FieldP10">
			<p10/>
	</el-collapse-item>
	
	<el-collapse-item title="P11 SingleLink单向关联字段" class="FieldP11">
			<p11/>
	</el-collapse-item>
	
	<el-collapse-item title="P12 DuplexLink双向关联字段" class="FieldP12">
			<p12/>
	</el-collapse-item>
	
	<el-collapse-item title="P13 Group群组字段" class="FieldP13">
			<p13/>
	</el-collapse-item>
	
	<el-collapse-item title="P14 Location位置字段" class="FieldP14">
			<p14/>
	</el-collapse-item>
	
	<el-collapse-item title="P15 Number数字字段" class="FieldP15">
			<p15/>
	</el-collapse-item>
	
	<el-collapse-item title="P16 Rating评分字段" class="FieldP16">
			<p16/>
	</el-collapse-item>
</el-collapse>
    
</template>

<script>
import p1 from './FieldP1.vue';
import p2 from './FieldP2Text.vue';
import p3 from './FieldP3SingleSelect.vue';
import p4 from './FieldP4MultiSelect.vue';
import p5 from './FieldP5Url.vue';
import p6 from './FieldP6Date.vue';
import p7 from './FieldP7User.vue';
import p8 from './FieldP8Attachment.vue';
import p9 from './FieldP9Barcode.vue';
import p10 from './FieldP10Currency.vue';
import p11 from './FieldP11SingleLink.vue';
import p12 from './FieldP12DuplexLink.vue';
import p13 from './FieldP13Group.vue';
import p14 from './FieldP14Location.vue';
import p15 from './FieldP15Number.vue';
import p16 from './FieldP16Rating.vue';
 
export default{
    components:{
        p1,
		p2,
		p3,
		p4,
		p5,
		p6,
		p7,
		p8,
		p9,
		p10,
		p11,
		p12,
		p13,
		p14,
		p15,
		p16
    }
}
</script>