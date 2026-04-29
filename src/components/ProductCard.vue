<template>
  <article class="card hover:scale-105 overflow-hidden">

    <img
      :src="product.thumbnail"
      :alt="product.title"
      class="h-52 w-full object-cover"
    />

    <div class="p-5">

      <h3 class="text-lg font-bold mb-1">
        {{ product.title }}
      </h3>

      <p class="text-sm text-[var(--text-soft)] line-clamp-2">
        {{ product.description }}
      </p>

      <div class="mt-4 flex items-center justify-between">

        <span class="text-xl font-bold">
          ${{ product.price }}
        </span>

        <button
          @click="addToCart(product)"
          class="btn-primary hover:scale-105"
        >
          Add
        </button>

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