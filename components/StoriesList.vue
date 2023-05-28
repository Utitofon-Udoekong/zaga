<script setup lang="ts">

const stories = computed(() => storyList || []);
</script>

<template>
  <div
    v-if="stories?.length"
    class="not-prose grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
  >
    <StoryListItem v-for="story in stories" :key="story._path" :story="story" />
    
  </div>
  <div v-else>
    <p class="">No Stories found.</p>
  </div>
</template>
