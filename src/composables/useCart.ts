import { computed, ref, watch } from 'vue'
import type { Product } from '../types/product'

export interface CartItem {
  id: number
  title: string
  price: number
  thumbnail: string
  category: string
  quantity: number
}

const CART_STORAGE_KEY = 'supermarket-cart'

const savedCart = localStorage.getItem(CART_STORAGE_KEY)

const cartItems = ref<CartItem[]>(
  savedCart ? JSON.parse(savedCart) as CartItem[] : []
)

watch(
  cartItems,
  (value) => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(value))
  },
  { deep: true }
)

export function useCart() {
  const totalItems = computed<number>(() => {
    return cartItems.value.reduce((total, item) => total + item.quantity, 0)
  })

  const totalPrice = computed<number>(() => {
    return cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0)
  })

  function addToCart(product: Product): void {
    const existingItem = cartItems.value.find((item) => item.id === product.id)

    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cartItems.value.push({
        id: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
        category: product.category,
        quantity: 1,
      })
    }
  }

  function removeFromCart(productId: number): void {
    cartItems.value = cartItems.value.filter((item) => item.id !== productId)
  }

  function increaseQuantity(productId: number): void {
    const item = cartItems.value.find((cartItem) => cartItem.id === productId)
    if (item) {
      item.quantity += 1
    }
  }

  function decreaseQuantity(productId: number): void {
    const item = cartItems.value.find((cartItem) => cartItem.id === productId)
    if (item) {
      if (item.quantity > 1) {
        item.quantity -= 1
      } else {
        removeFromCart(productId)
      }
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