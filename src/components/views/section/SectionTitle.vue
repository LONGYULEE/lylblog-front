<template>
    <div class="section-title">
        <div class="title">
            <a-icon type="smile" class="square" theme="twoTone" two-tone-color="#eb2f96" />
            <span class="main-title">{{mainTitle}}</span>
            <span class="sub-title">{{subTitle}}</span>
            <span class="view-more">
                <router-link :to="tipHref" v-if="tipText">{{tipText}}
                    <a-icon type="caret-right" />
                </router-link>
            </span>
        </div>
        <div class="menu">
            <slot name="menu"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        mainTitle: "",
        subTitle: "",
        tipText: "",
        tipHref: ""
    }
};
</script>

<style lang="less">
@import '../../../common/less/index.less';

.section-title {
    margin-bottom: 10px;
    border-radius: @default-border-radius;
    display: flex;
    justify-content: space-between;
    padding: 20px 20px;
    height: 90px;
    line-height: 50px;
    text-align: left;
    box-sizing: border-box;
    background-color: @default-background-color;
    @media only screen and (max-width: 768px) {
        padding: 10px 0;
        margin-bottom: 5px;
        height: 70px;
    }
    @media only screen and (max-width: 992px) {
        border-bottom: 1px dashed #e5e5e5;
    }
    .title {
        .square {
            vertical-align: middle;
            font-size: 30px;
            vertical-align: middle;
            @media only screen and (max-width: 768px) {
                display: none;
            }
        }
        .main-title {
            color: @my-font-color;
            display: inline-block;
            vertical-align: middle;
            font-size: 22px;
            padding: 0 10px;
            @media only screen and (max-width: 768px) {
                padding: 0 15px;
            }
        }
        .sub-title {
            display: inline-block;
            vertical-align: middle;
            font-size: 18px;
            padding-left: 10px;
        }
        .view-more {
            display: inline-block;
            vertical-align: middle;
            font-size: 14px;
            padding-left: 10px;
            a {
                color: @color-main-primary;
                font-weight: 500;
                cursor: pointer;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
    .menu {
        height: 100%;
        line-height: inherit;
        float: right;
        @media only screen and (max-width: 768px) {
            display: none;
        }
    }
}
</style>
