import { useLanguage } from "./language-provider"

interface FocusAreaProps {
  title: string
  icon: string
  items: string[]
  delay?: number
}

export default function FocusArea({ title, icon, items, delay = 0 }: FocusAreaProps) {
  const { language } = useLanguage()

  return (
    <div className="focus-area-card slide-up" style={{ animationDelay: `${delay}ms` }}>
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mr-4">
          <i className={`${icon} text-xl`}></i>
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {Array.isArray(items) &&
          items.map((item, index) => (
            <li key={index} className="flex items-start">
              <i className="fas fa-check text-primary mr-2 mt-1"></i>
              <span>{item}</span>
            </li>
          ))}
      </ul>
    </div>
  )
}

