<template>
  <section id="categories" class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
    <div class="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div class="w-full lg:max-w-md">
          <input
            v-model="search"
            type="text"
            placeholder="Search supermarket products..."
            class="w-full rounded-full border border-slate-300 px-5 py-3 text-sm outline-none transition focus:border-emerald-600"
          />
        </div>

        <div class="flex flex-wrap gap-2">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectCategory(category)"
            :class="[
              'rounded-full px-4 py-2 text-sm font-semibold transition',
              selectedCategory === category
                ? 'bg-emerald-700 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            ]"
          >
            {{ category }}
          </button>

          <button
            @click="clearFilters"
            class="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-emerald-700 hover:text-emerald-700"
          >
            Clear
          </button>
        </div>
      </div>

      <div class="mt-4 text-sm text-slate-600">
        Showing <span class="font-semibold text-slate-900">{{ resultCount }}</span> result(s)
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  categories: string[]
  resultCount: number
}>()

const emit = defineEmits<{
  (e: 'search', value: string): void
  (e: 'filter', value: string): void
  (e: 'clear'): void
}>()

const search = ref('')
const selectedCategory = ref('All')

function selectCategory(category: string): void {
  selectedCategory.value = category
  emit('filter', category)
}

function clearFilters(): void {
  search.value = ''
  selectedCategory.value = 'All'
  emit('clear')
}

watch(search, (value) => {
  emit('search', value)
})
</script>