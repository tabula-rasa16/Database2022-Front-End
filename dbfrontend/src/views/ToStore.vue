<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="1300px">
        <el-col :sm="20" :lg="10">
          <el-result
            icon="warning"
            title="请注意是否有快件尚未入库！"
            sub-title="请查看信息并操作。"
          >
          </el-result>
        </el-col>
      </el-aside>
      <el-main class="text1"> 考虑再搞一张图片或其他填充</el-main>
    </el-container>
  </div>

  <!-- <el-radio-group v-model="size">
    <el-radio label="large">Large</el-radio>
    <el-radio>Default</el-radio>
    <el-radio label="small">Small</el-radio>
  </el-radio-group> -->

  <el-descriptions
    class="margin-top"
    title="快件信息"
    :column="3"
    :size="size"
    border
  >
    <template #extra>
       <el-button type="primary">入库</el-button>
       <el-button type="primary">退回</el-button>
    </template>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <user />
          </el-icon>
          Username
        </div>
      </template>
      kooriookami
    </el-descriptions-item>

    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <iphone />
          </el-icon>
          TelephoneNumber
        </div>
      </template>
      18100000000
    </el-descriptions-item>

    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <location />
          </el-icon>
          Location
        </div>
      </template>
      Suzhou
    </el-descriptions-item>

    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <tickets />
          </el-icon>
          Remarks
        </div>
      </template>
      urgent
      <!-- <el-tag size="small">School</el-tag> -->
    </el-descriptions-item>
    
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <office-building />
          </el-icon>
          Address
        </div>
      </template>
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </el-descriptions-item>
  </el-descriptions>

 <el-descriptions
    class="margin-top"
    title="快件信息"
    :column="3"
    :size="size"
    border
  >
    <template #extra>
      <el-button type="primary">入库</el-button>
      <el-button type="primary">退回</el-button>
    </template>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <user />
          </el-icon>
          Username
        </div>
      </template>
      kooriookami
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <iphone />
          </el-icon>
          TelephoneNumber
        </div>
      </template>
      18100000000
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <location />
          </el-icon>
          Location
        </div>
      </template>
      Suzhou
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <tickets />
          </el-icon>
          Remarks
        </div>
      </template>
      urgent
      <!-- <el-tag size="small">School</el-tag> -->
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <office-building />
          </el-icon>
          Address
        </div>
      </template>
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </el-descriptions-item>
  </el-descriptions>

 <el-descriptions
    class="margin-top"
    title="快件信息"
    :column="3"
    :size="size"
    border
  >
    <template #extra>
      <el-button type="primary">入库</el-button>
      <el-button type="primary">退回</el-button>
    </template>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <user />
          </el-icon>
          Username
        </div>
      </template>
      kooriookami
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <iphone />
          </el-icon>
          TelephoneNumber
        </div>
      </template>
      18100000000
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <location />
          </el-icon>
          Location
        </div>
      </template>
      Suzhou
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <tickets />
          </el-icon>
          Remarks
        </div>
      </template>
      urgent
      <!-- <el-tag size="small">School</el-tag> -->
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <office-building />
          </el-icon>
          Address
        </div>
      </template>
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </el-descriptions-item>
  </el-descriptions>

 <el-descriptions
    class="margin-top"
    title="快件信息"
    :column="3"
    :size="size"
    border
  >
    <template #extra>
       <el-button type="primary">入库</el-button>
       <el-button type="primary">退回</el-button>
    </template>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <user />
          </el-icon>
          Username
        </div>
      </template>
      kooriookami
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <iphone />
          </el-icon>
          TelephoneNumber
        </div>
      </template>
      18100000000
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <location />
          </el-icon>
          Location
        </div>
      </template>
      Suzhou
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <tickets />
          </el-icon>
          Remarks
        </div>
      </template>
      urgent
      <!-- <el-tag size="small">School</el-tag> -->
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <office-building />
          </el-icon>
          Address
        </div>
      </template>
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </el-descriptions-item>
  </el-descriptions>


</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import {
  Iphone,
//   Location,
  OfficeBuilding,
  Tickets,
  User,
} from '@element-plus/icons-vue'
const size = ref('')
const iconStyle = computed(() => {
  const marginMap = {
    large: '8px',
    default: '6px',
    small: '4px',
  }
  return {
    marginRight: marginMap[size.value] || marginMap.default,
  }
})
</script>

<style lang="scss">
.text1 {
   text-align: left;
   margin: auto;
   font-size: 16px;
   color: #e51a80;
}
.el-descriptions {
  margin-top: 20px;
}
.cell-item {
  display: flex;
  align-items: center;
}
.margin-top {
  margin-top: 20px;
}
</style>
