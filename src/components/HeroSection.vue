<template>
  <section
    id="hero"
    class="relative overflow-hidden bg-[var(--hero-bg)] transition-colors duration-300"
  >
    <div class="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:gap-12 lg:px-8">
      <div class="flex flex-col justify-center">
        <span
          class="mb-5 inline-flex w-fit rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-4 py-2 text-sm font-semibold text-[var(--accent)]"
        >
          Performance starts here
        </span>

        <h2 class="max-w-2xl text-4xl font-black leading-tight text-[var(--text-main)] sm:text-5xl lg:text-6xl">
          Professional sports gear for training, speed and power.
        </h2>

        <p class="mt-6 max-w-xl text-base leading-7 text-[var(--text-soft)] sm:text-lg">
          Explore premium sports accessories with a bold modern interface designed for athletes,
          training lovers, and active lifestyles.
        </p>

        <div class="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#products"
            class="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold text-slate-950 transition hover:scale-[1.02]"
          >
            Shop Now
          </a>

          <a
            href="#about"
            class="inline-flex items-center justify-center rounded-full border border-[var(--border-color)] px-6 py-3 text-sm font-bold text-[var(--text-main)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Explore Brand
          </a>
        </div>
      </div>

      <div class="grid gap-4 sm:grid-cols-2">
        <div class="rounded-3xl border border-[var(--border-color)] bg-[var(--glass-bg)] p-6 backdrop-blur">
          <p class="text-sm text-[var(--accent)]">Top Picks</p>
          <h3 class="mt-2 text-xl font-bold text-[var(--text-main)]">Cricket Gear</h3>
          <p class="mt-2 text-sm leading-6 text-[var(--text-soft)]">
            Strong, stylish and built for match-day performance.
          </p>
        </div>

        <div class="rounded-3xl border border-[var(--border-color)] bg-[var(--glass-bg)] p-6 backdrop-blur sm:translate-y-8">
          <p class="text-sm text-[var(--accent)]">New Collection</p>
          <h3 class="mt-2 text-xl font-bold text-[var(--text-main)]">Training Kits</h3>
          <p class="mt-2 text-sm leading-6 text-[var(--text-soft)]">
            Smart accessories for everyday practice and recovery.
          </p>
        </div>

        <div class="rounded-3xl border border-[var(--border-color)] bg-[var(--glass-bg)] p-6 backdrop-blur">
          <p class="text-sm text-[var(--accent)]">Built to Move</p>
          <h3 class="mt-2 text-xl font-bold text-[var(--text-main)]">Fitness Essentials</h3>
          <p class="mt-2 text-sm leading-6 text-[var(--text-soft)]">
            Modern products with clean design and athlete-first comfort.
          </p>
        </div>

        <div class="rounded-3xl border border-[var(--border-color)] bg-[var(--glass-bg)] p-6 backdrop-blur sm:translate-y-8">
          <p class="text-sm text-[var(--accent)]">Premium Feel</p>
          <h3 class="mt-2 text-xl font-bold text-[var(--text-main)]">Sport Style</h3>
          <p class="mt-2 text-sm leading-6 text-[var(--text-soft)]">
            Responsive UI and fast shopping flow for your project demo.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>