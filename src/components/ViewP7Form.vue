<template>
<el-space direction="vertical" class="ViewP1">
<el-collapse  @change="reset_notice" accordion class="ViewP1">
	
<el-text class="mx-1" type="danger" size="small" tag="p">
<h2>Form视图</h2>
</el-text>

<el-text class="mx-1" type="primary" tag="p">
Form视图仅支持查询
</el-text>

<el-collapse-item title="getData()" name="getData">
<highlightjs language='javascript' code="//为了更好地展示效果，部分获取信息的函数集中展示在此处。
const table = await base.getActiveTable();
const view = await table.getActiveView();
const id = view.id;//直接获取id
const table_id = view.tableId;//直接获取表格id
const view_name = await view.getName();//获取视图名
const view_type = await view.getType();//获取视图类型
const view_meta = await view.getMeta();//获取视图Meta信息
const field_meta_list = await view.getFieldMetaList();//获取字段的Meta数据，返回一个列表
const field_visible_id_list = await view.getVisibleFieldIdList();//获取可见字段的id列表
const record_visible_id_list = await view.getVisibleRecordIdList();//获取可见记录的id列表
"/>
		
		<el-space direction="horizontal">

			<el-button type="primary" :icon="Pointer" @click="getData" />
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text>
		</el-space><br>
		<el-text class="mx-1" v-if="view_data" v-for="(index,item) in view_data">{{ index }}<br/></el-text>
		<br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 
	
</el-collapse>
</el-space>  
</template>
    
<script>
import { bitable } from '@lark-base-open/js-sdk';
import { Pointer } from '@element-plus/icons-vue';
const base = bitable.base

export default {
    data() {
        return {
            btn_notice:"点击按钮获取查看当前代码运行结果",
            description:"",
			view_data:[],
            Pointer
        }
    },
    methods: {
        reset_notice(){
            this.btn_notice="点击按钮获取查看当前代码运行结果";
            this.description="";
        },
        async getData(){
			const table = await base.getActiveTable();
			const view = await table.getActiveView();
			const id = view.id;//直接获取id
			const table_id = view.tableId;//直接获取表格id
			const view_name = await view.getName();//获取视图名
			const view_type = await view.getType();//获取视图类型
			const view_meta = await view.getMeta();//获取视图Meta信息
			const field_meta_list = await view.getFieldMetaList();//获取字段的Meta数据，返回一个列表
			const field_visible_id_list = await view.getVisibleFieldIdList();//获取可见字段的id列表
			const record_visible_id_list = await view.getVisibleRecordIdList();//获取可见记录的id列表
			if (this.view_data.length!=0){
				this.view_data = [];
			}
			this.view_data.push(...[
				{"view_id":id},
				{"table_id":table_id},
				{"view_name":view_name},
				{"view_type":view_type},
				{"view_meta":view_meta},
				{"field_meta_list":field_meta_list},
				{"field_visible_id_list":field_visible_id_list},
				{"record_visible_id_list":record_visible_id_list}
				]);
        }
    }
}

</script>