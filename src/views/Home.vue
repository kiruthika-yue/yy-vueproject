<template>
  <div class="main-container">
    <!-- 左侧菜单栏 -->
    <left-menu />
    <!-- 右侧部分 -->
    <div
      :class="{
        'right-container': true,
        'menu-unfold': $store.state.collapsed,
      }"
    >
      <!-- 头部部分 -->
      <main-header />

    </div>
  </div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu.vue';
import MainHeader from '@/components/MainHeader.vue';

export default {
  name: 'main-container',
  data() {
    return {};
  },
  methods: {},
  components: {
    LeftMenu,
    MainHeader,
  },
};
</script>
<style lang="less">
@import url("~@/assets/css/mainpage");
</style>
