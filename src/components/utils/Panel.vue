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
    background: #fff;
    // border-left: 1px solid @color-border;
    border-radius: @default-border-radius;

    h4 {
        font-size: 18px;
        padding: 13px 20px 13px;
        line-height: 18px;
        text-align: left;
        background-color: rgba(#75cce8, 0.5);
        border-top-right-radius: @default-border-radius;
        border-top-left-radius: @default-border-radius;
    }
}
</style>
