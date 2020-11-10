<template>
    <div class="archive-list-cell">
        <div class="info">
            <div>
                <a-tag color="#2db7f5" class="time-tag border-tag">{{ post.createTime | socialDate }}</a-tag>
            </div>
            <div class="base-info">
                <router-link class="title" :to="'/' + post.postType + '/' + post.id">
                    {{post.title}}
                </router-link>
                <a class="see-desc" @click.stop="seeDesc" :class="{show: showDesc}">desc&nbsp;&nbsp;
                    <a-icon type="down-circle" />
                </a>
                <p class="desc" :class="{show: showDesc}">{{post.description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mixin } from '@/util'

export default {
    name: 'archive-list-cell',
    props: {
        post: {
            Type: Object
        }
    },
    mixins: [mixin],
    data() {
        return {
            showDesc: false
        }
    },
    methods: {
        seeDesc() {
            this.showDesc = !this.showDesc
        }
    }
}
</script>

<style lang="less">
@import '../../../common/less/theme.less';

.archive-list-cell {
    position: relative;
    padding: 5px 0;
    background-color: @default-background-color;

    &::after {
        content: '';
        position: absolute;
        min-height: 25px;
        top: 0;
        bottom: 0;
        left: 17px;
        width: 4px;
        // background: @default-link-hover-color;
        background: @my-theme-color01;
    }

    .info {
        display: flex;
        font-size: 17px;
        line-height: 25px;
        margin-left: 45px;
        cursor: pointer;

        @media only screen and (max-width: 768px) {
            font-size: 13px;
            display: block;
        }

        .time-tag {
            flex-shrink: 0;
            cursor: pointer;
            margin: 2px 4px 2px 0;
        }

        .base-info {
            @media only screen and (max-width: 768px) {
                &::before {
                    content: '';
                    height: 10px;
                    width: 10px;
                    background: lightpink;
                    display: inline-block;
                    border-radius: 5px;
                }
            }
            a.title {
                margin-left: 5px;
                font-weight: 300;
                color: @my-font-color;
                cursor: pointer;
                &:hover {
                    color: @color-main-primary;
                }
            }

            a.see-desc {
                color: @my-dark-font-color;
                font-size: 13px;
                margin-left: 5px;
                font-weight: 100;
                cursor: pointer;
                font-family: 'engttf';

                > i {
                    transition: All 0.4s ease-in-out;
                    transform: rotateX(180deg);
                }

                &:hover,
                &.show {
                    color: @default-desc-hover-color;
                }

                &.show {
                    > i {
                        transform: rotateX(0deg);
                    }
                }
            }

            .desc {
                font-size: 14px;
                font-weight: 300;
                margin-left: 5px;
                color: @my-dark-font-color;
                overflow: hidden;
                max-height: 0;
                transition: All 0.4s ease-in-out;

                &.show {
                    max-height: 250px;
                }
            }
        }
    }
}
</style>
