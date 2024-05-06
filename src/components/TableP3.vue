<template>
<el-space direction="vertical" class="TableP3">
<el-collapse  @change="reset_notice" accordion class="TableP3">
    <el-text class="mx-1" type="danger" size="small" tag="p">
    <h2>数据修改</h2>
    </el-text>

<el-collapse-item title="setTable()" name="setTable">
<highlightjs language='javascript' code="
if (table_name.length==0){
    return ;
}else{
    const ids = await base.getSelection();
    const tableId = ids['tableId'];
    this.btn_notice = await base.setTable(tableId,{name:table_name})
}
//这段代码同样没有对表名判重哦
" />       
        <el-space direction="horizontal">
            <el-input v-model="table_name" placeholder="填表格名,不填不给修改" />
            <el-button type="primary" :icon="Pointer" @click="setTableName(table_name)" />
        </el-space><br>
        <el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br>
        <el-text class="mx-1" type="danger">{{ description }}</el-text>
    </el-collapse-item> 

<el-collapse-item title="addFiled()" name="addFiled">
<highlightjs language='javascript' code="//省略了导入FieldType,base等
const tp = FieldType.SingleSelect; //添加单选字段
const table = await base.getActiveTable();
if (filed_name.length == 0){
    //默认名添加字段
    const filed_id = await table.addField({type:tp}); 
}else{
    //自定义名称添加字段
    const filed_id = await table.addField({type:tp,name:filed_name}); 
}
//这里不建议在增加属性的时候同时进行其他操作，后面有专门操作field的
" />
        
        <el-space direction="horizontal">
            <el-input v-model="field_name" placeholder="填字段名，不填使用默认字段名" />
            <el-button type="primary" :icon="Pointer" @click="addFiled(field_name)" />
        </el-space><br>
        <el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br>
        <el-text class="mx-1" type="danger">{{ description }}</el-text>
    </el-collapse-item> 

<el-collapse-item title="setField()" name="setField">
<highlightjs language='javascript' code="//srcipt
const table = await base.getActiveTable();//获取当前表格
const fields = await table.getFieldMetaList();
const field_id = fields[0]['id'] //获取第一个字段的id
await table.setField(field_id,{name:fn})
" />
        
        <el-space direction="horizontal">
            <el-input v-model="field_name" placeholder="填写字段名，不填不给修改。" />
            <el-button type="primary" :icon="Pointer" @click="setField(field_name)" />
        </el-space><br>
        <el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br>
        <el-text class="mx-1" type="danger">{{ description }}</el-text>
    </el-collapse-item> 

<el-collapse-item title="deleteField()" name="deleteField">
<highlightjs language='javascript' code="//script
const table = await base.getActiveTable();
const fields = await table.getFieldMetaList();
const field_id = fields[1];//这里获取的是第二个字段
await table.deleteField(field_id); //删除字段
" />
        
        <el-space direction="horizontal">
            <el-button type="primary" :icon="Pointer" @click="deleteField" />
            <el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br>
        </el-space><br>
        <el-text class="mx-1" type="danger">{{ description }}</el-text>
    </el-collapse-item> 

<el-collapse-item title="addRecord()" name="addRecord">
    <highlightjs language='javascript' code="//script
const table = await base.getActiveTable();
const fields = await table.getFieldMetaList();
const field_id = fields[1];//这里获取的是第二个字段
await table.deleteField(field_id); //删除字段
    " />    
        <el-space direction="horizontal">
            <el-input v-model="field_name" placeholder="填写需要添加的数据" />
            <el-button type="primary" :icon="Pointer" @click="addRecord(field_name)" />
        </el-space>
        <br>
        <el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br>
        <el-text class="mx-1" type="danger">{{ description }}</el-text>
</el-collapse-item> 

<el-collapse-item title="addRecords()" name="addRecords">
<highlightjs language='javascript' code="//与上面addRecord不同的是，这里使用了createCell生成单元格数据。
const table = await base.getActiveTable();
const type = FieldType.Text;//指定文本类型
const fields = await table.getFieldListByType(type);//获取当前表格中的所有文本字段
const text_field = fields[0];//选取第一个文本字段
const cell1 = await text_field.createCell(data); //记录1
const cell2 = await text_field.createCell(data+'2'); //记录2
await table.addRecords([[cell1],[cell2]]);//注意这里是二维数组结构
" />
    <el-space direction="horizontal">
        <el-input v-model="field_name" placeholder="填写需要添加的数据" />
        <el-button type="primary" :icon="Pointer" @click="addRecords(field_name)" />
    </el-space>
    <br>
    <el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br>
    <el-text class="mx-1" type="danger">{{ description }}</el-text>
</el-collapse-item> 

