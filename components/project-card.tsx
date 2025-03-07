import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "./language-provider"

interface ProjectCardProps {
  id: string
  name: string
  description: string
  features: string[]
  github: string
  image: string
  status?: string
  delay?: number
}

export default function ProjectCard({
  id,
  name,
  description,
  features,
  github,
  image,
  status,
  delay = 0,
}: ProjectCardProps) {
  const { t, language } = useLanguage()

  return (
    <div className="project-card slide-up" style={{ animationDelay: `${delay}ms` }}>
      <div className="project-card-image">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        {status && (
          <div className="absolute top-4 right-4 bg-primary px-3 py-1 rounded-full text-sm font-bold">{status}</div>
        )}
      </div>
      <div className="project-card-content">
        <h3 className="text-2xl font-bold mb-3">{name}</h3>
        <p className="text-lg mb-4">{description}</p>

        <h4 className="font-bold mb-2">{t("projects.openSource.features")}</h4>
        <ul className="list-none pl-0 mb-6">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center mb-2">
              <i className="fas fa-check text-primary mr-2"></i>
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex items-center">
          <a href={`https://${github}`} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <i className="fab fa-github mr-2"></i> GitHub
          </a>

          {!status && (
            <Link href={`/projeler/${id}`} className="ml-4 text-primary hover:underline">
              {language === "tr" ? "Detaylı Bilgi" : "Detailed Info"} <i className="fas fa-arrow-right ml-1"></i>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

