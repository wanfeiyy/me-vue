<template>
    <div id="about">
        <slidebar :title="title"></slidebar>
        <div @click='showQrcode()' class='mask' :class="{'comment-controller-hide': controllerHide}"></div>
        <div id="about-block" class="about-block">
            <img src="../../assets/images/common/avatr.jpg">
            <h4>学习Vue，Vue大法好!</h4>
            <p>by WY</p>
            <p>感谢<a href="https://github.com/gundam1993/zhihu-daily-with-vue">@gundam1993</a></p>
            <p>感谢<a href="https://github.com/axhello">@axhello</a></p>
            <ul>
                <li>
                    <a href="https://github.com/wanfeiyy/me-vue">项目github地址</a>
                </li>

                <li @click='showQrcode()' style="font-size:0.4rem;font-weight:bold">欢迎关注公众号,联系我</li>
                <li>喜欢的话</li>
                <li>给一个star好吗</li>
                <li style="color: #FF4B84;"
                >(❤ ω ❤)</li>
            </ul>
            <div class="return">
                <a v-link="'index'">返回</a>
            </div>
        </div>
        <div v-el:btn class="qrcode" :class="{'comment-controller-hide': controllerHide}"></div>
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
        top: 0;
        left: 25%;
        background: url("../../assets/images/common/qrcode.png") no-repeat;
        background-size: 50%;
        transition: all 0.8s ease-in-out;
        -webkit-transform: translateY(40%);
        transform: translateY(40%);
    }

    .mask {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 998;
    }

    .comment-controller-hide {
        transform: translateY(100%);
        opacity: 0;
        transition: all 0.5s ease-in-out;

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
            func() {
               event.preventDefault();
            },
            showQrcode() {
                this.controllerHide = !this.controllerHide;
                if (this.$els.btn.className == 'qrcode comment-controller-hide') {
                    document.addEventListener('touchmove',this.func)
                } else {
                    document.removeEventListener('touchmove',this.func)
                }
            },
        }
    }
</script>
