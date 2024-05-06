<template>
<el-space direction="vertical" class="FieldP10">
<el-collapse  @change="reset_notice" accordion class="FieldP10">
    <el-text class="mx-1" type="danger" size="small" tag="p">
    <h2>Currency字段</h2>
    </el-text>

<el-collapse-item title="createCell()" name="createCell">
<highlightjs language='javascript' code="//这里仅仅只是创建了一个货币类型的cell，并不会直接写入表格中。
const table = await base.getActiveTable();
const type = FieldType.Currency;
const filed_list = await table.getFieldListByType(type);
const cr_field = filed_list[0];//获取返回的第一个字段
await cr_field.createCell(cell_value)
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
const type = FieldType.Currency;
const filed_list = await table.getFieldListByType(type);
const records_id = await table.getRecordIdList();//获取记录列表
const cr_field = filed_list[0];//获取返回的第一个字段
this.btn_notice = await cr_field.setValue(records_id[0],cell_value);
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
const type = FieldType.Currency;
const filed_list = await table.getFieldListByType(type);
const records_id = await table.getRecordIdList();
const cr_field = filed_list[0];//获取返回的第一个字段
const cell_meta = await cr_field.getCell(records_id[0]);//获取单元格的Meta数据
"/>
		
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="getCell" />	
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		</el-space><br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="getValue()" name="getValue">
<highlightjs language='javascript' code="const table = await base.getActiveTable();
const type = FieldType.Currency;
const filed_list = await table.getFieldListByType(type);
const records_id = await table.getRecordIdList();
const cr_field = filed_list[0];//获取返回的第一个货币字段
const cell_value = await cr_field.getValue(records_id[0]);
"/>
		
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="getValue" />	
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		</el-space><br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="setDecimalDigits()" name="setDecimalDigits">
<highlightjs language='javascript' code="const table = await base.getActiveTable();
const type = FieldType.Currency;
const filed_list = await table.getFieldListByType(type);
const cr_field = filed_list[0];//获取返回的第一个字段
await cr_field.setDecimalDigits(n);
"/>
		<el-input-number v-model="num" :min="0" :max="4"/>
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="setDecimalDigits(num)" />	
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		</el-space><br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 
	
<el-collapse-item title="getDecimalDigits()" name="getDecimalDigits">
<highlightjs language='javascript' code="const table = await base.getActiveTable();
const type = FieldType.Currency;
const filed_list = await table.getFieldListByType(type);
const cr_field = filed_list[0];//获取返回的第一个字段
await cr_field.getDecimalDigits();
"/>
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="getDecimalDigits" />	
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		</el-space><br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 
	
<el-collapse-item title="setCurrencyCode()" name="setCurrencyCode">
<highlightjs language='javascript' code="const table = await base.getActiveTable();
const type = FieldType.Currency;
const filed_list = await table.getFieldListByType(type);
const cr_field = filed_list[0];//获取返回的第一个字段
await cr_field.setCurrencyCode(CurrencyCode.CNY);
"/>
<el-select v-model="cur" placeholder="选择货币单位">
      <el-option
        v-for="item in cur_codes"
        :key="item"
        :label="item"
        :value="item"
      />
    </el-select><br />
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="setCurrencyCode(cur)" />	
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		</el-space><br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="getCurrencyCode()" name="getCurrencyCode">
<highlightjs language='javascript' code="const table = await base.getActiveTable();
const type = FieldType.Currency;
const filed_list = await table.getFieldListByType(type);
const cr_field = filed_list[0];//获取返回的第一个字段
await cr_field.getCurrencyCode();
"/>
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="getCurrencyCode" />	
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
			cur:'',
			cur_codes:['CNY', 'USD', 'EUR', 'GBP', 'AED', 'AUD', 'BRL', 'CAD', 'CHF', 'HKD', 'INR', 'IDR', 'JPY', 'KRW', 'MOP', 'MXN', 'MYR', 'PHP', 'PLN', 'RUB', 'SGD', 'THB', 'TRY', 'TWD', 'VND'],
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
        async createCell(cv){
        	const table = await base.getActiveTable();
			const type = FieldType.Currency;
			const filed_list = await table.getFieldListByType(type);
			const cr_field = filed_list[0];//获取返回的第一个字段
        	this.btn_notice = await cr_field.createCell(cv)
			this.description = "这里仅仅只是创建了一个货币类型的cell，并不会直接写入表格中。"
        },
		async setValue(cv){
			const table = await base.getActiveTable();
			const type = FieldType.Currency;
			const filed_list = await table.getFieldListByType(type);
			const records_id = await table.getRecordIdList();
			const cr_field = filed_list[0];//获取返回的第一个字段
			this.btn_notice = await cr_field.setValue(records_id[0],cv);
			this.description = "这里只能填数字，填文字会导致单元格不显示任何内容";
		},
		async getCell(){
			const table = await base.getActiveTable();
			const type = FieldType.Currency;
			const filed_list = await table.getFieldListByType(type);
			const records_id = await table.getRecordIdList();
			const cr_field = filed_list[0];//获取返回的第一个字段
			this.btn_notice = await cr_field.getCell(records_id[0]);
			this.description = "获取到了单元格的信息";
		},
		async getValue(){
			const table = await base.getActiveTable();
			const type = FieldType.Currency;
			const filed_list = await table.getFieldListByType(type);
			const records_id = await table.getRecordIdList();
			const cr_field = filed_list[0];//获取返回的第一个字段
			this.btn_notice = await cr_field.getValue(records_id[0]);
			this.description = "获取到了单元格的信息";
		},
		async setDecimalDigits(n){
			const table = await base.getActiveTable();
			const type = FieldType.Currency;
			const filed_list = await table.getFieldListByType(type);
			const cr_field = filed_list[0];//获取返回的第一个字段
			await cr_field.setDecimalDigits(n);
			this.description = `货币字段精度已设为[${n}]`;
		},
		async getDecimalDigits(){
			const table = await base.getActiveTable();
			const type = FieldType.Currency;
			const filed_list = await table.getFieldListByType(type);
			const cr_field = filed_list[0];//获取返回的第一个字段
			const n = await cr_field.getDecimalDigits();
			this.description = `货币字段精度为[${n}]`;
		},
		async setCurrencyCode(c){
			const table = await base.getActiveTable();
			const type = FieldType.Currency;
			const filed_list = await table.getFieldListByType(type);
			const cr_field = filed_list[0];//获取返回的第一个字段
			await cr_field.setCurrencyCode(c);
			this.description = `货币字段单位已设为[${c}]`;
		},
		async getCurrencyCode(){
			const table = await base.getActiveTable();
			const type = FieldType.Currency;
			const filed_list = await table.getFieldListByType(type);
			const cr_field = filed_list[0];//获取返回的第一个字段
			const cur = await cr_field.getCurrencyCode();
			this.description = `当前货币字段单位为[${cur}]`;
		},
    }
}
</script>