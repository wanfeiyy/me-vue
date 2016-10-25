<template>
    <div class='zhi-list'>
        <span>{{date}}</span>
        <div class="daily-story-block" v-for="item in stories">
            <h4 class="daily-story-title"  v-if ="item.images">{{item.title}}</h4>
            <h4 class="daily-story-without-title" v-else>{{item.title }}</h4>
            <div class="daily-story-pic" v-if = "item.images">
                <img :src="item.images[0]" alt="">
            </div>
        </div>
        <more v-if="getMoreButtonState"></more>
    </div>
</template>
<style lang="scss" scoped>
    .zhi-list {
        width: 100%;
        height: 100%;
        padding-top: 0.6rem;
        background-color: #eee;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        span {
            font-size: .8rem;
            color: #FF4B84;
            font-weight: lighter;
            display: block;
            width: 90%;
            user-select: none;
            border-bottom: 1px solid;
        }

        .daily-story-block {
            background: rgba(255,220,230,0.3) !important;
            width: 90%;
            padding: 0.2rem;
            margin: 0.2rem 0;
            border: 1px solid #ccc;
            box-shadow: 0.05rem 0.05rem 0.1rem #ccc;
            box-sizing: border-box;
            position: relative;
            -webkit-transition: all 0.2s ease;
            transition: all 0.2s ease;

            .daily-story-title {
                display: block;
                text-align: left;
                width: 65%;
                display: block;
                float: left;
                font-size: .4rem
            }
            .daily-story-title-without {
                display: block;
                text-align: left;
                width: 90%;
            }
            .daily-story-pic {
                height: 1.8rem;
                width: 1.8rem;
                float: right;
                position: relative;
                img {
                    height: 100%;
                    width: 100%;
                }
            }
        }
    }
</style>
<script>
    import  '../vuex/store'
    import {moreButtonState} from '../vuex/action'
    import {getMoreButtonState} from '../vuex/getters'
    import More from '../views/home/more.vue'
    export default {
        vuex: {
            getters: {
                getMoreButtonState
            }
        },
        components: {
           More
        },
        props: {
            stories: {
                type: Array,
                default : function () {
                    return []
                }
            },
            date: {
                type: String,
                default () {
                    return '今日要闻'
                }
            }
        }
    }

</script>
