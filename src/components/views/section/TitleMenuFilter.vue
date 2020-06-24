<template>
    <div class="title-menu-timeline">
        <ul class="list clearfix">
            <li v-for="menuFilter in filterList" :key="menuFilter.name">
                <a :class="menuFilter.active ? 'active' : ''"
                    @click="filterByMenu(menuFilter.type)">{{ menuFilter.name }}</a>
            </li>
        </ul>
        <div class="refresh">
            <a @click="refresh" title="刷新">
                <a-icon type="sync" :style="{ fontSize: '16px' }" />
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        menuFilterList: Array
    },
    computed: {
        filterList() {
            return this.menuFilterList;
        }
    },
    methods: {
        refresh() {
            this.$router.go(0);
        },
        filterByMenu(type) {
            this.replaceActive(type);
            let param = {};
            param[type] = true;
            this.$emit("filterByMenu", param);
        },
        replaceActive(type) {
            this.menuFilterList.map(menuFilter => {
                if (menuFilter.type === type) {
                    menuFilter.active = true;
                } else {
                    menuFilter.active = false;
                }
            });
        }
    }
};
</script>

<style lang="less" scoped>
@import '../../../common/less/theme.less';
.title-menu-timeline {
    display: flex;
    ul {
        li {
            float: left;
            margin: 0 6px;
            list-style: none;
            a {
                padding: 6px 0;
                &:hover,
                &.active {
                    color: @color-main-primary;
                    border-bottom: 2px solid @color-main-primary;
                }
            }
        }
    }
    .refresh {
        margin-left: 15px;
        line-height: inherit;
        a {
            font-size: 20px;
            color: @color-gradually-gray-41;
            cursor: pointer;
            &:hover {
                color: @color-main-primary;
            }
        }
    }
}
</style>
