<template>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="article-content" v-html="html" />
</template>

<script>
export default {
    props: {
        html: {
            type: String,
            default: ''
        }
    }
};
</script>

<style lang="less" scoped>
@import '../../../common/less/article.less';
</style>
