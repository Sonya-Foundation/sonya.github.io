"use client"

import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import { useLanguage } from "./language-provider"

interface MarkdownRendererProps {
  content: string
  className?: string
  filterByLanguage?: boolean
}

export default function MarkdownRenderer({ content, className = "", filterByLanguage = false }: MarkdownRendererProps) {
  const [mounted, setMounted] = useState(false)
  const { language } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className={`markdown ${className} animate-pulse bg-gray-800 h-40 rounded-md`}></div>
  }

  if (!content) {
    return <div className={`markdown ${className}`}>Content not available</div>
  }

  // If filterByLanguage is true, only show content for the current language
  let filteredContent = content
  if (filterByLanguage) {
    if (language === "tr") {
      // Show only Turkish content (before "# Our" section if it exists)
      filteredContent = content.split(/# Our/)[0]
    } else {
      // Show only English content (after "# Our" section if it exists)
      const parts = content.split(/# Our/)
      if (parts.length > 1) {
        filteredContent = "# Our" + parts[1]
      }
    }
  }

  return (
    <div className={`markdown ${className}`}>
      <ReactMarkdown>{filteredContent}</ReactMarkdown>
    </div>
  )
}

