<template>
<el-space direction="vertical" class="FieldP9">
<el-collapse  @change="reset_notice" accordion class="FieldP9">
    <el-text class="mx-1" type="danger" size="small" tag="p">
    <h2>Barcode字段</h2>
    </el-text>

<el-collapse-item title="createCell()" name="createCell">
<highlightjs language='javascript' code="//这里仅仅只是创建了一个条码类型的cell，并不会直接写入表格中。
const table = await base.getActiveTable();
const type = FieldType.Barcode;
const filed_list = await table.getFieldListByType(type);
const bc_field = filed_list[0];//获取返回的第一个字段
await bc_field.createCell(cell_value)
//如果需要写入数据,需要使用addRecord()
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
const type = FieldType.Barcode;
const filed_list = await table.getFieldListByType(type);
const records_id = await table.getRecordIdList();//获取记录列表
const bc_field = filed_list[0];//获取返回的第一个字段
this.btn_notice = await bc_field.setValue(records_id[0],cell_value);
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
const type = FieldType.Barcode;
const filed_list = await table.getFieldListByType(type);
const records_id = await table.getRecordIdList();
const bc_field = filed_list[0];//获取返回的第一个字段
const cell_meta = await bc_field.getCell(records_id[0]);//获取单元格的Meta数据
"/>
		
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="getCell" />	
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		</el-space><br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="getValue()" name="getValue">
<highlightjs language='javascript' code="const table = await base.getActiveTable();
const type = FieldType.Barcode;
const filed_list = await table.getFieldListByType(type);
const records_id = await table.getRecordIdList();
const bc_field = filed_list[0];//获取返回的第一个条码字段
const cell_value = await bc_field.getValue(records_id[0]);
"/>
		
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="getValue" />	
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		</el-space><br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="getOnlyMobile()" name="getOnlyMobile">
<highlightjs language='javascript' code="const table = await base.getActiveTable();
const type = FieldType.Barcode;
const filed_list = await table.getFieldListByType(type);
const at_field = filed_list[0];//获取返回的第一个字段
const state = await at_field.getOnlyMobile();
const res = state?'只允许移动端上传':'可以多种方式上传';
"/>
		
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="getOnlyMobile" />	
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		</el-space><br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="setOnlyMobile()" name="setOnlyMobile">
<highlightjs language='javascript' code="//当前设置对整个字段生效
const table = await base.getActiveTable();
const type = FieldType.Barcode;
const filed_list = await table.getFieldListByType(type);
const at_field = filed_list[0];//获取返回的第一个字段
const state = await at_field.getOnlyMobile();
const new_state = !state;//取反
await at_field.setOnlyMobile(new_state);
"/>
		
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="setOnlyMobile" />	
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
			const type = FieldType.Barcode;
			const filed_list = await table.getFieldListByType(type);
			const bc_field = filed_list[0];//获取返回的第一个字段
        	this.btn_notice = await bc_field.createCell(cv)
			this.description = "这里仅仅只是创建了一个条码类型的cell，并不会直接写入表格中。"
        },
		async setValue(cv){
			const table = await base.getActiveTable();
			const type = FieldType.Barcode;
			const filed_list = await table.getFieldListByType(type);
			const records_id = await table.getRecordIdList();
			const bc_field = filed_list[0];//获取返回的第一个字段
			this.btn_notice = await bc_field.setValue(records_id[0],cv);
			this.description = "数据替换成功";
		},
		async getCell(){
			const table = await base.getActiveTable();
			const type = FieldType.Barcode;
			const filed_list = await table.getFieldListByType(type);
			const records_id = await table.getRecordIdList();
			const bc_field = filed_list[0];//获取返回的第一个字段
			this.btn_notice = await bc_field.getCell(records_id[0]);
			this.description = "获取到了单元格的信息";
		},
		async getValue(){
			const table = await base.getActiveTable();
			const type = FieldType.Barcode;
			const filed_list = await table.getFieldListByType(type);
			const records_id = await table.getRecordIdList();
			const bc_field = filed_list[0];//获取返回的第一个字段
			this.btn_notice = await bc_field.getValue(records_id[0]);
			this.description = "获取到了单元格的信息";
		},
		async getOnlyMobile(){
			const table = await base.getActiveTable();
			const type = FieldType.Barcode;
			const filed_list = await table.getFieldListByType(type);
			const at_field = filed_list[0];//获取返回的第一个字段
			const state = await at_field.getOnlyMobile();
			this.description = state?'只允许移动端扫描录入':'可以多种方式录入'
		},
		async setOnlyMobile(){
			const table = await base.getActiveTable();
			const type = FieldType.Barcode;
			const filed_list = await table.getFieldListByType(type);
			const at_field = filed_list[0];//获取返回的第一个字段
			const state = await at_field.getOnlyMobile();
			const new_state = !state;//取反
			await at_field.setOnlyMobile(new_state);
			this.description = new_state?'只允许移动端扫描录入':'可以多种方式录入';
		},
		
    }
}
</script>