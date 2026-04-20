<template>
  <div class="min-h-screen bg-slate-50">
    <NavBar />

    <main class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div class="mb-8 flex items-center justify-between">
        <div>
          <p class="text-sm font-semibold uppercase tracking-widest text-slate-500">Your Cart</p>
          <h1 class="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Shopping Cart</h1>
        </div>

        <button
          v-if="cartItems.length > 0"
          @click="clearCart"
          class="rounded-full border border-red-300 px-5 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50"
        >
          Clear Cart
        </button>
      </div>

      <div v-if="cartItems.length === 0" class="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
        <h2 class="text-2xl font-bold text-slate-900">Your cart is empty</h2>
        <p class="mt-3 text-sm text-slate-600">
          Add some products from the store to see them here.
        </p>

        <RouterLink
          to="/"
          class="mt-6 inline-flex rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
        >
          Back to Shopping
        </RouterLink>
      </div>

      <div v-else class="grid gap-8 lg:grid-cols-[2fr,1fr]">
        <section class="space-y-4">
          <article
            v-for="item in cartItems"
            :key="item.id"
            class="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between"
          >
            <div class="flex items-center gap-4">
              <img
                :src="item.thumbnail"
                :alt="item.title"
                class="h-24 w-24 rounded-2xl object-cover"
              />

              <div>
                <p class="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold capitalize text-emerald-700 w-fit">
                  {{ item.category }}
                </p>
                <h3 class="mt-2 text-lg font-bold text-slate-900">{{ item.title }}</h3>
                <p class="mt-1 text-sm text-slate-600">${{ item.price }} each</p>
              </div>
            </div>

            <div class="flex flex-wrap items-center gap-3">
              <div class="flex items-center gap-2">
                <button
                  @click="decreaseQuantity(item.id)"
                  class="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-lg font-bold text-slate-700"
                >
                  -
                </button>

                <span class="min-w-8 text-center text-sm font-semibold text-slate-900">
                  {{ item.quantity }}
                </span>

                <button
                  @click="increaseQuantity(item.id)"
                  class="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-lg font-bold text-slate-700"
                >
                  +
                </button>
              </div>

              <p class="min-w-24 text-sm font-bold text-slate-900">
                ${{ item.price * item.quantity }}
              </p>

              <button
                @click="removeFromCart(item.id)"
                class="rounded-full border border-red-300 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50"
              >
                Remove
              </button>
            </div>
          </article>
        </section>

        <aside class="h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 class="text-xl font-bold text-slate-900">Order Summary</h2>

          <div class="mt-6 space-y-3 text-sm text-slate-600">
            <div class="flex items-center justify-between">
              <span>Total Items</span>
              <span class="font-semibold text-slate-900">{{ totalItems }}</span>
            </div>

            <div class="flex items-center justify-between">
              <span>Total Price</span>
              <span class="text-xl font-extrabold text-slate-900">${{ totalPrice }}</span>
            </div>
          </div>

          <button
            class="mt-6 w-full rounded-full bg-emerald-700 px-6 py-3 text-sm font-bold text-white transition hover:scale-[1.02]"
          >
            Checkout
          </button>
        </aside>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import NavBar from '../components/NavBar.vue'
import AppFooter from '../components/AppFooter.vue'
import { useCart } from '../composables/useCart'

const {
  cartItems,
  totalItems,
  totalPrice,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = useCart()
</script>