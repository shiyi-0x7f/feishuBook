<template>
<el-space direction="vertical" class="ViewP4">
<el-collapse  @change="reset_notice" accordion class="ViewP4">
	
<el-text class="mx-1" type="danger" size="small" tag="p">
<h2>Calendar视图</h2>
</el-text>
<el-text class="mx-1" type="primary" tag="p">
Calendar视图支持查询数据，筛选，隐藏/显示字段
</el-text>

<el-collapse-item title="applySetting()" name="applySetting">
<highlightjs language='javascript' code="//该段代码无返回值
const table = await base.getActiveTable();
const view = await table.getActiveView();
await view.applySetting();
"/>
		
		<el-space direction="horizontal">

			<el-button type="primary" :icon="Pointer" @click="applySetting" />
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text>
		</el-space>
		<br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 


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

<el-collapse-item title="getFilterInfo()" name="getFilterInfo">
<highlightjs language='javascript' code="//请设置筛选条件
const table = await base.getActiveTable();
const view = await table.getActiveView();
const filter_info = await view.getFilterInfo();
if (filter_info==null){
	alert('请设置筛选条件，没有设置时返回为空');
	return;
}
"/>
		<el-space direction="horizontal">

			<el-button type="primary" :icon="Pointer" @click="getFilterInfo" />
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text>
		</el-space>
		<br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="addFilterCondition()" name="addFilterCondition">
<highlightjs language='javascript' code="//该代码仅演示了添加文本类型的筛选条件
const table = await base.getActiveTable();
const view = await table.getActiveView();
const field = await table.getFieldListByType(FieldType.Text);
const field_id = field[0].id;
//condition_value是通过输入框获取的
let condition = { 'fieldId': field_id, 'value': condition_value, 'fieldType': 1, 'operator': 'is'} 
await view.addFilterCondition(condition);//添加筛选添加
//await view.applySetting(); //如果要同步给其他人,请调用此行代码.
"/>
		<el-space direction="horizontal">
			<el-input v-model="table_name" placeholder="这里填筛选的数据" />
			<el-button type="primary" :icon="Pointer" @click="addFilterCondition(table_name)" />
		</el-space>
		<br />
		<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text>
		<br />
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="deleteFilterCondition()" name="deleteFilterCondition">
<highlightjs language='javascript' code="const table = await base.getActiveTable();
const view = await table.getActiveView();
const filter_info = await view.getFilterInfo()
//如果没有筛选条件,中断代码执行
if (filter_info==null){
	alert('请添加筛选条件后再执行此代码');
	return ;
}
const con_id = filter_info['conditions'][0]['conditionId'];//获取返回的第一个条件id
await view.deleteFilterCondition(con_id);//删除筛选条件
"/>
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="deleteFilterCondition" />
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text>
		</el-space>
		<br />
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="updateFilterCondition()" name="updateFilterCondition">
<highlightjs language='javascript' code="官方暂未提供该函数的updateFilterCondition参数构造方法,请等待添加
"/>
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="updateFilterCondition" />
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text>
		</el-space>
		<br />
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="setFilterConjunction()" name="setFilterConjunction">
<highlightjs language='javascript' code="//这段代码可按需修改
const table = await base.getActiveTable();
const view = await table.getActiveView();
let conjunction = 'and';//'and'是所有,'or'是任一
await view.setFilterConjunction(conjunction);
"/>
<el-switch
	v-model="state"
	size="large"
	active-text="任一"
	inactive-text="所有"
  /><br />
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="setFilterConjunction(state)" />
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text>
		</el-space>
		<br />
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="showField()" name="showField">
<highlightjs language='javascript' code="const table = await base.getActiveTable();
const view = await table.getActiveView();
const fields = await table.getFieldList();
const field_id = fields[0].id;
await view.showField(field_id);
"/>
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="showField" />
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text>
		</el-space>
		<br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="hideField()" name="hideField">
