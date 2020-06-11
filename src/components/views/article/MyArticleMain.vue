<template>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="myarticle-content" v-html="html" />
</template>

<script>
export default {
    props: {
        html: {
            type: String,
            default: ''
        }
    },
};
</script>

<style lang="less">
@import '../../../common/less/article.less';
</style>
