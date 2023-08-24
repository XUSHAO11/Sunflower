<template>
  <div id="Home">
    <a-row>
      <a-col :span="16"><Content/></a-col>
      <a-col :span="8"><Silder/></a-col>
    </a-row>
  </div>
</template>
<script setup lang="ts">
import Silder from '../components/Silder.vue'
import Content from '../components/Content.vue'
</script>

<style lang="scss" scoped>
#Home {
  padding: 0 10%;
  // height: 1000px;
}
::-webkit-scrollbar{
  display: none;
}
</style>
