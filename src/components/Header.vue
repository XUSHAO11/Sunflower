<template>
  <div class="Header">
    <div class="HeaderBox">
      <img src="../assets/LOGO.png" alt="梓旭logo" class="zixulogo" />
      <table class="title">
        <a href="/">梓旭</a>
      </table>
      <div class="RightList">
        <ul v-for="item in sortList" :key="item.id" @click="scroll">
          <router-link :to="item.link">
              <li class="sortList">
            <i :class="item.icon"></i><span>{{ item.title }}</span>
          </li>
          </router-link>
        
        </ul>
      </div>
    </div>
    <div class="HeaderTitle">
      <img src="../assets/img/HeaderBg.png" alt="梓旭背景图" class="HeaderBg" />
      <div class="HeaderText">
        <vuetyped :strings="['欢迎访问我的博客', '梓旭のBlog', '来自河南']" :loop="true" :smart-backspace="true" class="typingtext">
          <div class="typing" />
        </vuetyped>
      </div>
    </div>
    <img src="../assets/img/xiangxia.svg" alt="" class="svgxiala" @click="xialaScroll"/>
  </div>
</template>

<script setup lang="ts">
import { KinesisContainer, KinesisElement } from "vue-kinesis";
const sortList = [
  { id: "0", icon: "icon iconfont icon-home-c", title: "home" ,link:"/"},
  { id: "1", icon: "icon iconfont icon-shouye", title: "about",link:"/About"},
];

const scroll = ()=>{
      window.scrollTo({
        top: 800,
        behavior: "smooth",
      });
}

const xialaScroll = ()=>{
  scroll()
}
</script>

<style lang="scss" scoped>
.Header {
  .svgxiala {
    position: absolute;
    left: 47%;
    transform: translate(-50%);
    bottom: 1%;
    z-index: 9999;
   animation: firstdiv 2s linear infinite alternate;
    
  }
  .HeaderBox {
    position: fixed;
    top: 1rem;
    width: 80%;
    left: 50%;
    padding: 0.5rem 1rem;
    transform: translate(-50%);
    background-color: #fffc;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 99999;
    .title {
      position: absolute;
      left: 50%;
      transform: translate(-50%);
    }
    .zixulogo {
      width: 30px;
    }
    .sortList {
      display: flex;
      align-items: center;
      cursor: pointer;
      i {
        padding: 0 5px;
      }
    }
    .RightList {
      display: flex;
      ul {
        padding: 0 10px;
      }
    }
  }
  .HeaderBg {
    position: relative;
    top: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  .HeaderTitle {
    .HeaderText {
      display: flex;
      justify-content: center;
      align-items: center;
      .typingtext {
        position: absolute;
        top: 50%;
        font-size: 2rem;
        color: #fffc;
      }
    }
  }
}

@keyframes firstdiv{
   0%{
      transform: scale(1);
   }
   25%{
      transform: scale(0.9);
   }
   50%{
      transform: scale(0.8);
   }
   75%{
      transform: scale(0.9);
   }
   100%{
      transform: scale(1);
   }
}

</style>
