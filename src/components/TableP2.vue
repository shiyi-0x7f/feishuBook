<template>
<el-space direction="vertical" class="TableP2">
<el-collapse  @change="reset_notice" accordion class="TableP2">
    <el-text class="mx-1" type="danger" size="small" tag="p">
    <h2>数据获取</h2>
    </el-text>

<el-collapse-item title="getName()" name="getName">
<highlightjs language='javascript' code="//获取当前表格名
const table = await base.getActiveTable();
const table_name = await table.getName();
" />       
	<el-space direction="horizontal">
		<el-button type="primary" :icon="Pointer" @click="getTableName" />
		<el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br>
	</el-space><br>
	<el-text class="mx-1" type="danger">{{ description }}</el-text>
</el-collapse-item> 
	
<el-collapse-item title="getMeta()" name="getMeta">
<highlightjs language='javascript' code="//获取当前表格名
const table = await base.getActiveTable();
const table_meta = await table.getMeta();
" />       
        <el-space direction="horizontal">
            <el-button type="primary" :icon="Pointer" @click="getTableMeta" />
            <el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br>
        </el-space><br>
        <el-text class="mx-1" type="danger">{{ description }}</el-text>
    </el-collapse-item> 

<el-collapse-item title="getFieldList()" name="getFieldList">
<highlightjs language='javascript' code="//获取当前表格名
const table = await base.getActiveTable();
const table_list = await table.getFieldList();
" />       
        <el-space direction="horizontal">
            <el-button type="primary" :icon="Pointer" @click="getFieldList" />
            <el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br>
        </el-space><br>
        <el-text class="mx-1" type="danger">{{ description }}</el-text>
    </el-collapse-item> 

<el-collapse-item title="getFieldMetaList()" name="getFieldMetaList">
<highlightjs language='javascript' code="//获取当前表格名
const table = await base.getActiveTable();
const table_meta_list = await table.getFieldMetaList();//注意这里是获取列表中所有字段的id了
" />       
        <el-space direction="horizontal">
            <el-button type="primary" :icon="Pointer" @click="getFieldMetaList" />
            <el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br>
        </el-space><br>
        <el-text class="mx-1" type="danger">{{ description }}</el-text>
    </el-collapse-item> 

<el-collapse-item title="getFieldListByType()" name="getFieldListByType">
<highlightjs language='javascript' code="import { FieldType } from '@lark-base-open/js-sdk';//新引入一个FieldType
const type = FieldType.Attachment;//FieldType.Attachment表示附件字段
const table = await base.getActiveTable();
const table_meta_list = await table.getFieldListByType(type);
" />       
        <el-space direction="horizontal">
            <el-button type="primary" :icon="Pointer" @click="getFieldListByType" />
            <el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br>
        </el-space><br>
        <el-text class="mx-1" type="danger">{{ description }}</el-text>
    </el-collapse-item> 

<el-collapse-item title="getFieldMetaListByType()" name="getFieldMetaListByType">
<highlightjs language='javascript' code="import { FieldType } from '@lark-base-open/js-sdk';//新引入一个FieldType
const type = FieldType.Attachment;//FieldType.Attachment表示附件字段
const table = await base.getActiveTable();
const table_meta_list = await table.getFieldMetaListByType(type);
" />       
        <el-space direction="horizontal">
            <el-button type="primary" :icon="Pointer" @click="getFieldMetaListByType" />
            <el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br>
        </el-space><br>
        <el-text class="mx-1" type="danger">{{ description }}</el-text>
    </el-collapse-item> 

<el-collapse-item title="getRecords()" name="getRecords">
<highlightjs language='javascript' code="//获取当前表格的records,为确保数据显示正常，这里只展示返回的前5个数据
const table = await base.getActiveTable();
const records = await table.getRecords({pageSize:1000});//pageSize可以自定义,这里是数据分页的大小。
" />       
        <el-space direction="horizontal">
            <el-button type="primary" :icon="Pointer" @click="getRecords" />
            <el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br>
        </el-space><br>
        <el-text class="mx-1" type="danger">{{ description }}</el-text>
    </el-collapse-item> 

<el-collapse-item title="getRecordIdList()" name="getRecordIdList">
<highlightjs language='javascript' code="//获取当前表格的recordsIdList,为确保数据显示正常，这里只展示返回的前5个数据
const table = await base.getActiveTable();
const record_id_list = await table.getRecordIdList();//这里没有参数
" />       
        <el-space direction="horizontal">
            <el-button type="primary" :icon="Pointer" @click="getRecordIdList" />
            <el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br>
        </el-space><br>
        <el-text class="mx-1" type="danger">{{ description }}</el-text>
    </el-collapse-item> 

