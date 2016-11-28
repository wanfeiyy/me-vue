<template>
    <div id="vplayer">
        <div class="controller  iconfont">
            <div class="info">
                <img :src="picUrl" @click="showLyric"/>
            </div>
            <div class="artists" @click="showLyric">
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

        <div id='lyric' v-show="show">
            <div class="lyric-description"></div>
            <header id="masthead" class="site-header" :style="{ backgroundImage: 'url('+picUrl+')' }">
                <div id="lyricWrapper" class="site-branding">
                    <div v-show="lyric.length != 0" id="lyricContainer">
                        <p id="line-{{$index}}" v-for="lrc in lyric">{{lrc[1]}}</p>
                    </div>
                </div>
            </header>
            <div class="v-control iconfont">
                <div class="volume">
                    <i class="v-volume"></i>
                </div>

                <div class='v-button'>
                    <div>
                        <i class="v-repeat repeat" title="Repeat" @click="setLoop"></i>
                    </div>
                    <div>
                        <ul>
                            <li><i class="v-previous previous" @click="prevPlay" title="Previous"></i></li>
                            <li><i class="v-play-pause" @click="setPlay" :class="[ isPlay ? 'pause' : 'play']"></i></li>
                            <li><i class="v-next next" @click="nextPlay" title="Next"></i></li>
                        </ul>
                    </div>
                    <div>

                         <i class="v-setup setup"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    button {
        width: 100%;
        height: .5rem;
        text-align: center;
    }
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
        z-index: 100;
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
        background: rgba(0,0,0,.8);
        z-index: 0;
        .volume {
            height: 30px;
            background: red;
        }
        .v-button {
            ul {
                margin-top: .4rem;
            }
            li {
                margin-left: .2rem;
                padding: 0 .3rem;
                display: inline-block;
            }
            i {

                opacity: .9;
                color: snow;
            }
        }
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
                .current-line {
                    color: #fff;
                    font-size: .4rem;
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
    import store from '../../vuex/store'
    import {setLyric,setPicUrl} from '../../vuex/action'
    export default {
        data() {
            return {
                audio: document.createElement('audio'),
                lyricContainer: '',
                storage: window.localStorage,
                currentIndex: 0,
                playingLists: [],
                lyricText: '',
                lyric: [],
                playingTitle: '',
                playingArtist: '',
                picUrl: '',
                isPlay: false,
                isNull: false,
                lock : false,
                show: false
            }
        },
        store,
        vuex: {
            actions: {
                setPicUrl,setLyric
            }
        },
        components: {

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
                    this.setLocalPlayList('playerList',this.playingLists);
                }
                this.playingLists = this.getLocalPlayList('playerList');
                this.getSongLyric(this.playingLists[0].id);
                // 音量
                this.audio.volume = .5;
                this.playingTitle = this.playingLists[0].title;
                this.playingArtist = this.playingLists[0].artists;
                this.picUrl = this.playingLists[0].picUrl;
                this.setPicUrl(this.picUrl);
                this.$http.get('cloud163/index.php?id='+this.playingLists[0].id
                ).then(function (response) {
                    var mp3 = response.body.data[0];
                    this.audio.src = mp3.url;
                },function (error) {
                    console.log(error);
                })

            },
            showLyric() {
                this.show = !this.show;
            },
            updateLyric() {
                if (this.lyric.length === 0 || '') return false;
                for (var i = 0, l = this.lyric.length; i < l; i++) {
                    if (this.audio.currentTime > this.lyric[i][0] - 0.50) {
                        var line = document.getElementById('line-' + i),
                                prevLine = document.getElementById('line-' + (i > 0 ? i - 1 : i));
                        prevLine.className = '';
                        line.className = 'current-line';
                        this.lyricContainer.style.top = 110 - line.offsetTop + 'px';
                    };
                };
            },
            setPlay() {

                this.show = true;
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
                var objItem =  this.getLocalPlayList('playerList');
                this.judgeCurrentIndex(objItem);
                this.getMp3Url(objItem[this.currentIndex].id);
            },
            autoNextPlay() {
                console.log('autoPlay is running...!')
                if (!this.audio.loop) {
                    var objItem = this.getLocalPlayList('playerList');
                    this.judgeCurrentIndex(objItem);
                    this.getMp3Url(objItem[this.currentIndex].id);
                }
            },
            getDetail: function (id,is_detail=true) {
                this.$http.get('cloud163/detail.php?id=' + id).then(function (response) {
                    let detail = response.body.songs[0];
                    let id = detail.id;
                    let title = detail.name
                    let picUrl = detail.al.picUrl;
                    var artists;
                    switch (detail.ar.length) {
                        case 1 :
                            artists = detail.ar[0].name;
                            break;
                        case 2:
                            artists = detail.ar[0].name + '/' + detail.ar[1].name;
                            break;
                        case 3:
                            artists = detail.ar[0].name + '/' + detail.ar[1].name + '/' + detail.ar[2].name;
                            break;
                    }
                    if (!this.isNull) {
                        this.playingTitle = title;
                        this.playingArtist = artists;
                        this.picUrl = picUrl;
                        if (is_detail) return;
                        let tmpData = {
                            'id': id,
                            'title': title,
                            'artists': artists,
                            'picUrl': picUrl
                        }
                        this.addMusci(tmpData);
                    }
//                    if (detail) {
//                        this.playingTitle = detail.al.name;
//                        this.playingArtist = detail.ar[0].name;
//                        this.picUrl = detail.al.picUrl;
//                    } else {
//                        // TODO 以后处理
//                        console.log('暂未获取到详情！');
//                    }
                },function (error) {
                    console.log(error);
                })
            },
            addMusci(data) {
                let tmpData = data;
                let localListitem = this.getLocalPlayList('playerList');
                this.currentIndex = 0;
                if (localListitem === null) {
                    this.playingLists.push(localListitem);
                    this.setLocalPlayList('playerList',localListitem)
                } else {
                    for (var i = 0; i < localListitem.length; i++) {
                        if (tmpData.id == localListitem[i].id) {
                            this.lock = true;
                            break;
                        } else {
                            this.lock = false;
                        }
                    }
                }
                if (!this.lock) {
                    this.playingLists = localListitem;
                    this.playingLists.unshift(tmpData);
                    this.setLocalPlayList('playerList',this.playingLists);
                } else {
                    console.log('该歌曲已存在歌单中');
                    return false;
                }
            },
            getMp3Url(id,is_detail = true) {
                this.$http.get('cloud163/index.php?id='+id).then(function (response) {
                    var mp3 = response.body.data[0];
                    if (mp3.code === 404) {
                        alert('无法播放，歌曲被“和谐”了');
                        this.isNull = true;
                    } else {
                        this.getDetail(id,is_detail);
                        this.isNull = false;
                        this.audio.src = mp3.url;
                        this.audio.play();
                    }
                },function (error) {
                    console.log(error)
                })
            },
            getSongLyric(id) {
                this.$http.get('cloud163/lyric.php?id='+id
                ).then(function (data) {
                    let lyric = data.data;
                    switch (true) {
                        case lyric.nolyric === true:
                            this.lyricText = '纯音乐 无歌词';
                            this.lyric = [];
                            break;
                        case lyric.uncollected === true:
                            this.lyricText = '未收录歌词';
                            this.lyric = [];
                            break;
                        case !lyric.qfy && !lyric.sfy :
                            this.lyricText = '';
                            this.parseLyric(lyric.lrc.lyric);
                    }
                },function (error) {
                    console.log(error);
                })
            },
            parseLyric(text) {
                // 安行划分
                let lyric = text.split('\n'),
                    pattern = /\[(\d{2}):(\d{2})\.(\d{2,3})]/g,
                    result = [],
                    offset = this.getOffset(text);
                while (!pattern.test(lyric[0])) {
                    lyric = lyric.slice(1);
                };
                lyric[lyric.length - 1].length === 0 && lyric.pop();
                lyric.forEach(function (v,i,a) {
                    var time = v.match(pattern),
                        value = v.replace(pattern,"");
                    time.forEach(function (v1,i1,a1) {
                        var t = v1.slice(1,-1).split(':');
                        result.push([parseInt(t[0],10) * 60 +  parseFloat(t[1]) + parseInt(offset) / 1000,value])
                    })
                })
                result.sort(function (a,b) {
                    return a[0] - b[0];
                })
                this.lyric = result; //赋值给data里面的lyric用于做歌词偏移
                return result;

            },
            getOffset(text) {
                var offset = 0;
                try {
                    var offsetPattern = /\[offset:\-?\+?\d+\]/g,
                            offset_line = text.match(offsetPattern)[0],
                            offset_str = offset_line.split(':')[1];
                    offset = parseInt(offset_str);
                } catch (err) {
                    offset = 0;
                }
                return offset;
            },
            playMusic(id) {
                console.log(id);
                this.getMp3Url(id,false);
            },
            getLocalPlayList (key) {
                return JSON.parse(this.storage.getItem(key));
            },
            setLocalPlayList (key,data) {
                return this.storage.setItem(key,JSON.stringify(data))
            },
            judgeCurrentIndex(objItem) {
                console.log( this.currentIndex + 1 == objItem.length,this.currentIndex,objItem.length);
                // this.currentIndex + 1 == next.length ? this.currentIndex = 0 : this.currentIndex = ++this.currentIndex;
                this.currentIndex + 1 == objItem.length ? this.currentIndex = 0 : this.currentIndex += 1;
            }
        },
        ready() {
            this.lyricContainer = document.getElementById('lyricContainer');
            this.audio.addEventListener('ended',this.autoNextPlay);
            this.audio.addEventListener('timeupdate', this.updateLyric);
            this.firstOrCreate();
        },
        route: {
//            activate() {
//                this.firstOrCreate();
//            },
//            data(transition) {
//                return {
//                    lyric : this.getSongLyric(this.getLocalPlayList('playerList')[0]['id'])
//                }
//            }
        }
    }
</script>
