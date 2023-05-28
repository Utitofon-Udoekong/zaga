<template>
  <div class="not-prose mt-32">
    <div class="divide-y divide-zinc-900/10 dark:divide-zinc-100/10">
      <p class="text-2xl font-bold leading-10 tracking-tight text-zinc-900 dark:text-zinc-100">
        Frequently asked questions
      </p>
      <dl class="mt-10 space-y-6 divide-y divide-zinc-900/10 dark:divide-zinc-100/10">
        <slot name="items" />
      </dl>
    </div>
  </div>
</template>
