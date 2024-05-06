<template>
<el-space direction="vertical" class="Cell">
<el-collapse  @change="reset_notice" accordion class="Cell">	
	
	
	<el-text class="mx-1" type="primary" tag="p">
	UI主要是负责界面交互。<br />
	在前面的章节中，我们无论是从Field还是record获取数据，可能都需要手动去寻找具体的视图是哪一个。<br />
	现在你可以轻松一点。使用bitable.ui进行操作
	</el-text>

<el-collapse-item title="switchToTable()" name="switchToTable">
<highlightjs language='javascript' code="const tables = await base.getTableMetaList();
await ui.switchToTable(tables[0].id);
"/>
		<el-select v-model="value" placeholder="Select" @visible-change="getTables" @change="switchToTable(value)">
		  <el-option
			v-for="item in tables"
			:key="item.id"
			:label="item.name"
			:value="item.id"
		  />
		</el-select><br />
		<el-text class="mx-1" type="primary">选择表格进行切换</el-text><br />
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="switchToView()" name="switchToView">
<highlightjs language='javascript' code="//与前面Bridge的getBitableUrl()原理一样
//第一部分,遍历获取数据
const tables = await base.getTableList();
let ops = [];//ops装了某个table下面所有的view
for (let tb in tables){
	let f1 = new Object();
	let tb_name = await tables[tb].getName();
	f1['value'] = tables[tb].id;//获取tableId
	f1['label'] = tb_name;
	f1['children'] = [];
	const views = await tables[tb].getViewList()
	for (let v in views){
		let f2 = new Object();
		f2['value'] = views[v].id;//获取viewId
		let view_name = await views[v].getName();
		f2['label'] = view_name;
		f1['children'].push(f2);
	}
	ops.push(f1);
}
//第二部分,切换视图
ui.switchToView(table_id,view_id);
"/>
		<el-cascader v-model="value" :options="options" @visible-change="getOps" @change="switchToView(value)"/>
		<br>
		<br>
		<el-text class="mx-1" type="primary">选择视图进行切换</el-text>
	</el-collapse-item> 

<el-collapse-item title="showToast()" name="showToast">
<highlightjs language='javascript' code="//显示当前消息后,需要等待几秒才能显示新的消息
await ui.showToast({
	message:val,
	toastType:type
})
"/>
		
		<el-space direction="horizontal">
			<el-select v-model="type" placeholder="Select" style="width: 120px;">
				<el-option
					v-for="item in types"
					:key="item"
					:label="item"
					:value="item"
				  />
				</el-select>
			<el-input v-model="value" placeholder="输入提示内容" />
		</el-space><br><br />
		<el-button type="primary" :icon="Pointer" @click="showToast(value,type)" />
		<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="showRecordDetailDialog()" name="showRecordDetailDialog">
<highlightjs language='javascript' code="//简单演示一下
const table = await base.getActiveTable();
const records_id = await table.getRecordIdList();
//展示当前表格的随机记录
await ui.showRecordDetailDialog({tableId:table.id,recordId:records_id[0]});
"/>
		
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="showRecordDetailDialog" />
		</el-space><br>
		<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="getSelectOptionColorInfoList()" name="getSelectOptionColorInfoList">
<highlightjs language='javascript' code="const info_list = await ui.getSelectOptionColorInfoList();
"/>
		
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="getSelectOptionColorInfoList" />
		</el-space><br>
		<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text>
		<el-text class="mx-1" type="primary">{{ description }}</el-text>
	</el-collapse-item> 

</el-collapse>
</el-space>

</template>

<script>
import { bitable } from '@lark-base-open/js-sdk';
import { Pointer } from '@element-plus/icons-vue';

const ui = bitable.ui;
const base = bitable.base;
export default {
    data() {
        return {
            btn_notice:"点击按钮获取查看当前代码运行结果",
            description:"",
			type:"",
			types:['info', 'success', 'warning', 'error', 'loading'],
			value:"",
			tables:[],
			options:[],
            Pointer,
        }
    },
    methods: {
        reset_notice(){
            this.btn_notice="点击按钮获取查看当前代码运行结果";
            this.description="";
			this.value = "";
			this.options = "";
        },
		async getTables(){
			this.tables = await base.getTableMetaList();
		},
		async getOps(){
			const tables = await base.getTableList();
			let ops = [];
			for (let tb in tables){
				//构造第一层
				let f1 = new Object();
				let tb_name = await tables[tb].getName();
				f1['value'] = tables[tb].id;
				f1['label'] = tb_name;
				f1['children'] = [];
				const views = await tables[tb].getViewList()
				for (let v in views){
					let f2 = new Object();
					f2['value'] = views[v].id;
					let view_name = await views[v].getName();
					f2['label'] = view_name;
					f1['children'].push(f2);
				}
				ops.push(f1);
			}
			this.options = ops;
		},
        async switchToTable(cv){
			await ui.switchToTable(cv);
        	this.description = cv; 
        },
		async switchToView(val){
			const [table_id,view_id] = val;
			await ui.switchToView(table_id,view_id);
		},
		async showToast(val,type){
			await ui.showToast({
				message:val,
				toastType:type
			})
		},
		async showRecordDetailDialog(){
			const table = await base.getActiveTable();
			const records_id = await table.getRecordIdList();
			//展示当前表格的随机记录
			await ui.showRecordDetailDialog({tableId:table.id,recordId:records_id[0]});
		},
		async getSelectOptionColorInfoList(){
			const info_list = await ui.getSelectOptionColorInfoList();
			this.description = info_list;
		}
		
    }
}
</script>