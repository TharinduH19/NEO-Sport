<template>
  <header class="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <RouterLink to="/" class="flex items-center gap-3">
        <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-lime-400 text-xl font-bold text-slate-950">
          🏅
        </div>

        <div>
          <h1 class="text-xl font-black text-white">NEO Sports</h1>
          <p class="text-xs text-slate-400">Elite sports accessories</p>
        </div>
      </RouterLink>

      <nav class="hidden items-center gap-6 md:flex">
        <a href="#hero" class="text-sm font-medium text-slate-300 hover:text-lime-400">Home</a>
        <a href="#products" class="text-sm font-medium text-slate-300 hover:text-lime-400">Products</a>
        <a href="#about" class="text-sm font-medium text-slate-300 hover:text-lime-400">About</a>
      </nav>

      <RouterLink
        to="/cart"
        class="inline-flex items-center gap-2 rounded-full bg-lime-400 px-4 py-2 text-sm font-bold text-slate-950"
      >
        Cart
        <span class="rounded-full bg-slate-950 px-2 py-0.5 text-xs text-white">
          {{ totalItems }}
        </span>
      </RouterLink>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useCart } from '../composables/useCart'

const { totalItems } = useCart()
</script>