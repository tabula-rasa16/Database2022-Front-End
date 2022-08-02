
<!-- 头部组件先随便放了几个撑一下，之后再改 -->
<template>
  <div>
    <el-row>
      <el-col :span="24">
        <ul>
          <li>
            <el-link :underline="false"> 注销</el-link>
          </li>
          <li>
            <el-link :underline="false"> 个人中心 </el-link>
          </li>
          <el-col :span="16">
            <div class="demo-basic--circle">
              <div class="block">
                <el-avatar :size="30" :src="circleUrl" />
              </div>
              <div v-for="size in sizeList" :key="size" class="block">
                <el-avatar :size="size" :src="circleUrl" />
              </div>
            </div>
          </el-col>
          <!-- <li>
                <el-link :underline="false"> ZhangSan </el-link>
            </li>
            <li>
                <el-link :underline="false" href="/personcenter"> personcenter </el-link>
            </li>
            <li>
                <el-link :underline="false"> log out</el-link>
            </li> -->
        </ul>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-link :underline="false" href="/">
          <span class="text0">可以放个图</span>
        </el-link>
      </el-col>
      <el-col :span="8">
        <el-input
          v-model="input"
          placeholder="Search for ..."
          class="w-50 m-2"
          size="large"
          :prefix-icon="Search"
        />
      </el-col>
      <el-col :span="8">
        <div class="service-item">
          <el-icon class="icons"><PhoneFilled /></el-icon>
          <a id="header-chat" href="javascript:void(0);">
            <!-- <span class = "icon icon-headset"><el-icon><PhoneFilled /></el-icon></span> -->
            <span class="service-item-info">在线客服</span>
          </a>
        </div>
      </el-col>
    </el-row>
  </div>
</template>


<script setup>
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
const input = ref("");
</script>

<style lang="scss">
ul {
  list-style: none;
  padding-left: 80%;
  li {
    float: left;
    margin-left: 20px;
  }
}
.text0 {
  display: inline-block;
  font-size: 16px;
  color: #71797f;
  vertical-align: top;
  line-height: 20px;
  margin-top: 5px;
  margin-left: -200px;
}
.service-item {
  display: inline-block;
  font-size: 16px;
  color: #397bac;
  vertical-align: top;
  line-height: 20px;
  margin-top: 5px;
  margin-left: -200px;
  a {
    text-decoration: none;
    color: inherit;
  }
  // .icon-headset
  // {
  //     background-position: -34px -103px;
  //     width: 48px;
  //     height: 48px;
  //     margin-top: 12px;
  //     margin-right: 9px;
  //     display: inline-block;
  //     background-repeat: no-repeat;
  //     vertical-align: top;
  // }
  .icons {
    font-size: 16px;
    color: #397bac;
  }
}
</style>