<template>
  <section id="products" class="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
    <div class="mb-10 text-center">
      <p class="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">Sports Collection</p>
      <h2 class="mt-3 text-3xl font-black text-[var(--text-main)] sm:text-4xl">Level up your game</h2>
      <p class="mx-auto mt-4 max-w-2xl text-[var(--text-soft)]">
        Premium sports accessories powered by DummyJSON and designed as a modern sports store experience.
      </p>
    </div>

    <div
      v-if="products.length === 0"
      class="rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)] p-10 text-center"
    >
      <h3 class="text-xl font-bold text-[var(--text-main)]">No sports items found</h3>
      <p class="mt-3 text-sm text-[var(--text-soft)]">Try another search word.</p>
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