<template>
<el-space direction="vertical" class="FieldP11">
<el-collapse  @change="reset_notice" accordion class="FieldP11">
    <el-text class="mx-1" type="danger" size="small" tag="p">
    <h2>SingleLink字段</h2>
    </el-text>
	<el-text class="mx-1" size="small" tag="p">
	SingleLink本身不能直接写入数据，而是引用表格内容。
	要操作这个字段，首先需要熟悉此前记录id、表格id的获取。
	</el-text>

<el-collapse-item title="getAllTableId()" name="getAllTableId">
<highlightjs language='javascript' code="//这段代码用于获取当前base下所有表格的tableId
table_meta = await base.getTableMetaList();
"/>
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="getAllTableId" />	
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		</el-space><br>
		<el-text class="mx-1" type="primary" v-if="table_meta" v-for="(item,index) in table_meta" :key="index">
		{{ item }}<br />
		</el-text><br />
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="getTableId()" name="getTableId">
<highlightjs language='javascript' code="//请注意!这里获取到的是关联表的tableId,不一定是当前表格的id
const table = await base.getActiveTable();
const type = FieldType.SingleLink;
const filed_list = await table.getFieldListByType(type);
const records_id = await table.getRecordIdList();
const sl_field = filed_list[0];//获取返回的第一个字段
const table_id = await sl_field.getTableId();
//做一个简单的判断
if (table_id==table.id){
	alert('当前字段关联的表格是自己所在的表格')
}
"/>
		
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="getTableId" />	
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		</el-space><br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="setTableId()" name="setTableId">
<highlightjs language='javascript' code="//这里设置的是关联表格,设置后需要单击单向关联单元格才能看到变化
const table = await base.getActiveTable();
const type = FieldType.SingleLink;
const filed_list = await table.getFieldListByType(type);
const records_id = await table.getRecordIdList();
const sl_field = filed_list[0];//获取返回的第一个字段
const table_id = await sl_field.getTableId();
//做一个简单的判断
if (table_id==table.id){
	alert('当前字段关联的表格是自己所在的表格')
}
"/>
<el-select v-model="cell_value" @visible-change="getAllTableId" placeholder="选择关联表">
      <el-option
        v-for="item in table_meta"
        :key="item.id"
        :label="item.name"
        :value="item.id"
      />
    </el-select><br />
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="setTableId(cell_value)" />	
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		</el-space><br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 
	
<el-collapse-item title="createCell()" name="createCell">
<highlightjs language='javascript' code="//这里请参照其他类型字段中的createCell()进行代码编写
"/>
	</el-collapse-item> 

<el-collapse-item title="setValue()" name="setValue">
<highlightjs language='javascript' code="//这里请参照其他类型字段中的setValue()进行代码编写
"/>
	</el-collapse-item> 

<el-collapse-item title="getCell()" name="getCell">
<highlightjs language='javascript' code="const table = await base.getActiveTable();
const type = FieldType.SingleLink;
const filed_list = await table.getFieldListByType(type);
const records_id = await table.getRecordIdList();
const sl_field = filed_list[0];//获取返回的第一个字段
const cell_meta = await sl_field.getCell(records_id[0]);//获取单元格的Meta数据
"/>
		
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="getCell" />	
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		</el-space><br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="getValue()" name="getValue">
<highlightjs language='javascript' code="const table = await base.getActiveTable();
const type = FieldType.SingleLink;
const filed_list = await table.getFieldListByType(type);
const records_id = await table.getRecordIdList();
const sl_field = filed_list[0];//获取返回的第一个单向关联字段
const cell_value = await sl_field.getValue(records_id[0]);
"/>
		
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="getValue" />	
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		</el-space><br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 
	
<el-collapse-item title="getMultiple()" name="getMultiple">
<highlightjs language='javascript' code="const table = await base.getActiveTable();
const type = FieldType.SingleLink;
const filed_list = await table.getFieldListByType(type);
const sl_field = filed_list[0];//获取返回的第一个字段
const state = await sl_field.getMultiple();
//true '允许关联多个记录' false '不允许关联多个记录'
"/>
		
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="getMultiple" />	
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		</el-space><br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="setMultiple()" name="setMultiple">
<highlightjs language='javascript' code="const table = await base.getActiveTable();
const type = FieldType.SingleLink;
const filed_list = await table.getFieldListByType(type);
const sl_field = filed_list[0];//获取返回的第一个字段
const state = await sl_field.getMultiple();
const new_state = !state;//取反
await sl_field.setMultiple(new_state);
"/>
		
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="setMultiple" />	
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
			table_meta:[],
            Pointer,
        }
    },
    methods: {
        reset_notice(){
            this.btn_notice="点击按钮获取查看当前代码运行结果";
            this.description="";
			this.cell_value = "";
			this.table_meta=[];
        },
		async getAllTableId(){
			this.table_meta = await base.getTableMetaList();
		},
		async getTableId(){
			const table = await base.getActiveTable();
			const type = FieldType.SingleLink;
			const filed_list = await table.getFieldListByType(type);
			const records_id = await table.getRecordIdList();
			const sl_field = filed_list[0];//获取返回的第一个字段
			const table_id = await sl_field.getTableId();
			this.description = `当前字段关联的表格id [${table_id}]，`;
			if (table_id==table.id){
				this.description = "当前字段关联的表格是自己所在的表格"
			}
		},
		async setTableId(td){
			const table = await base.getActiveTable();
			const type = FieldType.SingleLink;
			const filed_list = await table.getFieldListByType(type);
			const records_id = await table.getRecordIdList();
			const sl_field = filed_list[0];//获取返回的第一个字段
			await sl_field.setTableId(td);
			this.description = `当前字段关联的表格id [${td}]，`;
		},
		async getCell(){
			const table = await base.getActiveTable();
			const type = FieldType.SingleLink;
			const filed_list = await table.getFieldListByType(type);
			const records_id = await table.getRecordIdList();
			const sl_field = filed_list[0];//获取返回的第一个字段
			this.btn_notice = await sl_field.getCell(records_id[0]);
			this.description = "获取到了单元格的信息";
		},
		async getValue(){
			const table = await base.getActiveTable();
			const type = FieldType.SingleLink;
			const filed_list = await table.getFieldListByType(type);
			const records_id = await table.getRecordIdList();
			const sl_field = filed_list[0];//获取返回的第一个字段
			this.btn_notice = await sl_field.getValue(records_id[0]);
			this.description = "获取到了单元格的信息";
		},
		async getMultiple(){
			const table = await base.getActiveTable();
			const type = FieldType.SingleLink;
			const filed_list = await table.getFieldListByType(type);
			const sl_field = filed_list[0];//获取返回的第一个字段
			const state = await sl_field.getMultiple();
			this.description = state?'允许关联多个记录':'不允许关联多个记录';
		},
		async setMultiple(){
			const table = await base.getActiveTable();
			const type = FieldType.SingleLink;
			const filed_list = await table.getFieldListByType(type);
			const sl_field = filed_list[0];//获取返回的第一个字段
			const state = await sl_field.getMultiple();
			const new_state = !state;//取反
			await sl_field.setMultiple(new_state);
			this.description = new_state?'允许关联多个记录':'不允许关联多个记录';
		},
    }
}
</script>