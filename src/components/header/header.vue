<template>
  <div class=header>
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div class="support" v-if="seller.supports">
          <!--v-if判断是否有后台数据-->
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">
            {{seller.supports[0].description}}
          </span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count" @click='showDetail'>
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click='showDetail'>
      <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%">
    </div>
    <transition name="fade">
      <div class='detail' v-show='detailShow'>
        <div class="detail-wrapper clear-fix">
          <div class="detail-main">
            <h1 class="name">
              {{seller.name}}
            </h1>
            <div class="star-wrapper">
              <star :size="48" :score="seller.score"></star>
            </div>
            <div class="title">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>
            <ul  v-if="seller.supports" class="support">
              <li class="class-item" v-for="item in seller.supports">
                <span class="icon" :class="classMap[item.type]"></span>
                <span class="text">{{item.description}}</span>
              </li>
            </ul>
            <div class="title">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>
            <div class="bulletin">
              <p class="bulletin-text">
                {{seller.bulletin}}
              </p>
            </div>
          </div>
        </div>
        <div class="detail-close" @click="hideDetail">
          <i class="icon-close"></i>
        </div>
      </div>
    </transition>
    <!--<div class='detail' v-show='detailShow' transition="fade">-->
      <!--<div class="detail-wrapper clear-fix">-->
        <!--<div class="detail-main">-->
          <!--<h1 class="name">-->
            <!--{{seller.name}}-->
          <!--</h1>-->
          <!--<div class="star-wrapper">-->
            <!--<star :size="48" :score="seller.score"></star>-->
          <!--</div>-->
          <!--<div class="title">-->
            <!--<div class="line"></div>-->
            <!--<div class="text">优惠信息</div>-->
            <!--<div class="line"></div>-->
          <!--</div>-->
          <!--<ul  v-if="seller.supports" class="support">-->
            <!--<li class="class-item" v-for="(item, index) in seller.supports">-->
              <!--<span class="icon" :class="classMap[seller.supports[index].type]"></span>-->
              <!--<span class="text">{{seller.supports[index].description}}</span>-->
            <!--</li>-->
          <!--</ul>-->
          <!--<div class="title">-->
            <!--<div class="line"></div>-->
            <!--<div class="text">商家公告</div>-->
            <!--<div class="line"></div>-->
          <!--</div>-->
          <!--<div class="bulletin">-->
            <!--<div class="bulletin-text">-->
              <!--{{seller.bulletin}}-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="detail-close" @click="hideDetail">-->
        <!--<i class="icon-close"></i>-->
      <!--</div>-->
    <!--</div trans>-->
  </div>
</template>

<script type="text/ecmascript-6">
  import star from '../star/star';
  export default {
    props: {
      seller: {
       type: Object
      }
    },

  data() {
    return {
      detailShow: false
    };
  },

  methods: {
    showDetail() {
      this.detailShow = true;
    },
    hideDetail() {
      this.detailShow = false;
    }
  },

  created: function() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  },
  components: {
    star
  }
  };
  // 接收seller数据;
  // 通过后台数据type动态绑定class

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl";
  .header
    font-size: 0
    color: #fff
    background-color: rgba(7, 17, 27, 0.5)
    position: relative
    overflow: hidden
    .content-wrapper
      position: relative
      padding: 24px 12px 18px 24px
      .avatar
        display: inline-block
        vertical-align: top
        img
          border-radius: 2px
      .content
        display: inline-block
        .title
          margin: 2px 0 8px 16px
          .brand
            display: inline-block
            vertical-align: top
            width: 30px
            height: 18px
            margin-right: 6px
            bg-image('brand')
            background-size: 30px 18px
            background-repeat: no-repeat
          .name
            font-size: 16px
            font-weight: bold
            line-height: 18px
        .description
          font-size: 12px
          line-height: 12px
          margin: 0 0 10px 16px
        .support
          font-size: 10px
          line-height: 12px
          margin: 0 0 2px 16px;
          .icon
            display:  inline-block
            width: 12px
            height: 12px
            vertical-align: top
            background-size: 12px 12px
            background-repeat: no-repeat
            &.decrease
              bg-image('decrease_1')
            &.discount
              bg-image('discount_1')
            &.guarantee
              bg-image('guarantee_1')
            &.invoice
              bg-image('invoice_1')
            &.special
              bg-image('special_1')
          .text
            margin-left: 4px
            font-size: 10px
      .support-count
        position: absolute
        right: 12px
        bottom: 18px
        padding: 0 8px
        height: 24px
        line-height: 24px
        border-radius: 24px
        background-color: rgba(0,0,0,0.2)
        text-align: center
        .count
          vertical-align: top
          font-size: 10px
        .icon-keyboard_arrow_right
          line-height: 24px
          font-size: 10px
    .bulletin-wrapper
      position:relative
      height: 28px
      line-height: 28px
      padding: 0 22px 0 12px
      white-space: nowrap
      overflow: hidden
      text-overflow:ellipsis
      background-color:rgba(7, 17, 27 ,0.2)
      .bulletin-title
        vertical-align:top
        display: inline-block
        width: 22px
        height: 12px
        margin-top:8px
        bg-image('bulletin')
        background-size: 22px 12px
        background-repeat: no-repeat
      .bulletin-text
        vertical-align:top
        margin: 0 4px
        font-size: 10px
      .icon-keyboard_arrow_right
        position: absolute
        font-size: 10px
        right: 12px
        top: 8px
    .background
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      z-index: -1
      -webkit-filter: blur(10px)
    .detail
      position: fixed
      top: 0
      left: 0
      z-index: 100
      height: 100%
      width: 100%
      overflow: auto
      background: rgba(7, 17, 27, 0.8)
      backdrop-filter: blur(10px)
      &.fade-enter-active, &.fade-leave-active
        transition: opacity .5s
        background: rgba(7, 17, 27, 0.8)
      &.fade-enter, &.fade-leave-active
        opacity: 0
      .detail-wrapper
        min-height: 100%
        width: 100%
        .detail-main
          font-size: 32px
          margin-top: 64px
          padding-bottom: 64px
          .name
            font-size: 16px
            line-height: 16px
            font-weight: 700
            text-align: center
          .star-wrapper
            text-align: center
            margin-top: 16px
            padding: 2px 0
          .title
            display: flex
            width: 80%
            margin: 28px auto 24px auto
            .line
              flex: 1
              position: relative
              top: -6px
              border-bottom: 1px solid rgba(255,255,255,0.2)
            .text
              padding: 0 12px
              font-size: 14px
              font-weight: 700
          .support
            width: 80%
            margin: 0 auto
            .class-item
              padding: 0 12px
              margin-bottom: 12px
              font-size: 0
              &:last-child
                margin-bottom: 0
              .icon
                display: inline-block
                width: 16px
                height: 16px
                vertical-align: top
                margin-right: 6px
                background-size: 16px 16px
                background-repeat: no-repeat
                &.decrease
                  bg-image('decrease_2')
                &.discount
                  bg-image('discount_2')
                &.guarantee
                  bg-image('guarantee_2')
                &.invoice
                  bg-image('invoice_2')
                &.special
                  bg-image('special_2')
              .text
                font-size: 12px
                font-weight: 200
                line-height: 16px
          .bulletin
            width: 80%
            margin: 0 auto
            .bulletin-text
              font-size: 12px
              line-height: 24px
              padding: 0 12px
      .detail-close
        position: relative
        width: 32px
        height: 32px
        margin: -64px auto 0 auto
        clear: both
        font-size: 32px
</style>
