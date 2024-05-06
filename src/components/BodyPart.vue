<template>
	<el-tabs type="border-card">
	  
		<el-tab-pane label="Base">
		  <basepart/>
		</el-tab-pane>

		<el-tab-pane label="Table">
		  <tablepart/>
		</el-tab-pane>

		<el-tab-pane label="View">
		  <viewpart/>
		</el-tab-pane>

		<el-tab-pane label="Field">
		  <fieldpart/>
		</el-tab-pane>

		<el-tab-pane label="Cell">
		  <cellpart/>
		</el-tab-pane>

		<el-tab-pane label="Bridge">
		  <bridgepart/>
		</el-tab-pane>

		<el-tab-pane label="UI">
		  <uipart/>
		</el-tab-pane>

	</el-tabs>
</template>

<script>
import basepart from './BasePart.vue'
import tablepart from './TablePart.vue'
import viewpart from './ViewPart.vue'
import fieldpart from './FieldPart.vue'
import cellpart from './CellPart.vue'
import bridgepart from './BridgePart.vue'
import uipart from './UIPart.vue'

export default {
	components :{ 
	  basepart,
	  tablepart,
	  viewpart,
	  fieldpart,
	  cellpart,
	  bridgepart,
	  uipart
	}
}
</script>