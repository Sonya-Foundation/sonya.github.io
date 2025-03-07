"use client"

import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import { useLanguage } from "@/components/language-provider"
import Image from "next/image"
import { useEffect, useState } from "react"
import { loadMarkdownContent } from "@/lib/markdown-loader"
import MarkdownRenderer from "@/components/markdown-renderer"

export default function AboutPage() {
  const { t, language } = useLanguage()
  const [organizationContent, setOrganizationContent] = useState("")
  const [valuesContent, setValuesContent] = useState("")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    async function loadContent() {
      try {
        const organization = await loadMarkdownContent("organization.md")
        const values = await loadMarkdownContent("values.md")
        setOrganizationContent(organization)
        setValuesContent(values)
        setIsLoaded(true)
      } catch (error) {
        console.error("Failed to load content:", error)
        setIsLoaded(true)
      }
    }

    loadContent()
  }, [])

  return (
    <main>
      <Navbar />

      <Hero
        title={t("about.hero.title")}
        subtitle={t("about.hero.subtitle")}
        backgroundImage="https://raw.githubusercontent.com/Sonya-Foundation/sonya.github.io/main/screenshots/eskisehir-virus.jpg"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 border-0">{t("about.whoWeAre.title")}</h2>
              <p className="text-lg mb-4">{t("about.whoWeAre.description1")}</p>
              <p className="text-lg mb-4">{t("about.whoWeAre.description2")}</p>
              <p className="text-lg">{t("about.whoWeAre.description3")}</p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://raw.githubusercontent.com/Sonya-Foundation/sonya.github.io/main/screenshots/ankara-students.jpg"
                alt="Sonya Vakfı Ekibi"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 border-0">{t("about.mission.title")}</h2>
              <p className="text-lg mb-4">{t("about.mission.description")}</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 border-0">{t("about.vision.title")}</h2>
              <p className="text-lg mb-4">{t("about.vision.description")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 border-0">{t("about.organization.title")}</h2>

          {isLoaded ? (
            <div className="bg-gray-800 p-6 rounded-lg overflow-x-auto">
              <MarkdownRenderer
                content={
                  language === "tr"
                    ? organizationContent.split("# Our Organizational Structure")[0]
                    : "# " + organizationContent.split("# Our Organizational Structure")[1]
                }
              />
            </div>
          ) : (
            <div className="animate-pulse bg-gray-800 h-60 rounded-md"></div>
          )}
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 border-0">{t("home.values.title")}</h2>

          {isLoaded ? (
            <div className="max-w-3xl mx-auto">
              <MarkdownRenderer
                content={
                  language === "tr"
                    ? valuesContent.split("# Our Values")[0]
                    : "# " + valuesContent.split("# Our Values")[1]
                }
              />
            </div>
          ) : (
            <div className="animate-pulse bg-gray-800 h-60 rounded-md max-w-3xl mx-auto"></div>
          )}
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 border-0">{t("about.faq.title")}</h2>

          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3">{t("about.faq.q1.question")}</h3>
              <p>{t("about.faq.q1.answer")}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3">{t("about.faq.q2.question")}</h3>
              <p>{t("about.faq.q2.answer")}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3">{t("about.faq.q3.question")}</h3>
              <p>{t("about.faq.q3.answer")}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3">{t("about.faq.q4.question")}</h3>
              <p>{t("about.faq.q4.answer")}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3">{t("about.faq.q5.question")}</h3>
              <p>{t("about.faq.q5.answer")}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

