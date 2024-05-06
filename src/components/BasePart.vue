<template>
<el-space direction="vertical" class="BasePart">
    <el-collapse  @change="reset_notice" accordion>

<el-collapse-item title="bitable.base" name="base">
<highlightjs language='javascript' code="import { bitable } from '@lark-base-open/js-sdk';
const base = bitable.base;" />
        <el-space direction="horizontal">
            <el-button type="primary" :icon="Pointer" @click="getBase" />
            <el-text class="mx-1" type="primary">{{ btn_notice }}</el-text>
        </el-space><br>
        <el-text class="mx-1" type="danger">{{ description }}</el-text>
    </el-collapse-item>

<el-collapse-item title="isEditable()" name="isEditable">
<highlightjs language='javascript' code="const isEditable = await base.isEditable();" />
        <el-space direction="horizontal">
            <el-button type="primary" :icon="Pointer" @click="getBaseEditableState" />
            <el-text class="mx-1" type="primary">{{ btn_notice }}</el-text>
        </el-space><br>
        <el-text class="mx-1" type="danger">{{ description }}</el-text>
    </el-collapse-item>
    
<el-collapse-item title="getSelection()" name="getSelection">
<highlightjs language='javascript' code="//如果不选中某个单元格,部分id会显示null
const selection = await bitable.base.getSelection();" />
        <el-space direction="horizontal">
            <el-button type="primary" :icon="Pointer" @click="getSelection" />
            <el-text class="mx-1" type="primary">{{ btn_notice }}</el-text>
        </el-space><br>
        <el-text class="mx-1" type="danger">{{ description }}</el-text>
    </el-collapse-item>

<el-collapse-item title="getActiveTable()" name="getActiveTable">
<highlightjs language='javascript' code="const table = await base.getActiveTable();" />
        <el-space direction="horizontal">
            <el-button type="primary" :icon="Pointer" @click="getActiveTable" />
            <el-text class="mx-1" type="primary">{{ btn_notice }}</el-text>
        </el-space><br>
        <el-text class="mx-1" type="danger">{{ description }}</el-text>
    </el-collapse-item>    

<el-collapse-item title="getTable()" name="getTable">
<highlightjs language='javascript' code="const table = await base.getTable(tableId/name);" />
        <el-input v-model="table_id_name" placeholder="这里填id或者表格名" />
        <el-space direction="horizontal">
            <el-button type="primary" :icon="Pointer" @click="getTable(table_id_name)" />
            <el-text class="mx-1" type="primary">{{ btn_notice }}</el-text>
        </el-space><br>
        <el-text class="mx-1" type="danger">{{ description }}</el-text>
    </el-collapse-item>   

<el-collapse-item title="getTableById()" name="getTableById">
<highlightjs language='javascript' code="const table = await base.getTableById(tableId);" />
        <el-input v-model="table_id_name" placeholder="这里只能填id" />
        <el-space direction="horizontal">
            <el-button type="primary" :icon="Pointer" @click="getTableById(table_id_name)" />
            <el-text class="mx-1" type="primary">{{ btn_notice }}</el-text>
        </el-space><br>
        <el-text class="mx-1" type="danger">{{ description }}</el-text>
    </el-collapse-item>   

<el-collapse-item title="getTableByName()" name="getTableByName">
<highlightjs language='javascript' code="const table = await base.getTableByName(name);" />
        <el-input v-model="table_id_name" placeholder="这里只能填表名" />
        <el-space direction="horizontal">
            <el-button type="primary" :icon="Pointer" @click="getTableByName(table_id_name)" />
            <el-text class="mx-1" type="primary">{{ btn_notice }}</el-text>
        </el-space><br>
        <el-text class="mx-1" type="danger">{{ description }}</el-text>
    </el-collapse-item>   

