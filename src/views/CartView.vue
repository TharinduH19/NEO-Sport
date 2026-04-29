<template>
  <div class="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)]">

    <NavBar />

    <main class="max-w-6xl mx-auto px-6 py-10">

      <h1 class="text-3xl font-bold mb-8">Shopping Cart</h1>

      <!-- EMPTY CART -->
      <div v-if="cartItems.length === 0" class="text-center">

        <p class="text-lg mb-4">Your cart is empty</p>

        <RouterLink to="/" class="btn-primary">
          Go to Shop
        </RouterLink>

      </div>

      <!-- CART ITEMS -->
      <div v-else class="space-y-6">

        <div
          v-for="item in cartItems"
          :key="item.id"
          class="card p-5 flex justify-between items-center"
        >

          <div class="flex items-center gap-4">

            <img
              :src="item.thumbnail"
              class="h-20 w-20 object-cover rounded-lg"
            />

            <div>
              <h3 class="font-bold">{{ item.title }}</h3>
              <p class="text-sm text-[var(--text-soft)]">
                ${{ item.price }}
              </p>
            </div>

          </div>

          <div class="flex items-center gap-4">

            <!-- Quantity -->
            <div class="flex items-center gap-2">

              <button
                @click="decreaseQuantity(item.id)"
                class="px-3 py-1 rounded-full bg-gray-200"
              >
                -
              </button>

              <span>{{ item.quantity }}</span>

              <button
                @click="increaseQuantity(item.id)"
                class="px-3 py-1 rounded-full bg-gray-200"
              >
                +
              </button>

            </div>

            <!-- Price -->
            <span class="font-bold">
              ${{ (item.price * item.quantity).toFixed(2) }}
            </span>

            <!-- Remove -->
            <button
              @click="removeFromCart(item.id)"
              class="btn-outline text-red-500 hover:bg-red-100"
            >
              Remove
            </button>

          </div>

        </div>

        <!-- SUMMARY -->
        <div class="card p-6 max-w-md ml-auto">

          <h2 class="text-xl font-bold mb-4">Summary</h2>

          <div class="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${{ subtotal.toFixed(2) }}</span>
          </div>

          <div class="flex justify-between mb-2">
            <span>Shipping</span>
            <span>${{ shipping.toFixed(2) }}</span>
          </div>

          <div class="flex justify-between mb-4">
            <span>Tax</span>
            <span>${{ tax.toFixed(2) }}</span>
          </div>

          <div class="flex justify-between text-lg font-bold mb-4">
            <span>Total</span>
            <span>${{ grandTotal.toFixed(2) }}</span>
          </div>

          <button class="btn-primary w-full">
            Checkout
          </button>

        </div>

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
  subtotal,
  shipping,
  tax,
  grandTotal,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} = useCart()
</script>