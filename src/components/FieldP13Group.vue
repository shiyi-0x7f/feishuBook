<template>
<el-space direction="vertical" class="FieldP13">
<el-collapse  @change="reset_notice" accordion class="FieldP13">
    <el-text class="mx-1" type="danger" size="small" tag="p">
    <h2>Group字段</h2>
    </el-text>
	
	<el-text class="mx-1" size="small" tag="p">
	Group字段与群组字段具有非常相似的特性，不过该字段需要groupId
	</el-text>
	
<el-collapse-item title="setValue()" name="setValue">
<highlightjs language='javascript' code="//如果不是必须的话,个人建议不使用该方式,添加数据会出错.
const table = await base.getActiveTable();
const type = FieldType.GroupChat;
const filed_list = await table.getFieldListByType(type);
const records_id = await table.getRecordIdList();
const group_field = filed_list[0];//获取返回的第一个字段
await await group_field.setValue(records_id[0],[{'id':group_id,'name':name}])
"/>
		
		<el-space direction="horizontal">
			<el-input v-model="cell_value" placeholder="请填写groupId" />
			<el-button type="primary" :icon="Pointer" @click="setValue(cell_value)" />
		</el-space><br>
		<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="getCell()" name="getCell">
<highlightjs language='javascript' code="const table = await base.getActiveTable();
const type = FieldType.GroupChat;
const filed_list = await table.getFieldListByType(type);
const records_id = await table.getRecordIdList();
const group_field = filed_list[0];//获取返回的第一个字段
const cell_meta = await group_field.getCell(records_id[0]);//获取单元格的Meta数据
"/>
		
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="getCell" />	
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		</el-space><br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="getValue()" name="getValue">
<highlightjs language='javascript' code="const table = await base.getActiveTable();
const type = FieldType.GroupChat;
const filed_list = await table.getFieldListByType(type);
const records_id = await table.getRecordIdList();
const group_field = filed_list[0];//获取返回的第一个文本字段
const cell_value = await group_field.getValue(records_id[0]);
"/>
		
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="getValue" />	
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		</el-space><br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 
	
<el-collapse-item title="getMultiple()" name="getMultiple">
<highlightjs language='javascript' code="const table = await base.getActiveTable();
const type = FieldType.GroupChat;
const filed_list = await table.getFieldListByType(type);
const group_field = filed_list[0];//获取返回的第一个字段
const state = await group_field.getMultiple();
"/>
		
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="getMultiple" />	
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		</el-space><br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 
	

<el-collapse-item title="setMultiple()" name="setMultiple">
<highlightjs language='javascript' code="const table = await base.getActiveTable();
const type = FieldType.GroupChat;
const filed_list = await table.getFieldListByType(type);
const group_field = filed_list[0];//获取返回的第一个字段
const state = await group_field.getMultiple();
const new_state = !state;//取反
await group_field.setMultiple(new_state);
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
import { ElMessage } from 'element-plus';


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
		async setValue(cv){
			const table = await base.getActiveTable();
			const type = FieldType.GroupChat;
			const filed_list = await table.getFieldListByType(type);
			const records_id = await table.getRecordIdList();
			const group_field = filed_list[0];//获取返回的第一个字段
			if (cv.length==0){
				ElMessage({
					message:'请手动设置群组单元格，通过getCell()代码获取group_id后再进行操作。',
					type:"warning"
				})
				return;
			}

			this.btn_notice = await group_field.setValue(records_id[0],[{'id':cv,'name':"小栈MC群"}]);
			this.description = "数据设置成功";
		},
		async getCell(){
			const table = await base.getActiveTable();
			const type = FieldType.GroupChat;
			const filed_list = await table.getFieldListByType(type);
			const records_id = await table.getRecordIdList();
			const group_field = filed_list[0];//获取返回的第一个字段
			this.btn_notice = await group_field.getCell(records_id[0]);
			this.description = "获取到了单元格的信息";
		},
		async getValue(){
			const table = await base.getActiveTable();
			const type = FieldType.GroupChat;
			const filed_list = await table.getFieldListByType(type);
			const records_id = await table.getRecordIdList();
			const group_field = filed_list[0];//获取返回的第一个字段
			this.btn_notice = await group_field.getValue(records_id[0]);
			this.description = "获取到了单元格的信息";
		},
		async getMultiple(){
			const table = await base.getActiveTable();
			const type = FieldType.GroupChat;
			const filed_list = await table.getFieldListByType(type);
			const group_field = filed_list[0];//获取返回的第一个字段
			const state = await group_field.getMultiple();
			this.description =  state?"允许设置多个":"不允许设置多个";
		},
		async setMultiple(){
			const table = await base.getActiveTable();
			const type = FieldType.GroupChat;
			const filed_list = await table.getFieldListByType(type);
			const group_field = filed_list[0];//获取返回的第一个字段
			const state = await group_field.getMultiple();
			const new_state = !state;
			await group_field.setMultiple(new_state);
			
			this.description =  new_state?"当前允许设置多个":"当前不允许设置多个";
		},
    }
}
</script>