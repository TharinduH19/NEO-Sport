<template>
  <section id="products" class="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
    <div class="mb-10 text-center">
      <p class="text-sm font-semibold uppercase tracking-[0.25em] text-lime-400">Sports Collection</p>
      <h2 class="mt-3 text-3xl font-black text-white sm:text-4xl">Level up your game</h2>
      <p class="mx-auto mt-4 max-w-2xl text-slate-400">
        Premium sports accessories powered by DummyJSON and designed as a modern sports store experience.
      </p>
    </div>

    <div v-if="products.length === 0" class="rounded-3xl border border-slate-800 bg-slate-900 p-10 text-center">
      <h3 class="text-xl font-bold text-white">No sports items found</h3>
      <p class="mt-3 text-sm text-slate-400">Try another search word.</p>
    </div>

    <div v-else class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Product } from '../types/product'
import ProductCard from './ProductCard.vue'

defineProps<{
  products: Product[]
}>()
</script>