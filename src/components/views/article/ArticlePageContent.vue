<template>
    <div id="article-page-content">
        <slot name="content"></slot>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
@import '../../../common/less/article.less';

#article-page-content {
    padding: 5px;
}
</style>
