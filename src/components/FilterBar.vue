<template>
  <section class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
    <div class="rounded-3xl border border-slate-800 bg-slate-900 p-5 shadow-2xl shadow-black/20">
      <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div class="w-full lg:max-w-md">
          <input
            v-model="search"
            type="text"
            placeholder="Search sports products..."
            class="w-full rounded-full border border-slate-700 bg-slate-950 px-5 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-lime-400"
          />
        </div>

        <div class="flex flex-wrap gap-2">
          <button
            v-for="item in filterItems"
            :key="item"
            @click="selectCategory(item)"
            :class="[
              'rounded-full px-4 py-2 text-sm font-semibold transition',
              selectedCategory === item
                ? 'bg-lime-400 text-slate-950'
                : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
            ]"
          >
            {{ item }}
          </button>

          <button
            @click="clearFilters"
            class="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-lime-400 hover:text-lime-400"
          >
            Clear
          </button>
        </div>
      </div>

      <p class="mt-4 text-sm text-slate-400">
        Showing <span class="font-bold text-white">{{ resultCount }}</span> sports item(s)
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'

defineProps<{
  resultCount: number
}>()

const emit = defineEmits<{
  (e: 'search', value: string): void
  (e: 'filter', value: string): void
  (e: 'clear'): void
}>()

const search = ref('')
const selectedCategory = ref('All')

const filterItems = computed(() => ['All', 'Sports'])

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