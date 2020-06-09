<template>
    <div class="tag-wall">
        <panel :title="'标签墙'">
            <div slot="content" class="content">
                <a-tag v-for="(tag, index) in tagList" type="dot" :color="index | mapTagColor" :key="index"
                    style="margin: 0 5px 5px 0;" class="dot-tag">{{ tag.name +' ['+ tag.linkNum + ']'}}
                </a-tag>
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
        padding: 10px 20px 5px 20px;
    }
}
</style>
