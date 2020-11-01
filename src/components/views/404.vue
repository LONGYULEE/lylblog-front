<template>
    <div class="wrapper">
        <a-result status="error" title="啊哦~ 页面不见了" sub-title="NOT FOUND">
            <template #extra>
                <a-button key="console" type="primary" @click="backToHome()">
                    返回首页
                </a-button>
            </template>
        </a-result>
    </div>
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
/deep/ .ant-result-title {
    color: #fff;
}

/deep/.ant-result-subtitle {
    color: #fff;
}

.wrapper {
    transform: translateY(75%);
}
</style>