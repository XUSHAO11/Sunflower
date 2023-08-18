<template>
  <Header />
  <div class="content">
    <router-view v-slot="{ Component }">
      <!-- <transition mode="out-in" name="fade-transform"> -->
        <component :is="Component" />
      <!-- </transition> -->
    </router-view>
  </div>
</template>
<script setup lang="ts">
import Header from '../components/Header.vue'
</script>

<style scoped>
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.3s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-10px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
</style>
