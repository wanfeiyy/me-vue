<template>
        <div id="theme-page">
            <slidebar :title="content.name"></slidebar>
            <div class="theme-title-container">
                <img :src="image">
                <h3>{{content.description }}</h3>
                <span v-if="content.image_source">{{ content.image_source }}</span>
            </div>
            <div class="theme-editors" v-if="content.editors" v-link="'/editor'">
                <span>主编</span>
                <div class="theme-editors-avatar"
                     v-for="editor in content.editors">
                    <img :src="editor.avatar | fixed">
                </div>
            </div>

            <daily :stories="content.stories" :date="''"></daily>
        </div>
</template>
<style lang="scss" scoped>
    .theme-title-container {
        width: 100%;
        height: 7rem;
        position: relative;
        img {
            width: 100%;
            height: 100%;
            vertical-align: bottom;
            object-fit: cover;
            object-position: center;
            -webkit-filter: brightness(0.75);
            -moz-filter: brightness(0.75);
            -o-filter: brightness(0.75);
            -ms-filter: brightness(0.75);
            filter: brightness(0.75);
        }

        h3 {
            position: absolute;
            left: 0;
            bottom: .8rem;
            color: #FFF;
            font-size: .7rem;
            padding-left: 0.3rem
        }
        span {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: 11px;
            color: #b8b8b8;
            position: absolute;
            bottom: 0.4rem;
            right: 0.4rem;
        }
    }

    .theme-editors {
        width: 100%;
        height: 2.1rem;
        background-color: #f0f0f0;
        line-height: 2.1rem;
        padding-top: 0.2rem;
        color: #000;
        overflow: hidden;
        span {
            float: left;
            height: 100%;
            font-weight: bold;
            font-size: 0.4rem;
            margin-left: 0.8rem;
        }

        .theme-editors-avatar {
            display: inline-block;
            width: 1.8rem;
            height: 1.8rem;
            border-radius: 50%;
            margin-left: 0.4rem;
            img {
                height: 100%;
                width: 100%;
                vertical-align: center;
                object-fit: cover;
                border-radius: 50%;
            }
        }
    }
</style>
<script>
    import Store from '../../vuex/store'
    import {setEditors} from  '../../vuex/action'
    import Slidebar from  '../../components/slidebar.vue'
    import Daily from '../../components/daily.vue'
    export default{
        data() {
            return {
                content:{},
                image:'',
                id : 0,
                documentThemeHeight:0
            }
        },
        components: {
            Slidebar,Daily
        },
        vuex: {
            getters: {

            },
            actions: {
                setEditors,
            }
        },
        ready() {
            window.setTimeout(function () {
                this.documentThemeHeight = document.body.clientHeight;
            }.bind(this),1000);
        },
        methods: {
            loadOld() {
                if (document.body.scrollHeight - window.scrollY < 1500) {
                    window.removeEventListener("scroll", this.loadOld)
                    const source = "/api/4/theme/" + this.id + "/before/" + this.content.stories[this.content.stories.length - 1].id;
                    this.$http.get(source).then(function (response) {
                        response.body.stories.forEach(function (item) {
                            this.content.stories.push(item);
                        }.bind(this))
                        window.addEventListener("scroll", this.loadOld);
                    })
                }
            },
            initPage: function () {
                this.clearStyle();
                if (this.id === this.$route.params.themeId) {
                    return;
                }
                this.id = this.$route.params.themeId;
                const source = "/api/4/theme/" + this.$route.params.themeId;
                this.$http.get(source).then(function (response) {
                    this.content = response.body;
                    this.image = this.content.image.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
                    if (this.content.editors) {
                        this.setEditors(this.content.editors);
                        const newdata = JSON.stringify(this.content.editors);
                        sessionStorage.setItem("editors", newdata);
                    }
                });

                window.addEventListener("scroll", this.loadOld);
            },
            clearStyle() {
                var style = document.getElementById('storyCss');
                if (style) {
                    style.remove();
                }
            },
        },
        route: {
            data:function (transition) {
                this.initPage();
                window.onscroll = '';
                scrollTo(0,0);
                transition.next();
            }
        }

    }
</script>
