<template>
    <div id="vplayer">
        <div class="controller  iconfont">
            <div class="info">
                <img :src="picUrl"/>
            </div>
            <div class="artists">
                <p>{{playingTitle}}</p>
                <span>{{playingArtist}}</span>
            </div>
            <!--<i class=" previous" @click="prevPlay" title="Previous"></i>-->
            <i class="play-pause" @click="setPlay" :class="[ isPlay ? 'pause' : 'play']"></i>
            <i class="next" @click="nextPlay" title="Next"></i>
            <!--<i class="repeat" title="Repeat" @click="setLoop"></i>-->
            <!--<i class="shuffle is-active" title="Disable Shuffle"></i>-->
            <!--<div class="progress-bar" @click="clickProgress">-->
                <!--<div class="play-bar" :style="{ width: progress+'%'}"></div>-->
                <!--<div class="play-point"></div>-->
            <!--</div>-->
            <!--<div class="times">-->
                <!--<span class="current-time">{{ showCurrentTime }}</span> /-->
                <!--<span class="duration">{{ showDurationTime }}</span>-->
            <!--</div>-->

            <i class="setup"></i>

            <!--<div class="volume-panel">-->
                <!--<i class="volume-toggle" :class="{'is-muted': isMuted}" @click="setMtuted"></i>-->
                <!--<input v-model="range" @change="setVolume" type="range" min="0" max="1" step=0.1 value="0.5">-->
            <!--</div>-->

        </div>
    </div>
</template>
<style lang="scss" scoped>
    @font-face {font-family: "iconplayer";
        src: url('../../assets/font/iconfont.eot?t=1478875830772'); /* IE9*/
        src: url('../../assets/font/iconfont.eot?t=1478875830772#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../../assets/font/iconfont.woff?t=1478875830772') format('woff'), /* chrome, firefox */
        url('../../assets/font/iconfont.ttf?t=1478875830772') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
        url('../../assets/font/iconfont.svg?t=1478875830772#iconfont') format('svg'); /* iOS 4.1- */
    }

    .iconfont {
        font-family:"iconplayer" !important;
        font-size:.8rem;
        font-style:normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }
    .pause {
        font-width: 600;
    }
    .previous:before { content: "\e63c"; }

    .next:before {content: "\e63d"; }

    .setup:before { content: "\e614"; }

    .volume-toggle:before { content: "\e612"; }

    .repeat:before { content: "\e623"; }

    .play:before { content: "\e622"; }

    .pause:before { content: "\e682"; }

    .shuffle:before { content: "\e624"; }

    .controller {
        background: url(../../assets/images/common/playbar_bg.png) no-repeat;
        background-size: cover;
        position: fixed;
        height: 2.5rem;
        width: 100%;
        bottom: 0;
        left: 0;
            .info {
                position: absolute;
                left: .6rem;
                top: 1.1rem;
                position: absolute;
                img {
                    border-radius: 50%;
                    border: none;
                    vertical-align: middle;
                    width: 1.25rem;
                    height: 1.25rem;
                }
            }
            .artists {
                position: absolute;
                color: #ff4b84;
                font-size: .5rem;
                top: 1.1rem;
                left: 2.2rem;
                    p {
                        letter-spacing: .2rem;
                        color: #66ccff;
                        font-size: .6rem;
                    }
                span {
                    letter-spacing: .1rem;
                    margin-left: .2rem;
                }
            }
        i {
            position: absolute;
            color: #FF4B84;
        }
        .play-pause {
            right: 1.3rem;
            top: 1.4rem
        }

        .next {
            font-size: .6rem;
            right: .4rem;
            top: 1.42rem;
        }
        .setup {
            right: 2.6rem;
            color: rgba(255,72,132,.7);
            top: 1.42rem;
            font-size: .6rem;
        }
    }


</style>
<script>
    export default {
        data() {
            return {
                audio:document.createElement('audio'),
                storage: window.localStorage,
                currentIndex: 0,
                playingLists: [],
                playingTitle: '',
                playingArtist: '',
                picUrl: '',
                isPlay: false,
                isNull: false
            }
        },
        methods: {
            firstOrCreate() {
                if (this.storage.getItem('playerList') == null) {
                    var tmp = {
                        'id': '436514312',
                        'title': '成都',
                        'picUrl': 'http://p3.music.126.net/34YW1QtKxJ_3YnX9ZzKhzw==/2946691234868155.jpg',
                        'artists': '赵雷',
                    };
                    this.playingLists.push(tmp);
                    this.storage.setItem('playerList',JSON.stringify(this.playingLists));
                }
                this.playingLists = JSON.parse(this.storage.getItem('playerList'));
                // 音量
                this.audio.volume = .5;
                this.playingTitle = this.playingLists[0].title;
                this.playingArtist = this.playingLists[0].artists;
                this.picUrl = this.playingLists[0].picUrl;
                this.$http.get('cloud163/index.php?id='+this.playingLists[0].id
                ).then(function (response) {
                    var mp3 = response.body.data[0];
                    this.audio.src = mp3.url;
                },function (error) {
                    console.log(error);
                })
            },
            setPlay() {
                // audio.pauused表示media暂停状态
                if (this.audio.paused) {
                    // media播放
                    this.audio.play();
                    this.isPlay = true;
                } else {
                    this.audio.pause();
                    this.isPlay = false;
                }
            },
            nextPlay() {
                var next =  this.getLocalPlayList();
                this.currentIndex + 1 == next.length ? this.currentIndex = 0 : ++this.currentIndex;
                this.getMp3Url(next[this.currentIndex].id);
            },
            getLocalPlayList () {
                return JSON.parse(this.storage.getItem('playerList'));
            },
            getDetail: function (id) {
                this.$http.get('cloud163/detail.php?id=' + id).then(function (response) {
                    let detail = response.body.songs[0];
                    if (detail) {

                        this.playingTitle = detail.al.name;
                        this.playingArtist = detail.ar[0].name;
                        this.picUrl = detail.al.picUrl;
                    } else {
                        // TODO 以后处理
                        console.log('暂未获取到详情！');
                    }
                })
            },
            getMp3Url(id) {
                this.$http.get('cloud163/index.php?id='+id).then(function (response) {
                    var mp3 = response.body.data[0];
                    if (mp3.code === 404) {
                        alert('无法播放，歌曲被“和谐”了');
                        this.isNull = true;
                    } else {
                        this.getDetail(id);
                        this.isNull = false;
                        this.audio.src = mp3.url;
                        this.audio.play();
                    }
                },function (error) {
                    console.log(error)
                })
            }
        },

        attached() {
            this.firstOrCreate();
        }



    }
</script>
