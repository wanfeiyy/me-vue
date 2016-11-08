<template>
    <div id='zhi-list'>
        <span v-if="date">{{date}}</span>
        <div class="daily-story-block" v-for="(index,item) in stories" @click="getContent(item.id)">
            <h4 class="daily-story-title"  v-if ="item.images">{{item.title}}</h4>
            <h4 class="daily-story-without-title" v-else>{{item.title }}</h4>
            <div class="daily-story-pic" v-if = "item.images">
                <img :src="item.images[0] |fixed" alt="">
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    #zhi-list {
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
            .daily-story-without-title {
                display: block;
                text-align: left;
                width: 90%;
                font-size: .4rem
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
    import store from '../vuex/store'
    import {setArticleId} from  '../vuex/action'
    export default {
        data() {
            return {
                show: false,
                documentHeight:0
            }
        },
        vuex: {
          actions: {
              setArticleId
          }
        },
        methods: {
          getContent(id) {
              this.setArticleId(id)
              this.$router.go('/story/' + id);
          },
          getInnerHeight() {
              console.log(this.$els);
          },
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
                default() {
                    return '次元要闻！'
                }
            }
        },
        route:{
            data: function (transition) {
                transition.next({
                })
            }
        }
    }

</script>
