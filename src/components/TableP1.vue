<template>
    <el-space direction="vertical" class="TableP1">
    <el-collapse  @change="reset_notice" accordion class="TableP1">
    <el-text class="mx-1" type="danger" size="small" tag="p">
    <h2>增删表格</h2>
    </el-text>
    <el-collapse-item title="addTable()" name="addTable">
    <highlightjs language='javascript' code="
    if (table_name.length==0){
        //使用默认名添加表格
        const ids = await base.getSelection();
        const tableId = ids['tableId'];
        await base.addTable(tableId);
    }else{
        //使用自定义表名添加
        await base.addTable({name:table_name});
    }
    /*
    这里不完善的地方，是没有检查表格重名。
    可以遍历getMetaList()获取到的信息去重。
    */
    "/>
            
            <el-space direction="horizontal">
                <el-input v-model="table_name" placeholder="这里可以填表格名，不填则是默认表名" />
                <el-button type="primary" :icon="Pointer" @click="addOneTable(table_name)" />
            </el-space><br>
            <el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br>
            <el-text class="mx-1" type="danger">{{ description }}</el-text>
        </el-collapse-item> 

    <el-collapse-item title="deleteTable()" name="deleteTable">
    <highlightjs language='javascript' code="//请勿在生产/工作环境乱点该函数按钮，否则删除数据不负责哟！
    const ids = await base.getSelection();
    const tableId = ids['tableId'];
    this.btn_notice = await base.deleteTable(tableId)
    " />       
            <el-space direction="horizontal">
                <el-button type="primary" title="添加一张新表" :icon="Pointer" @click="delOneTable(table_name)" />
                <el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br>
            </el-space><br>
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
            btn_notice:"点击左边按钮获取查看当前代码运行结果",
            description:"",
            table_name:"",
            Pointer,
        }
    },
    methods: {
        reset_notice(){
            this.btn_notice="点击左边按钮获取查看当前代码运行结果";
            this.description="";
        },
        async addOneTable(tn){
            if (tn.length == 0){
                const ids = await base.getSelection();
                const tableId = ids['tableId'];
                this.btn_notice = await base.addTable(tableId); 
            }else{
                this.btn_notice = await base.addTable({name:tn}); 
            }  
            this.description = "新增一张数据表"+tn+",并返回了新添加表的tableId和索引index。一直添加一直爽！但你狼狈删表的样子真帅！";
        },
        async delOneTable(){
            const ids = await base.getSelection();
            const tableId = ids['tableId'];
            this.btn_notice = await base.deleteTable(tableId)
            this.description = "哈哈哈，终于可以把上一步自己添加表格搞出来的一堆表格给删除了！"
        },
    }
}

</script>