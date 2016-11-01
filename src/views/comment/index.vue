<template>
    <div id="comments-page">
        <div class="comments-block">
            <div class="no-long-comment" v-if="!display.length">
                <div>
                    <i class="iconfont icon-weekend" id="icon-weekend"></i>
                    深度评论虚位以待
                </div>
            </div>
            <div class="comment-content-block" v-for="comment in display">
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
                        <p v-if="comment.reply_to">//
                            <span>
            {{ comment.reply_to.author }}
            </span>
                            :
                            {{ comment.reply_to.content }}</p>
                    </div>
                    <div class="comment-time" v-html="comment.time"></div>
                </div>
            </div>
        </div>
        </div>


        <div id="comment-controller">
            <div class="comment-length">
                <span >0条长评</span>
            </div>
            <div class="commit-toggle-btn"
                 @click="toggleComment()">看短评</div>
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

    }
</script>

<style lang="scss" scoped>
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
        margin: 0.5rem 0;
        box-sizing: border-box;
        position: relative;
        padding: 0 0.5rem;

        .comment-author-block {
            height: 2rem;
            width: 100%;
            border-bottom: 1px solid #333;
            position: relative;

            .comment-author-avatar {
                height: 1.5rem;
                width: 1.5rem;
                border-radius: 1rem;
                margin: 0.2rem 0.4rem;
                position: absolute;
                top: 0;
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
                height: 2rem;
                line-height: 2rem;
                font-size: 0.5rem;
                font-weight: bold;
                position: absolute;
                top: 0;
                left: 2.5rem;
            }

            .comment-like {
                width: 2rem;
                height: 2rem;
                line-height: 2rem;
                text-align: left;
                font-size: 0.5rem;
                color: #666;
                position: absolute;
                top: 0;
                right: 0.5rem;

            }
        }
    }

    .comment-content {
        font-size: 0.8rem;
        font-weight: light;
        padding: 0.2rem 0.8rem;
        text-align: left;
        span {
            color: #0089A7;
        }
    }

    .comment-time {
        text-align: right;
        font-size: 0.7rem;
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
</style>