<el-collapse-item title="getTableList()" name="getTableList">
<highlightjs language='javascript' code="const tablelist = await base.getTableList();" />
        <el-space direction="horizontal">
            <el-button type="primary" :icon="Pointer" @click="getTableList" />
            <el-text class="mx-1" type="primary">{{ btn_notice }}</el-text>
        </el-space><br>
        <el-text class="mx-1" type="danger">{{ description }}</el-text>
    </el-collapse-item>   

<el-collapse-item title="getTableMetaById()" name="getTableMetaById">
<highlightjs language='javascript' code="const base = bitable.base;
const ids = await base.getSelection();
const tableId = ids['tableId']
const tableMeta = await base.getTableMetaById(tableId);" />
        <el-space direction="horizontal">
            <el-button type="primary" :icon="Pointer" @click="getTableMetaById" />
            <el-text class="mx-1" type="primary">{{ btn_notice }}</el-text>
        </el-space><br>
        <el-text class="mx-1" type="danger">{{ description }}</el-text>
    </el-collapse-item>   

<el-collapse-item title="getTableMetaList()" name="getTableMetaList">
<highlightjs language='javascript' code="const base = bitable.base;
const tableMetaList = await base.getTableMetaList();" />
        <el-space direction="horizontal">
            <el-button type="primary" :icon="Pointer" @click="getTableMetaList" />
            <el-text class="mx-1" type="primary">{{ btn_notice }}</el-text>
        </el-space><br>
        <el-text class="mx-1" type="danger">{{ description }}</el-text>
    </el-collapse-item>   

<el-collapse-item title="getPermission()" name="getPermission">
<highlightjs language='javascript' code="import { PermissionEntity, OperationType} from '@lark-base-open/js-sdk';
const ids = await base.getSelection();
const tableId = ids['tableId'];
const param = {
    entity: PermissionEntity.Field,
    params: {
        tableId,
        <fieldId>,
        <recordId>},
    type: OperationType.Editable}
permission = await base.getPermission(param);" />
        <el-space direction="horizontal">
            <el-button type="primary" :icon="Pointer" @click="getPermission" />
            <el-text class="mx-1" type="primary">{{ btn_notice }}</el-text>
        </el-space><br>
        <el-text class="mx-1" type="danger">{{ description }}</el-text>
    </el-collapse-item>  

<el-collapse-item title="batchUploadFile()" name="batchUploadFile">
<highlightjs language='javascript' code="//文件名不能超过250字，大小不超过2GB
//template区域
<input type='file' ref='uploadRef'>
//script区域
const files = this.$refs.uploadRef.files;
const token =await bitable.base.batchUploadFile(files); // 拿到的 token 可以用于设置附件字段" />
<input type="file" ref="uploadRef">
        <el-space direction="horizontal">
            <el-button type="primary" :icon="Pointer" @click="uploadFile" />
            <el-text class="mx-1" type="primary">{{ btn_notice }}</el-text>
        </el-space><br>
        <el-text class="mx-1" type="danger">{{ description }}</el-text>
    </el-collapse-item>  
    </el-collapse>
</el-space>
</template>

