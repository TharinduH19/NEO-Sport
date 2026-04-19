<template>
  <section id="categories" class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="mb-10 text-center">
      <p class="text-sm font-semibold uppercase tracking-widest text-slate-500">Categories</p>
      <h2 class="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Shop by sport style</h2>
      <p class="mx-auto mt-4 max-w-2xl text-slate-600">
        This is a Day 1 preview section. Later, we will connect these cards to real product data.
      </p>
    </div>

    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="category in categories"
        :key="category.name"
        class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
      >
        <div class="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-2xl text-white">
          {{ category.icon }}
        </div>
        <h3 class="text-xl font-bold text-slate-900">{{ category.name }}</h3>
        <p class="mt-2 text-sm leading-6 text-slate-600">{{ category.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface CategoryCard {
  name: string
  icon: string
  description: string
}

const categories: CategoryCard[] = [
  {
    name: 'Running',
    icon: '🏃',
    description: 'Shoes, apparel, and essentials built for speed and endurance.',
  },
  {
    name: 'Fitness',
    icon: '🏋️',
    description: 'Workout gear and accessories for strength and daily training.',
  },
  {
    name: 'Outdoor',
    icon: '⛰️',
    description: 'Reliable products for hiking, adventure, and active lifestyle.',
  },
  {
    name: 'Team Sports',
    icon: '⚽',
    description: 'Equipment and accessories for football, basketball, and more.',
  },
]
</script>