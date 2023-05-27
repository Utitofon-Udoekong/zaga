<script setup lang="ts">
const route = useRoute()
const gallery = galleryList.find((gal) => gal._path === route.path)
</script>
<template>
  <div>
    <PageHeader :title="gallery?.title!" :description="gallery?.description" />
    <MasonryGallery :images="gallery?.images!" />
  </div>
</template>
<style>
</style>