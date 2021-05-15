<template>
  <div class="leftMenu">
    <a-menu
      :default-selected-keys="['1']"
      :default-open-keys="['sub1']"
      mode="inline"
      theme="dark"
      :inline-collapsed="$store.state.collapsed"
    >
      <a-sub-menu key="sub1">
        <span slot="title"> <a-icon type="home" /><span>首页</span> </span>
        <a-menu-item key="1" type="pie-chart"> 统计 </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title"> <a-icon type="shop" /><span>商品</span> </span>
        <a-menu-item key="2"> 商品列表 </a-menu-item>
        <a-menu-item key="3"> 添加商品 </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
export default {
  name: "mainmenu-container",
  methods: {},
};
</script>

<style>
</style>
