"use client"

import FeatureBox from "@/components/feature-box"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import { useLanguage } from "@/components/language-provider"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import LemeyePromotion from "@/components/lemeye-promotion"

export default function Home() {
  const { t, language } = useLanguage()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Only show values in the current language
  const values = [
    {
      name: t("home.values.transparency.name"),
      description: t("home.values.transparency.description"),
    },
    {
      name: t("home.values.inclusivity.name"),
      description: t("home.values.inclusivity.description"),
    },
    {
      name: t("home.values.sustainability.name"),
      description: t("home.values.sustainability.description"),
    },
    {
      name: t("home.values.solidarity.name"),
      description: t("home.values.solidarity.description"),
    },
    {
      name: t("home.values.innovation.name"),
      description: t("home.values.innovation.description"),
    },
    {
      name: t("home.values.autonomy.name"),
      description: t("home.values.autonomy.description"),
    },
  ]

  return (
    <main>
      <Navbar />

      <Hero
        title={t("home.hero.title")}
        subtitle={t("home.hero.subtitle")}
        backgroundImage="https://raw.githubusercontent.com/Sonya-Foundation/sonya.github.io/main/screenshots/istanbul-turkiye.jpg"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 border-0">{t("home.focusAreas.title")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureBox
              icon="fas fa-house-damage"
              title={t("home.focusAreas.disasterPrep.title")}
              description={t("home.focusAreas.disasterPrep.description")}
              delay={100}
            />
            <FeatureBox
              icon="fas fa-venus"
              title={t("home.focusAreas.womenRights.title")}
              description={t("home.focusAreas.womenRights.description")}
              delay={200}
            />
            <FeatureBox
              icon="fas fa-paw"
              title={t("home.focusAreas.animalRights.title")}
              description={t("home.focusAreas.animalRights.description")}
              delay={300}
            />
            <FeatureBox
              icon="fas fa-users"
              title={t("home.focusAreas.humanRights.title")}
              description={t("home.focusAreas.humanRights.description")}
              delay={400}
            />
            <FeatureBox
              icon="fas fa-hand-holding-usd"
              title={t("home.focusAreas.economicSystems.title")}
              description={t("home.focusAreas.economicSystems.description")}
              delay={500}
            />
            <FeatureBox
              icon="fas fa-newspaper"
              title={t("home.focusAreas.mediaFreedom.title")}
              description={t("home.focusAreas.mediaFreedom.description")}
              delay={600}
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="slide-up">
              <h2 className="text-3xl font-bold mb-6 border-0">{t("home.mission.title")}</h2>
              <p className="text-lg mb-4">{t("home.mission.description")}</p>
              <Link href="/hakkimizda" className="btn-primary inline-block mt-4">
                {t("common.learnMore")}
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden scale-on-hover">
              <Image
                src="https://raw.githubusercontent.com/Sonya-Foundation/sonya.github.io/main/screenshots/ankara-students.jpg"
                alt="Sonya Vakfı Misyon"
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 border-0">{t("home.values.title")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg scale-on-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-3">
                    <i className="fas fa-check"></i>
                  </div>
                  <h3 className="text-xl font-bold">{value.name}</h3>
                </div>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LemeyePromotion />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 border-0">Lemeye Platform</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="overflow-hidden rounded-lg scale-on-hover">
              <Image
                src="https://raw.githubusercontent.com/Sonya-Foundation/sonya.github.io/main/screenshots/ankara-students-square.jpg"
                alt="Ankara Öğrenciler Meydanı"
                width={600}
                height={600}
                className="rounded-lg object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-lg scale-on-hover">
              <Image
                src="https://raw.githubusercontent.com/Sonya-Foundation/sonya.github.io/main/screenshots/eskisehir-virus-square.jpg"
                alt="Eskişehir Virüs Meydanı"
                width={600}
                height={600}
                className="rounded-lg object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-lg scale-on-hover">
              <Image
                src="https://raw.githubusercontent.com/Sonya-Foundation/sonya.github.io/main/screenshots/istanbul-turkiye.jpg"
                alt="İstanbul Türkiye"
                width={600}
                height={400}
                className="rounded-lg object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-lg scale-on-hover">
              <Image
                src="https://raw.githubusercontent.com/Sonya-Foundation/sonya.github.io/main/screenshots/settings-sources.jpg"
                alt="Ayarlar Kaynakları"
                width={600}
                height={400}
                className="rounded-lg object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

