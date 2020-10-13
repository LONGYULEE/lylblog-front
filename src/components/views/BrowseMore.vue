<template>
    <!-- <div class="browse-more" :class="{loading: loading}">
        <a @click="browseMore">
            <p class="text" v-show="!loading">{{tipStr}}</p>
            <div class="spinner" v-show="loading">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
                <div class="line4"></div>
                <div class="line5"></div>
            </div>
        </a>
    </div> -->
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
    margin-bottom: -5px;
}
</style>
