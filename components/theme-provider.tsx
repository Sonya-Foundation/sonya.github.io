"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type ThemeContextType = {
  theme: string
}

const ThemeContext = createContext<ThemeContextType>({ theme: "" })

export function useTheme() {
  return useContext(ThemeContext)
}

// Purple theme variations
const themes = ["theme-purple", "theme-dark-purple", "theme-light-purple", "theme-violet", "theme-indigo"]

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Get current hour to determine theme
    const now = new Date()
    const currentHour = now.getHours()

    let selectedTheme

    // Assign theme based on time of day
    if (currentHour >= 20 || currentHour < 6) {
      selectedTheme = "theme-dark-purple" // Night
    } else if (currentHour >= 6 && currentHour < 12) {
      selectedTheme = "theme-light-purple" // Morning
    } else if (currentHour >= 12 && currentHour < 16) {
      selectedTheme = "theme-purple" // Afternoon
    } else {
      selectedTheme = "theme-violet" // Evening
    }

    try {
      localStorage.setItem("sonya-theme", selectedTheme)
    } catch (error) {
      console.error("Failed to save theme to localStorage:", error)
    }

    setTheme(selectedTheme)
  }, [])

  useEffect(() => {
    if (theme && mounted) {
      document.body.classList.remove(...themes)
      document.body.classList.add(theme)
    }
  }, [theme, mounted])

  if (!mounted) {
    return <>{children}</>
  }

  return <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
}

