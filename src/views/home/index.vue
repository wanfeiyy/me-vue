<template>
    <div class='content' v-show="getReadyState">
        <loading v-show="show"></loading>
        <mask v-show="show"></mask>
        <slidebar></slidebar>
        <banner :items="topStories"></banner>
        <daily :date="getNowDay" :stories="todayStories"></daily>
        <daily v-for="beforeItem in getBeforeStory" :date="beforeItem.date" :stories="beforeItem.stories"></daily>
        <more v-if="getMoreButtonState"></more>
    </div>
</template>
<style>
</style>
<script>
    import {getTodayStories,getTopStories,getReadyState,getNowDay,getBeforeStory,getMoreButtonState} from '../../vuex/getters'
    import Banner from '../../components/banner.vue'
    import Slidebar from '../../components/slidebar.vue'
    import Daily from '../../components/daily.vue'
    import More from './more.vue'
    import Loading from '../../components/loading.vue'
    import Mask from '../../components/mask.vue'
    export default {
        data () {
            return  {
                show: false
            }

        },
        vuex: {
            getters: {
                getReadyState,getTodayStories,getTopStories,getNowDay,getBeforeStory,getMoreButtonState
            }
        },
        components: {
            Banner,Slidebar,Daily,More,Loading,Mask
        },
        events: {
            loading_status (flag) {
                this.show = flag;
            },
        },
        computed: {
            todayStories () {
                const todayStoreies = []
                this.getTodayStories.forEach( function (entry) {
                    entry.images[0] = entry.images[0].replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
                    todayStoreies.push(entry)
                })
                return todayStoreies
            },
            topStories: function () {
                const topStories = []
                this.getTopStories.forEach( function (entry) {
                    entry.image = entry.image.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
                    topStories.push(entry)
                })
                return topStories
            }
        }
    }
</script>
