<template>
    <div id="about">
        <slidebar :title="title"></slidebar>
        <div class="about-block" :class="{'mask':!controllerHide}">
            <img src="http://tva2.sinaimg.cn/crop.518.65.901.901.180/b2f93831jw8evp8z6co3vj21gx0ts4c2.jpg">
            <h4>学习Vue，Vue大法好!</h4>
            <p>by wy</p>
            <p>感谢<a href="https://github.com/gundam1993/zhihu-daily-with-vue">@gundam1993</a></p>
            <p>感谢<a href="https://github.com/axhello">@axhello</a></p>
            <ul>
                <li>
                    <a href="https://github.com/wanfeiyy/me-vue">项目github地址</a>
                </li>
                <li @click= 'showQrcode()' style="font-size:0.4rem;font-weight:bold">欢迎关注公众号,联系我</li>
                <li>喜欢的话</li>
                <li>给一个star好吗</li>
                <li style="color: #FF4B84;"
                >(❤ ω ❤)</li>
            </ul>
            <div class="return">
                <a v-link="'index'">返回</a>
            </div>
        </div>
        <div class="qrcode" :class="{'comment-controller-hide': controllerHide}"></div>
    </div>
</template>
<style lang="scss" scoped>
    .about-block {

        width: 100%;
        text-align: center;
        font-size: .6rem;
        img {
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            margin: 2rem 0 1rem 0;
        }

        p {
            padding: 0 0.5rem;
            margin-top: .2rem;
            a {
                display: inline-block;
            }
        }
        ul {
            margin: 1rem auto;
        }

        li {
            height: 2rem;
            width: 60%;
            line-height: 2rem;
            border-bottom: 1px solid #ccc;
            margin: auto;
            list-style-type: none;
            color: #999;
            user-select: none;
        }

        a {
            display: block;
            color: #2482ab;
            text-decoration: none;
        }

        .return {
            height: 1.2rem;
            line-height: 1.2rem;
            width: 30%;
            border: 1px solid #aaa;
            border-radius: .2rem;
            margin: auto;
            margin-bottom: 1.2rem;
        }

    }
    .qrcode {
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 999;
        top: 40%;
        left: 25%;
        background: url("../../assets/images/common/qrcode.png") no-repeat;
        background-size: 50%;
    }
    .mask {
        background: rgba(0,0,0,.6);
    }

    .comment-controller-hide {
        transform: translateY(100%);
        opacity: 0;
        transition: all 0.5s ease;
    }

</style>
<script>
    import Slidebar from '../../components/slidebar.vue'
    export default{
        data() {
            return {
                title: "关于",
                controllerHide : true
            }
        },
        components: {
            Slidebar
        },
        methods: {
            showQrcode() {
                this.controllerHide = false;
            },

        }

    }
</script>
