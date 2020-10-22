<template>
    <div>
        <a-anchor :wrapperStyle="myStyle" :offsetTop="80" :showInkInFixed="showInkInFixed" @click="closeSide"
            :affix="affix">
            <a-anchor-link v-for="item in menus" v-bind:key="item.href" :href="item.href" :title="item.title">
                <a-anchor-link v-for="item01 in item.children" v-bind:key="item01.href" :href="item01.href"
                    :title="item01.title">
                    <a-anchor-link v-for="item02 in item01.children" v-bind:key="item02.href" :href="item02.href"
                        :title="item02.title">
                    </a-anchor-link>
                </a-anchor-link>
            </a-anchor-link>
        </a-anchor>
    </div>
</template>

<script>
export default {
    props: {
        setHeight: {
            type: String,
            required: false
        },
        affix: {
            type: Boolean,
            default: true
        },
        showInkInFixed: {
            type: Boolean,
            default: true
        },
    },
    data() {
        return {
            myStyle: {
                'background-color': 'inherit',
                'min-width': '250px'
            },
        }
    },
    computed: {
        menus() {
            return this.$store.state.menus;
        }
    },
    methods: {
        closeSide() {
            this.$emit('getClose', false);
        }
    },
    created() {
        if (this.setHeight) {
            this.myStyle.maxHeight = this.setHeight;
        }
    }
}
</script>

<style lang="" scoped>
</style>