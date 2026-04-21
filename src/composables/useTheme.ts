import { ref, watch } from 'vue'

type Theme = 'light' | 'dark'

const STORAGE_KEY = 'neo-sports-theme'

function getInitialTheme(): Theme {
  const savedTheme = localStorage.getItem(STORAGE_KEY)

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme
  }

  return 'dark'
}

const theme = ref<Theme>(getInitialTheme())

function applyTheme(value: Theme): void {
  const html = document.documentElement

  if (value === 'dark') {
    html.classList.add('dark')
  } else {
    html.classList.remove('dark')
  }

  localStorage.setItem(STORAGE_KEY, value)
}

applyTheme(theme.value)

watch(theme, (value) => {
  applyTheme(value)
})

export function useTheme() {
  function toggleTheme(): void {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  return {
    theme,
    toggleTheme,
  }
}