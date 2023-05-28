<script setup lang="ts">
const route = useRoute()
const story = storyList.find((stor) => stor._path === route.path)

</script>
<template>
  <div class="px-20">
    <p class="text-4xl text-white font-semibold">{{ story?.title }}</p>
    <ThreeImages src1="/img/ihl/5.webp" alt1="in her light" src2="/img/musa/6.webp" alt2="la musa"
    src3="/img/solitaire/4.webp" alt3="solitaire" />
    <p>{{ story?.description }}</p>
  </div>
</template>
<style>
</style>