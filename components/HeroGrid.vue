<script setup lang="ts"></script>

<template>
  <div class="not-prose mt-16 sm:mt-24 content-visibility-visible contain-intrinsic-size-[auto_600px]">
    <div class="flex overflow-x-clip items-center justify-center gap-5 py-4 sm:gap-6 relative z-20">
      <!-- col1 -->
      <div class="hidden lg:flex flex-col gap-5 sm:gap-6 " v-parallax data-rellax-speed="3">
        <div class="relative aspect-[2/3] w-36 lg:w-52 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
          <NuxtImg placeholder sizes="sm:100vw md:50vw lg:220px" class="absolute inset-0 h-full w-full object-cover"
            src="/img/court-1/cover.webp" alt="Alt text" format="webp" loading="lazy" />
        </div>
      </div>

      <!-- col2 -->
      <div class="flex flex-col gap-5 sm:gap-6" v-parallax data-rellax-speed="1">
        <div class="relative aspect-[4/3] w-44 md:w-52 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
          <NuxtImg placeholder sizes="sm:100vw md:50vw lg:220px" class="absolute inset-0 h-full w-full object-cover"
            src="/img/hbh/cover.webp" alt="Alt text" format="webp" loading="lazy" />
        </div>
        <div class="relative aspect-[3/4] w-44 md:w-52 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
          <NuxtImg placeholder sizes="sm:100vw md:50vw lg:220px" class="absolute inset-0 h-full w-full object-cover"
            src="/img/ihl/cover.webp" alt="Alt text" format="webp" loading="lazy" />
        </div>
      </div>

      <!-- col3 -->
      <div class="flex flex-col gap-5 sm:gap-6" v-parallax data-rellax-speed="0">
        <div
          class="relative aspect-[2/3] w-60 md:w-80 lg:w-96 flex-none overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
          <NuxtImg placeholder sizes="sm:100vw md:50vw lg:380px" class="absolute inset-0 h-full w-full object-cover"
            src="/img/musa/cover.webp" alt="Alt text" format="webp" loading="lazy" />
        </div>
      </div>

      <!-- col4 -->
      <div class="flex flex-col gap-5 sm:gap-6" v-parallax data-rellax-speed="1">
        <div class="relative aspect-[3/4] w-44 md:w-52 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
          <NuxtImg placeholder sizes="sm:100vw md:50vw lg:220px" class="absolute inset-0 h-full w-full object-cover"
            src="/img/solitaire/cover.webp" alt="Alt text" format="webp" loading="lazy" />
        </div>
        <div class="relative aspect-[4/3] w-44 md:w-52 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
          <NuxtImg placeholder sizes="sm:100vw md:50vw lg:220px" class="absolute inset-0 h-full w-full object-cover"
            src="/img/wanderer/cover.webp" alt="Alt text" format="webp" loading="lazy" />
        </div>
      </div>

      <!-- col5 -->
      <div class="hidden lg:flex flex-col gap-5 sm:gap-6" v-parallax data-rellax-speed="3">
        <div class="relative aspect-[2/3] w-44 lg:w-52 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
          <NuxtImg placeholder sizes="sm:100vw md:50vw lg:220px" class="absolute inset-0 h-full w-full object-cover"
            src="/img/horned/cover.webp" alt="Alt text" format="webp" loading="lazy" />
        </div>
      </div>
    </div>
  </div>
</template>
