<template>
  <section class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
    <div class="rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)] p-5 shadow-lg">
      <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div class="w-full lg:max-w-md">
          <input
            v-model="search"
            type="text"
            placeholder="Search sports products..."
            class="w-full rounded-full border border-[var(--border-color)] bg-[var(--soft-bg)] px-5 py-3 text-sm text-[var(--text-main)] outline-none transition placeholder:text-[var(--text-soft)] focus:border-[var(--accent)]"
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
                ? 'bg-[var(--accent)] text-slate-950'
                : 'bg-[var(--soft-bg)] text-[var(--text-main)] hover:opacity-90'
            ]"
          >
            {{ item }}
          </button>

          <button
            @click="clearFilters"
            class="rounded-full border border-[var(--border-color)] px-4 py-2 text-sm font-semibold text-[var(--text-main)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Clear
          </button>
        </div>
      </div>

      <p class="mt-4 text-sm text-[var(--text-soft)]">
        Showing <span class="font-bold text-[var(--text-main)]">{{ resultCount }}</span> sports item(s)
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