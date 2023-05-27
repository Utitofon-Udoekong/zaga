<script setup>
useHead({
  bodyAttrs: {
    class: "flex h-full flex-col bg-zinc-100 text-zinc-700 dark:text-zinc-300 dark:bg-body-dark",
  },
  htmlAttrs: {
    lang: "en",
    class: "font-body h-full antialiased",
  },
});
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
