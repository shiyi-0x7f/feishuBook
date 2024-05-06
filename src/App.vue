<template>
  <div class="common-layout">
    <el-container >
	  <el-switch
		  v-model="state"
		  class="mt-2"
		  style="margin-left: 24px"
		  inline-prompt
		  :active-icon="Sunny"
		  :inactive-icon="Moon"
		  @change="setTheme"
		/>
        <el-header><headerNav/></el-header>
          <el-main>
            <bodypart/>
          </el-main>
        <el-footer>
          Copyright © <a href="https://11xy.cn" target="_blank" rel="noopener noreferrer">拾壹0x7f</a>
          <br>
          Copyright © feishu
        </el-footer>
      </el-container>
    </div>
</template>

<script>
import { ElContainer } from 'element-plus'
import { Sunny,Moon } from '@element-plus/icons-vue'
import { bitable } from '@lark-base-open/js-sdk'
import bodypart from './components/BodyPart.vue'
import headerNav from './components/HeaderNavigator.vue'

const ui = bitable.ui;
const bridge = bitable.bridge;
export default {
	data() {
	    return {
			state:false,
	        theme:{
			  'LIGHT': {
				'--el-color-primary': 'rgb(20, 86, 240)',
				'--el-bg-color': '#fff',
				'--el-border-color-lighter': '#dee0e3',
				}
			  },
			Sunny,
			Moon
	    }
	},
	components:{ 
		ElContainer,
		bodypart,
		headerNav
	},
	methods:{
		setTheme(){
		}
	}
}
</script>

<style>

</style>