<script setup lang="ts">
import { withTrailingSlash } from "ufo";

defineProps({
  path: {
    type: String,
    default: "galleries",
  },
});

// const { data: _galleries } = await useAsyncData(
//   "galleries",
//   async () =>
//     await queryContent(withTrailingSlash(props.path)).find()
// );

const galleries = computed(() => galleryList || [])

</script>

<template>
  <div v-if="galleries?.length" class="not-prose grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <GalleryListItem
        v-for="(gallery, index) in galleries"
        :key="index"
        :gallery="gallery"
      />
    </div>
    <div v-else>
      <p class="">
        No galleries found.
      </p>
    </div>
</template>
