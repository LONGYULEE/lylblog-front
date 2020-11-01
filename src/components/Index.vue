<template>
    <div class="main-wrapper">
        <router-view name="header"></router-view>
        <router-view name="content"></router-view>
        <router-view name="footer"></router-view>
    </div>
</template>

<style lang="less" scoped>
@import '../common/less/theme.less';
.main-wrapper {
    background-color: @default-background-image;
    width: 100%;
    margin: 1px 0 auto;
    padding-top: 35px;

    @media only screen and (max-width: 992px) {
        background-color: white;
    }
}
</style>
