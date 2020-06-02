<template>
    <div class="title-menu-timeline">
        <div class="date-picker">
            <iv-date-picker type="daterange" confirm placement="bottom-end" placeholder="选择存档日期区间"></iv-date-picker>
        </div>
    </div>
</template>

<script>
</script>

<style lang="less" scoped>
@import "@/common/less/theme.less";

.title-menu-timeline {
    .date-picker {
        width: 175px;
        margin-left: 15px;
        font-size: 13px;
    }
}
</style>
