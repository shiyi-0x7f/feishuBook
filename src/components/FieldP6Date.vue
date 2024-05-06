<template>
<el-space direction="vertical" class="FieldP6">
<el-collapse  @change="reset_notice" accordion class="FieldP6">
    <el-text class="mx-1" type="danger" size="small" tag="p">
    <h2>DateTime字段</h2>
    </el-text>

<el-collapse-item title="createCell()" name="createCell">
<highlightjs language='javascript' code="//这里仅仅只是创建了一个日期类型的cell，并不会直接写入表格中。
const table = await base.getActiveTable();
const type = FieldType.DateTime;
const filed_list = await table.getFieldListByType(type);
const date_field = filed_list[0];//获取返回的第一个字段
await date_field.createCell(cell_value)
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
const type = FieldType.DateTime;
const filed_list = await table.getFieldListByType(type);
const records_id = await table.getRecordIdList();//获取记录列表
const date_field = filed_list[0];//获取返回的第一个字段
await date_field.setValue(records_id[0],cell_value);
"/>
		
		<el-space direction="horizontal">
			<el-date-picker v-model="cell_value" type="date" 
			placeholder="Pick a day" 
			format="YYYY/MM/DD"
			value-format="x"/>
		<el-button type="primary" :icon="Pointer" @click="setValue(cell_value)" />
		</el-space><br>
		<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="getCell()" name="getCell">
<highlightjs language='javascript' code="const table = await base.getActiveTable();
const type = FieldType.DateTime;
const filed_list = await table.getFieldListByType(type);
const records_id = await table.getRecordIdList();
const date_field = filed_list[0];//获取返回的第一个字段
const cell_meta = await date_field.getCell(records_id[0]);//获取单元格的Meta数据
"/>
		
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="getCell" />	
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		</el-space><br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="getValue()" name="getValue">
<highlightjs language='javascript' code="const table = await base.getActiveTable();
const type = FieldType.DateTime;
const filed_list = await table.getFieldListByType(type);
const records_id = await table.getRecordIdList();
const date_field = filed_list[0];//获取返回的第一个日期字段
const cell_value = await date_field.getValue(records_id[0]);
"/>
		
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="getValue" />	
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		</el-space><br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="getDateFormat()" name="getDateFormat">
<highlightjs language='javascript' code="const table = await base.getActiveTable();
const type = FieldType.DateTime;
const filed_list = await table.getFieldListByType(type);
const date_format = await date_field.getDateFormat();
"/>
		
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="getDateFormat" />	
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		</el-space><br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="setDateFormat()" name="setDateFormat">
<highlightjs language='javascript' code="//这里如果设置为了带有 [时:分] 的时间格式,无法设回只有年月日的格式.
const table = await base.getActiveTable();
const type = FieldType.DateTime;
const filed_list = await table.getFieldListByType(type);
const date_field = filed_list[0];//获取返回的第一个字段
await date_field.setDateFormat(cv);
"/>
		<el-select v-model="cell_value" placeholder="Select">
		      <el-option
		        v-for="item in options"
		        :key="item.value"
		        :label="item.label"
		        :value="item.value"
		      />
		    </el-select>
			<br />
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="setDateFormat(cell_value)" />	
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
			options:[{
						value: 'yyyy/MM/dd',
						label: '年/月/日',
					  },
					  {
						value: 'yyyy/MM/dd HH:mm',
						label: '年/月/日 时:分',
					  },
					  {
						value: 'yyyy-MM-dd HH:mm',
						label: '年-月-日 时:分',
					  },
					  {
						value: 'yyyy-MM-dd',
						label: '年-月-日',
					  },
					  {
						value: 'MM-dd',
						label: '月-日',
					  },
					  {
						value: 'MM/dd/yyyy',
						label: '月/日/年',
					  },
					  {
						value: 'dd/MM/yyyy',
						label: '日/月/年',
					  },
					  ],
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
			const type = FieldType.DateTime;
			const filed_list = await table.getFieldListByType(type);
			const date_field = filed_list[0];//获取返回的第一个字段
        	this.btn_notice = await date_field.createCell(cv)
			this.description = "这里仅仅只是创建了一个日期类型的cell，并不会直接写入表格中。"
        },
		async setValue(cv){
			const table = await base.getActiveTable();
			const type = FieldType.DateTime;
			const filed_list = await table.getFieldListByType(type);
			const records_id = await table.getRecordIdList();
			const date_field = filed_list[0];//获取返回的第一个字段
			await date_field.setValue(records_id[0],cv);
			this.description = `这里传入的是时间戳TimeStamp,当前设定的时间戳为${cv}`;
		},
		async getCell(){
			const table = await base.getActiveTable();
			const type = FieldType.DateTime;
			const filed_list = await table.getFieldListByType(type);
			const records_id = await table.getRecordIdList();
			const date_field = filed_list[0];//获取返回的第一个字段
			this.btn_notice = await date_field.getCell(records_id[0]);
			this.description = "获取到了单元格的信息";
		},
		async getValue(){
			const table = await base.getActiveTable();
			const type = FieldType.DateTime;
			const filed_list = await table.getFieldListByType(type);
			const records_id = await table.getRecordIdList();
			const date_field = filed_list[0];//获取返回的第一个字段
			this.btn_notice = await date_field.getValue(records_id[0]);
			this.description = "这里返回的也是时间戳";
		},
		async getDateFormat(){
			const table = await base.getActiveTable();
			const type = FieldType.DateTime;
			const filed_list = await table.getFieldListByType(type);
			const date_field = filed_list[0];//获取返回的第一个字段
			this.btn_notice = await date_field.getDateFormat();
		},
		async setDateFormat(cv){
			const table = await base.getActiveTable();
			const type = FieldType.DateTime;
			const filed_list = await table.getFieldListByType(type);
			const date_field = filed_list[0];//获取返回的第一个字段
			this.btn_notice = await date_field.setDateFormat(cv);
			this.description = "设置成功，当前模式为"+cv;
		},
		
    }
}
</script>