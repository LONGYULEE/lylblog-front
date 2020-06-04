<template>
    <div class="main-wrapper">
        <router-view name="header"></router-view>
        <router-view name="content"></router-view>
        <router-view name="footer"></router-view>
    </div>
</template>

<style scoped>
.main-wrapper {
    background-color: #f3f3f4;
    width: 100%;
    margin: 0 auto;
}
</style>
