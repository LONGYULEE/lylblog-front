<template>
    <div class="btnClass">
        <a-button type="primary" @click="browseMore" :loading="loading">
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

    .ant-btn-primary {
        background-color: #fa8990;
        border-color: #fa8990;
    }
}
</style>