<el-collapse-item title="getRecordList()" name="getRecordList">
<highlightjs language='javascript' code="//获取当前表格的recordsIdList,为确保数据显示正常，这里只展示返回的前5个数据
const table = await base.getActiveTable();
const record_id_list = await table.getRecordList();//这里没有参数
" />       
        <el-space direction="horizontal">
            <el-button type="primary" :icon="Pointer" @click="getRecordList" />
            <el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br>
        </el-space><br>
        <el-text class="mx-1" type="danger">{{ description }}</el-text>
    </el-collapse-item> 

<el-collapse-item title="getRecordShareLink()" name="getRecordShareLink">
<highlightjs language='javascript' code="//这里获取到的链接可以直接点击
const table = await base.getActiveTable();
const records = await table.getRecordIdList();
const link = await table.getRecordShareLink(records[0]);//records[0]代表第一个字段
" />       
        <el-space direction="horizontal">
            <el-button type="primary" :icon="Pointer" @click="getRecordShareLink" />
            <el-link :href="share_link" target="_blank" v-if="share_link">{{share_link}}</el-link>
            <el-text class="mx-1" type="primary" v-else="share_link">{{ btn_notice }}</el-text><br>
        </el-space><br>
        <el-text class="mx-1" type="danger" >{{ description }}</el-text>
    </el-collapse-item> 

<el-collapse-item title="getCellString()" name="getCellString">
<highlightjs language='javascript' code="//这里默认使用获取到的第一个日期类型字段的第一条记录。
const type = FieldType.DateTime;
const table = await base.getActiveTable();
const field_id_list = await table.getFieldMetaListByType(type);//获取日期的field_id_list
const records = await table.getRecordIdList();
const field_id = field_id_list[0].id;
const date = await table.getCellString(field_id,records[0]);
" />       
        <el-space direction="horizontal">
            <el-button type="primary" :icon="Pointer" @click="getCellString" />
            <el-link :href="share_link" target="_blank" v-if="share_link">{{share_link}}</el-link>
            <el-text class="mx-1" type="primary" v-else="share_link">{{ btn_notice }}</el-text><br>
        </el-space><br>
        <el-text class="mx-1" type="danger" >{{ description }}</el-text>
    </el-collapse-item> 

<el-collapse-item title="getCellValue()" name="getCellValue">
<highlightjs language='javascript' code="//这里和飞书官方的案例是不一样的,这样做灵活性会更高。
const table = await base.getActiveTable();
const fields_meta = await table.getFieldMetaList();
let field_id = '';
//下面的for循环是匹配字段名
for (let i=0;i<fields_meta.length;i++){
    const name = fields_meta[i].name;
    if (name==fn){
        field_id = fields_meta[i].id;
        break;
        }
}
const records = await table.getRecordIdList();
//这里的record_id其实就是【行号-1】,比如第3行的record_id就是2
cellvalue = await table.getCellValue(field_id,records[record_id]);
" />    
        <el-space direction="horizontal">
            <span>字段名</span>
            <el-input v-model="field_name" placeholder="字段名" />
        </el-space>
        <el-space direction="horizontal">
            <span>记录行号</span>
            <el-input-number v-model="record_id" placeholder="第几行" />
        </el-space><br>
        <el-space direction="horizontal">
            <el-button type="primary" :icon="Pointer" @click="getCellValue(field_name,record_id)" />
            <el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br>
        </el-space><br>
        <el-text class="mx-1" type="danger" >{{ description }}</el-text>
    </el-collapse-item> 

<el-collapse-item title="getCellAttachmentUrls()" name="getCellAttachmentUrls">
	<highlightjs language='javascript' code="//方法有很多，这里演示getRecordIdList()+getFieldMetaListByType()
const type = FieldType.Attachment; //指定附件类型
const table = await base.getActiveTable();
const field_id_list = await table.getFieldMetaListByType(type);//获取附件的field_id_list
const records = await table.getRecordIdList(); //由于记录值可以看成是固定的行号，直接获取即可。
let all_urls = []; //初始化保存下载链接的变量
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

