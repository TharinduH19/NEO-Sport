<template>
  <div class="min-h-screen bg-slate-50">
    <div class="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <RouterLink
        to="/"
        class="mb-8 inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
      >
        ← Back to Store
      </RouterLink>

      <div class="grid gap-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">
        <div class="flex min-h-[320px] items-center justify-center rounded-3xl bg-slate-100 text-8xl">
          🏅
        </div>

        <div class="flex flex-col justify-center">
          <p class="text-sm font-semibold uppercase tracking-wider text-slate-500">Product Detail</p>
          <h1 class="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Product ID: {{ route.params.id }}
          </h1>

          <p class="mt-4 text-base leading-7 text-slate-600">
            This is a Day 1 placeholder detail page. Later, this page will show real product information using API data.
          </p>

          <div class="mt-6 flex flex-wrap gap-3">
            <span class="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">Responsive Layout</span>
            <span class="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">Vue Router Ready</span>
            <span class="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">TypeScript Project</span>
          </div>

          <button
            class="mt-8 w-fit rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:scale-[1.02]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>