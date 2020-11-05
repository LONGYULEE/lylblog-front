<template>
    <div class="tag-wall">
        <panel :title="'TAGS'">
            <div slot="content" class="content">
                <!-- <a-badge :count="tag.linkNum" v-for="(tag, index) in tagList" :key="index" show-zero> -->
                <a-tag type="dot" v-for="(tag, index) in tagList" :key="index" :color="index | mapTagColor"
                    style="margin: 0 5px 5px 0;" class="dot-tag">
                    {{ tag.name }}
                    <span class="mySpan">
                        {{tag.linkNum}}
                    </span>
                </a-tag>
                <!-- </a-badge> -->

            </div>
        </panel>
    </div>
</template>

<script>
import Panel from "@/components/utils/Panel";
import { mixin } from "@/util/index";
export default {
    data() {
        return {
            tagList: []
        };
    },
    components: {
        panel: Panel
    },
    mixins: [mixin],
    created() {
        this.listTag();
    },
    methods: {
        listTag() {
            this.$http({
                url: this.$http.adornUrl("/operation/tags"),
                method: "get",
                params: this.$http.adornParams()
            }).then(({ data }) => {
                if (data && data.code === 2000) {
                    this.tagList = data.tagVOList;
                }
            });
        }
    }
};
</script>

<style lang="less">
@import '../../../common/less/index.less';

.tag-wall {
    .content {
        padding: 15px 20px 5px 20px;
        .ant-badge {
            margin-right: 15px;
        }

        .mySpan {
            min-width: 18px;
            padding: 3px 7px;
            background-color: rgba(0, 0, 0, 0.5);
            display: inline-block;
            font-size: 12px;
            line-height: 1;
            border-radius: 9px;
        }
    }
}
</style>
