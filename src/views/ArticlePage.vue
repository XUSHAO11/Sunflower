<template>
  <div class="ArticlePage">
 <div v-html="ArticlePageBody"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useCounterStore } from "../store/counter";
const counter = useCounterStore();
const route = useRoute();
const countPage =ref()
const ArticlePageBody =ref()

    countPage.value=counter.countPage
    countPage.value.forEach(i => {
        if (i.id==route.query.userIda) {
            ArticlePageBody.value=i.body
        }
    })

</script>

<style lang="scss" scoped>
.ArticlePage{
    padding: 20%;
}
</style>
