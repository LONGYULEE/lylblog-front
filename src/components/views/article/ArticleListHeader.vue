<template>
    <div class="article-list-header">
        <category-menu @filterByCategory="filterByCategory" :categorys="categorys" :defaultCategory="defaultCategory">
        </category-menu>
        <section-title :mainTitle="mainTitle" :subTitle="subTitle">
            <title-menu-filter @filterByMenu="filterByMenu" slot="menu" :menu-filter-list="defaultFilterList">
            </title-menu-filter>
        </section-title>
    </div>
</template>

<script type="text/ecmascript-6">
import SectionTitle from "@/components/views/Section/SectionTitle";
import CategoryMenu from "@/components/views/category/CategoryMenu";
import TitleMenuFilter from "@/components/views/Section/TitleMenuFilter";
import { DefaultFilterList } from "@/common/js/const";
export default {
    data() {
        return {
            defaultFilterList: DefaultFilterList,
            categoryParam: {}
        };
    },
    components: {
        "section-title": SectionTitle,
        "category-menu": CategoryMenu,
        "title-menu-filter": TitleMenuFilter
    },
    props: {
        categorys: Array,
        defaultCategory: "",
        mainTitle: "",
        subTitle: ""
    },
    methods: {
        filterByMenu(params) {
            this.$emit("filterByMenu", params);
        },
        filterByCategory(params) {
            this.$emit("filterByCategory", params);
        }
    },
    watch: {
        categorys(newval) {
            console.log(newval);
        }
    }
};
</script>
