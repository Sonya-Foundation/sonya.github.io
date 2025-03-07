import Image from "next/image"

export default function Logo({ className = "w-10 h-10", color = "text-primary" }) {
  // Use the GitHub avatar as logo but invert the colors for white background
  return (
    <div className={`${className} relative`}>
      <Image 
        src="https://avatars.githubusercontent.com/u/200853854" 
        alt="Sonya Topluluğu Logo"
        width={100}
        height={100}
        className="invert filter"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain'
        }}
      />
    </div>
  )
}

