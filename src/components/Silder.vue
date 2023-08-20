<template>
  <div class="Silder">
    <div class="card-content">
      <a-card title="Card">
        <p>Card content</p>
        <p>Card content</p>
      </a-card>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
}
</style>
