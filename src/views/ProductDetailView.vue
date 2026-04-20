<template>
  <div class="min-h-screen bg-slate-950">
    <NavBar />

    <div class="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <RouterLink
        to="/"
        class="mb-8 inline-flex items-center rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-lime-400 hover:text-lime-400"
      >
        ← Back to Store
      </RouterLink>

      <div v-if="isLoading" class="py-20 text-center">
        <div class="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-slate-700 border-t-lime-400"></div>
        <p class="mt-4 text-sm font-medium text-slate-400">Loading product details...</p>
      </div>

      <div v-else-if="errorMessage" class="rounded-3xl border border-red-500/30 bg-red-500/10 p-8 text-center">
        <h2 class="text-2xl font-bold text-red-300">Failed to load product</h2>
        <p class="mt-3 text-sm text-red-200">{{ errorMessage }}</p>
      </div>

      <div
        v-else-if="product"
        class="grid gap-8 rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl shadow-black/20 md:grid-cols-2 md:p-10"
      >
        <div class="overflow-hidden rounded-3xl bg-slate-950">
          <img
            :src="product.thumbnail"
            :alt="product.title"
            class="h-full w-full object-cover"
          />
        </div>

        <div class="flex flex-col justify-center">
          <div class="mb-3 flex flex-wrap items-center gap-3">
            <span class="rounded-full bg-lime-400 px-4 py-2 text-sm font-bold text-slate-950">
              {{ product.category }}
            </span>
            <span class="rounded-full bg-amber-500/20 px-4 py-2 text-sm font-medium text-amber-300">
              ★ {{ product.rating }}
            </span>
          </div>

          <h1 class="text-3xl font-black text-white sm:text-4xl">
            {{ product.title }}
          </h1>

          <p class="mt-4 text-base leading-7 text-slate-400">
            {{ product.description }}
          </p>

          <div class="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-400">
            <div class="rounded-2xl bg-slate-950 p-4">
              <p class="font-semibold text-white">Brand</p>
              <p class="mt-1">{{ product.brand }}</p>
            </div>

            <div class="rounded-2xl bg-slate-950 p-4">
              <p class="font-semibold text-white">Stock</p>
              <p class="mt-1">{{ product.stock }}</p>
            </div>

            <div class="rounded-2xl bg-slate-950 p-4">
              <p class="font-semibold text-white">Discount</p>
              <p class="mt-1">{{ product.discountPercentage }}%</p>
            </div>

            <div class="rounded-2xl bg-slate-950 p-4">
              <p class="font-semibold text-white">Category</p>
              <p class="mt-1">{{ product.category }}</p>
            </div>
          </div>

          <div class="mt-8 flex items-center justify-between">
            <div>
              <p class="text-sm text-slate-500">Price</p>
              <p class="text-3xl font-black text-white">${{ product.price }}</p>
            </div>

            <button
              @click="addToCart(product)"
              class="rounded-full bg-lime-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:scale-[1.02]"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div v-else class="text-center text-slate-400">
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