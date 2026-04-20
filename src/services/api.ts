import type { CategoryItem, Product, ProductResponse } from '../types/product'

const BASE_URL = 'https://dummyjson.com'

export async function fetchSportsProducts(): Promise<Product[]> {
  const response = await fetch(`${BASE_URL}/products/category/sports-accessories`)

  if (!response.ok) {
    throw new Error('Failed to fetch sports products')
  }

  const data: ProductResponse = await response.json()
  return data.products
}

export async function searchSportsProducts(query: string): Promise<Product[]> {
  const response = await fetch(`${BASE_URL}/products/search?q=${encodeURIComponent(query)}`)

  if (!response.ok) {
    throw new Error('Failed to search products')
  }

  const data: ProductResponse = await response.json()

  return data.products.filter((product) => product.category === 'sports-accessories')
}

export async function fetchProductById(id: number): Promise<Product> {
  const response = await fetch(`${BASE_URL}/products/${id}`)

  if (!response.ok) {
    throw new Error('Failed to fetch product details')
  }

  const data: Product = await response.json()
  return data
}

export async function fetchCategories(): Promise<CategoryItem[]> {
  const response = await fetch(`${BASE_URL}/products/categories`)

  if (!response.ok) {
    throw new Error('Failed to fetch categories')
  }

  const data: CategoryItem[] = await response.json()
  return data
}