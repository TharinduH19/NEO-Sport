<template>
  <article
    class="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-lime-400/50"
  >
    <div class="relative flex h-56 items-center justify-center overflow-hidden bg-slate-950">
      <img
        :src="product.thumbnail"
        :alt="product.title"
        class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />

      <div class="absolute left-4 top-4 rounded-full bg-lime-400 px-3 py-1 text-xs font-bold text-slate-950">
        {{ product.category }}
      </div>
    </div>

    <div class="p-5">
      <div class="mb-3 flex items-center justify-between">
        <span class="text-sm font-medium text-amber-400">★ {{ product.rating }}</span>
        <span class="text-xs text-slate-500">{{ product.brand }}</span>
      </div>

      <h3 class="line-clamp-1 text-lg font-bold text-white">
        {{ product.title }}
      </h3>

      <p class="mt-2 line-clamp-3 text-sm leading-6 text-slate-400">
        {{ product.description }}
      </p>

      <div class="mt-5 flex items-center justify-between">
        <div>
          <p class="text-xs text-slate-500">Price</p>
          <p class="text-2xl font-black text-white">${{ product.price }}</p>
        </div>

        <div class="flex gap-2">
          <button
            @click="addToCart(product)"
            class="rounded-full border border-lime-400 px-4 py-2 text-sm font-semibold text-lime-400 transition hover:bg-lime-400 hover:text-slate-950"
          >
            Add
          </button>

          <RouterLink
            :to="`/product/${product.id}`"
            class="rounded-full bg-lime-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
          >
            View
          </RouterLink>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { useCart } from '../composables/useCart'
import type { Product } from '../types/product'

defineProps<{
  product: Product
}>()

const { addToCart } = useCart()
</script>