<template>
    <div class="layout-footer">
        {{ year }} © Powered by
        <a href="https://gitee.com/lihanly10979/temp-fontend" target="_blank">lylBlog</a>
        <span class="record-info">
            |
            <a href="http://www.beian.miit.gov.cn">{{ beianhao }}</a>
        </span>
        <span class="record-info">
            |
            <a href="http://132.232.87.31:8080/manage/#/login">后台管理</a>
        </span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            year: new Date().getFullYear(),
            beianhao: '渝ICP备20007141号'
        };
    }
};
</script>

<style scoped lang="less">
@import '../../common/less/theme.less';
.layout-footer {
    text-align: center;
    color: #888;
    user-select: none;
    padding: 10px 0px;
    margin: 0px 20px;

    @media only screen and (max-width: 768px) {
        padding: 5px 0px 15px 0px;
    }

    a {
        color: @color-typegraphy-title-hover;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }

    @media only screen and (min-width: 992px) {
        border-top: 1px dashed #c4c4c4;
    }
}

@media (max-width: 576px) {
    .record-info,
    .admin-link {
        display: none;
    }
}
</style>
