// Theme management utilities
export function initTheme() {
  if (typeof window === "undefined") return

  const savedTheme = localStorage.getItem("theme")
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

  const theme = savedTheme || (prefersDark ? "dark" : "light")
  applyTheme(theme)
}

export function applyTheme(theme) {
  if (typeof window === "undefined") return

  if (theme === "dark") {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }

  localStorage.setItem("theme", theme)
}

export function toggleTheme() {
  if (typeof window === "undefined") return

  const isDark = document.documentElement.classList.contains("dark")
  const newTheme = isDark ? "light" : "dark"
  applyTheme(newTheme)
  return newTheme
}

export function getCurrentTheme() {
  if (typeof window === "undefined") return "light"
  return document.documentElement.classList.contains("dark") ? "dark" : "light"
}