<el-collapse-item title="getActiveView()" name="getActiveView">
<highlightjs language='javascript' code="//获取当前视图
const table = await base.getActiveTable();
const table_meta = await table.getActiveView();
" />       
        <el-space direction="horizontal">
            <el-button type="primary" :icon="Pointer" @click="getActiveView" />
            <el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br>
        </el-space><br>
        <el-text class="mx-1" type="danger">{{ description }}</el-text>
    </el-collapse-item> 

<el-collapse-item title="isViewExist()" name="isViewExist">
<highlightjs language='javascript' code="//这段代码没有实际意义,仅仅是演示使用.
const table = await base.getActiveTable();
const view = await table.getActiveView();
await table.isViewExist(view.id)
" />       
        <el-space direction="horizontal">
            <el-button type="primary" :icon="Pointer" @click="isViewExist" />
            <el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br>
        </el-space><br>
        <el-text class="mx-1" type="danger">{{ description }}</el-text>
    </el-collapse-item> 

<el-collapse-item title="getViewMetaList()" name="getViewMetaList">
<highlightjs language='javascript' code="//这里建议多新建几个视图尝试一下
const table = await base.getActiveTable();
const views_meta = await table.getViewMetaList();
" />       
        <el-space direction="horizontal">
            <el-button type="primary" :icon="Pointer" @click="getViewMetaList" />
            <el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br>
        </el-space><br>
        <el-text class="mx-1" type="danger">{{ description }}</el-text>
    </el-collapse-item> 

<el-collapse-item title="getViewList()" name="getViewList">
<highlightjs language='javascript' code="const table = await base.getActiveTable();
const views_meta = await table.getViewList();
" />       
        <el-space direction="horizontal">
            <el-button type="primary" :icon="Pointer" @click="getViewList" />
            <el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br>
        </el-space><br>
        <el-text class="mx-1" type="danger">{{ description }}</el-text>
    </el-collapse-item> 

<el-collapse-item title="getViewMetaById()" name="getViewMetaById">
<highlightjs language='javascript' code="const table = await base.getActiveTable();
const views_id = await table.getViewMetaList();
const view = await table.getViewMetaById(views_id[0].id);
" />       
        <el-space direction="horizontal">
            <el-button type="primary" :icon="Pointer" @click="getViewMetaById" />
            <el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br>
        </el-space><br>
        <el-text class="mx-1" type="danger">{{ description }}</el-text>
    </el-collapse-item> 

<el-collapse-item title="getViewById()" name="getViewById">
<highlightjs language='javascript' code="const table = await base.getActiveTable();
const views_id = await table.getViewMetaList();
const view = await table.getViewById(views_id[0].id);
" />       
        <el-space direction="horizontal">
            <el-button type="primary" :icon="Pointer" @click="getViewById" />
            <el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br>
        </el-space><br>
        <el-text class="mx-1" type="danger">{{ description }}</el-text>
    </el-collapse-item> 

    </el-collapse>
</el-space>



</template>

<script>
import { bitable,FieldType } from '@lark-base-open/js-sdk';
import { Pointer } from '@element-plus/icons-vue';

