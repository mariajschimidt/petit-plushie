"use client"

import React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const carrosselImagens = [
  { src: "/carrossel/banner1.png", alt: "Banner 1" },
  { src: "/carrossel/banner2.png", alt: "Banner 2" },
  { src: "/carrossel/banner3.png", alt: "Banner 3" },
  { src: "/carrossel/banner4.png", alt: "Banner 4" },
  { src: "/carrossel/bannerprincipal.png", alt: "Banner Principal" },
]

export default function Carrossel() {
  const plugin = React.useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: true,
    })
  )

  return (
    <section className="w-full pt-0 pb-4 sm:py-6 md:py-10 bg-[#FCFAF8]">
      <div className="max-w-7xl mx-auto px-0 sm:px-4 md:px-6">
        <Carousel
          plugins={[plugin.current]}
          className="relative"
          onMouseEnter={() => plugin.current.stop()}
          onMouseLeave={() => plugin.current.reset()}
        >
          <CarouselContent>
            {carrosselImagens.map((imagem, index) => (
              <CarouselItem key={index}>
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-none
                    sm:rounded-[32px]
                    shadow-[0_10px_40px_rgba(0,0,0,0.06)]
                    h-[220px]
                    sm:h-[320px]
                    md:h-[450px]
                    lg:h-[520px]
                  "
                >
                  <Image
                    src={imagem.src}
                    alt={imagem.alt}
                    fill
                    priority={index === 0}
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      hover:scale-[1.02]
                    "
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            className="
              left-2
              sm:left-6
              h-8
              w-8
              sm:h-11
              sm:w-11
              border-0
              bg-white/90
              backdrop-blur-md
              shadow-lg
              hover:bg-white
            "
          />

          <CarouselNext
            className="
              right-2
              sm:right-6
              h-8
              w-8
              sm:h-11
              sm:w-11
              border-0
              bg-white/90
              backdrop-blur-md
              shadow-lg
              hover:bg-white
            "
          />
        </Carousel>
      </div>
    </section>
  )
}