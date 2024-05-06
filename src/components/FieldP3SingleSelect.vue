<template>
<el-space direction="vertical" class="FieldP1">
<el-collapse  @change="reset_notice" accordion class="FieldP1">
    <el-text class="mx-1" type="danger" size="small" tag="p">
    <h2>SingleSelect字段</h2>
    </el-text>

<el-collapse-item title="addOption()" name="addOption">
<highlightjs language='javascript' code="//请在单选字段中查看变化
const table = await base.getActiveTable();
const type = FieldType.SingleSelect;
const filed_list = await table.getFieldListByType(type);
const ss_field = filed_list[0];//获取返回的第一个单选字段
await ss_field.addOption(cell_value,1)
"/>
		
		<el-space direction="horizontal">
			<el-input v-model="cell_value" placeholder="单元格内容" />
			<el-button type="primary" :icon="Pointer" @click="addOption(cell_value)" />
			
		</el-space><br>
		<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="addOptions()" name="addOptions">
<highlightjs language='javascript' code="//一次性新增3个选项
const table = await base.getActiveTable();
const type = FieldType.SingleSelect;
const filed_list = await table.getFieldListByType(type);
const ss_field = filed_list[0];//获取返回的第一个单选字段
let options = [{'name':op1},{'name':op2},{'name':op3}]//构建了一个选项列表
await ss_field.addOptions(options);
"/>
		
		<el-space direction="horizontal">
			<el-input v-model="cell_value" placeholder="单元格内容" />
			<el-button type="primary" :icon="Pointer" @click="addOptions(cell_value)" />
			
		</el-space><br>
		<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="getOptions()" name="getOptions">
<highlightjs language='javascript' code="const table = await base.getActiveTable();
const type = FieldType.SingleSelect;
const filed_list = await table.getFieldListByType(type);
const ss_field = filed_list[0];//获取返回的第一个单选字段
const ops = await ss_field.getOptions();
"/>
		
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="getOptions" />
		</el-space><br>
		<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="deleteOption()" name="deleteOption">
<highlightjs language='javascript' code="//const table = await base.getActiveTable();
const type = FieldType.SingleSelect;
const filed_list = await table.getFieldListByType(type);
const ss_field = filed_list[0];//获取返回的第一个单选字段
const ops = await ss_field.getOptions();
if (ops.length==0){
	alert('当前单选字段中没有选项，删除失败.');
	return;
}
const op_id = ops[0].id;
await ss_field.deleteOption(op_id);
"/>
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="deleteOption" />		
		</el-space><br>
		<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="setOption()" name="setOption">
<highlightjs language='javascript' code="//请确保单选字段的第一个记录中有选项
const table = await base.getActiveTable();
const type = FieldType.SingleSelect;
const filed_list = await table.getFieldListByType(type);
const ss_field = filed_list[0];//获取返回的第一个单选字段
const ops = await ss_field.getOptions();
const op_id = ops[0].id;
await ss_field.setOption(op_id,{
	name:cell_value
});
"/>
		
		<el-space direction="horizontal">
			<el-input v-model="cell_value" placeholder="单元格内容" />
			<el-button type="primary" :icon="Pointer" @click="setOption(cell_value)" />
			
		</el-space><br>
		<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="getOptionsType()" name="getOptionsType">
<highlightjs language='javascript' code="const table = await base.getActiveTable();
const type = FieldType.SingleSelect;
const filed_list = await table.getFieldListByType(type);
const ss_field = filed_list[0];//获取返回的第一个单选字段
const ops_type = await ss_field.getOptionsType();
"/>
		
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="getOptionsType" />
		</el-space><br>
		<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 
	
<el-collapse-item title="setOptionsType()" name="setOptionsType">
<highlightjs language='javascript' code="const table = await base.getActiveTable();
const type = FieldType.SingleSelect;
const filed_list = await table.getFieldListByType(type);
const ss_field = filed_list[0];//获取返回的第一个单选字段
const ops_type = await ss_field.getOptionsType();
let new_type = ops_type?0:1;//如果是0变为1,如果是1变为0
await ss_field.setOptionsType(new_type);
"/>
		
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="setOptionsType" />
		</el-space><br>
		<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