<el-collapse-item title="setRecord()" name="setRecord">
<highlightjs language='javascript' code="//script
const table = await base.getActiveTable();
const type = FieldType.Text;//指定文本类型
const field_list = await table.getFieldListByType(type);//获取可直接操作的文本类型field
const field = field_list[0]; // 选择第一个field
const record_ids = await table.getRecordIdList();//请注意！这里返回的record_ids是无序的
const record_id_0 = record_ids[0];//获取某一条记录id
//注意下面参数的格式是(recordId,{fields:{[field.id]:data}}),这个结构有点复杂。
await table.setRecord(record_id_0,
{
    fields: {
        [field.id]: data
    }
});
"/>
    
    <el-space direction="horizontal">
        <el-input v-model="field_name" placeholder="填写修改的数据" />
        <el-button type="primary" :icon="Pointer" @click="setRecord(field_name)" />
    </el-space>
    <br>
    <el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br>
    <el-text class="mx-1" type="danger">{{ description }}</el-text>
</el-collapse-item>    

<el-collapse-item title="setRecords()" name="setRecords">
<highlightjs language='javascript' code="//请注意该段代码在记录数大于等于2的时候再进行测试
const table = await base.getActiveTable();
const type = FieldType.Text;//指定文本类型
const field_list = await table.getFieldListByType(type);//获取可直接操作的文本类型field
const field = field_list[0]; // 选择第一个field
const record_ids = await table.getRecordIdList();//请注意！这里返回的record_ids是无序的
const record_id_0 = record_ids[0];//获取某一条记录id
const record_id_1 = record_ids[1];//获取某一条记录id
//请注意！下面的第1条和第2条并不一定是挨在一起的！
const res = await table.setRecords([
    //第1条记录
    {
        recordId: record_id_0,
            fields: {
                [field.id]: '第1处'+data
            }
        },
    //第2条记录
    {
        recordId: record_id_1,
        fields: {
            [field.id]: '第2处'+data
        }
    }
]);
" />
    <el-space direction="horizontal">
        <el-input v-model="field_name" placeholder="填写修改的数据" />
        <el-button type="primary" :icon="Pointer" @click="setRecords(field_name)" />
    </el-space>
    <br>
    <el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br>
    <el-text class="mx-1" type="danger">{{ description }}</el-text>
</el-collapse-item>  

<el-collapse-item title="deleteRecord()" name="deleteRecord">
    <highlightjs language='javascript' code="//又到了大家最开心的环节，删删删！
const table = await base.getActiveTable();
const record_id_list = await table.getRecordIdList();//返回的record_id_list是无序的！！！
await table.deleteRecord(record_id_list[0]);//随机删除一条" />   
    <el-space direction="horizontal">
        <el-button type="primary" :icon="Pointer" @click="deleteRecord" />
        <el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br>
    </el-space><br>
    <el-text class="mx-1" type="danger">{{ description }}</el-text>
</el-collapse-item> 

<el-collapse-item title="deleteRecords()" name="deleteRecords">
    <highlightjs language='javascript' code="//又到了大家最开心的环节，删删删！
const table = await base.getActiveTable();
const record_id_list = await table.getRecordIdList();//返回的record_id_list是无序的！！！
await table.deleteRecords(record_id_list.slice(0,n));//n代表几个
" />   
    <el-space direction="horizontal">
        <el-input-number v-model="record_nums" :min="1" :max="5000" />
        <el-button type="primary" :icon="Pointer" @click="deleteRecords(record_nums)" />
    </el-space><br>
    <el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br>
    <el-text class="mx-1" type="danger">{{ description }}</el-text>
</el-collapse-item> 

<el-collapse-item title="addView()" name="addView">
<highlightjs language='javascript' code="//
const tp = ViewType.Form;//这里默认增加Form表单视图
const table = await base.getActiveTable();
const views = await table.getViewMetaList();
//判视图重名
for (let v in views){
	if (fn==views[v].name){
		return ;
	}
}
if (view_name.length == 0){
	//以默认名增加视图
	await table.addView({type:tp}); 
}else{	
	//自定义名增加视图
	await table.addView({type:tp,name:view_name}); 
}  
" />
        
        <el-space direction="horizontal">
            <el-input v-model="field_name" placeholder="填字段名，不填使用默认字段名" />
            <el-button type="primary" :icon="Pointer" @click="addView(field_name)" />
        </el-space><br>
        <el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br>
        <el-text class="mx-1" type="danger">{{ description }}</el-text>
    </el-collapse-item> 

<el-collapse-item title="setView()" name="setView">
<highlightjs language='javascript' code="//这段代码里对视图名合法性进行了判断,并增加了异常捕获机制
//判断视图名是否为空
if(view_name.length==0){
	//弹出警告框
	alert('没填视图名,修改失败!')
	return ;}
