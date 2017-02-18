<template>
  <div id="app">
    <v-header></v-header>
    <div>
      <div>商品</div>
      <div>评论</div>
      <div>商家</div>
    </div>
    <div>
      内容
    </div>
  </div>

</template>

<script>
  import header from './components/header/header.vue';
  export default {
    components: {
      'v-header': header
    }
  };
</script>

<style>

</style>
