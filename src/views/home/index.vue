<template>
    <div class='content' v-show="getReadyState">
        <slidebar></slidebar>
        <banner :items="topStories"></banner>
        <daily></daily>
    </div>
</template>
<style>
</style>
<script>
    import {getTodayStories,getTopStories,getReadyState} from '../../vuex/getters'
    import Banner from '../../components/banner.vue'
    import Slidebar from '../../components/slidebar.vue'
    import Daily from '../../components/daily.vue'
    export default {
        vuex: {
            getters: {
                getReadyState,getTodayStories,getTopStories
            }
        },
        components: {
            Banner,Slidebar,Daily
        },
        computed: {
            topStories: function () {
                const entryImage = []
                this.getTopStories.forEach( function (entry) {
                    entry.image = entry.image.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
                    entryImage.push(entry)
                })
                return entryImage
            }
        }
    }
</script>
