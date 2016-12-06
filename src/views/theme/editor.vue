<template>
    <div id="editors-block">
        <slidebar :title="'主编'"></slidebar>
        <ul>
            <li v-for="editor in editors">
                <a :href="'http://news-at.zhihu.com/api/4/editor/' + editor.id + '/profile-page/android'">
                    <img :src="editor.avatar|fixed">
                    <div class="info">
                        <p class="name">{{ editor.name }}</p>
                        <p class="bio">{{ editor.bio }}</p>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    ul {
        width: 100%;
        display: block;
        box-sizing: border-box;
        padding: 0 1rem;
        margin-top: 1rem;
        a {
            width: 100%;
            height: 100%;
            color: #000;
            text-decoration: none;
        }

        li {
            height: 3rem;
            list-style-type: none;
            border-bottom: 1px solid rgba(255,72,132,.8);
            display: block;
            position: relative;
            padding: 0.5rem 0;
            img {
                width: 2rem;
                height: 2rem;
                border-radius: 50%;
                display: block;
                position: absolute;
                top: 0.5rem;
                left: 0;
            }
            .info {
                position: absolute;
                top: 0.5rem;
                left: 2.8rem;
                .name {
                    font-size: 0.7rem;
                    font-weight: bolder;
                }
                .bio {
                    font-size: 0.5rem;
                    color: #888;
                }
            }
        }
    }
</style>
<script>
    import {getEditors} from '../../vuex/getters'
    import Slidebar from  '../../components/slidebar.vue'
    export default{
        data() {
            return {
                editors:[]
            }
        },
        components: {
            Slidebar
        },
        vuex: {
            getters: {
                getEditors
            }
        },
        attached() {
            if (this.getEditors.length) {
                this.editors = this.getEditors;
            } else {
                this.editors = JSON.parse(sessionStorage.getItem("editors"));
            }
        }

    }
</script>
