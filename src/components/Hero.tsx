import { CheckCircle } from "lucide-react"

interface HeroProps {
  imagePosition?: "left" | "right"
  image: {
    src: string
    alt: string
  }
  title: string
  description?: string
  features?: string[]
  primaryButton?: {
    text: string
    onClick?: () => void
  }
  secondaryButton?: {
    text: string
    onClick?: () => void
  }
  className?: string
  imageClassName?: string
  contentClassName?: string
}

const Hero = ({
  imagePosition = "left",
  image,
  title,
  description,
  features = [],
  primaryButton,
  secondaryButton,
  className = "",
  imageClassName = "",
  contentClassName = "",
}: HeroProps) => {

    const ImageElement = (
    <div
      className={`relative aspect-square rounded-2xl overflow-hidden border-2 border-amber-500/30 ${imageClassName}`}
    >
      <img src={image.src || "/placeholder.svg"} alt={image.alt} className="object-cover w-full h-full" />
    </div>
  )

  // Create the content element
  const ContentElement = (
    <div className={`space-y-6 ${contentClassName}`}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-500 to-yellow-300 bg-clip-text text-transparent">
        {title}
      </h2>

      {description && <p className="text-base sm:text-lg text-amber-100/80">{description}</p>}

      {features.length > 0 && (
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="mt-1 w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center text-black">
                <CheckCircle className="w-4 h-4" />
              </div>
              <span className="text-amber-100">{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {(primaryButton || secondaryButton) && (
        <div className="flex flex-wrap gap-4 pt-4">
          {primaryButton && (
            <button
              onClick={primaryButton.onClick}
              className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-medium px-4 py-2 rounded cursor-pointer"
            >
              {primaryButton.text}
            </button>
          )}

          {secondaryButton && (
            <button onClick={secondaryButton.onClick} className="text-amber-400 cursor-pointer">
              {secondaryButton.text}
            </button>
          )}
        </div>
      )}
    </div>
  )

  return (
    <div className={`py-16 md:py-20 bg-gradient-to-b from-black to-zinc-900 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Conditionally render based on imagePosition */}
          {imagePosition === "left" ? (
            <>
              {ImageElement}
              {ContentElement}
            </>
          ) : (
            <>
              {ContentElement}
              {ImageElement}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Hero

