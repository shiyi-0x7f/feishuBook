<template>
<el-space direction="vertical" class="FieldP8">
<el-collapse  @change="reset_notice" accordion class="FieldP8">
    <el-text class="mx-1" type="danger" size="small" tag="p">
    <h2>Attachment字段</h2>
    </el-text>

<el-collapse-item title="createCell()" name="createCell">
<highlightjs language='javascript' code="//这段代码实现了附件单元格的设置及附件上传。
const table = await base.getActiveTable();
const type = FieldType.Attachment;
const filed_list = await table.getFieldListByType(type);
const at_field = filed_list[0];//获取返回的第一个字段
const files = this.$refs.uploadRef.files;
if (files.length==0){
	alert('出错啦！！没有选择文件，不能上传');
	return ;
}
const file = await at_field.createCell(files)
await table.addRecord(file);//上传附件
"/>
		<input type="file" ref="uploadRef"><br />
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="createCell" />
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text>
		</el-space><br />
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="setValue()" name="setValue">
<highlightjs language='javascript' code="//大致的逻辑与上传是一致的
const table = await base.getActiveTable();
const type = FieldType.Attachment;
const filed_list = await table.getFieldListByType(type);
const at_field = filed_list[0];//获取返回的第一个字段
const records_id = await table.getRecordIdList();//这里返回的是无序的
const files = this.$refs.uploadRef.files;
if (files.length==0){
	alert('出错啦！！没有选择文件，不能上传');
	return ;
}
await at_field.setValue(records_id[0],files[0]);
"/>
		<input type="file" ref="uploadRef"><br />
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="setValue" />
			
		</el-space><br>
		<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="getCellAttachmentUrls()" name="getCellAttachmentUrls">
	<highlightjs language='javascript' code="//与上一章Table级数据获取中的代码一致
const type = FieldType.Attachment; //指定附件类型
const table = await base.getActiveTable();
const field_id_list = await table.getFieldMetaListByType(type);//获取附件的field_id_list
const records = await table.getRecordIdList(); //由于记录值可以看成是固定的行号，直接获取即可。
let all_urls = []; //初始化保存下载链接的数组
for (let id in field_id_list){ //遍历附件类型的fieldId
    let field_id = field_id_list[id].id;
    for (let i in records){//遍历recordId
        let cell_value = await table.getCellValue(field_id,records[i]);
        if (cell_value!=null){
            let tokens = [];
            for (let j in cell_value){//因为一个单元格中可能有很多个文件，所以需要遍历token
                let token = cell_value[j].token;
                tokens.push(token);
            }
            let urls = await table.getCellAttachmentUrls(tokens,field_id,records[i]);
            for (let u in urls){
                all_urls.push(urls[u]);
            }
        }
    }
}
" />    
        <el-space direction="horizontal">
            <el-button type="primary" :icon="Pointer" @click="getCellAttachmentUrls" />
            <el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br>
        </el-space><br>
        <el-text class="mx-1" type="danger" v-if="share_link" v-for="(d,item) in share_link">
            <el-link :href="d" target="_blank">{{d}}</el-link>
        </el-text>
    </el-collapse-item> 



<el-collapse-item title="getCell()" name="getCell">
<highlightjs language='javascript' code="const table = await base.getActiveTable();
const type = FieldType.Attachment;
const filed_list = await table.getFieldListByType(type);
const records_id = await table.getRecordIdList();
const at_field = filed_list[0];//获取返回的第一个字段
const cell_meta = await at_field.getCell(records_id[0]);//获取单元格的Meta数据
"/>
		
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="getCell" />	
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		</el-space><br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="getValue()" name="getValue">
<highlightjs language='javascript' code="//这里必须要保证附件单元格中有附件，才能拿到正常返回的值。否则返回空
const table = await base.getActiveTable();
const type = FieldType.Attachment;
const filed_list = await table.getFieldListByType(type);
const records_id = await table.getRecordIdList();
const at_field = filed_list[0];//获取返回的第一个附件字段
const cell_value = await at_field.getValue(records_id[0]);
"/>
		
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="getValue" />	
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		</el-space><br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="getOnlyMobile()" name="getOnlyMobile">
<highlightjs language='javascript' code="const table = await base.getActiveTable();
const type = FieldType.Attachment;
const filed_list = await table.getFieldListByType(type);
const at_field = filed_list[0];//获取返回的第一个字段
const state = await at_field.getOnlyMobile();
const res = state?'只允许移动端上传':'可以多种方式上传';
"/>
		
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="getOnlyMobile" />	
			<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br />
		</el-space><br>
		<el-text class="mx-1" type="danger">{{ description }}</el-text>
	</el-collapse-item> 