<highlightjs language='javascript' code="//运行这段代码后,需要在[字段配置]中手动显示字段.
const table = await base.getActiveTable();
const view = await table.getActiveView();
const fields = await table.getFieldList();
const field_id = fields[fields.length-1].id;//获取最后一个字段.
await view.hideField(field_id);//注意这里只是隐藏了,并没有删除字段.一直点的话,也是一直隐藏最后一个.
"/>
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="hideField" />
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text>
		</el-space>
		<br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 	
	
	
</el-collapse>
</el-space>  
</template>
    
<script>
import { FieldType, bitable } from '@lark-base-open/js-sdk';
import { Pointer } from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';
const base = bitable.base

export default {
    data() {
        return {
            btn_notice:"点击按钮获取查看当前代码运行结果",
            description:"",
            table_name:"",
			view_data:[],
			state:false,
			width:80,
			height:1,
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
        },
		async applySetting(){
			const table = await base.getActiveTable();
			const view = await table.getActiveView();
			await view.applySetting();
			this.description = "该代码运行后无返回值，也没有任何提示信息，仅同步对视图的相关配置。"
			
		},
		async getFilterInfo(){
			const table = await base.getActiveTable();
			const view = await table.getActiveView();
			const filter_info = await view.getFilterInfo();//在此之前请选中带有子记录的记录行
			if (filter_info==null){
				this.btn_notice = "请设置筛选条件，没有设置时返回为空";
				return;
			}
			this.btn_notice = filter_info;
			this.description = "参数说明conjunction : and代表所有，or代表任一"
		},
		async addFilterCondition(cv){
			const table = await base.getActiveTable();
			const field = await table.getFieldListByType(FieldType.Text);
			const field_id = field[0].id;
			const view = await table.getActiveView();
			if (cv.length==0){
				ElMessage({
					message:"请填写你想筛选的数据。",
					type:"warning"
				})
				return ;
			}
			let condition = { "fieldId": field_id, "value": cv, "fieldType": 1, "operator": "is"}
			this.btn_notice = await view.addFilterCondition(condition);
			let conditions = await view.getFilterInfo();
			this.description = "添加后的筛选参数:"+JSON.stringify(conditions);
		},
		async deleteFilterCondition(){
			const table = await base.getActiveTable();
			const view = await table.getActiveView();
			const filter_info = await view.getFilterInfo()
			if (filter_info==null){
				ElMessage({
					message:"请添加筛选条件后再执行此代码",
					type:"warning"
				})
				return ;
			}
			const con_id = filter_info['conditions'][0]['conditionId'];
			this.btn_notice = await view.deleteFilterCondition(con_id);
			this.description = "请自行观察筛选条件变化";
		},
		async updateFilterCondition(){
			const table = await base.getActiveTable();
			const view = await table.getActiveView();
			const filter_info = await view.getFilterInfo()
			ElMessage({
				message:"请等待完善！",
				type:"warning"
			})
			return ;
		},
		async setFilterConjunction(c){
			const table = await base.getActiveTable();
			const view = await table.getActiveView();
			let conjunction = c?"or":"and";
			await view.setFilterConjunction(conjunction);
			let res = conjunction=="or"?"任一":"所有";
			this.btn_notice = "切换到【"+res+"】"
			
			this.description = "请查看筛选中的 符合以下任一/所有条件";
		},
		async showField(){
			const table = await base.getActiveTable();
			const view = await table.getActiveView();
			const fields = await table.getFieldList();
			const field_id = fields[0].id;
			await view.showField(field_id);
			const field_name = await fields[0].getName();
			this.btn_notice = `显示【${field_name}】字段` 
		},
		async hideField(){
			const table = await base.getActiveTable();
			const view = await table.getActiveView();
			const fields = await table.getFieldList();
			if(fields.length<2){
				ElMessage({
					message:"当前只有一个字段，无法隐藏！请再增加一个字段。",
					type:"warning"
				})
				return ;
			}
			
			const field_id = fields[fields.length-1].id;
			this.btn_notice = await view.hideField(field_id);
			const field_name = await fields[fields.length-1].getName();
			this.description = `隐藏【${field_name}】字段`
			if (this.btn_notice==false){
				this.description += " 失败";
			}
			 
		}
		
    }
}

</script>