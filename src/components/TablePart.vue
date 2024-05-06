<template>
<el-collapse accordion>
    <el-text class="mx-1" type="primary" tag="p">
    在这一章里，我们将自动获取当前表格的id,然后再进行操作。
    建议您先观看Base区里的内容。
    </el-text>

    <el-collapse-item title="P1 Base级表格操作">
        <p1/>
    </el-collapse-item>

    <el-collapse-item title="P2 Table级数据获取">
        <p2/>
    </el-collapse-item>

    <el-collapse-item title="P3 Table级数据修改">
        <p3/>
    </el-collapse-item>

</el-collapse>
    
</template>

<script>
import p1 from './TableP1.vue';
import p2 from './TableP2.vue';
import p3 from './TableP3.vue';
export default{
    components:{
        p1,
        p2,
        p3
    }
}


</script>