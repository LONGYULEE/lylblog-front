<template>
  <div class="common-footer">
    <p class="copyright">
      power by 123
    </p>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
        return {};
    }
};
</script>

<style scope lang="less">
@import "../../common/less/theme.less";
.common-footer {
  font-weight: 300;
  line-height: 25px;
  text-align: center;
  margin: 15px 0;
  color: @default-title-color;
  border-top: 1px solid @default-border-color;
  background: @default-background-color;
}
</style>
