<template>
    <div id="bottom" class="ft">
        <div class="ft-container">
        <div class="ft-navigator">
            <a href="/">首页</a>
            <a href="https://www.baidu.com/" target="blank">关于我们</a>
            <a href="https://www.baidu.com/" target="blank">使用条款</a>
            <a href="https://sse.tongji.edu.cn/" target="blank">同济大学软件学院</a>
            <a href="https://www.baidu.com/" target="blank">友情链接</a>
        </div>
        <div class="ft-link">
            <a href="https://www.baidu.com/" target="_blank">ABCD</a>
            <a href="https://www.baidu.com/" target="_blank">ABCD</a>
            <a href="https://www.baidu.com/" target="_blank">ABCD</a>
            <a href="https://www.baidu.com/" target="_blank">ABCD</a>
        </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
#bottom{
    font-size: 0;
    background-color: #181f23;
    .ft-container{
        width: auto;
        height: auto;
        margin: 15px;
        padding: 25px 0 15px;
        .ft-navigator{
            a{
                text-align: center; 
                display: inline-block;
                font-size: 14px;
                line-height: 14px;
                color: #fff;
            }
            a + a{ 
                padding-left: 28px;
                margin-left: 33px;
                border-left: 1px solid #fff;
            }
        }
        .ft-link{
            margin-top:20px;
            span{
                font-size: 14px;
                line-height: 14px;
                margin-right: auto;
                margin-bottom: auto;
                font-weight: bold;
                color: #71797f;
            }
            a{
                font-size: 14px;
                line-height: 14px;
                color: #71797f;
                margin: 0 15px;
            }
        }
    }
}
</style>
