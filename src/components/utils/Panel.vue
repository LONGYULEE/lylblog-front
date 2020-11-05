<template>
    <div class="panel">
        <h4>{{title}}</h4>
        <slot name="content"></slot>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            default: ""
        }
    }
};
</script>

<style lang="less" scope>
@import '../../common/less/theme.less';

.panel {
    position: relative;
    background: @default-background-color;
    // border-left: 1px solid @color-border;
    border-radius: @default-border-radius;

    &:hover {
        transform: rotate(0deg) scale(1) translate(0%, 0%);
        transition: all 0.3s ease;
        box-shadow: @my-box-shadow;
    }

    h4 {
        font-size: 21px;
        padding: 13px 20px 13px;
        line-height: 18px;
        text-align: left;
        border-top-right-radius: @default-border-radius;
        font-family: 'engttf';
        color: #fff;
        border-left: 3px solid;
    }
}
</style>
