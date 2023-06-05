<script setup lang="ts">
//@ts-ignore
import { gsap, Power2, interpolate } from "gsap/all";
import { useElementBounding } from "@vueuse/core";
const emit = defineEmits(["enter", "move"]);

const {index, title, description, year, igLink} = defineProps<{
    title: string
    description: string
    year: string
    index: number
    igLink: string
}>();
const number = computed(() => `${index + 1}`.padStart(2, "0"));
const $el = ref(null);

const onEnter = () => {
  emit("enter", index);
  gsap.killTweensOf($el.value);

  gsap.to($el.value, {
    paddingLeft: 0,
    duration: 0.335,
    ease: Power2.easeInOut,
  });
};

const onLeave = () => {
  gsap.killTweensOf($el.value);

  gsap.to($el.value, {
    paddingLeft: "9rem",
    duration: 0.335,
    ease: Power2.easeInOut,
  });
};

const onMove = (e: MouseEvent) => {
  const { x: left, y: top, width, height } = useElementBounding($el)

  const progressionY = (1 / height.value) * (e.clientY - top.value);
  const progressionX = (1 / width.value) * (e.clientX - left.value);

  const x = interpolate(-1, 1, progressionX);
  const y = interpolate(-1, 1, progressionY);

  emit("move", { x, y, index: index });
};
</script>
<template>
  <NuxtLink :external="true" :to="igLink" class="dark:text-zinc-400 flex flex-col gap-1 border-b border-gray-400 cursor-pointer">
    <div ref="$el"
      @mouseenter="onEnter"
      @mouseleave="onLeave"
      @mousemove="onMove" 
      class="pl-32 py-12 flex items-center space-x-8 relative z-20">
      <p class="flex items-center gap-2">
        <span class="font-display text-2xl text-zinc-500 dark:text-zinc-500">{{ year }}</span>
        <span><strong class="font-semibold dark:text-zinc-200">{{ title }}</strong></span>
      </p>
      <span class="text-sm">{{ description }}</span>
    </div>
  </NuxtLink>
</template>
