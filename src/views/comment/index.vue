<template>
    <div id="comments-page">
        <div class="comments-block" :class="{'short-bg':shortComments===display}">
            <div class="no-long-comment" v-if="!display.length">
                <div>
                    <i class="iconfont icon-weekend" id="icon-weekend"></i>
                    深度评论虚位以待
                </div>
            </div>
                <div class="comment-content-block" v-for="comment in display" :key="comment.id">
                    <div class="comment-author-block">
                        <div class="comment-author-avatar">
                            <img :src="comment.avatar" >
                        </div>
                        <div class="comment-author">{{ comment.author }}</div>
                        <div class="comment-like">
                            <i class="iconfont icon-like"></i>
                            <span>{{ comment.likes }}</span>
                        </div>
                    </div>
                    <div class="comment-content">
                        {{ comment.content }}
                        <p v-if="comment.reply_to">@
                            <span>
                        {{ comment.reply_to.author }}
                             </span>
                            :
                            {{ comment.reply_to.content }}
                        </p>
                    </div>
                    <div class="comment-time" v-html="comment.time"></div>
                </div>

        </div>

        <div id="comment-controller"  :class={'comment-controller-hide':ControllerHide}
             v-el:controller-btn
        >
            <div class="comment-length">
                <span v-if="display === longComments">{{ longComments.length }}条长评</span>
                <span v-if="display === shortComments">{{ shortComments.length }}条短评</span>
            </div>
            <div class="commit-toggle-btn"
                 @click="toggleComment()">{{ longComments == display ? '看短评':'看长评'}}
            </div>
        </div>
    </div>
</template>

<script>
    import {setCommentId,setCommentReady} from "../../vuex/action";
    import {getCommentId} from "../../vuex/getters"
    export default{
        data() {
            return {
                display: [],
                longComments: [],
                shortComments: [],
                ControllerHide: false,
                scrollY:0
            }
        },
        vuex: {
            getters: {
                getCommentId
            },
            actions: {
                setCommentId
            }
        },
        methods: {
            clearStyle() {
                var style = document.getElementById('storyCss');
                if (style) {
                    style.remove();
                }
            },
            setWatchId() {
                var id = this.$route.params.commentId;
                console.log(id);
                console.log(11111);
                this.setCommentId(id);
            },
            fixImageUrl(comments) {
                comments.forEach(function (entry) {
                    entry.avatar = entry.avatar.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
                });
            },
            fixTime(comments) {
                comments.forEach(function (entry) {
                    var date = new Date(parseInt(entry.time) * 1000);
                    entry.time = (date.getMonth() + 1) + "-" + (date.getDate()) +" " + (date.getHours()) + ":" + (date.getMinutes());
                })
            },
            toggleComment() {
                this.display === this.longComments ? this.display = this.shortComments : this.display = this.longComments;
            },
            toggleController() {
                if (window.scrollY >= this.scrollY && this.$els.controllerBtn.className === "") {
                    this.ControllerHide = true;
                } else if (window.scrollY < this.scrollY && this.$els.controllerBtn.className === "comment-controller-hide") {
                    this.ControllerHide = false;
                };
                this.scrollY = window.scrollY;
            }

        },
        attached() {
            this.setWatchId();
            this.clearStyle();
            const longCommentSource = "/api/4/story/" + this.getCommentId + "/long-comments",
                  shortCommentSource = "/api/4/story/" + this.getCommentId + "/short-comments";
            this.$http.get(longCommentSource).then(function (response) {
                this.fixImageUrl(response.body.comments);
                this.fixTime(response.body.comments);
                this.longComments = response.body.comments;
                this.display = this.longComments;

            });
            this.$http.get(shortCommentSource).then(function (response) {
                this.fixImageUrl(response.body.comments);
                this.fixTime(response.body.comments);
                this.shortComments = response.body.comments;

            });
            window.onscroll = this.toggleController.bind(this);
        },
//        beforeDestroy() {
//            window.onscroll = "";
//        },
        route:{
            activate() {
                window.onscroll = '';
                this.ControllerHide = false;
            }
        }

    }
</script>

<style lang="scss" scoped>
    .short-bg {
        background: rgba(255,72,132,.3) !important;
    }
    #comments-page {
        width: 100%;
        height: 100%;
        background-color: #fff;
        padding: 0.5rem 0;
        box-sizing: border-box;
        font-family: 'Helvetica Neue', Helvetica, Arial, Sans-serif;
    }

    .comments-block{
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        transition: all 0.3s ease-in-out;

    }

    .comment-content-block {
        width: 100%;
        background-color: #FFF;
        /* margin: 0.5rem 0; */
        box-sizing: border-box;
        position: relative;
        padding: 0 0.2rem;
        margin-bottom: 0.2rem;
        font-family: Helvetica Neue,Helvetica,Arial,Sans-serif;

        .comment-author-block {
            height: 1.6rem;
            width: 100%;
            border-bottom: 1px solid #333;
            position: relative;

            .comment-author-avatar {
                height: 1.1rem;
                width: 1.1rem;
                border-radius: 1rem;
                margin: 0 0.4rem;
                position: absolute;
                top: .2rem;
                left: 0;

                img {
                    height: 100%;
                    width: 100%;
                    vertical-align: bottom;
                    object-fit: cover;
                    border-radius: 1rem;
                }
            }

            .comment-author {
                height: 1.2rem;
                line-height: 1.2rem;
                font-size: 0.5rem;
                font-weight: 700;
                position: absolute;
                top: 0.2rem;
                left: 2rem;
            }

            .comment-like {
                width: 1.2rem;
                height: 1rem;
                line-height: 1.2rem;
                text-align: left;
                font-size: 0.5rem;
                color: #666;
                position: absolute;
                top: 0.2rem;
                right: 0.5rem;
            }
        }
    }

    .comment-content {
        font-size: 0.45rem;
        font-weight: light;
        padding: 0.2rem 0.5rem;
        text-align: left
    }

    .comment-time {
        text-align: right;
        font-size: 0.45rem;
        color: #999;
        margin-bottom: 0.5rem;
    }
    .no-long-comment {
        height: 100%;
        color: #999;
        margin: calc(50% - 4rem);

        .iconfont {
            display: block;
            font-size: 6rem;
            text-align: center;
        }
    }

    #comment-controller {
        width: 100%;
        height: 1.5rem;
        position: fixed;
        bottom: 0;
        left: 0;
        background-color: #FFF;
        border-top: 1px solid #ccc;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;

        span{
            font-family: cursive;
            font-size: 0.7rem;
        }

        .comment-length {
            font-weight: lighter;
            height: 1.5rem;
            line-height: 1.5rem;
            margin-left: .7rem;
            user-select: none;
        }

        .commit-toggle-btn {
            font-size: 0.5rem;
            height: 1rem;
            line-height: 1rem;
            padding: 0 0.5rem;
            background-color: #FF4B84;
            color: #FFF;
            box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.6);;
            position: absolute;
            right: 0.5rem;
            top: 0.27rem;
            border-radius: .2rem;
        }

    }
    .comment-controller-hide {
        transform: translateY(100%);
        opacity: 0;
        transition: all 0.5s ease;
    }
</style>