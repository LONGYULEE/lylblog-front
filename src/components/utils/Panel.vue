<template>
    <div class="panel">
        <slot name="header" class="header"></slot>
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
    box-shadow: @my-box-shadow;
    &:hover {
        transform: rotate(0deg) scale(1) translate(0%, 0%);
        transition: all 0.3s ease;
        box-shadow: @my-box-shadow-hover;
    }
}
</style>
