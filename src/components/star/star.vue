<template>
  <div class="star" :class="starType">
    <span v-for="itemClass in itemClasses" class="star-item"
          :class="itemClass">
    </span>
  </div>
</template>

<script type="text/ecmascript-6">
  const LENGTH = 5;
  const CLS_ON = 'on';
  const CLS_HALF = 'half';
  const CLS_OFF = 'off';
  export default {
    props: {
      size: {
        type: Number
      },
      score: {
        type: Number
      }
    },
    computed: {
      starType() {
        return 'star-' + this.size;
      },
      itemClasses() {
        let result = [];
        let score = Math.floor(this.score * 2) / 2;
        let has = score % 1 !== 0;
        let ons = Math.floor(score);
        for (let i = 0; i < ons; i++) {
            result.push(CLS_ON);
        }
        if (has) {
            result.push(CLS_HALF);
        }
        while (result.length < LENGTH) {
            result.push(CLS_OFF);
        }
            return result;
      }
    }
  };
</script>

<style lang="stylus" rel='stylesheet/stylus'>
  @import "../../common/stylus/mixin.styl";
  .star
    font-size: 0
    .star-item
      display: inline-block
      background-repeat: no-repeat
    &.star-48
      .star-item
        background-size: 20px 20px
        margin-right: 22px
        width: 20px
        height: 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('star48_on')
        &.off
          bg-image('star48_off')
        &.half
          bg-image('star48_half')
    &.star-36
      .star-item
        background-size: 15px 15px
        margin-right: 6px
        width: 15px
        height: 15px
        &:last-child
          margin-right: 0
        &.on
          bg-image('star36_on')
        &.off
          bg-image('star36_off')
        &.half
          bg-image('star36_half')
    &.star-24
	    .star-item
        background-size: 10px 10px
        margin-right: 3px
        width: 10px
        height: 10px
        &:last-child
          margin-right: 0
        &.on
          bg-image('star24_on')
        &.off
          bg-image('star24_off')
        &.half
          bg-image('star24_half')

</style>