</el-collapse>
</el-space>

</template>

<script>
import { bitable,FieldType} from '@lark-base-open/js-sdk';
import { Pointer } from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';

const base = bitable.base;
export default {
    data() {
        return {
            btn_notice:"点击按钮获取查看当前代码运行结果",
            description:"",
			field_data:[],
			cell_value:"",
            Pointer,
        }
    },
    methods: {
        reset_notice(){
            this.btn_notice="点击按钮获取查看当前代码运行结果";
            this.description="";
			this.cell_value="";
        },
		async addOption(cv){
            const table = await base.getActiveTable();
            const type = FieldType.SingleSelect;
            const filed_list = await table.getFieldListByType(type);
            const ss_field = filed_list[0];//获取返回的第一个单选字段
            this.btn_notice = await ss_field.addOption(cv,1)
        },
		async addOptions(cv){
		    const table = await base.getActiveTable();
		    const type = FieldType.SingleSelect;
		    const filed_list = await table.getFieldListByType(type);
		    const ss_field = filed_list[0];//获取返回的第一个单选字段
			let options = [{'name':cv+1},{'name':cv+2},{'name':cv+3}]//构建了一个选项列表
		    this.btn_notice = await ss_field.addOptions(options);
			this.description = "一次性增加了3个选项"
		},
		async getOptions(){
		    const table = await base.getActiveTable();
		    const type = FieldType.SingleSelect;
		    const filed_list = await table.getFieldListByType(type);
		    const ss_field = filed_list[0];//获取返回的第一个单选字段
		    this.btn_notice = await ss_field.getOptions();
		},
		async deleteOption(){
		    const table = await base.getActiveTable();
		    const type = FieldType.SingleSelect;
		    const filed_list = await table.getFieldListByType(type);
		    const ss_field = filed_list[0];//获取返回的第一个单选字段
		    const ops = await ss_field.getOptions();
			if (ops.length==0){
				ElMessage({
					message:"当前单选字段中没有选项，删除失败。",
					type:"warning"
				})
				return;
			}
			const op_id = ops[0].id;
			await ss_field.deleteOption(op_id);
			this.btn_notice = `删除了[${ops[0].name}]`
		},
		async setOption(cv){
		    const table = await base.getActiveTable();
		    const type = FieldType.SingleSelect;
		    const filed_list = await table.getFieldListByType(type);
		    const ss_field = filed_list[0];//获取返回的第一个单选字段
		    const ops = await ss_field.getOptions();
			if (ops.length==0){
				ElMessage({
					message:"当前单选字段中没有选项，请添加选项。",
					type:"warning"
				})
				return;
			}
			const op_id = ops[0].id;
			await ss_field.setOption(op_id,{
				name:cv
			});
			this.btn_notice = `选项[${ops[0].name}]修改为[${cv}]`
		},
		async getOptionsType(){
		    const table = await base.getActiveTable();
		    const type = FieldType.SingleSelect;
		    const filed_list = await table.getFieldListByType(type);
		    const ss_field = filed_list[0];//获取返回的第一个单选字段
		    this.btn_notice = await ss_field.getOptionsType();
			this.description = "0表示自定义选项，1表示引用选项"
		},
        async setOptionsType(){
            const table = await base.getActiveTable();
            const type = FieldType.SingleSelect;
            const filed_list = await table.getFieldListByType(type);
            const ss_field = filed_list[0];//获取返回的第一个单选字段
            const ops_type = await ss_field.setOptionsType();
			let new_type = ops_type?0:1;//如果是0变为1,如果是1变为0
			this.btn_notice = await ss_field.setOptionsType(new_type);
        	this.description = "这里暂时看不出来什么变化"
        },
    }
}
</script>