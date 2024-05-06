<template>
<el-space direction="vertical" class="ViewP1">
<el-collapse  @change="reset_notice" accordion class="ViewP1">
    <el-text class="mx-1" type="danger" size="small" tag="p">
    <h2>基础能力</h2>
    </el-text>

<el-collapse-item title="addAllKindsOfViews()" name="addAllKindsOfViews">
<highlightjs language='javascript' code="//由于默认表格中存在Grid表格视图，这里增加了其他5种类型
const all_types = [ViewType.Form,ViewType.Calendar,ViewType.Gallery,ViewType.Gantt,ViewType.Kanban];
const table = await base.getActiveTable();
const views = await table.getViewMetaList();
for (let t in all_types){
	await table.addView({type:all_types[t]});
}
" />       
        <el-space direction="horizontal">
            <el-button type="primary" :icon="Pointer" @click="addAllKindsOfViews" />
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br>
        </el-space><br>
        <el-text class="mx-1" type="danger">{{ description }}</el-text>
    </el-collapse-item> 

<el-collapse-item title="enableSharing()" name="enableSharing">
<highlightjs language='javascript' code="//由于默认表格中存在Grid表格视图，这里增加了其他5种类型
const table = await base.getActiveTable();
const view = await table.getActiveView();//获取当前视图,对所有视图有效
await view.enableSharing();
" />       
        <el-space direction="horizontal">
            <el-button type="primary" :icon="Pointer" @click="enableSharing" />
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br>
        </el-space><br>
        <el-text class="mx-1" type="danger">{{ description }}</el-text>
    </el-collapse-item> 

<el-collapse-item title="disableSharing()" name="disableSharing">
<highlightjs language='javascript' code="//由于默认表格中存在Grid表格视图，这里增加了其他5种类型
const table = await base.getActiveTable();
const view = await table.getActiveView();//获取当前视图,对所有视图有效
await view.disableSharing();
" />       
        <el-space direction="horizontal">
            <el-button type="primary" :icon="Pointer" @click="disableSharing" />
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br>
        </el-space><br>
        <el-text class="mx-1" type="danger">{{ description }}</el-text>
    </el-collapse-item> 

<el-collapse-item title="getSharingStatus()" name="getSharingStatus">
<highlightjs language='javascript' code="//由于默认表格中存在Grid表格视图，这里增加了其他5种类型
const table = await base.getActiveTable();
const view = await table.getActiveView();//获取当前视图,对所有视图有效
const status = await view.getSharingStatus();
" />       
        <el-space direction="horizontal">
            <el-button type="primary" :icon="Pointer" @click="getSharingStatus" />
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br>
        </el-space><br>
        <el-text class="mx-1" type="danger">{{ description }}</el-text>
    </el-collapse-item> 

<el-collapse-item title="getShareLink()" name="getShareLink">
<highlightjs language='javascript' code="//由于默认表格中存在Grid表格视图，这里增加了其他5种类型
const table = await base.getActiveTable();
const view = await table.getActiveView();//获取当前视图,对所有视图有效
const status = await view.getSharingStatus();
" />       
        <el-space direction="horizontal">
            <el-button type="primary" :icon="Pointer" @click="getShareLink" />
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br>
        </el-space><br>
		<el-link :href="share_link" :v-if="share_link" target="_blank">{{share_link}}</el-link><br>
        <el-text class="mx-1" type="danger">{{ description }}</el-text>
    </el-collapse-item> 

</el-collapse>
</el-space>

</template>

<script>
import { bitable,ViewType } from '@lark-base-open/js-sdk';
import { Pointer } from '@element-plus/icons-vue';

const base = bitable.base;
export default {
    data() {
        return {
            btn_notice:"点击按钮获取查看当前代码运行结果",
            description:"",
            table_name:"",
            field_name:"",
            record_nums:1,
			apilink:"https://lark-base-team.github.io/js-sdk-docs/zh/api/view",
			share_link:"",
            Pointer,
        }
    },
    methods: {
        reset_notice(){
            this.btn_notice="点击按钮获取查看当前代码运行结果";
            this.description="";
        },
		async addAllKindsOfViews(){
			//由于默认表格中存在Grid表格视图，这里增加了其他5种类型
            const all_types = [ViewType.Form,ViewType.Calendar,ViewType.Gallery,ViewType.Gantt,ViewType.Kanban];
            const table = await base.getActiveTable();
			const views = await table.getViewMetaList();
			for (let t in all_types){
				await table.addView({type:all_types[t]});
			}
            this.description = "为确保后续所有代码有效，请先在测试表格中执行该代码";
        },
        async enableSharing(){
            const table = await base.getActiveTable();
			const view = await table.getActiveView();
			this.btn_notice = await view.enableSharing();
			this.description = "上面显示为true时，开放当前视图的分享权限"
        },
		async disableSharing(){
		        const table = await base.getActiveTable();
				const view = await table.getActiveView();
				this.btn_notice = await view.disableSharing();
				this.description = "上面显示为true时，关闭当前视图的分享权限"
		},
		async getSharingStatus(){
		        const table = await base.getActiveTable();
				const view = await table.getActiveView();
				this.btn_notice = await view.getSharingStatus();
				this.description = "Enabled可以分享，Disabled禁止分享。可以按下上面的开启/关闭代码，再进行测试。"
		},
		async getShareLink(){
		        const table = await base.getActiveTable();
				const view = await table.getActiveView();
				const status = await view.getSharingStatus();
				this.btn_notice = status;
				if (status=="Enabled"){
					this.share_link = await view.getShareLink();
				}else{
					this.btn_notice = "请开启当前视图的分享权限。"
				}
				this.description = "如果可以分享，上方会直接生成相应的分享链接，不能的话则会进行提示。"
		}
    }
}
</script>