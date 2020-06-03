<template>
    <a-result status="error" title="啊哦~ 页面不见了" sub-title="NOT FOUND">
        <template #extra>
            <a-button key="console" type="primary" @click="backToHome()">
                返回首页
            </a-button>
        </template>
    </a-result>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        backToHome() {
            this.$router.push("/");
        }
    }
};
</script>

<style lang="less" scoped>
</style>