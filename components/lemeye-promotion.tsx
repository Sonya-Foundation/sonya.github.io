"use client"

import { useLanguage } from "./language-provider"
import Link from "next/link"
import Image from "next/image"

export default function LemeyePromotion() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 via-purple-900/30 to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 border-0">{t("home.openSource.title")}</h2>

        <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-8 max-w-5xl mx-auto transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/20">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-2/5">
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-transparent to-black/50 z-10"></div>
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Lemeye Platform"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 z-20">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white">{t("home.openSource.lemeye.title")}</h3>
                    <a
                      href="https://github.com/sonyagit/lemeye"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary-dark"
                    >
                      <i className="fab fa-github mr-2"></i> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-3/5">
              <p className="text-lg mb-4">{t("home.openSource.lemeye.description")}</p>

              <h4 className="font-bold mt-6 mb-3 text-lg">{t("home.openSource.lemeye.features.title")}</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <li className="flex items-center">
                  <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-2 shrink-0">
                    <i className="fas fa-bolt text-sm"></i>
                  </span>
                  <span>{t("home.openSource.lemeye.features.realtime")}</span>
                </li>
                <li className="flex items-center">
                  <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-2 shrink-0">
                    <i className="fas fa-map-marker-alt text-sm"></i>
                  </span>
                  <span>{t("home.openSource.lemeye.features.geo")}</span>
                </li>
                <li className="flex items-center">
                  <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-2 shrink-0">
                    <i className="fas fa-chart-bar text-sm"></i>
                  </span>
                  <span>{t("home.openSource.lemeye.features.data")}</span>
                </li>
                <li className="flex items-center">
                  <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-2 shrink-0">
                    <i className="fas fa-plug text-sm"></i>
                  </span>
                  <span>{t("home.openSource.lemeye.features.api")}</span>
                </li>
                <li className="flex items-center">
                  <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-2 shrink-0">
                    <i className="fas fa-language text-sm"></i>
                  </span>
                  <span>{t("home.openSource.lemeye.features.multilingual")}</span>
                </li>
              </ul>

              <div className="mt-6">
                <Link href="/projeler" className="btn-primary">
                  {t("common.learnMore")} <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

