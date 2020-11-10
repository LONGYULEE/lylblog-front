<template>
    <div class="main-wrapper">
        <!-- <div id="test"></div> -->
        <router-view name="header"></router-view>
        <router-view name="content"></router-view>
        <router-view name="footer"></router-view>
        <RightBottom></RightBottom>
    </div>
</template>

<script>
import RightBottom from '@/components/utils/rightbottom';
export default {
    data() {
        return {

        };
    },
    components: {
        RightBottom: RightBottom
    },
}
</script>

<style lang="less" scoped>
@import '../common/less/theme.less';
.main-wrapper {
    background-color: @default-background-image;
    width: 100%;
    margin: 1px 0 auto;
    padding-top: 35px;

    #test {
        width: 100%;
        height: 100vh;
        margin: -96px 0 30px 0px;
        background: rgba(0, 0, 0, 0.2);
    }

    @media only screen and (max-width: 992px) {
        background-color: white;
    }
}
</style>
