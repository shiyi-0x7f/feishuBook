<template>
<el-space direction="vertical" class="FieldP2">
<el-collapse  @change="reset_notice" accordion class="FieldP2">
    <el-text class="mx-1" type="danger" size="small" tag="p">
    <h2>Url字段</h2>
    </el-text>

<el-collapse-item title="createCell()" name="createCell">
<highlightjs language='javascript' code="//这里仅仅只是创建了一个超链接类型的cell，并不会直接写入表格中。
const table = await base.getActiveTable();
const type = FieldType.Url;
const filed_list = await table.getFieldListByType(type);
const text_field = filed_list[0];//获取返回的第一个字段
await text_field.createCell(cell_value)
"/>
		
		<el-space direction="horizontal">
			<el-input v-model="cell_value" placeholder="单元格内容" />
			<el-button type="primary" :icon="Pointer" @click="createCell(cv)" />
			
		</el-space><br>
		<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="setValue()" name="setValue">
<highlightjs language='javascript' code="const table = await base.getActiveTable();
const type = FieldType.Url;
const filed_list = await table.getFieldListByType(type);
const records_id = await table.getRecordIdList();//获取记录列表
const text_field = filed_list[0];//获取返回的第一个字段
this.btn_notice = await text_field.setValue(records_id[0],cell_value);
"/>
		
		<el-space direction="horizontal">
			<el-input v-model="cell_value" placeholder="单元格内容" />
			<el-button type="primary" :icon="Pointer" @click="setValue(cell_value)" />
			
		</el-space><br>
		<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="getCell()" name="getCell">
<highlightjs language='javascript' code="const table = await base.getActiveTable();
const type = FieldType.Url;
const filed_list = await table.getFieldListByType(type);
const records_id = await table.getRecordIdList();
const text_field = filed_list[0];//获取返回的第一个字段
const cell_meta = await text_field.getCell(records_id[0]);//获取单元格的Meta数据
"/>
		
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="getCell" />	
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		</el-space><br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="getValue()" name="getValue">
<highlightjs language='javascript' code="const table = await base.getActiveTable();
const type = FieldType.Url;
const filed_list = await table.getFieldListByType(type);
const records_id = await table.getRecordIdList();
const text_field = filed_list[0];//获取返回的第一个超链接字段
const cell_value = await text_field.getValue(records_id[0]);
"/>
		
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="getValue" />	
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
            Pointer,
        }
    },
    methods: {
        reset_notice(){
            this.btn_notice="点击按钮获取查看当前代码运行结果";
            this.description="";
			this.cell_value = "";
        },
        async createCell(cv){
        	const table = await base.getActiveTable();
			const type = FieldType.Url;
			const filed_list = await table.getFieldListByType(type);
			const text_field = filed_list[0];//获取返回的第一个字段
        	this.btn_notice = await text_field.createCell(cv)
			this.description = "这里仅仅只是创建了一个超链接类型的cell，并不会直接写入表格中。"
        },
		async setValue(cv){
			const table = await base.getActiveTable();
			const type = FieldType.Url;
			const filed_list = await table.getFieldListByType(type);
			const records_id = await table.getRecordIdList();
			const text_field = filed_list[0];//获取返回的第一个字段
			this.btn_notice = await text_field.setValue(records_id[0],cv);
			this.description = "数据替换成功";
		},
		async getCell(){
			const table = await base.getActiveTable();
			const type = FieldType.Url;
			const filed_list = await table.getFieldListByType(type);
			const records_id = await table.getRecordIdList();
			const text_field = filed_list[0];//获取返回的第一个字段
			this.btn_notice = await text_field.getCell(records_id[0]);
			this.description = "获取到了单元格的信息";
		},
		async getValue(){
			const table = await base.getActiveTable();
			const type = FieldType.Url;
			const filed_list = await table.getFieldListByType(type);
			const records_id = await table.getRecordIdList();
			const text_field = filed_list[0];//获取返回的第一个字段
			this.btn_notice = await text_field.getValue(records_id[0]);
			this.description = "获取到了单元格的信息";
		},
		
    }
}
</script>