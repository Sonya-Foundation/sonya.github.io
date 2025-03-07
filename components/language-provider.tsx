"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { translations } from "@/lib/translations"

type LanguageContextType = {
  language: string
  setLanguage: (lang: string) => void
  t: (key: string) => string | string[]
}

const LanguageContext = createContext<LanguageContextType>({
  language: "tr",
  setLanguage: () => {},
  t: () => "",
})

export function useLanguage() {
  return useContext(LanguageContext)
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState("tr")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLanguage = getSavedLanguage()
    if (savedLanguage && (savedLanguage === "tr" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const getSavedLanguage = () => {
    try {
      return localStorage.getItem("sonya-language")
    } catch (error) {
      console.error("Failed to get language from localStorage:", error)
      return null
    }
  }

  const changeLanguage = (lang: string) => {
    try {
      localStorage.setItem("sonya-language", lang)
    } catch (error) {
      console.error("Failed to save language to localStorage:", error)
    }
    setLanguage(lang)
  }

  const t = (key: string): string | string[] => {
    if (!key) return ""

    const keys = key.split(".")
    let value: any = translations[language]

    try {
      for (const k of keys) {
        if (value && value[k] !== undefined) {
          value = value[k]
        } else {
          console.warn(`Translation not found for key: ${key} in language: ${language}`)
          return key // Return the key if translation not found
        }
      }

      return value
    } catch (error) {
      console.error(`Translation error for key: ${key}`, error)
      return key
    }
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return <>{children}</>
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>{children}</LanguageContext.Provider>
  )
}

