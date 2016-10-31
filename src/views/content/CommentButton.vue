<template>
    <div id="comment-controller">
        <div id="comment-controller-btn-big"
             :class="{'comment-controller-rotate': !hide, 'comment-controller-hide': controllerHide}"
             ref = "controllerBtn"
             @click='toggleMenu'>
            <i class="iconfont icon-jiahao"></i>
        </div>
        <div class="page-controller-memu" :class="{'comment-controller-hide': hide}">
            <ul>
                <li>
                    <div class="page-controller-text">赞同数：{{comment.popularity}}</div>
                    <div class="page-controller-btn-small"
                         >
                        <i class="iconfont icon-plusone"></i>
                    </div>
                </li>
                <li>
                    <div class="page-controller-text">评论数：{{comment.comments}}</div>
                    <div class="page-controller-btn-small" >
                        <i class="iconfont icon-comment"></i>
                    </div>
                </li>
            </ul>
        </div>
        <mask :mask_show=!hide :style=style></mask>
    </div>
</template>
<style lang="scss" scoped>
    i {
        font-size: .7rem;
    }
    .icon-jiahao:before {
        content: "\E603";
    }
    #comment-controller-btn-big {
        position: fixed;
        right: 0.5rem;
        bottom: 0.5rem;
        height: 1.3rem;
        width: 1.3rem;
        text-align: center;
        line-height: 1.2rem;
        border-radius: 1.5rem;
        color: #FFF;
        background-color: #FF4B84;
        box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.6);
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        z-index: 1000;
    }
    .page-controller-memu {
        position: fixed;
        bottom: 2.1rem;
        right: 0.6rem;
        z-index: 100;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        -webkit-transform: translateY(0%);
        transform: translateY(0%);

        li {
            list-style: none;
            text-align: right;

            .page-controller-text {
                height: 1rem;
                font-size: 0.45rem;
                font-weight: 700;
                background-color: #FFF;
                border-radius: 0.1rem;
                text-align: center;
                line-height: 1rem;
                display: inline-block;
                padding: 0.1rem 0.3rem 0 .3rem;
                box-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.4);
                margin: 0.5rem 0 0.2rem 0.2rem;
            }

            .page-controller-btn-small {
                height: 1.1rem;
                width: 1.1rem;
                display: inline-block;
                background-color: #FFF;
                border-radius: 50%;
                text-align: center;
                line-height: 1.1rem;
                box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.4);
                margin: 0.5rem 0 0.2rem 0.2rem;
                -webkit-transition: all 0.3s ease-in-out;
                transition: all 0.3s ease-in-out;
            }

        }
    }
    .comment-controller-hide {
        transform: translateY(200%);
        opacity: 0;
        transition: all 0.5s ease;
    }

    .page-controller-mask-hide {
        opacity: 0;
        transform: translateY(100%);
        transition: all 0.3s ease;
    }

    .comment-controller-agreed {
        color: #FFB11B;
    }

    .comment-controller-rotate {
        transform: rotate(135deg);
        box-shadow: 0.1rem 0 0.3rem rgba(0, 0, 0, 0.6);
    }

</style>
<script>
    import Mask from '../../components/mask.vue'
    export default {
        data() {
          return {
            hide: true,
            controllerHide: false,
            style: "background: hsla(0,0%,100%,.6); z-index: 10",
            scrollY: 0
          }
        },
        components: {
          Mask
        },
        props: {
          comment: {
            type: Object,
            default() {
                return {}
            }
          }
        },
        methods: {
           toggleMenu() {
               this.hide = !this.hide
           },
        showBtn(res) {
            console.log(this)
            if (window.scrollY >= this.scrollY && this.$refs.className === '') {
                this.controllerHide = true;
            } else if (window.scrollY < this.scrollY && this.$refs.controllerBtn.className === "commnet-controller-hide") {
                this.controllerHide = false;
            }
            this.scrollY = window.scrollY;
           }
        },
        attached() {
          window.onscroll = this.showBtn.bind(this);
        },
        beforeDestroy() {
            window.onscroll = "";
        },
    }
</script>
