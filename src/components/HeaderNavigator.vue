<template>
    <el-space direction="horizontal">
      
      <el-input v-model="input" style="width: 200px" placeholder="搜索你想要的功能" />
      <el-button type="primary" :icon="Search"></el-button>
      <el-button type="primary" :icon="QuestionFilled" />
      <el-button @click="share" type="primary" :icon="Share"/>
    </el-space>
</template>
<script>
import { QuestionFilled, Search, Share} from '@element-plus/icons-vue'
import { ElMessage,ElButton } from 'element-plus'

export default{
  data(){
    return{
      input:"",
      QuestionFilled,
      Search,
      Share
    }
  },
  components:{
    ElButton
  },
  methods:{
    share(){
        ElMessage({
        message: '感谢分享',
        type: 'success',
      })
    }
  }
}
</script>