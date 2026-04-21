<template>
  <div class="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-300">
    <NavBar />

    <main class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
            Shopping Cart
          </p>
          <h1 class="mt-2 text-3xl font-black sm:text-4xl">Your selected items</h1>
        </div>

        <button
          v-if="cartItems.length > 0"
          @click="clearCart"
          class="rounded-full border border-red-500/30 px-5 py-3 text-sm font-semibold text-red-500 transition hover:bg-red-500/10"
        >
          Clear Cart
        </button>
      </div>

      <div
        v-if="cartItems.length === 0"
        class="rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)] p-12 text-center shadow-lg"
      >
        <h2 class="text-2xl font-bold">Your cart is empty</h2>
        <p class="mt-3 text-sm text-[var(--text-soft)]">
          Add some products to make your store look complete and professional.
        </p>

        <RouterLink
          to="/"
          class="mt-6 inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold text-slate-950 transition hover:scale-[1.02]"
        >
          Back to Store
        </RouterLink>
      </div>

      <div v-else class="grid gap-8 lg:grid-cols-[2fr,1fr]">
        <section class="space-y-4">
          <article
            v-for="item in cartItems"
            :key="item.id"
            class="flex flex-col gap-4 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)] p-5 shadow-lg sm:flex-row sm:items-center sm:justify-between"
          >
            <div class="flex items-center gap-4">
              <img
                :src="item.thumbnail"
                :alt="item.title"
                class="h-24 w-24 rounded-2xl object-cover"
              />

              <div>
                <h3 class="text-lg font-bold">{{ item.title }}</h3>
                <p class="mt-1 text-sm text-[var(--text-soft)]">${{ item.price }} each</p>
              </div>
            </div>

            <div class="flex flex-wrap items-center gap-3">
              <div class="flex items-center gap-2 rounded-full border border-[var(--border-color)] px-2 py-1">
                <button
                  @click="decreaseQuantity(item.id)"
                  class="flex h-9 w-9 items-center justify-center rounded-full text-lg font-bold transition hover:bg-[var(--soft-bg)]"
                >
                  -
                </button>

                <span class="min-w-8 text-center text-sm font-semibold">
                  {{ item.quantity }}
                </span>

                <button
                  @click="increaseQuantity(item.id)"
                  class="flex h-9 w-9 items-center justify-center rounded-full text-lg font-bold transition hover:bg-[var(--soft-bg)]"
                >
                  +
                </button>
              </div>

              <p class="min-w-24 text-right text-sm font-bold">
                ${{ (item.price * item.quantity).toFixed(2) }}
              </p>

              <button
                @click="removeFromCart(item.id)"
                class="rounded-full border border-red-500/30 px-4 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-500/10"
              >
                Remove
              </button>
            </div>
          </article>
        </section>

        <aside class="h-fit rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)] p-6 shadow-lg">
          <h2 class="text-xl font-bold">Order Summary</h2>

          <div class="mt-6 space-y-4 text-sm">
            <div class="flex items-center justify-between text-[var(--text-soft)]">
              <span>Total Items</span>
              <span class="font-semibold text-[var(--text-main)]">{{ totalItems }}</span>
            </div>

            <div class="flex items-center justify-between text-[var(--text-soft)]">
              <span>Subtotal</span>
              <span class="font-semibold text-[var(--text-main)]">${{ subtotal.toFixed(2) }}</span>
            </div>

            <div class="flex items-center justify-between text-[var(--text-soft)]">
              <span>Shipping</span>
              <span class="font-semibold text-[var(--text-main)]">${{ shipping.toFixed(2) }}</span>
            </div>

            <div class="flex items-center justify-between text-[var(--text-soft)]">
              <span>Tax (8%)</span>
              <span class="font-semibold text-[var(--text-main)]">${{ tax.toFixed(2) }}</span>
            </div>

            <div class="border-t border-[var(--border-color)] pt-4">
              <div class="flex items-center justify-between">
                <span class="text-base font-bold">Grand Total</span>
                <span class="text-2xl font-black">${{ grandTotal.toFixed(2) }}</span>
              </div>
            </div>
          </div>

          <button
            class="mt-6 w-full rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold text-slate-950 transition hover:scale-[1.02]"
          >
            Proceed to Checkout
          </button>
        </aside>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppFooter from '../components/AppFooter.vue'
import NavBar from '../components/NavBar.vue'
import { useCart } from '../composables/useCart'

const {
  cartItems,
  totalItems,
  subtotal,
  shipping,
  tax,
  grandTotal,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = useCart()
</script>