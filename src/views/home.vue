<template>
  <div id="Home">
    <a-row>
      <a-col :span="16"><Content/></a-col>
      <a-col :span="8"><Silder/></a-col>
    </a-row>
  </div>
</template>
<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
import Silder from '../components/Silder.vue'
import Content from '../components/Content.vue'

const num = ref();
axios.get("/api/repos/XUSHAO11/i-message/issues").then((res) => {
  console.log(res.data);
  num.value = res.data;
});
</script>

<style lang="scss" scoped>
#Home {
  padding: 0 10%;
}
</style>
