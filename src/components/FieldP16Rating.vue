<template>
<el-space direction="vertical" class="FieldP16">
<el-collapse  @change="reset_notice" accordion class="FieldP16">
    <el-text class="mx-1" type="danger" size="small" tag="p">
    <h2>Rating字段</h2>
    </el-text>
	
<el-collapse-item title="getMinMax()" name="getMinMax">
<highlightjs language='javascript' code="//请在拥有评分字段的表格中执行该代码
const table = await base.getActiveTable();
const type = FieldType.Rating;
const filed_list = await table.getFieldListByType(type);
const rate_field = filed_list[0];//获取返回的第一个字段
const minn = await rate_field.getMin();
const maxn = await rate_field.getMax();
"/>
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="getMinMax" />	
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		</el-space><br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 	
	
<el-collapse-item title="setMin()" name="setMin">
<highlightjs language='javascript' code="const table = await base.getActiveTable();
const type = FieldType.Rating;
const filed_list = await table.getFieldListByType(type);
const rate_field = filed_list[0];//获取返回的第一个字段
await rate_field.setMin(minn);//minn只能是0或者1
"/>
		<input type="number" id="minn" min="0" max="1" v-model="num"/><br />
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="setMin(num)" />	
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		</el-space><br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="setMax()" name="setMax">
<highlightjs language='javascript' code="const table = await base.getActiveTable();
const table = await base.getActiveTable();
const type = FieldType.Rating;
const filed_list = await table.getFieldListByType(type);
const rate_field = filed_list[0];//获取返回的第一个字段
await rate_field.setMax(maxn);//1 ≤ maxn ≤ 10
"/>
	<input type="number" id="maxn" min="1" max="10" v-model="num"/><br />
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="setMax(num)" />	
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		</el-space><br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="getRatingIcon()" name="getRatingIcon">
<highlightjs language='javascript' code="const table = await base.getActiveTable();
const type = FieldType.Rating;
const filed_list = await table.getFieldListByType(type);
const rate_field = filed_list[0];//获取返回的第一个字段
const icon = await rate_field.getRatingIcon();
"/>
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="getRatingIcon" />	
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		</el-space><br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="setRatingIcon()" name="setRatingIcon">
<highlightjs language='javascript' code="//当前设置对整个字段生效
const table = await base.getActiveTable();
const type = FieldType.Rating;
const filed_list = await table.getFieldListByType(type);
const rate_field = filed_list[0];//获取返回的第一个字段
await rate_field.setRatingIcon(RatingIconType.FLOWER);//设置合法的图标
"/>
<el-select v-model="icon" placeholder="选择评分图标">
      <el-option
        v-for="item in icons"
        :key="item"
        :label="item"
        :value="item"
      />
    </el-select><br />
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="setRatingIcon(icon)" />	
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		</el-space><br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

</el-collapse>
</el-space>

</template>

<script>
import { bitable,FieldType,ViewType } from '@lark-base-open/js-sdk';
import { Pointer } from '@element-plus/icons-vue';


const base = bitable.base;
export default {
    data() {
        return {
            btn_notice:"点击按钮获取查看当前代码运行结果",
            description:"",
			cell_value:"",
			icon:'',
			icons:['star', 'heart', 'thumbsup', 'fire', 'smile', 'lightning', 'flower', 'number'],
			num:0,
            Pointer,
        }
    },
    methods: {
        reset_notice(){
            this.btn_notice="点击按钮获取查看当前代码运行结果";
            this.description="";
			this.cell_value = "";
        },
		async getMinMax(){
			const table = await base.getActiveTable();
			const type = FieldType.Rating;
			const filed_list = await table.getFieldListByType(type);
			const rate_field = filed_list[0];//获取返回的第一个字段
			const minn = await rate_field.getMin();
			const maxn = await rate_field.getMax();
			this.description = `最小值[${minn}] 最大值[${maxn}]`;
		},
		async setMin(c){
			const table = await base.getActiveTable();
			const type = FieldType.Rating;
			const filed_list = await table.getFieldListByType(type);
			const rate_field = filed_list[0];//获取返回的第一个字段
			await rate_field.setMin(c);
			this.description = `评分最小值设为[${c}]`;
		},
		async setMax(c){
			const table = await base.getActiveTable();
			const type = FieldType.Rating;
			const filed_list = await table.getFieldListByType(type);
			const rate_field = filed_list[0];//获取返回的第一个字段
			await rate_field.setMax(c);
			this.description = `评分最大值设为[${c}]`;
		},
		async getRatingIcon(){
			const table = await base.getActiveTable();
			const type = FieldType.Rating;
			const filed_list = await table.getFieldListByType(type);
			const rate_field = filed_list[0];//获取返回的第一个字段
			const icon = await rate_field.getRatingIcon();
			this.description = `当前图标为[${icon}]`;
		},
		async setRatingIcon(ic){
			const table = await base.getActiveTable();
			const type = FieldType.Rating;
			const filed_list = await table.getFieldListByType(type);
			const rate_field = filed_list[0];//获取返回的第一个字段
			await rate_field.setRatingIcon(ic);
			this.description = `图标已设为[${ic}]`;
		},
		
		
    }
}
</script>