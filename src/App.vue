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
@import "assets/css/reset.css";
#nprogress .bar {
    /* 自定义颜色 */
    background: #409eff !important;
}
</style>
