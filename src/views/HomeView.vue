<template>
  <div>
    <NavBar />
    <HeroSection />

    <main>
      <CategoryPreview />

      <section id="featured" class="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div class="mb-10 text-center">
          <p class="text-sm font-semibold uppercase tracking-widest text-slate-500">Featured Preview</p>
          <h2 class="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Starter product layout</h2>
          <p class="mx-auto mt-4 max-w-2xl text-slate-600">
            These are static preview cards for Day 1. On Day 2, you can replace them with real API data.
          </p>
        </div>

        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <article
            v-for="item in starterProducts"
            :key="item.id"
            class="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div class="flex h-52 items-center justify-center bg-slate-100 text-6xl">
              {{ item.emoji }}
            </div>

            <div class="p-5">
              <p class="text-sm font-medium text-slate-500">{{ item.category }}</p>
              <h3 class="mt-2 text-lg font-bold text-slate-900">{{ item.title }}</h3>
              <p class="mt-2 text-sm leading-6 text-slate-600">{{ item.description }}</p>

              <div class="mt-4 flex items-center justify-between">
                <span class="text-lg font-extrabold text-slate-900">${{ item.price }}</span>

                <RouterLink
                  :to="`/product/${item.id}`"
                  class="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:scale-[1.02]"
                >
                  View
                </RouterLink>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import NavBar from '../components/NavBar.vue'
import HeroSection from '../components/HeroSection.vue'
import CategoryPreview from '../components/CategoryPreview.vue'
import AppFooter from '../components/AppFooter.vue'

interface StarterProduct {
  id: number
  title: string
  category: string
  description: string
  price: number
  emoji: string
}

const starterProducts: StarterProduct[] = [
  {
    id: 1,
    title: 'Pro Running Shoes',
    category: 'Running',
    description: 'Comfortable lightweight shoes designed for speed and daily training.',
    price: 89,
    emoji: '👟',
  },
  {
    id: 2,
    title: 'Athlete Backpack',
    category: 'Accessories',
    description: 'Spacious sports bag for gym, travel, and team practice.',
    price: 54,
    emoji: '🎒',
  },
  {
    id: 3,
    title: 'Fitness Smart Watch',
    category: 'Technology',
    description: 'Track heart rate, steps, and daily activity with ease.',
    price: 120,
    emoji: '⌚',
  },
  {
    id: 4,
    title: 'Training Bottle',
    category: 'Fitness',
    description: 'Stay hydrated during workouts and outdoor activities.',
    price: 18,
    emoji: '🍼',
  },
]
</script>