<script>
import { bitable,PermissionEntity, OperationType} from '@lark-base-open/js-sdk';
import { Pointer } from '@element-plus/icons-vue'
const base = bitable.base
export default {
    data() {
        return {
            table_id_name:"",
            btn_notice:"点击左边按钮获取查看当前代码运行结果",
            description:"",
            fileList:[],
            headimgurl:[],
            Pointer
        }
    },
    methods: {
        reset_notice(){
            this.btn_notice="点击左边按钮获取查看当前代码运行结果";
            this.description="";
        },
        getBase() {
            this.btn_notice = base;
            this.description = "你是否会比较疑惑，为什么这里获取的数据是空的？\n因为你现在获取的是一个可以操作的base对象,如果你想获得它的信息，请获取Meta数据。"
        },
        async getBaseEditableState(){
            this.btn_notice = await base.isEditable();
            this.description = "true表示可编辑，false代表不可编辑";
        },
        async getSelection(){
            this.btn_notice = await base.getSelection();
            this.description = "瞧！你得到了一些信息。\"tableId\":\"xxxxxx\"是代表你当前这张多维表格的id，后续操作过程中可以直接使用xxxxxx（不用带引号）。 \"fieldId\":null是还没有获取到这个字段(field)的id,选中后再次获取就能获得！"
        },
        async getActiveTable(){
            this.btn_notice = await base.getActiveTable();
            this.description = "咦！又是一个空的数据。但是你应该有所察觉，这种返回空数据的情况一般是可以直接操作的对象。"

        },
        async getTable(id_name){
            try{
                this.btn_notice = await base.getTable(id_name);
            this.description = "又出现空的数据咯！表示这样获取的table也是可以直接操作的。和上面的getActiveTable()不同，这个函数可以指定操作哪个表格。"
            }catch{
                this.btn_notice = "出错啦！"
                this.description = "这个函数不填或者错填,后台就出错了！"
                +"填上表名试一试。【其实很多小伙伴已经想起来，在getSelection()函数里是有tableId的】"
            }
        },
        async getTableById(id_name){
            try{
                this.btn_notice = await base.getTableById(id_name);
                this.description = "同样可以操作table"
            }catch{
                this.btn_notice = "出错啦！"
                this.description = "这个函数只能填表格id，留空或者填表名无效"
            }            
        },
        async getTableByName(id_name){
            try{
                this.btn_notice = await base.getTableByName(id_name);
                this.description = "同样可以操作table"
            }
            catch{
                this.btn_notice = "出错啦！"
                this.description = "这个函数只能填表名，留空或者填tableId无效"
            }
        },
        async getTableList(){
            this.btn_notice = await base.getTableList();
            this.description = "不用多说了吧！这里需要注意的这是一个列表,需要拿到具体的表格才能继续操作。"
        },
        async getTableMetaById(){
            const ids = await base.getSelection();
            const tableId = ids["tableId"]
            this.btn_notice = await base.getTableMetaById(tableId);
            this.description = "这里演示了一段自动获取tableId的代码。并利用tableId获取到了表格的Meta信息①id就是tableId ②name是表名 ③isSync一般是false,表示不是同步表。"
        },
        async getTableMetaList(){
            this.btn_notice = await base.getTableMetaList();
            this.description = "这个函数不需要传任何参数，它会自动获取整个base里的表格Meta数据。注意这种带Meta信息的，一般是不能直接操作的。可以从其中拿到tableId、name等信息，再用上面getTable()去操作具体的表格。"
        },
        async getPermission(){
            const ids = await base.getSelection();
            const tableId = ids["tableId"]
            const param = {
                entity: PermissionEntity.Field,
                params: {
                    tableId,
                },
                type: OperationType.Editable
            }
            try{
                this.btn_notice = await base.getPermission(param);
                this.description = "这里获得了false.但是其实是可以进行编辑的。在这个函数中<fieldId>和<recordId>是可选的，只有tableId必须要填。"
            }catch{
                this.btn_notice = "出错啦！";
                this.description = "必须要在飞书插件环境中运行才能获取到状态。"

            }
        },
        async uploadFile(){
            // 文件上传限制
            // file name 长度不得大于 250
            // file size 不得大于 1024 * 1024 * 1024 * 2
            const files = this.$refs.uploadRef.files;
            if (files.length==0){
                //import { ElMessage} from 'element-plus'
                ElMessage({
                    message: '出错啦！！没有选择文件，不能上传',
                    type: 'warning',
                })
                return ;
            }

            const token =await bitable.base.batchUploadFile(files); // 拿到的 token 可以用于设置附件字段
            this.btn_notice = token //
            if (token == null){
                this.description = "第一次也不知道为什么会出现null,请再按一次";
            }else{
                
                this.description = `【${files[0].name}】`+"上传完毕，拿到了返回的token."
            }
            
        },
    }
}
</script>
