<template>
    <div class="about">
        <img class="background" src="http://img.lylblog.xyz/AK-02.jpg" alt="">
        <img class="avatar" src="http://img.lylblog.xyz/web_avatar.jpg" alt="">
        <p class="name">HANLU</p>
        <p class="desc">南波湾</p>
        <ul class="social">
            <li><a href="#" target="_blank"><img src="../../assets/icon/GitHub.png" alt=""></a></li>
        </ul>
        <div class="line"></div>
        <a-progress type="circle" :percent="75" :format="percent => `${percent} Days`" />
        <a-progress type="circle" :percent="75" :format="percent => `${percent} Days`" />
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import '../../common/less/theme.less';

.about {
    position: relative;
    text-align: center;
    // border: 1px solid @color-border;
    padding-bottom: 20px;
    background-color: @default-background-color;
    border-radius: @default-border-radius;

    img.background {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        z-index: 1;
        border-top-left-radius: @default-border-radius;
        border-top-right-radius: @default-border-radius;
        clip: rect(0 1000px 125px 0);
    }

    img.avatar {
        position: relative;
        margin: 75px auto 15px;
        width: 100px;
        height: 100px;
        border: 5px solid #f2a490;
        border-radius: 50%;
        z-index: 9;
    }

    .name {
        font-size: 22px;
        color: @color-typegraphy-title;
        line-height: 30px;
        font-weight: 700;
    }

    .desc {
        font-size: 15px;
        color: @color-secondary-info;
        line-height: 30px;
        font-weight: 100;
    }

    .social {
        text-align: center;
        padding: 0 20px;
        margin-top: 15px;

        > li {
            padding: 8px;
            list-style: none;
            a {
                display: block;
                width: 44px;
                height: 44px;
                margin: auto;

                img {
                    width: 100%;
                }
            }
        }
    }

    .line {
        height: 1px;
        background-color: @color-gradually-gray-91;
        margin: 10px 20px;
    }

    h4 {
        font-size: 19px;
        margin: 30px 0 20px;
        font-weight: 600;
    }

    .progresses {
        padding: 0 20px;

        p.title {
            height: 38px;
            line-height: 38px;
            text-align: right;
        }

        .bar {
            margin: 10px 0;
        }
    }
}
</style>
