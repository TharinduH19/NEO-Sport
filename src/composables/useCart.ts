import { computed, ref, watch } from 'vue'
import type { Product } from '../types/product'

export interface CartItem {
  id: number
  title: string
  price: number
  thumbnail: string
  quantity: number
}

const STORAGE_KEY = 'neo-sports-cart'

function loadCart(): CartItem[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? (JSON.parse(stored) as CartItem[]) : []
  } catch {
    return []
  }
}

const cartItems = ref<CartItem[]>(loadCart())

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

  const subtotal = computed(() =>
    cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
  )

  const shipping = computed(() => (subtotal.value > 0 ? 15 : 0))

  const tax = computed(() => Number((subtotal.value * 0.08).toFixed(2)))

  const grandTotal = computed(() =>
    Number((subtotal.value + shipping.value + tax.value).toFixed(2))
  )

  function addToCart(product: Product): void {
    const existingItem = cartItems.value.find((item) => item.id === product.id)

    if (existingItem) {
      existingItem.quantity += 1
      return
    }

    cartItems.value.push({
      id: product.id,
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
      quantity: 1,
    })
  }

  function removeFromCart(id: number): void {
    cartItems.value = cartItems.value.filter((item) => item.id !== id)
  }

  function increaseQuantity(id: number): void {
    const item = cartItems.value.find((cartItem) => cartItem.id === id)
    if (item) {
      item.quantity += 1
    }
  }

  function decreaseQuantity(id: number): void {
    const item = cartItems.value.find((cartItem) => cartItem.id === id)

    if (!item) return

    if (item.quantity > 1) {
      item.quantity -= 1
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
    subtotal,
    shipping,
    tax,
    grandTotal,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  }
}