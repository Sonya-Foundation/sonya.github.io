"use client"

import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import { useLanguage } from "@/components/language-provider"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { loadMarkdownContent } from "@/lib/markdown-loader"
import MarkdownRenderer from "@/components/markdown-renderer"

export default function ProjectsPage() {
  const { t, language } = useLanguage()
  const [projectsContent, setProjectsContent] = useState("")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    async function loadContent() {
      try {
        const projects = await loadMarkdownContent("projects.md")
        setProjectsContent(projects)
        setIsLoaded(true)
      } catch (error) {
        console.error("Failed to load projects content:", error)
        setIsLoaded(true)
      }
    }

    loadContent()
  }, [])

  const projects = [
    {
      id: "lemeye",
      name: "Lemeye Projesi",
      description:
        "Türkiye ve komşu bölgelerdeki kritik olayları gerçek zamanlı olarak izleyen ve görselleştiren gelişmiş bir platform.",
      features: [
        "Gerçek zamanlı olay izleme ve filtreleme",
        "Coğrafi konumlandırma ve haritalama",
        "Veri analizi ve görselleştirme araçları",
        "API entegrasyonları",
        "Çok dilli arayüz desteği",
      ],
      github: "github.com/sonyagit/lemeye",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "koopnet",
      name: "KoopNet",
      description: "Kooperatifler için açık kaynak yönetim sistemi.",
      features: ["Envanter yönetimi", "Üye kaydı ve takibi", "Finansal izleme araçları"],
      github: "#",
      image: "/placeholder.svg?height=400&width=600",
      status: language === "tr" ? "Geliştirme Aşamasında" : "In Development",
    },
    {
      id: "meshturk",
      name: "MeshTurk",
      description: "Merkezsiz iletişim ağları için altyapı yazılımı.",
      features: ["Mesh network protokolü", "Şifreli mesajlaşma", "Çevrimdışı çalışabilme"],
      github: "#",
      image: "/placeholder.svg?height=400&width=600",
      status: language === "tr" ? "Geliştirme Aşamasında" : "In Development",
    },
    {
      id: "edulibre",
      name: "EduLibre",
      description: "Özgür eğitim içeriği paylaşım platformu.",
      features: ["Açık ders materyalleri", "Etkileşimli öğrenme araçları", "Topluluğa dayalı içerik oluşturma"],
      github: "#",
      image: "/placeholder.svg?height=400&width=600",
      status: language === "tr" ? "Planlama Aşamasında" : "In Planning",
    },
  ]

  const focusAreas = [
    {
      title: t("projects.focusAreas.disaster.title"),
      icon: "fas fa-house-damage",
      items: t("projects.focusAreas.disaster.items") || [],
    },
    {
      title: t("projects.focusAreas.women.title"),
      icon: "fas fa-venus",
      items: t("projects.focusAreas.women.items") || [],
    },
    {
      title: t("projects.focusAreas.animal.title"),
      icon: "fas fa-paw",
      items: t("projects.focusAreas.animal.items") || [],
    },
    {
      title: t("projects.focusAreas.human.title"),
      icon: "fas fa-users",
      items: t("projects.focusAreas.human.items") || [],
    },
    {
      title: t("projects.focusAreas.economy.title"),
      icon: "fas fa-hand-holding-usd",
      items: t("projects.focusAreas.economy.items") || [],
    },
    {
      title: t("projects.focusAreas.media.title"),
      icon: "fas fa-newspaper",
      items: t("projects.focusAreas.media.items") || [],
    },
    {
      title: t("projects.focusAreas.community.title"),
      icon: "fas fa-users-cog",
      items: t("projects.focusAreas.community.items") || [],
    },
  ]

  return (
    <main>
      <Navbar />

      <Hero
        title={t("projects.hero.title")}
        subtitle={t("projects.hero.subtitle")}
        backgroundImage="/placeholder.svg?height=600&width=1200"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 border-0">{t("projects.focusAreas.title")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {focusAreas.map((area, index) => (
              <div key={index} className="focus-area-card slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mr-4">
                    <i className={`${area.icon} text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold">{area.title}</h3>
                </div>
                <ul className="space-y-2">
                  {Array.isArray(area.items) &&
                    area.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <i className="fas fa-check text-primary mr-2 mt-1"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 border-0">{t("projects.openSource.title")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={project.id} className="project-card slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="project-card-image">
                  <Image src={project.image || "/placeholder.svg"} alt={project.name} fill className="object-cover" />
                  {project.status && (
                    <div className="absolute top-4 right-4 bg-primary px-3 py-1 rounded-full text-sm font-bold">
                      {project.status}
                    </div>
                  )}
                </div>
                <div className="project-card-content">
                  <h3 className="text-2xl font-bold mb-3">{project.name}</h3>
                  <p className="text-lg mb-4">{project.description}</p>

                  <h4 className="font-bold mb-2">Özellikler:</h4>
                  <ul className="list-none pl-0 mb-6">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center mb-2">
                        <i className="fas fa-check text-primary mr-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center">
                    <a
                      href={`https://${project.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <i className="fab fa-github mr-2"></i> GitHub
                    </a>

                    {!project.status && (
                      <Link href={`/projeler/${project.id}`} className="ml-4 text-primary hover:underline">
                        Detaylı Bilgi <i className="fas fa-arrow-right ml-1"></i>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 border-0">Lemeye Platform</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="overflow-hidden rounded-lg scale-on-hover">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Ankara Öğrenciler Meydanı"
                width={600}
                height={600}
                className="rounded-lg object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-lg scale-on-hover">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Eskişehir Virüs Meydanı"
                width={600}
                height={600}
                className="rounded-lg object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-lg scale-on-hover">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="İstanbul Türkiye"
                width={600}
                height={400}
                className="rounded-lg object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-lg scale-on-hover">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Ayarlar Kaynakları"
                width={600}
                height={400}
                className="rounded-lg object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>

          {isLoaded && (
            <div className="max-w-4xl mx-auto">
              <MarkdownRenderer content={projectsContent} />
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 border-0">{t("projects.contribute.title")}</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">{t("projects.contribute.description")}</p>
          <a
            href="https://github.com/Sonya-Foundation"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary pulse"
          >
            <i className="fab fa-github mr-2"></i> {t("projects.contribute.button")}
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}

