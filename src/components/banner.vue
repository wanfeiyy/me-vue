<template>
        <swipe class="my-swipe">
            <swipe-item class="silde" v-for="topItem in items">
                <img :src="topItem.image">
            </swipe-item>
        </swipe>
</template>

<style>
    .swipe-indicator{
        opacity:.5 !important;
    }
    .swipe-indicator.active{
        background:red !important;
    }
    .my-swipe{
        margin-top: 0.989rem;
        height: 7.5rem !important;
        color: #fff;
        font-size: 30px;
        text-align: center;
        overflow: hidden;
    }
    .silde img{
        object-position: center;
        height: 100%;
        width: 100%;
        object-fit: cover;
        color: #66ccff;
    }

</style>

<script>
    require('vue-swipe/dist/vue-swipe.css');
    import {Swipe,SwipeItem} from 'vue-swipe';
    import {getTopStories} from '../vuex/getters'
    export default {
        props:['items'],
        components: {
            Swipe,SwipeItem
        },
    }
</script>