<template>
  <div class="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-300">
    <NavBar />

    <div class="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <RouterLink
        to="/"
        class="mb-8 inline-flex items-center rounded-full border border-[var(--border-color)] px-4 py-2 text-sm font-semibold text-[var(--text-soft)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
      >
        ← Back to Store
      </RouterLink>

      <div v-if="isLoading" class="py-20 text-center">
        <div class="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-[var(--border-color)] border-t-[var(--accent)]"></div>
        <p class="mt-4 text-sm font-medium text-[var(--text-soft)]">Loading product details...</p>
      </div>

      <div
        v-else-if="errorMessage"
        class="rounded-3xl border border-red-500/30 bg-red-500/10 p-8 text-center"
      >
        <h2 class="text-2xl font-bold text-red-500">Failed to load product</h2>
        <p class="mt-3 text-sm text-red-400">{{ errorMessage }}</p>
      </div>

      <div
        v-else-if="product"
        class="grid gap-8 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)] p-6 shadow-xl md:grid-cols-2 md:p-10"
      >
        <div class="overflow-hidden rounded-3xl bg-[var(--soft-bg)]">
          <img
            :src="product.thumbnail"
            :alt="product.title"
            class="h-full w-full object-cover"
          />
        </div>

        <div class="flex flex-col justify-center">
          <div class="mb-3 flex flex-wrap items-center gap-3">
            <span class="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-bold text-slate-950">
              {{ product.category }}
            </span>
            <span class="rounded-full bg-amber-500/15 px-4 py-2 text-sm font-medium text-amber-500">
              ★ {{ product.rating }}
            </span>
          </div>

          <h1 class="text-3xl font-black sm:text-4xl">
            {{ product.title }}
          </h1>

          <p class="mt-4 text-base leading-7 text-[var(--text-soft)]">
            {{ product.description }}
          </p>

          <div class="mt-6 grid grid-cols-2 gap-4 text-sm text-[var(--text-soft)]">
            <div class="rounded-2xl bg-[var(--soft-bg)] p-4">
              <p class="font-semibold text-[var(--text-main)]">Brand</p>
              <p class="mt-1">{{ product.brand }}</p>
            </div>

            <div class="rounded-2xl bg-[var(--soft-bg)] p-4">
              <p class="font-semibold text-[var(--text-main)]">Stock</p>
              <p class="mt-1">{{ product.stock }}</p>
            </div>

            <div class="rounded-2xl bg-[var(--soft-bg)] p-4">
              <p class="font-semibold text-[var(--text-main)]">Discount</p>
              <p class="mt-1">{{ product.discountPercentage }}%</p>
            </div>

            <div class="rounded-2xl bg-[var(--soft-bg)] p-4">
              <p class="font-semibold text-[var(--text-main)]">Category</p>
              <p class="mt-1">{{ product.category }}</p>
            </div>
          </div>

          <div class="mt-8 flex items-center justify-between">
            <div>
              <p class="text-sm text-[var(--text-soft)]">Price</p>
              <p class="text-3xl font-black">${{ product.price }}</p>
            </div>

            <button
              @click="addToCart(product)"
              class="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold text-slate-950 transition hover:scale-[1.02]"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div v-else class="text-center text-[var(--text-soft)]">
        Product not found.
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import AppFooter from '../components/AppFooter.vue'
import NavBar from '../components/NavBar.vue'
import { useCart } from '../composables/useCart'
import { fetchProductById } from '../services/api'
import type { Product } from '../types/product'

const route = useRoute()
const { addToCart } = useCart()

const product = ref<Product | null>(null)
const isLoading = ref<boolean>(true)
const errorMessage = ref<string>('')

async function loadProduct(): Promise<void> {
  try {
    isLoading.value = true
    errorMessage.value = ''

    const productId = Number(route.params.id)

    if (Number.isNaN(productId)) {
      throw new Error('Invalid product id')
    }

    product.value = await fetchProductById(productId)
  } catch (error) {
    if (error instanceof Error) {
      errorMessage.value = error.message
    } else {
      errorMessage.value = 'An unexpected error occurred.'
    }
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  loadProduct()
})
</script>