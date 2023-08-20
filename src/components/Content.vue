<template>
  <div class="Content">
    <div class="animate__animated animate__backInUp">
      <div v-for="item in num" :key="item">
        <a-card hoverable  @click="ArticlePage(item.id)">
          <template #cover >
            <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
          </template>
          <template #actions>
            <setting-outlined />
            <edit-outlined  />
            <ellipsis-outlined  />
          </template>
          <a-card-meta :title="item.title" description="This is the description">
            <template #avatar>
              <a-avatar src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
            </template>
          </a-card-meta>
        </a-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SettingOutlined, EditOutlined, EllipsisOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";
import { useCounterStore } from "../store/counter";
import { useRouter } from "vue-router";
const router = useRouter();
import axios from "axios";
const counter = useCounterStore();
const num = ref();
axios.get("/api/repos/XUSHAO11/i-message/issues").then((res) => {
  console.log(res.data);
  num.value = res.data;
  console.log(num.value);
  counter.countPage = res.data;
});
const ArticlePage = (userId) => {
  router.push({path:'/ArticlePage',query:{userIda:userId}})
};
</script>

<style lang="scss" scoped>
.Content {
  padding: 100px 0;
  height: 100vh;
  margin-right: 20px;
}
:where(.css-dev-only-do-not-override-eq3tly).ant-card .ant-card-cover > * {
  width: 50%;
}
:where(.css-dev-only-do-not-override-eq3tly).ant-card-hoverable {
  cursor: pointer;
  margin-bottom: 15px !important;
}
</style>
