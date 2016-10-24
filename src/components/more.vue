<template>
    <div @click="loadingCiyuanData" class="more-button"> 获取更多次元日报 </div>
</template>
<style>
    .more-button {
        width: 4rem;
        height: .8rem;
        color: #FF4B84;
        border: 1px solid ;
        border-radius: .3rem;
        margin: 0.2rem auto;
        text-align: center;
        line-height: .8rem;
        font-size: .4rem;
        cursor: pointer;
        box-shadow: .06rem .02rem .06rem .02rem;
    }

</style>
<script>
    export default {
        methods: {
            loadingCiyuanData () {
                alert(1)
            }
        }
    }
</script>
