<template>
  <div class="Silder">
    <div class="card-content">
      <a-card>
        <div class="heardCard">
          <a-avatar :size="{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }">
            <template #icon>
              <img src="https://q1.qlogo.cn/g?b=qq&nk=1217671134&s=640" alt="avatar" />
            </template>
          </a-avatar>
        </div>
        <div class="icpnSty"><span><comment-outlined /></span><span><read-outlined />{{ countPage.length  }}</span></div>
        <a-divider dashed class="adivider"/>
        <a-list size="small" bordered :data-source="countPage" class="listSty">
          <template #renderItem="{ item }">
            <a-list-item  class="listSty"><caret-right-filled/>{{ item.title }}</a-list-item>
          </template>
          <template #header>
            <div>近期文章</div>
          </template>
        </a-list>
      </a-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import { CommentOutlined, ReadOutlined ,CaretRightFilled} from "@ant-design/icons-vue";
import { useCounterStore } from "../store/counter";
const counter = useCounterStore();
let countPage =ref()
countPage.value=counter.countPage
</script>

<style lang="scss" scoped>
.Silder {
  padding: 100px 0;
  height: 100vh;
  position: relative;
}
:where(.css-dev-only-do-not-override-eq3tly).ant-card {
  background-color: #4259efdd !important;
  color: #fff !important;
}
.ant-card-head {
  color: #fff !important;
}
.card-content {
  position: sticky;
  top: 100px;
  .heardCard {
    display: flex;
    justify-content: center;
  }
  .icpnSty {
    font-size: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    span{
      padding: 0 1rem;
      
    }
  }
  .listSty{
    color: #fff;
    border: none;
  }
  .adivider{
    border-color: #7cb305
  }
}
</style>
