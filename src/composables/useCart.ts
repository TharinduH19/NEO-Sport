import { computed, ref, watch } from 'vue'
import type { Product } from '../types/product'

export interface CartItem {
  id: number
  title: string
  price: number
  thumbnail: string
  quantity: number
}

const STORAGE_KEY = 'sport-store-cart'

const stored = localStorage.getItem(STORAGE_KEY)

const cartItems = ref<CartItem[]>(stored ? JSON.parse(stored) : [])

watch(
  cartItems,
  (value) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
  },
  { deep: true }
)

export function useCart() {
  const totalItems = computed(() =>
    cartItems.value.reduce((sum, item) => sum + item.quantity, 0)
  )

  const totalPrice = computed(() =>
    cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
  )

  function addToCart(product: Product): void {
    const found = cartItems.value.find((item) => item.id === product.id)

    if (found) {
      found.quantity += 1
    } else {
      cartItems.value.push({
        id: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
        quantity: 1,
      })
    }
  }

  function removeFromCart(id: number): void {
    cartItems.value = cartItems.value.filter((item) => item.id !== id)
  }

  function increaseQuantity(id: number): void {
    const found = cartItems.value.find((item) => item.id === id)
    if (found) found.quantity += 1
  }

  function decreaseQuantity(id: number): void {
    const found = cartItems.value.find((item) => item.id === id)
    if (!found) return

    if (found.quantity > 1) {
      found.quantity -= 1
    } else {
      removeFromCart(id)
    }
  }

  function clearCart(): void {
    cartItems.value = []
  }

  return {
    cartItems,
    totalItems,
    totalPrice,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  }
}