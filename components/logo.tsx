export default function Logo({ className = "w-10 h-10", color = "text-primary" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`${className} fill-current ${color}`}
      role="img"
      aria-label="Sonya Foundation Logo"
    >
      <path d="M50 10 L10 90 L50 70 L90 90 Z" />
      <circle cx="50" cy="30" r="6" />
    </svg>
  )
}

