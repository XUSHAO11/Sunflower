<template>
  <div class="Content">
    <div>
      <a-card hoverable>
        <template #cover>
          <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
        </template>
        <template #actions>
          <setting-outlined key="setting" />
          <edit-outlined key="edit" />
          <ellipsis-outlined key="ellipsis" />
        </template>
        <a-card-meta title="Card title" description="This is the description">
          <template #avatar>
            <a-avatar src="https://joeschmoe.io/api/v1/random" />
          </template>
        </a-card-meta>
      </a-card>

      <a-card hoverable>
        <template #cover>
          <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
        </template>
        <template #actions>
          <setting-outlined key="setting" />
          <edit-outlined key="edit" />
          <ellipsis-outlined key="ellipsis" />
        </template>
        <a-card-meta title="Card title" description="This is the description">
          <template #avatar>
            <a-avatar src="https://joeschmoe.io/api/v1/random" />
          </template>
        </a-card-meta>
      </a-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SettingOutlined, EditOutlined, EllipsisOutlined } from "@ant-design/icons-vue";
import { defineComponent } from "vue";
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
