<template>
  <article
    class="group overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)] shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
  >
    <div class="relative flex h-56 items-center justify-center overflow-hidden bg-[var(--soft-bg)]">
      <img
        :src="product.thumbnail"
        :alt="product.title"
        class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />

      <div
        class="absolute left-4 top-4 rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-bold text-slate-950 shadow"
      >
        {{ product.category }}
      </div>
    </div>

    <div class="p-5">
      <div class="mb-3 flex items-center justify-between">
        <span class="text-sm font-medium text-amber-500">★ {{ product.rating }}</span>
        <span class="text-xs text-[var(--text-soft)]">{{ product.brand }}</span>
      </div>

      <h3 class="line-clamp-1 text-lg font-bold text-[var(--text-main)]">
        {{ product.title }}
      </h3>

      <p class="mt-2 line-clamp-3 text-sm leading-6 text-[var(--text-soft)]">
        {{ product.description }}
      </p>

      <div class="mt-5 flex items-center justify-between">
        <div>
          <p class="text-xs text-[var(--text-soft)]">Price</p>
          <p class="text-2xl font-black text-[var(--text-main)]">${{ product.price }}</p>
        </div>

        <div class="flex gap-2">
          <button
            @click="addToCart(product)"
            class="rounded-full border border-[var(--accent)] px-4 py-2 text-sm font-semibold text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-slate-950"
          >
            Add
          </button>

          <RouterLink
            :to="`/product/${product.id}`"
            class="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
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