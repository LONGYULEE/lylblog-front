<template>
    <div class="btnClass">
        <a-button type="primary" size="large" @click="browseMore" :loading="loading">
            {{tipStr}}
        </a-button>
    </div>
</template>

<script>
export default {
    props: {
        tipText: {
            default: '浏览更多'
        },
        noMoreData: {
            default: false
        }
    },
    data() {
        return {
            loading: false
        }
    },
    computed: {
        tipStr: function () {
            let isNoMore = this.noMoreData
            return isNoMore ? '暂无更多' : '浏览更多'
        }
    },
    methods: {
        browseMore() {
            if (this.noMoreData) {
                this.loading = false
                return
            }
            this.loading = true
            this.$emit('browseMore')
            this.loading = false
        },
        stopLoading(noMoreData) {
            this.loading = false
            this.noMore = noMoreData
        }
    }
}
</script>

<style lang="less">
@import '../../common/less/theme.less';
.btnClass {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    @media only screen and (max-width: 992px) {
        padding-bottom: 10px;
        border-bottom: 1px dashed #e5e5e5;
    }
}
</style>
