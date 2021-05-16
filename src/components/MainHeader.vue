<template>
  <div class="header">
    <a-button
      type="primary"
      style="margin-bottom: 16px"
      @click="toggleCollapsed"
    >
      <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <a-breadcrumb separator="">
      <a-breadcrumb-item href=""> 首页 </a-breadcrumb-item>
      <a-breadcrumb-separator />
      <a-breadcrumb-item href=""> 统计 </a-breadcrumb-item>
    </a-breadcrumb>
    <ul class="login-container">
      <li>欢迎，程小程</li>
      <li>退出</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'main-header',
  methods: {
    toggleCollapsed() {
      this.$store.dispatch('changeCollapsed');
    },
  },
};
</script>

<style>
</style>
