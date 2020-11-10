<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "App"
};
</script>

<style>
@import 'assets/css/reset.css';
@import 'assets/font/font.css';
#nprogress .bar {
    /* 自定义颜色 */
    background: #fa897b !important;
}
</style>
