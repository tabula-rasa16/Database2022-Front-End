<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="400px">
        <el-col :sm="40" :lg="20">
          <el-result
            icon="warning"
            title="请注意是否有快件尚未入库！"
            sub-title="请查看信息并操作。"
          >
          </el-result>
        </el-col>
      </el-aside>
      <el-main >
        <el-carousel :interval="4000" type="card" height= "200px" indicator-position="none">
          <el-carousel-item v-for="item in images" :key="item">
          <el-link target="_blank">
          <el-image :src="item.imageUrl"></el-image>
          </el-link>
          </el-carousel-item>
        </el-carousel>
      </el-main>
    </el-container>
  </div>

  <div>
    <!-- 表格  @click代表点击事件--可以联系调用接口处理 发送取件通知按钮在本页面默认是灰的，在“已入库”的对应页面可以点击。  -->

    <el-table
      :data="
        tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
      style="width: 100%"
    >
      <el-table-column prop="number" label="单号" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="telenumber" label="联系方式" width="180">
      </el-table-column>
      <el-table-column prop="address" label="收货地址" width="320">
      </el-table-column>
      <!-- <el-table-column prop="else" label="其他需要属性"> </el-table-column> -->
      <el-table-column prop="state" label="包裹状态"> </el-table-column>
      <el-table-column label="Operations">
        <template #default="scope">
          <el-button size="default" @click="handleEdit(scope.$index, scope.row)"
            >签收</el-button
          >
          <el-button
            size="default"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >
            退回</el-button
          >
          <el-button
            size="default"
            @click="handleSend(scope.$index, scope.row)"
            disabled
            >发送通知</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页器 -->
    <div class="block" style="margin-top: 15px">
      <el-pagination
        align="center"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 20]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length"
      >
      </el-pagination>
    </div>
  </div>
</template>
 
<script setup>
import { ref } from 'vue';
const images = ref();
images.value=[
    {
        "imageUrl":"/images/deliverytest.jpg"
    },
     {
        "imageUrl":"/images/deliverytest2.jpg"
    },
     {
        "imageUrl":"/images/deliverytest3.jpg"
    }
]
</script>

<script>
export default {
  data() {
    return {
      tableData:[],
      /*
      tableData: [
        {
          date: "2022-07-09",
          number: "1333333333",
          name: "第一页",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2022-07-09",
          number: "1333333333",
          name: "第二页",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2022-07-09",
          number: "1333333333",
          name: "第三页",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2022-07-09",
          number: "1333333333",
          name: "第四页",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2022-07-09",
          number: "1333333333",
          name: "第五页",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2022-07-09",
          number: "1333333333",
          name: "第六页",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2022-07-09",
          number: "1333333333",
          name: "第六页",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2022-07-09",
          number: "1333333333",
          name: "第六页",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2022-07-09",
          number: "1333333333",
          name: "第六页",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2022-07-09",
          number: "1333333333",
          name: "第六页",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2022-07-09",
          number: "1333333333",
          name: "第六页",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2022-07-09",
          number: "1333333333",
          name: "第六页",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2022-07-09",
          number: "1333333333",
          name: "第六页",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],*/
      currentPage: 1, // 当前页码
      total: 20, // 总条数
      pageSize: 5, // 每页的数据条数
      //这里应该是读取数据的方法，返回的数据格式类似上面写死的数据
    };
  },
  mounted(){
    /*this.axios.get("http://localhost:3000/package")
       .then( res=>{
        this.tableData=res.data;
        console.log(res)
       }*/
       this.axios.get("https://localhost:44365/api/Test/Get")
       .then( res=>{
        this.tableData=res.data;
        console.log(res)
       }
       )
  },
  methods: {
    //获取接口数据
    getdata(){
       this.axios.get("http://localhost:3000/package")
       .then( res=>{
        console.log(res)
       }
       )
    },
    //每页条数改变时触发 选择一页显示多少行
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.currentPage = 1;
      this.pageSize = val;
    },
    //当前页改变时触发 跳转其他页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
    //这里切换页面不用动
  },
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
