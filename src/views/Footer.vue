<template>
  <div>
    <div class="footer_icon">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </div>
    <div class="footer_text">
      <div class="footer_textbox">
        <h3>导航</h3>
        <div class="footer_text_down">
          <a href="#" v-for="(item, index) in 4" :key="index">{{ index }}</a>
        </div>
      </div>
      <div class="footer_textbox">
        <h3>服务</h3>
        <div class="footer_text_down">
          <a href="#" v-for="(item, index) in 3" :key="index">{{ index }}</a>
        </div>
      </div>
    </div>
    <div class="Footer">
      <div class="copyright">
        ©2021 - 2023 By
        <a href="/" rel="external nofollow" data-pjax-state="">梓旭</a>
        <a href="https://github.com/hexo-theme-Acrylic/Hexo-Theme-Acrylic-Next" rel="external nofollow" target="_blank"> Theme By SunFlower-ZiXu</a>
        <a href="" rel="external nofollow" target="_blank"></a>
      </div>
      <div>豫ICP备2022014432号-1</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.Footer {
  width: 100%;
  background-color: #f1f3f8;
  height: 3rem;
  padding: 1.5rem 10%;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  position: sticky;
  bottom: 0;
}
.footer_icon {
  display: flex;
  padding: 0 38%;
  justify-content: space-evenly;
  div {
    width: 50px;
    height: 50px;
    border: 1px solid red;
  }
}
.footer_text {
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1200px;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 1rem auto 3rem;
  padding: 0 1rem;
  box-sizing: border-box;
  .footer_textbox {
    min-width: 120px;
    h3 {
      color: var(--heo-secondtext);
      font-size: 1rem;
      position: relative;
      font-weight: 700;
      margin: 16px 0;
    }
    .footer_text_down {
      display: flex;
      flex-direction: column;
      a {
        font-size: 0.8rem;
        line-height: 0.8rem;
        color: var(--heo-fontcolor);
        margin: 0.38rem auto 0.38rem 0;
        overflow: visible;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 120px;
        background-color: transparent;
        color: var(--heo-fontcolor);
        text-decoration: none;
        transition: all 0.2s ease 0s;
        overflow-wrap: break-word;
        -webkit-user-drag: none;
      }
    }
  }
}
</style>
