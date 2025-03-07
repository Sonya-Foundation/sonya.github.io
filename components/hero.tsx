"use client"

import { useEffect, useState } from "react"

interface HeroProps {
  title: string | string[]
  subtitle: string | string[]
  backgroundImage?: string
}

export default function Hero({ title, subtitle, backgroundImage }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const bgStyle = backgroundImage
    ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {
        backgroundColor: "#1e1e1e",
      }

  // Convert title and subtitle to string if they are arrays
  const titleStr = Array.isArray(title) ? title.join(" ") : title
  const subtitleStr = Array.isArray(subtitle) ? subtitle.join(" ") : subtitle

  return (
    <section className="py-20 hero-section" style={bgStyle}>
      <div className="container mx-auto text-center px-4 hero-content">
        <h1 className={`text-4xl md:text-5xl font-bold mb-4 hero-title ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {titleStr}
        </h1>
        <p className={`text-xl md:text-2xl max-w-3xl mx-auto hero-subtitle ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {subtitleStr}
        </p>
      </div>
    </section>
  )
}

