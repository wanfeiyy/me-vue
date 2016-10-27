<template>
    <div id='article-show'>
        <loading :show="show" :style='loading_style'></loading>
        <mask :mask_show = "show" :style="mask_style"></mask>
        <div v-show="readyState">
            <div>
                <div class="title-container" v-if="content.image">
                    <img :src="content.image" alt="">
                    <h3>{{ content.title }}</h3>
                    <span>{{ content.image_source }}</span>
                </div>
                <div class="story-recommenders" v-if="content.recommenders">
                    <span>推荐者</span>
                    <div class="story-recommenders-avatar"
                         v-for="recommender in content.recommenders">
                        <img :src="recommender.avatar">
                    </div>
                </div>
                <div v-html="content.body"></div>
            </div>
            <div class="story-section" v-if="content.section">
            </div>

        </div>
    </div>
</template>
<style type="text/css">
    .img-place-holder {
        display: none;
    }
</style>
<style lang="scss" scoped>
    #story-display {
        background-color: #eee;
    }
    .title-container {
        width: 100%;
        height: 9rem;
        position: relative;
        img {
            width: 100%;
            height: 100%;
            vertical-align: bottom;
            object-fit: cover;
            object-position: center;
        }
        h3 {
            color: #fff;
            position: absolute;
            left: .5rem;
            bottom: .5rem;
            font-size: .5rem;
        }
        span {
            position: absolute;
            right: .2rem;
            bottom: .3rem;
            font-size: .3rem;
            color: #fff;
        }
    }




</style>
<script>
    import store from '../../vuex/store'
    import Loading from '../../components/loading.vue'
    import Mask from '../../components/mask.vue'
    import {getArticleId} from '../../vuex/getters'
    import {setArticleReady,setArticleId} from  '../../vuex/action'
    export default {
        data () {
            return {
                content: {},
                extra: {},
                readyState: false,
                show: false,
                mask_style: {
                  background:'rgba(0,0,0,.2)'
                },
                loading_style: {
                  margin: '-25px 0 0 -50px !imporant'
                }

            }
        },
        vuex: {
          getters: {
            getArticleId
          },
          actions: {
            setArticleReady,setArticleId
          }
        },
        components: {
          Loading,Mask
        },
        ready () {
            //初始化1次
        },
        methods: {
            loadCss (src) {
                var link = document.createElement('link');
                link.type = "text/css";
                link.rel = "stylesheet";
                link.href = src;
                link.id = "storyCss";
                document.getElementById('article-show').appendChild(link);
            },
            fixImageUrl(content) {
                content.body = content.body.replace(/src="http\w{0,1}:\/\/p/g, 'src="https://images.weserv.nl/?url=p');
                if (content.image) {
                    content.image = this.replaceUrl(content.image);
                    console.log(content.image)
                }
                if (content.section) {
                    content.section.thumbnail = this.replaceUrl(content.section.thumbnail);
                };
                if (content.recommenders) {
                    content.recommenders.forEach(function (entry) {
                        entry.avatar = this.replaceUrl(entry.avatar);
                    });
                }
            },
            replaceUrl(url) {
                return url.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
            },
            getContnet() {

            }

        },
        created() {
           //初始化1次
        },
        attached() {
            this.show = true
            this.content = {}
            this.setArticleReady()
            const source = '/api/4/news/' + this.$route.params.storyId;
            const extraSource = '/api/4/story-extra/' + this.$route.params.storyId;
            this.$http.get(source).then(function (response) {
                this.content = response.body;
                this.loadCss(this.content.css[0]);
                this.fixImageUrl(this.content);
                this.readyState = true
                this.$http.get(extraSource).then(function (response) {
                    this.extra = response.body;
                });
                this.show = false
            })
            var id = this.$route.path.match(/\d+/);
            this.setArticleId(id[0]);
            this.setArticleReady()
        },
        destroyed() {

        }

    }


</script>
