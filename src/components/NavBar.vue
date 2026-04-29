<template>
  <header class="sticky top-0 bg-[var(--card-bg)] border-b border-[var(--border-color)]">

    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

      <!-- Logo -->
      <h1 class="text-xl font-bold">
        NEO <span class="text-[var(--accent)]">Sports</span>
      </h1>

      <!-- Right side -->
      <div class="flex items-center gap-4">

        <!-- Theme button -->
        <button
          @click="toggleTheme"
          class="btn-outline hover:scale-105"
        >
          {{ theme === 'dark' ? '☀' : '🌙' }}
        </button>

        <!-- Cart -->
        <RouterLink
          to="/cart"
          class="btn-primary flex items-center gap-2"
        >
          🛒 {{ totalItems }}
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