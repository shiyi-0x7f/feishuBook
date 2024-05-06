<template>
<el-space direction="vertical" class="FieldP1">
<el-collapse  @change="reset_notice" accordion class="FieldP1">
    <el-text class="mx-1" type="danger" size="small" tag="p">
    <h2>基础字段</h2>
    </el-text>

<el-collapse-item title="addAllKindsOfFields()" name="addAllKindsOfFields">
<highlightjs language='javascript' code="//这里一键增加其他25种字段
const all_types = [2,3,4,5,7,11,13,15,17,18,19,20,21,22,23,1001,1002,1003,1004,1005,99001,99002,99003,99004,99005];
const table = await base.getActiveTable();
for (let t in all_types){
	await table.addField({type:all_types[t]});
}
" />       
        <el-space direction="horizontal">
            <el-button type="primary" :icon="Pointer" @click="addAllKindsOfFields" />
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br>
        </el-space><br>
        <el-text class="mx-1" type="danger">{{ description }}</el-text>
    </el-collapse-item> 

<el-collapse-item title="getFieldData()" name="getFieldData">
<highlightjs language='javascript' code="//部分代码与view视图中的一致,但对象不一样
const table = await base.getActiveTable();
const filed_list = await table.getFieldList();
const field = filed_list[0];//获取返回的第一个字段
const id = field.id;//直接获取id
const table_id = field.tableId;//直接获取表格id
const field_name = await field.getName();//获取字段名
const field_type = await field.getType();//获取字段类型
const field_meta = await field.getMeta();//获取字段Meta信息
const field_value_list = await field.getFieldValueList();//获取字段的Meta数据，返回一个列表
"/>
		
		<el-space direction="horizontal">

			<el-button type="primary" :icon="Pointer" @click="getFieldData" />
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text>
		</el-space><br>
		<el-text class="mx-1" v-if="field_data" v-for="(index,item) in field_data">{{ index }}<br/></el-text>
		<br>
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
			field_data:[],
            Pointer,
        }
    },
    methods: {
        reset_notice(){
            this.btn_notice="点击按钮获取查看当前代码运行结果";
            this.description="";
        },
		async addAllKindsOfFields(){
            const all_types = [2,3,4,5,7,11,13,15,17,18,19,20,21,22,23,1001,1002,1003,1004,1005,99001,99002,99003,99004,99005];
            const table = await base.getActiveTable();
			for (let t in all_types){
				await table.addField({type:all_types[t]});
			}
            this.description = "为确保后续所有代码有效，请先在测试表格中执行该代码";
        },
        async getFieldData(){
        	const table = await base.getActiveTable();
			const filed_list = await table.getFieldList();
			const field = filed_list[0];//获取返回的第一个字段
        	const id = field.id;//直接获取id
        	const table_id = field.tableId;//直接获取表格id
        	const field_name = await field.getName();//获取字段名
        	const field_type = await field.getType();//获取字段类型
        	const field_meta = await field.getMeta();//获取字段Meta信息
        	const field_value_list = await field.getFieldValueList();//获取字段的Meta数据，返回一个列表
        	if (this.field_data.length!=0){
        		this.field_data = [];
        	}
        	this.field_data.push(...[
        		{"field_id":id},
        		{"table_id":table_id},
        		{"field_name":field_name},
        		{"field_type":field_type},
        		{"field_meta":field_meta},
        		{"field_value_list":field_value_list},
        	]);
        },
    }
}
</script>