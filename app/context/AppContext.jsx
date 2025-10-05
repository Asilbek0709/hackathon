"use client"

import { createContext, useContext, useState, useEffect } from "react"

const AppContext = createContext()

export function AppProvider({ children }) {
  const [theme, setTheme] = useState("light")
  const [language, setLanguage] = useState("en")
  const [user, setUser] = useState(null)
  const [showRecommendations, setShowRecommendations] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light"
    setTheme(savedTheme)
    document.documentElement.classList.toggle(".dark", savedTheme === "dark")

    const savedLanguage = localStorage.getItem("language") || "en"
    setLanguage(savedLanguage)

    const savedUser = localStorage.getItem("user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  const changeLanguage = (lang) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const login = (userData) => {
    setUser(userData)
    localStorage.setItem("user", JSON.stringify(userData))

    if (userData.isNewUser) {
      setShowRecommendations(true)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  const closeRecommendations = () => {
    setShowRecommendations(false)
  }

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        language,
        changeLanguage,
        user,
        login,
        logout,
        showRecommendations,
        closeRecommendations,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useApp must be used within AppProvider")
  }
  return context
}
