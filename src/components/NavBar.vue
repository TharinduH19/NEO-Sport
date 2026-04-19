<template>
  <header class="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <RouterLink to="/" class="flex items-center gap-2">
        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white font-bold">
          S
        </div>
        <div>
          <h1 class="text-lg font-bold leading-none">SportyStore</h1>
          <p class="text-xs text-slate-500">Sports Accessories Shop</p>
        </div>
      </RouterLink>

      <nav class="hidden items-center gap-6 md:flex">
        <a href="#featured" class="text-sm font-medium text-slate-600 transition hover:text-slate-900">
          Featured
        </a>
        <a href="#categories" class="text-sm font-medium text-slate-600 transition hover:text-slate-900">
          Categories
        </a>
        <a href="#about" class="text-sm font-medium text-slate-600 transition hover:text-slate-900">
          About
        </a>
      </nav>

      <div class="flex items-center gap-3">
        <button
          class="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
        >
          Log In
        </button>

        <button
          class="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:scale-[1.02]"
        >
          Cart
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>