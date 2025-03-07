interface FeatureBoxProps {
  icon: string
  title: string
  description: string
  delay?: number
}

export default function FeatureBox({ icon, title, description, delay = 0 }: FeatureBoxProps) {
  return (
    <div className="card text-center scale-on-hover" style={{ animationDelay: `${delay}ms` }}>
      <i className={`${icon} text-5xl text-primary mb-4 rotate-icon`}></i>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

