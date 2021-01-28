<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="" />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="https://www.mi.com/" target="_black">小米商城</a>
      <span>|</span>
      <a href="https://github.com/" target="_black">Vue全栈课程</a>
      <span>|</span>
      <a href="https://www.baidu.com/" target="_black">React全家桶课程</a>
      <span>|</span>
      <a
        href="https://sale.vmall.com/huaweizone.html?cid=78138"
        target="_black"
      >
        微信支付专项课程(H5+小程序+Mongo)
      </a>
    </div>
    <div class="copyright">
      Copyright ©2019
      <span class="domain">mi.futurefe.com</span>
      All Rights Reserved.
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-footer",
};
</script>
<style lang="scss">
@import "./../assets/scss/config.scss";
.footer {
  height: 234px;
  border-top: 4px solid $colorA;
  background-color: $colorB;
  color: $colorD;
  font-size: 16px;
  text-align: center;
  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      height: 36px;
      img {
        width: 53px;
        height: 36px;
        margin-bottom: 13px;
      }
    }
  }
  .footer-link {
    a {
      color: $colorD;
      display: inline-block;
    }
    span {
      margin: 0 10px;
    }
    margin-bottom: 13px;
  }
  .copyright {
    .domain {
      color: $colorA;
    }
  }
}
</style>