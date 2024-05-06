<template>
<el-space direction="vertical" class="FieldP15">
<el-collapse  @change="reset_notice" accordion class="FieldP15">
    <el-text class="mx-1" type="danger" size="small" tag="p">
    <h2>Number字段</h2>
    </el-text>

<el-collapse-item title="setFormatter()" name="setFormatter">
<highlightjs language='javascript' code="const table = await base.getActiveTable();
const type = FieldType.Number;
const filed_list = await table.getFieldListByType(type);
const num_field = filed_list[0];//获取返回的第一个字段
await num_field.setFormatter(format);
"/>
<el-select v-model="format" placeholder="选择数字格式">
      <el-option
        v-for="item in formatters"
        :key="item"
        :label="item"
        :value="item"
      />
    </el-select><br />
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="setFormatter(format)" />	
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		</el-space><br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="getFormatter()" name="getFormatter">
<highlightjs language='javascript' code="const table = await base.getActiveTable();
const type = FieldType.Number;
const filed_list = await table.getFieldListByType(type);
const num_field = filed_list[0];//获取返回的第一个字段
const format = await num_field.getFormatter();
"/>
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="getFormatter" />	
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
			format:'',
			formatters:['0', '0.0', '0.00', '0.000', '1,000', '1,000.00', '0%', '0.00%'],
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
		async setFormatter(c){
			const table = await base.getActiveTable();
			const type = FieldType.Number;
			const filed_list = await table.getFieldListByType(type);
			const num_field = filed_list[0];//获取返回的第一个字段
			await num_field.setFormatter(c);
			this.description = `数字格式已设为[${c}]`;
		},
		async getFormatter(){
			const table = await base.getActiveTable();
			const type = FieldType.Number;
			const filed_list = await table.getFieldListByType(type);
			const num_field = filed_list[0];//获取返回的第一个字段
			const format = await num_field.getFormatter();
			this.description = `当前数字格式为[${format}]`;
		},
    }
}
</script>