const base = bitable.base
export default {
    data() {
        return {
            record_id:0,
            btn_notice:"点击左边按钮获取查看当前代码运行结果",
            description:"",
            table_name:"",
            field_name:"",
            share_link:"",
            Pointer
        }
    },
    methods: {
        reset_notice(){
            this.btn_notice="点击左边按钮获取查看当前代码运行结果";
            this.description="";
        },
        async getTableName(){
            const table = await base.getActiveTable();
            this.btn_notice =await table.getName();
            this.description = "这里直接对当前表进行获取，成功获取了表名。"
        },
        async getTableMeta(){
            const table = await base.getActiveTable();
            this.btn_notice =await table.getMeta();
            this.description = "直接对当前表进行获取，成功获取了Meta信息"
        },
        async getFieldList(){
            const table = await base.getActiveTable();
            this.btn_notice =await table.getFieldList();
            this.description = "咦！又是空的，但是聪明的你已经知道，这种表示可以直接被操作。"
        },
        async getFieldMetaList(){
            const table = await base.getActiveTable();
            this.btn_notice =await table.getFieldMetaList();
            this.description = "这里你获得的是所有字段的Meta信息，这些信息里没有表名哦。"
        },
        async getFieldListByType(){
            const type = FieldType.Attachment;
            const table = await base.getActiveTable();
            this.btn_notice =await table.getFieldListByType(type);
            this.description = "^_^不用多解释了吧"
        },
        async getFieldMetaListByType(){
            const type = FieldType.Attachment;
            const table = await base.getActiveTable();
            this.btn_notice =await table.getFieldMetaListByType(type);
            this.description = "这里返回的是一个列表，列表中的每一项参数蛮多的，一般情况下比较有用的是id,name。"
        },
        async addFiled(fn){
            const tp = FieldType.SingleSelect;
            const table = await base.getActiveTable();
            if (fn.length == 0){
                this.btn_notice = await table.addField({type:tp}); 
            }else{
                this.btn_notice = await table.addField({type:tp,name:fn}); 
            }  
            this.description = "新增一个字段"+fn+"，并返回了新添加表的tableId和索引index。一直添加一直爽！但你狼狈删表的样子真帅！";
        },
        async getRecords(){
            const table = await base.getActiveTable();
            const records = await table.getRecords({pageSize:1000});
            if (records["records"].length>5){
                records["records"] = records["records"].slice(0,5);
            }
            this.btn_notice = records;
            this.description = "返回的数据解释：total:获取到的records总数量,hasMore:有无更多,fields:字段fieldId字典,recordId:某一记录的id"
        },
        async getRecordIdList(){
            const table = await base.getActiveTable();
            const records = await table.getRecordIdList();
            this.btn_notice = records.slice(0,5);
            this.description = "这里获取到的只有字段的id列表"
        },
        async getRecordList(){
            const table = await base.getActiveTable();
            const records = await table.getRecordList();
            this.btn_notice = records;
            this.description = "这里获取到的只有字段的id列表"
        },
        async getRecordShareLink(){
            const table = await base.getActiveTable();
            const records = await table.getRecordIdList();
            const link = await table.getRecordShareLink(records[0]);
            this.share_link = link;
            this.description = "这里获取到的只有字段的id列表"
        },
        async getCellValue(fn,rd){
            if(fn.length==0){
                ElMessage({
                message: '字段名不能为空，查询失败',
                type: 'warning'});
            return ;}
            const table = await base.getActiveTable();
            const fields_meta = await table.getFieldMetaList();
            let field_id = "";
            for (let i=0;i<fields_meta.length;i++){
                const name = fields_meta[i].name;
                if (name==fn){
                    field_id = fields_meta[i].id;
                    break;
                }
            }
            if (field_id.length>0){
                const records = await table.getRecordIdList();
                this.btn_notice = await table.getCellValue(field_id,records[rd]);
                this.description = "单元格为空就无法找到数据。"
            }else{
                this.description = "哦豁！你输入的字段名不存在。"
            }
            
            
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
        async getCellString(){
            const type = FieldType.DateTime;
            const table = await base.getActiveTable();
            const field_id_list = await table.getFieldMetaListByType(type);//获取日期的field_id_list
            const records = await table.getRecordIdList();
            const field_id = field_id_list[0].id
            this.btn_notice = field_id_list;
            this.btn_notice = await table.getCellString(field_id,records[0]);
            
        },
        async getActiveView(){
            const table = await base.getActiveTable();
            this.btn_notice =await table.getActiveView();
            this.description = "又是一个可以直接操作的对象哦"
        },
		async isViewExist(){
		    const table = await base.getActiveTable();
		    const view = await table.getActiveView();
			this.btn_notice = await table.isViewExist(view.id);//通过view.id拿到当前视图的id。那肯定存在咯
		    this.description = "这里和前面isFieldExist()函数的原理是一样的，在这里我们只是用了另外一种直接获取id的方法。"
		},
		async getViewMetaList(){
            const table = await base.getActiveTable();
            this.btn_notice = await table.getViewMetaList();
            this.description = "这里是获取当前表格所有视图的meta信息"
        },
        async getViewList(){
            const table = await base.getActiveTable();
            this.btn_notice = await table.getViewList();
            this.description = "获取可以直接操作的看板对象"
        },
		async getViewMetaById(){
		    const table = await base.getActiveTable();
		    const views_id = await table.getViewMetaList();
			const view = await table.getViewMetaById(views_id[0].id);
			this.btn_notice = view;
		    this.description = "这里返回的views_id也不一定是按顺序的哦"
		},
		async getViewById(){
		    const table = await base.getActiveTable();
		    const views_id = await table.getViewMetaList();
		    const view = await table.getViewById(views_id[0].id);
		    this.btn_notice = view;
		    this.description = "不多说，这个view可以直接开用！不过你知道这是哪个视图吗？"
		},
		
    }
}
</script>