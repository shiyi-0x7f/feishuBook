<template>
<el-space direction="vertical" class="FieldP14">
<el-collapse  @change="reset_notice" accordion class="FieldP14">
    <el-text class="mx-1" type="danger" size="small" tag="p">
    <h2>Location字段</h2>
    </el-text>

<el-collapse-item title="createCell()" name="createCell">
<highlightjs language='javascript' code="//请勿输入无人区坐标 o(╥﹏╥)o
const table = await base.getActiveTable();
const type = FieldType.Location;
const filed_list = await table.getFieldListByType(type);
const lt_field = filed_list[0];//获取返回的第一个字段
const loca = `${longitude},${latitude}`;
const lt_cell = await lt_field.createCell({'location':loca});
await table.addRecord(lt_cell);//增加记录
"/>	
	    经度
	    <el-input-number v-model="longitude" :precision="4" min="-180" max="180"  controls-position="right"/>
	    <br />
		纬度
	    <el-input-number v-model="latitude" :precision="4" min="-90" max="90" controls-position="right"/>
		<br /><br />
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="createCell(longitude,latitude)" />
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		</el-space><br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="setValue()" name="setValue">
<highlightjs language='javascript' code="//请勿输入无人区坐标 o(╥﹏╥)o
const table = await base.getActiveTable();
const type = FieldType.Location;
const filed_list = await table.getFieldListByType(type);
const records_id = await table.getRecordIdList();//获取记录列表
const lt_field = filed_list[0];//获取返回的第一个字段
const loca = `${long},${lati}`;
await lt_field.setValue(records_id[0],{'location':loca});
"/>
		经度
		<el-input-number v-model="longitude" :precision="4" :min="-180" :max="180"  controls-position="right"/>
		<br />
		纬度
		<el-input-number v-model="latitude" :precision="4" :min="-90" :max="90" controls-position="right"/>
		<br /><br />
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="setValue(longitude,latitude)" />
			
		</el-space><br>
		<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="getCell()" name="getCell">
<highlightjs language='javascript' code="const table = await base.getActiveTable();
const type = FieldType.Location;
const filed_list = await table.getFieldListByType(type);
const records_id = await table.getRecordIdList();
const lt_field = filed_list[0];//获取返回的第一个字段
const cell_meta = await lt_field.getCell(records_id[0]);//获取单元格的Meta数据
"/>
		
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="getCell" />	
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		</el-space><br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="getValue()" name="getValue">
<highlightjs language='javascript' code="const table = await base.getActiveTable();
const type = FieldType.Location;
const filed_list = await table.getFieldListByType(type);
const records_id = await table.getRecordIdList();
const lt_field = filed_list[0];//获取返回的第一个条码字段
const cell_value = await lt_field.getValue(records_id[0]);
"/>
		
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="getValue" />	
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		</el-space><br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="getInputType()" name="getInputType">
<highlightjs language='javascript' code="const table = await base.getActiveTable();
const type = FieldType.Location;
const filed_list = await table.getFieldListByType(type);
const at_field = filed_list[0];//获取返回的第一个字段
const state = await at_field.getInputType();
const res = state?'只允许手机定位':'可获取任意位置';
"/>
		
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="getInputType" />	
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		</el-space><br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="setInputType()" name="setInputType">
<highlightjs language='javascript' code="//当前设置对整个字段生效
const table = await base.getActiveTable();
const type = FieldType.Location;
const filed_list = await table.getFieldListByType(type);
const at_field = filed_list[0];//获取返回的第一个字段
const state = await at_field.getOnlyMobile();
const new_state = !state;//取反
await at_field.setInputType(new_state);
"/>
		
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="setInputType" />	
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
			latitude:0,//纬度
			longitude:0,//经度
            Pointer,
        }
    },
    methods: {
        reset_notice(){
            this.btn_notice="点击按钮获取查看当前代码运行结果";
            this.description="";
			this.cell_value = "";
        },
        async createCell(long,lati){
        	const table = await base.getActiveTable();
			const type = FieldType.Location;
			const filed_list = await table.getFieldListByType(type);
			const lt_field = filed_list[0];//获取返回的第一个字段
			const loca = `${long},${lati}`;
        	const lt_cell = await lt_field.createCell({'location':loca});
			await table.addRecord(lt_cell);
			this.description = "记录添加完毕"
        },
		async setValue(long,lati){
			const table = await base.getActiveTable();
			const type = FieldType.Location;
			const filed_list = await table.getFieldListByType(type);
			const records_id = await table.getRecordIdList();
			const lt_field = filed_list[0];//获取返回的第一个字段
			const loca = `${long},${lati}`;
			this.btn_notice = await lt_field.setValue(records_id[0],{'location':loca});
			this.description = "数据替换成功";
		},
		async getCell(){
			const table = await base.getActiveTable();
			const type = FieldType.Location;
			const filed_list = await table.getFieldListByType(type);
			const records_id = await table.getRecordIdList();
			const lt_field = filed_list[0];//获取返回的第一个字段
			this.btn_notice = await lt_field.getCell(records_id[0]);
			this.description = "获取到了单元格的信息";
		},
		async getValue(){
			const table = await base.getActiveTable();
			const type = FieldType.Location;
			const filed_list = await table.getFieldListByType(type);
			const records_id = await table.getRecordIdList();
			const lt_field = filed_list[0];//获取返回的第一个字段
			this.btn_notice = await lt_field.getValue(records_id[0]);
			this.description = "获取到了单元格的信息";
		},
		async getInputType(){
			const table = await base.getActiveTable();
			const type = FieldType.Location;
			const filed_list = await table.getFieldListByType(type);
			const at_field = filed_list[0];//获取返回的第一个字段
			const state = await at_field.setInputType();
			this.description = state=='NOT_LIMIT'?'只允许手机定位':'可获取任意位置'
		},
		async setInputType(){
			const table = await base.getActiveTable();
			const type = FieldType.Location;
			const filed_list = await table.getFieldListByType(type);
			const at_field = filed_list[0];//获取返回的第一个字段
			const state = await at_field.getInputType();
			const new_state = state=='NOT_LIMIT'?'ONLY_MOBILE':'NOT_LIMIT';//取反
			await at_field.setInputType(new_state);
			this.description = new_state=='ONLY_MOBILE'?'只允许手机定位':'可获取任意位置';
		},
		
    }
}
</script>