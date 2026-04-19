<template>
  <section class="relative overflow-hidden bg-slate-900 text-white">
    <div class="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8">
      <div class="flex flex-col justify-center">
        <p class="mb-4 inline-block w-fit rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-slate-200">
          Power your performance
        </p>

        <h2 class="max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl">
          Find the best sports gear for every game.
        </h2>

        <p class="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
          Discover quality products for training, fitness, outdoor activities, and everyday sports style.
          Built for speed, comfort, and performance.
        </p>

        <div class="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="#featured"
            class="rounded-full bg-white px-6 py-3 text-center text-sm font-bold text-slate-900 transition hover:scale-[1.02]"
          >
            Shop Now
          </a>

          <a
            href="#categories"
            class="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10"
          >
            Browse Categories
          </a>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div class="rounded-3xl bg-white/10 p-6 backdrop-blur">
          <p class="text-sm text-slate-300">Top Choice</p>
          <h3 class="mt-2 text-xl font-bold">Running Shoes</h3>
          <p class="mt-2 text-sm text-slate-300">
            Lightweight and durable gear for athletes who want speed and comfort.
          </p>
        </div>

        <div class="mt-10 rounded-3xl bg-white/10 p-6 backdrop-blur">
          <p class="text-sm text-slate-300">Best Seller</p>
          <h3 class="mt-2 text-xl font-bold">Training Bags</h3>
          <p class="mt-2 text-sm text-slate-300">
            Carry your essentials with stylish and functional sports bags.
          </p>
        </div>

        <div class="rounded-3xl bg-white/10 p-6 backdrop-blur">
          <p class="text-sm text-slate-300">New Arrival</p>
          <h3 class="mt-2 text-xl font-bold">Fitness Accessories</h3>
          <p class="mt-2 text-sm text-slate-300">
            Upgrade your workout with reliable and modern equipment.
          </p>
        </div>

        <div class="mt-10 rounded-3xl bg-white/10 p-6 backdrop-blur">
          <p class="text-sm text-slate-300">Trending</p>
          <h3 class="mt-2 text-xl font-bold">Sports Watches</h3>
          <p class="mt-2 text-sm text-slate-300">
            Track your activity and progress with smart sports technology.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>