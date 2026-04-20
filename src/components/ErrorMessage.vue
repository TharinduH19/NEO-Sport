<template>
  <div class="mx-auto max-w-3xl px-4 py-16 text-center">
    <div class="rounded-3xl border border-red-500/30 bg-red-500/10 p-8">
      <h3 class="text-xl font-bold text-red-300">Something went wrong</h3>
      <p class="mt-3 text-sm leading-6 text-red-200">
        {{ message }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  message: string
}>()
</script>