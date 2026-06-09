"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { ShoppingBag, Star, Heart } from "lucide-react"

interface CardProdutoProps {
  id: string | number
  title: string
  description: string
  price: number
  imageSrc?: string
  destaque?: boolean
}

export default function CardProduto({
  title,
  description,
  price,
  imageSrc,
  destaque,
}: CardProdutoProps) {

  const [imgSrc, setImgSrc] = useState<string>(
    imageSrc || "/produtos/placeholder.png"
  )

  useEffect(() => {
    setImgSrc(imageSrc || "/produtos/placeholder.png")
  }, [imageSrc])

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price)

  return (
    <div
      className="
        relative
        bg-white
        rounded-[28px]
        border
        border-[#f0e6e6]
        shadow-sm
        p-5
        flex
        flex-col
        gap-4
        hover:shadow-lg
        hover:-translate-y-1
        transition-all
        duration-300
      "
    >

      {/* Badge Destaque */}
      {destaque && (
        <div
          className="
            absolute
            top-4
            left-4
            z-10
            inline-flex
            items-center
            gap-1
            bg-[#fdf3ef]
            border
            border-[#e8c9c0]
            text-[#733E43]
            text-xs
            font-medium
            px-3
            py-1
            rounded-full
          "
        >
          <Star className="w-3 h-3 fill-[#733E43]" />
          Destaque
        </div>
      )}

      {/* Imagem */}
      <div
        className="
          relative
          w-full
          aspect-square
          bg-[#ffffff]
          rounded-2xl
          overflow-hidden
          mt-2
        "
      >
        <Image
          src={imgSrc}
          alt={title}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          className="
            object-contain
            p-5
            transition-transform
            duration-300
            group-hover:scale-105
          "
          onError={() =>
            setImgSrc("/produtos/placeholder.png")
          }
        />
      </div>

      {/* Informações */}
      <div className="flex flex-col gap-2 flex-1">

        <h2
          className="
            text-lg
            font-bold
            text-[#733E43]
            leading-snug
          "
        >
          {title}
        </h2>

        <p
          className="
            text-sm
            text-[#9e8080]
            leading-relaxed
            line-clamp-3
            min-h-[72px]
          "
        >
          {description}
        </p>

        <p
          className="
            text-2xl
            font-bold
            text-[#733E43]
            mt-1
          "
        >
          {formattedPrice}
        </p>

      </div>

      {/* Botões */}
      <div className="flex items-center gap-2 mt-auto">

        <button
          className="
            flex-1
            flex
            items-center
            justify-center
            gap-2
            bg-[#733E43]
            hover:bg-[#5e3137]
            text-white
            text-sm
            font-semibold
            py-3
            px-4
            rounded-xl
            transition-colors
          "
        >
          <ShoppingBag className="w-4 h-4" />
          Adicionar ao carrinho
        </button>

        <button
          aria-label="Favoritar"
          className="
            w-12
            h-12
            flex-shrink-0
            flex
            items-center
            justify-center
            bg-[#fdf3ef]
            border
            border-[#e8c9c0]
            rounded-xl
            text-[#733E43]
            hover:bg-[#f7e4de]
            transition-colors
          "
        >
          <Heart className="w-4 h-4" />
        </button>

      </div>

    </div>
  )
}