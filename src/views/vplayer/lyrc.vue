<template>
    <div id='lyric' v-show="show">
        <div class="lyric-description"></div>
        <header id="masthead" class="site-header" :style="{ backgroundImage: 'url('+picurl+')' }">
            <div id="lyricWrapper" class="site-branding">
                <div v-show="list.length != 0" id="lyricContainer">
                    <p id="line-{{$index}}" v-for="lrc in list">{{lrc[1]}}</p>
                </div>
            </div>
        </header>
        <div class="v-control"></div>
    </div>
</template>
<style lang="scss" scoped>
    .lyric-description {
        height: .8rem;
        width: 100%;
        position: fixed;
        background: #66ccff;
        top: 0;
        left: 0;
        z-index: 999;
    }
    .v-control {
        height: 2.5rem;
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        background: #66ccff;
        z-index: 999;
    }

    .site-header {
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        #lyricWrapper {
            overflow: hidden;
            position: relative;
            top: .5rem;
            color: #fff;
            #lyricContainer {
                position: relative;
                top: 2rem;
                font-family: Arial, Helvetica, sans-serif;
                text-shadow: 1px 0 0 #000, -1px 0 0 #000, 0 1px 0 #000, 0 -1px 0 #000;
                p {
                    font-size: .4rem;
                    margin: 1rem auto;
                    color: #989898;
                    word-wrap: break-word;
                    text-align: center;
                    -webkit-transition: color 0.7s linear;
                    -moz-transition: color 0.7s linear;
                    -o-transition: color 0.7s linear;
                    transition: color 0.7s linear;
                }
            }
        }
        .site-branding {
            max-width: 100%;
            padding: 100px 45px;
            position: relative;
            text-align: center;
        }

    }

    .site-header:before {
        background-color: #000;
        content: "";
        opacity: 0.5;
        pointer-events: none;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
</style>
<script>
    export default{
        props: {
            show: 'show',
            picurl: {
                type: String,
                default() {
                    return '/static/img/playbar_bg.e43522d.png'
                }
            },
            list: {
                type: Array,
                default() {
                    return []
                }
            }
        }
    }
</script>