<el-collapse-item title="setOnlyMobile()" name="setOnlyMobile">
<highlightjs language='javascript' code="//当前设置对整个字段生效
const table = await base.getActiveTable();
const type = FieldType.Attachment;
const filed_list = await table.getFieldListByType(type);
const at_field = filed_list[0];//获取返回的第一个字段
const state = await at_field.getOnlyMobile();
const new_state = !state;//取反
await at_field.setOnlyMobile(new_state);
"/>
		
		<el-space direction="horizontal">
			<el-button type="primary" :icon="Pointer" @click="setOnlyMobile" />	
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
			share_link:"",
            Pointer,
        }
    },
    methods: {
        reset_notice(){
            this.btn_notice="点击按钮获取查看当前代码运行结果";
            this.description="";
			this.cell_value = "";
        },
        async createCell(){
			// 文件上传限制
			// file name 长度不得大于 250
			// file size 不得大于 1024 * 1024 * 1024 * 2
        	const table = await base.getActiveTable();
			const type = FieldType.Attachment;
			const filed_list = await table.getFieldListByType(type);
			const at_field = filed_list[0];//获取返回的第一个字段
			const files = this.$refs.uploadRef.files;
			if (files.length==0){
			    //import { ElMessage} from 'element-plus'
			    ElMessage({
			        message: '出错啦！！没有选择文件，不能上传',
			        type: 'warning',
			    })
			    return ;
			}
        	const file = await at_field.createCell(files)
			this.btn_notice = await table.addRecord(file);
			this.description = `【${files[0].name}】上传完毕，拿到了返回的记录id`;
        },
		async getCellAttachmentUrls(){
		    //这里的方法有很多，这里演示getRecordIdList()+getFieldMetaListByType()
		    const type = FieldType.Attachment;
		    const table = await base.getActiveTable();
		    const field_id_list = await table.getFieldMetaListByType(type);//获取附件的field_id_list
		    const records = await table.getRecordIdList(); //由于记录值可以看成是固定的行号，直接获取即可。
		    this.btn_notice = records;
		    let all_urls = [];
		    for (let id in field_id_list){
		        let field_id = field_id_list[id].id;
		        for (let i in records){
		            let cell_value = await table.getCellValue(field_id,records[i]);
		            if (cell_value!=null){
		                let tokens = [];
		                for (let j in cell_value){
		                    let token = cell_value[j].token;
		                    tokens.push(token);
		                }
		                let urls = await table.getCellAttachmentUrls(tokens,field_id,records[i]);
		                for (let u in urls){
		                    all_urls.push(urls[u]);
		                }
		            }
		        }
		    }
		    this.share_link = all_urls;
		    this.btn_notice = "下面的附件链接都可以直接点击进行下载。"
		},
		async setValue(){
			const table = await base.getActiveTable();
			const type = FieldType.Attachment;
			const filed_list = await table.getFieldListByType(type);
			const at_field = filed_list[0];//获取返回的第一个字段
			const records_id = await table.getRecordIdList();//这里返回的是无序的
			const files = this.$refs.uploadRef.files;
			if (files.length==0){
			    //import { ElMessage} from 'element-plus'
			    ElMessage({
			        message: '出错啦！！没有选择文件，不能上传',
			        type: 'warning',
			    })
			    return ;
			}
			this.btn_notice = await at_field.setValue(records_id[0],files[0]);
			this.description = `【${files[0].name}】替换完毕`;
		},
		async getCell(){
			const table = await base.getActiveTable();
			const type = FieldType.Attachment;
			const filed_list = await table.getFieldListByType(type);
			const records_id = await table.getRecordIdList();
			const at_field = filed_list[0];//获取返回的第一个字段
			this.btn_notice = await at_field.getCell(records_id[0]);
			this.description = "获取到了单元格的信息";
		},
		async getValue(){
			const table = await base.getActiveTable();
			const type = FieldType.Attachment;
			const filed_list = await table.getFieldListByType(type);
			const records_id = await table.getRecordIdList();
			const at_field = filed_list[0];//获取返回的第一个字段
			this.btn_notice = await at_field.getValue(records_id[0]);
			this.description = "这里必须要保证附件单元格中有附件，才能拿到正常返回的值。否则返回空";
		},
		async getOnlyMobile(){
			const table = await base.getActiveTable();
			const type = FieldType.Attachment;
			const filed_list = await table.getFieldListByType(type);
			const at_field = filed_list[0];//获取返回的第一个字段
			const state = await at_field.getOnlyMobile();
			this.description = state?'只允许移动端上传':'可以多种方式上传'
		},
		async setOnlyMobile(){
			const table = await base.getActiveTable();
			const type = FieldType.Attachment;
			const filed_list = await table.getFieldListByType(type);
			const at_field = filed_list[0];//获取返回的第一个字段
			const state = await at_field.getOnlyMobile();
			const new_state = !state;//取反
			await at_field.setOnlyMobile(new_state);
			this.description = new_state?'只允许移动端上传':'可以多种方式上传';
		},
		
    }
}
</script>