<template>
<el-space direction="vertical" class="Cell">
<el-collapse  @change="reset_notice" accordion class="Cell">
    <el-text class="mx-1" type="primary" tag="p">
    Bridge模块提供了一些通用的能力，它的操作对象不再是bitable.base而是bitable.bridge.
    </el-text>
	
<el-collapse-item title="setData()" name="setData">
<highlightjs language='javascript' code="//const state = await bridge.setData(key,value);
"/>
		键key:
		<el-input v-model="key" placeholder="键" /><br />
		值value:
		<el-input v-model="val" placeholder="值" /><br /><br />
		<el-space direction="horizontal">
			
			<el-button type="primary" :icon="Pointer" @click="setData(key,val)" />
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text>
		</el-space><br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="getData()" name="getData">
<highlightjs language='javascript' code="//const value = await bridge.getData(key);
"/>
		键key:
		<el-input v-model="key" placeholder="键" /><br />
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="getData(key)" />
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text>
		</el-space><br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="getBitableUrl()" name="getBitableUrl">
<highlightjs language='javascript' code="//这段代码的难点在于获取tableId和viewId
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
//第二部分,获取链接
const url = await bridge.getBitableUrl({
	tableId:table_id,
	viewId:view_id,
})
"/>
		<el-cascader v-model="val" :options="options" @visible-change="getOps"/>
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="getBitableUrl(val)" />
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text>
		</el-space><br>
		<el-link type="success" v-if="share_link" :href="share_link" target="_blank" >{{share_link}}</el-link>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="getUserId()" name="getUserId">
<highlightjs language='javascript' code="const value = await bridge.getUserId();
"/>
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="getUserId" />
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text>
		</el-space><br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="getTheme()" name="getTheme">
<highlightjs language='javascript' code="const theme = await bridge.getTheme();
"/>
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="getTheme" />
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text>
		</el-space><br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 
	
<el-collapse-item title="getLocale()" name="getLocale">
<highlightjs language='javascript' code="const loc = await bridge.getLocale();
"/>
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="getLocale" />
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text>
		</el-space><br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 	
	
<el-collapse-item title="getLanguage()" name="getLanguage">
<highlightjs language='javascript' code="const lang = await bridge.getLanguage();
"/>
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="getLanguage" />
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text>
		</el-space><br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 	

<el-collapse-item title="getTenantKey()" name="getTenantKey">
<highlightjs language='javascript' code="//暂时不太清楚这个租户id用处.
const tkey = await bridge.getTenantKey();
"/>
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="getTenantKey" />
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text>
		</el-space><br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 	
	
<el-collapse-item title="getEnv()" name="getEnv">
<highlightjs language='javascript' code="//这里获取到的环境是一个对象
const env = await bridge.getEnv();
const env_name = env.product;
"/>
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="getEnv" />
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text>
		</el-space><br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 	

<el-collapse-item title="getInstanceId()" name="getInstanceId">
<highlightjs language='javascript' code="const iid = await bridge.getInstanceId();
"/>
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="getInstanceId" />
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text>
		</el-space><br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 	
	
</el-collapse>
</el-space>

</template>

<script>
import { bitable } from '@lark-base-open/js-sdk';
import { Pointer } from '@element-plus/icons-vue';

const bridge = bitable.bridge;
const base = bitable.base;
export default {
    data() {
        return {
            btn_notice:"点击按钮获取查看当前代码运行结果",
            description:"",
			cell_value:"",
			options:[],
			share_link:'',
			key:'',
			val:'',
            Pointer,
        }
    },
    methods: {
        reset_notice(){
            this.btn_notice="点击按钮获取查看当前代码运行结果";
            this.description="";
			this.cell_value = "";
			this.key = "";
			this.value = "";
        },
		async setData(k,v){
			const state = await bridge.setData(k,v);
			this.description = state?`添加{${k}:${v}}成功`:`添加{${k}:${v}}失败`;
		},
		async getData(k){
			const value = await bridge.getData(k);
			this.description = `${k}的值为${value}`
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
		async getBitableUrl(val){
			const [table_id,view_id] = val;
			const url = await bridge.getBitableUrl({
				tableId:table_id,
				viewId:view_id,
			})
			this.share_link = url;
			this.description = "获取分享链接成功，可以直接点击";
		},
		async getUserId(){
			const user_id = await bridge.getUserId();
			this.description = `userId为${user_id}`
		},
		async getTheme(){
			const theme = await bridge.getTheme();
			this.description = `当前主题为${theme}`
		},
		async getLocale(){
			const loc = await bridge.getLocale();
			this.description = `当前地区为${loc}`
		},
		async getLanguage(){
			const lang = await bridge.getLanguage();
			this.description = `当前语言为${lang}`
		},
		async getTenantKey(){
			const tkey = await bridge.getTenantKey();
			this.description = `当前租户为${tkey}`
		},
		async getEnv(){
			const env = await bridge.getEnv();
			this.description = `当前产品为${env.product}`
		},
		async getInstanceId(){
			const iid = await bridge.getInstanceId();
			this.description = `当前插件id为${iid}`
		},
		
    }
}
</script>