//捕获异常
try{
	const table = await base.getActiveTable();
	const views_meta = await table.getViewMetaList();//返回的views_meta是按顺序的
	const view_id = views_meta[0]['id'] //获取第一个视图的id
	//判断视图名是否重复
	for (let v in views_meta){
		if (view_name==views_meta[v].name){
			alert('当前视图名已存在，请修改后再添加.)
			return ;
		}
	}
	await table.setView(view_id,{name:view_name})
}catch{
	alert('出错啦！检查一下是否在飞书环境里运行呢？')
}
" />
        
        <el-space direction="horizontal">
            <el-input v-model="field_name" placeholder="填写视图名，不填不给修改。" />
            <el-button type="primary" :icon="Pointer" @click="setView(field_name)" />
        </el-space><br>
        <el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br>
        <el-text class="mx-1" type="danger">{{ description }}</el-text>
    </el-collapse-item> 

<el-collapse-item title="deleteView()" name="deleteView">
<highlightjs language='javascript' code="//删除视图请勿在生产环境中使用!!
try{
	const table = await base.getActiveTable();
	const views_meta = await table.getViewMetaList();//返回的views_meta是按顺序的
	const view_id = views_meta[0]['id'] //获取第一个视图的id
	await table.deleteView(view_id);
}
catch{
	alert('删除失败啦！检查一下表里的字段最后一个了，可不能删了啊！')
}         
" />
        
        <el-space direction="horizontal">
            <el-button type="primary" :icon="Pointer" @click="deleteView" />
            <el-text class="mx-1" type="primary">{{ btn_notice }}</el-text><br>
        </el-space><br>
        <el-text class="mx-1" type="danger">{{ description }}</el-text>
    </el-collapse-item> 

</el-collapse>
</el-space>

</template>

<script>
import { bitable,FieldType, ViewType } from '@lark-base-open/js-sdk';
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
            Pointer,
        }
    },
    methods: {
        reset_notice(){
            this.btn_notice="点击按钮获取查看当前代码运行结果";
            this.description="";
        },
        async setTableName(tn){
            if(tn.length==0){
                ElMessage({
                message: '没填表名，修改失败',
                type: 'warning',
            })
            return ;
            }
            try{
                const ids = await base.getSelection();
                const tableId = ids['tableId'];
                this.btn_notice = await base.setTable(tableId,{name:tn})
                this.description = "看看你的表名是否被修改了。"
                
            }catch{
                this.btn_notice = "出错啦！检查一下是否在飞书环境里运行呢？"
            }
        },
        async addFiled(fn){
            const tp = FieldType.SingleSelect;
            const table = await base.getActiveTable();
            if (fn.length == 0){
                this.btn_notice = await table.addField({type:tp}); 
            }else{
                this.btn_notice = await table.addField({type:tp,name:fn}); 
            }  
            this.description = "新增一个字段"+fn+"，并返回了新添加字段的tableId和索引index。一直添加一直爽！但你狼狈删表的样子真帅！";
        },
        async setField(fn){
            if(fn.length==0){
                ElMessage({
                message: '没填字段名，修改失败',
                type: 'warning',
            })
            return ;
            }
            try{
                const table = await base.getActiveTable();
                const fields = await table.getFieldMetaList();
                const field_id = fields[0]['id'] //获取第一个字段的id
                this.btn_notice = await table.setField(field_id,{name:fn})
                this.description = "演示修改的是第一个字段名";
                
            }catch{
                this.btn_notice = "出错啦！检查一下是否在飞书环境里运行呢？"
            }
        },
        async deleteField(){
            try{
                const table = await base.getActiveTable();
                const fields = await table.getFieldMetaList();
                const field_id = fields[1];
                this.btn_notice = await table.deleteField(field_id);
            }
            catch{
                ElMessage({
                message: '删除失败啦！检查一下：①字段上有没有锁 ②是不是只剩下1个字段',
                type: 'warning',
            })
            }         
            this.description = "如果字段上带有小锁，是无法删除的。"
        },
        async addRecord(data){
            const table = await base.getActiveTable();
            const type = FieldType.Text;//指定文本类型
            const field_meta_list = await table.getFieldListByType(type);//获取可直接操作的文本类型field
            const field = field_meta_list[0]; // 选择第一个field
            const res = await table.addRecord({
            fields: {
                [field.id]: data
            }
            });
            this.btn_notice = "返回的记录id："+res;
            this.description = "在这个示例中，我们直接获取了可操作的field对象，这样也可以添加。"
        },
        async addRecords(data){
            const table = await base.getActiveTable();
            const type = FieldType.Text;
            try{
                const fields = await table.getFieldListByType(type);//获取当前表格中的所有文本字段
                const text_field = fields[0];//选取第一个文本字段
                const cell1 = await text_field.createCell(data); //记录1
                const cell2 = await text_field.createCell(data+'2'); //记录2
                this.btn_notice = await table.addRecords([[cell1],[cell2]]);//注意这里是二维数组结构
                this.description = "这里演示了添加两条记录的示例"
            }catch{
                this.description = "如果要正常运行该段代码，你应该确保当前表格中至少有一个字段类型是文本类型。"
            }
        },
        async setRecord(data){
            const table = await base.getActiveTable();
            const type = FieldType.Text;//指定文本类型
            const field_list = await table.getFieldListByType(type);//获取可直接操作的文本类型field
            const field = field_list[0]; // 选择第一个field
            const record_ids = await table.getRecordIdList();
            const record_id_0 = record_ids[0];//获取某一条记录id
            const res = await table.setRecord(record_id_0,
            {
                fields: {
                    [field.id]: data
                }
            });
            this.btn_notice = "修改后的记录id："+res;
            this.description = "在这个示例中，我们直接获取了可操作的field对象，这样也可以添加。"
        },
        async setRecords(data){
            const table = await base.getActiveTable();
            const type = FieldType.Text;//指定文本类型
            const field_list = await table.getFieldListByType(type);//获取可直接操作的文本类型field
            const field = field_list[0]; // 选择第一个field
            const record_ids = await table.getRecordIdList();
            const record_id_0 = record_ids[0];//获取某一条记录id
            const record_id_1 = record_ids[1];//获取某一条记录id
            const res = await table.setRecords([
                //第一条记录
                {
                    recordId: record_id_0,
                        fields: {
                            [field.id]: "第1处"+data
                        }
                    },
                {
                    recordId: record_id_1,
                    fields: {
                        [field.id]: "第2处"+data
                    }
                }
            ]);
            this.btn_notice = "修改后的记录id："+res;
            this.description = "在这个示例中，我们修改了两处Text字段类型的记录，同样的道理，也可以修改其他字段的数据。"
        },
        async deleteRecord(){
            try{
                const table = await base.getActiveTable();
                const record_id_list = await table.getRecordIdList();//返回的record_id_list是无序的！！！
                this.btn_notice = await table.deleteRecord(record_id_list[0]);
            }
            catch{
                ElMessage({
                message: '删除失败啦！检查一下是不是被你删没了。',
                type: 'warning',
            })
            }         
            this.description = "这里是随机删除一条记录！"
        },
        async deleteRecords(rn){
            try{
                const table = await base.getActiveTable();
                const record_id_list = await table.getRecordIdList();//返回的record_id_list是无序的！！！
                this.btn_notice = await table.deleteRecords(record_id_list.slice(0,rn));
            }
            catch{
                ElMessage({
                message: '删除失败啦！检查一下是不是被你删没了。',
                type: 'warning',
            })
            }         
            this.description = "这里也是随机删除"+rn+"条记录。"
        },
        async addView(fn){
            const tp = ViewType.Form;//这里默认增加Form表单视图
            const table = await base.getActiveTable();
			const views = await table.getViewMetaList();
			for (let v in views){
				if (fn==views[v].name){
					ElMessage({
					    message: '当前视图名已存在，请修改后再添加。',
					    type: 'warning',
					})
					return ;
				}
			}
            if (fn.length == 0){
                this.btn_notice = await table.addView({type:tp}); 
            }else{	
                this.btn_notice = await table.addView({type:tp,name:fn}); 
            }  
            this.description = "新增一个视图【"+fn+"】，并返回了新添加视图的tableId和索引index。";
        },
        async setView(fn){
            if(fn.length==0){
                ElMessage({
                message: '没填视图名，修改失败',
                type: 'warning',
            })
            return ;
            }
            try{
                const table = await base.getActiveTable();
                const views_meta = await table.getViewMetaList();//返回的views_meta是按顺序的
                const view_id = views_meta[0]['id'] //获取第一个视图的id
				for (let v in views_meta){
					if (fn==views_meta[v].name){
						ElMessage({
						    message: '当前视图名已存在，请修改后再添加。',
						    type: 'warning',
						})
						return ;
					}
				}
                this.btn_notice = await table.setView(view_id,{name:fn})
                this.description = "代码中返回的views_meta不是按照顺序的。";
                
            }catch{
                this.btn_notice = "出错啦！检查一下是否在飞书环境里运行呢？"
            }
        },
        async deleteView(){
            try{
                const table = await base.getActiveTable();
                const views_meta = await table.getViewMetaList();//返回的views_meta是按顺序的
                const view_id = views_meta[0]['id'] //获取第一个视图的id
                this.btn_notice = await table.deleteView(view_id);
            }
            catch{
                ElMessage({
                message: '删除失败啦！检查一下表里的字段最后一个了，可不能删了啊！',
                type: 'warning',
            })
            }         
            this.description = "其实删除字段/记录/视图的逻辑都是差不多的。"
        },
    }
}
</script>