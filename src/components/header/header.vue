<template>
  <div class=header>
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar">
      </div>
      <div class="content">
        <div class="title"></div>
        <div class="description"></div>
        <div class="support"></div>
      </div>
    </div>
    <div class="bulletin-wrapper"></div>
    <div class="background"></div>
    <div></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      seller: {
       type: Object
      }
    }
  };

  // 接收seller数据;

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
