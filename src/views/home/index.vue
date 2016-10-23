<template>
    <div class='content'>
        <slidebar></slidebar>
        <banner :items="topStories"></banner>
    </div>
</template>
<style>
</style>
<script>
    import {getTodayStories,getTopStories} from '../../vuex/getters'
    import Banner from '../../components/banner.vue'
    import Slidebar from '../../components/slidebar.vue'
    export default {
        vuex: {
            getters: {
                getTodayStories,getTopStories
            }
        },
        components: {
            Banner,Slidebar
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
