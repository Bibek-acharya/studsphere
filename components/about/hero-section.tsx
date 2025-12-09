"use client"

import Image from "next/image"

export function HeroSection() {
  // Array of 8 images for the 2x4 grid
  const heroImages = [
    {
      src: "/rectangle 12.png",
      alt: "Education and learning",
    },
    {
      src: "/rectangle 13.png",
      alt: "Jobs and career opportunities",
    },
    {
      src: "/rectangle 14.png",
      alt: "Events and networking",
    },
    {
      src: "/rectangle 15.png",
      alt: "Community and collaboration",
    },
    {
      src: "/rectangle 16.png",
      alt: "Learning and growth",
    },
    {
      src: "/rectangle 17.png",
      alt: "Student success stories",
    },
    {
      src: "/rectangle 18.png",
      alt: "Professional development",
    },
    {
      src: "/rectangle 19.png",
      alt: "Team collaboration",
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
       

        {/* Responsive image grid: 1 column on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 aspect-square"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                priority={index < 4}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
