<template>
  <header
    class="sticky top-0 z-50 border-b border-[var(--border-color)] bg-[color:var(--nav-bg)]/95 backdrop-blur"
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <RouterLink to="/" class="flex items-center gap-3">
        <div
          class="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent)] text-xl font-bold text-slate-950"
        >
          🏅
        </div>

        <div>
          <h1 class="text-xl font-black text-[var(--text-main)]">NEO Sports</h1>
          <p class="text-xs text-[var(--text-soft)]">Elite sports accessories</p>
        </div>
      </RouterLink>

      <nav class="hidden items-center gap-6 md:flex">
        <a href="#hero" class="text-sm font-medium text-[var(--text-soft)] hover:text-[var(--accent)]">Home</a>
        <a href="#products" class="text-sm font-medium text-[var(--text-soft)] hover:text-[var(--accent)]">Products</a>
        <a href="#about" class="text-sm font-medium text-[var(--text-soft)] hover:text-[var(--accent)]">About</a>
      </nav>

      <div class="flex items-center gap-3">
        <button
          @click="toggleTheme"
          class="rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] px-4 py-2 text-sm font-semibold text-[var(--text-main)] transition hover:scale-[1.02]"
        >
          {{ theme === 'dark' ? '☀ Light' : '🌙 Dark' }}
        </button>

        <RouterLink
          to="/cart"
          class="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-bold text-slate-950"
        >
          Cart
          <span class="rounded-full bg-slate-950 px-2 py-0.5 text-xs text-white">
            {{ totalItems }}
          </span>
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useCart } from '../composables/useCart'
import { useTheme } from '../composables/useTheme'

const { totalItems } = useCart()
const { theme, toggleTheme } = useTheme()
</script>