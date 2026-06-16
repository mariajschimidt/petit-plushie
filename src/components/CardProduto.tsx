"use client"

import Image from "next/image"
import { useState } from "react"
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
  
  // Usamos apenas um estado simples caso a imagem falhe ao carregar na rede
  const [erroNaImagem, setErroNaImagem] = useState(false)

  const formattedPrice = `R$ ${price.toFixed(2).replace(".", ",")}`
  const sourceDaImagem = erroNaImagem || !imageSrc ? "/produtos/placeholder.png" : imageSrc

  return (
    <div
      className="h-full group relative bg-white rounded-[20px] sm:rounded-[28px] border border-[#f0e6e6] shadow-sm p-3 sm:p-4 flex flex-col gap-2 sm:gap-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      {/* Badge Destaque */}
      {destaque && (
        <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-10 inline-flex items-center gap-1 bg-[#fdf3ef] border border-[#e8c9c0] text-[#733E43] text-[10px] sm:text-xs font-medium px-2 py-0.5 sm:px-3 sm:py-1 rounded-full">
          <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-[#733E43]" />
          Destaque
        </div>
      )}

      {/* Imagem */}
      <div className="relative w-full aspect-[4/3] bg-[#ffffff] rounded-2xl overflow-hidden mt-1">
        <Image
          src={sourceDaImagem}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-1 sm:p-2 transition-transform duration-300 group-hover:scale-105"
          onError={() => setErroNaImagem(true)}
          priority={destaque} // Otimiza o carregamento se for um produto em destaque
        />
      </div>

      {/* Informações */}
      <div className="flex flex-col items-center text-center gap-1 sm:gap-2 flex-1">
        <h2 className="text-sm sm:text-lg font-bold text-[#733E43] leading-snug line-clamp-2 min-h-[40px] sm:min-h-[50px]">
          {title}
        </h2>

        <p className="hidden sm:block text-xs sm:text-sm text-[#9e8080] leading-relaxed line-clamp-3 sm:min-h-[60px] md:min-h-[72px]">
          {description}
        </p>

        <p className="text-base sm:text-2xl font-bold text-[#733E43] mt-0.5 sm:mt-1">
          {formattedPrice}
        </p>
      </div>

      {/* Botões */}
      <div className="flex items-center gap-1.5 sm:gap-2 mt-auto w-full">
        <button
          type="button"
          className="flex-1 h-8 sm:h-11 flex items-center justify-center gap-1 sm:gap-2 bg-[#733E43] hover:bg-[#5e3137] text-white text-[10px] sm:text-sm font-semibold px-1 sm:px-4 rounded-lg sm:rounded-xl transition-colors"
        >
          <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
          <span className="truncate">Comprar</span>
        </button>

        <button
          type="button"
          aria-label="Favoritar"
          className="w-8 h-8 sm:w-11 sm:h-11 flex-shrink-0 flex items-center justify-center bg-[#fdf3ef] border border-[#e8c9c0] rounded-lg sm:rounded-xl text-[#733E43] hover:bg-[#f7e4de] transition-colors"
        >
          <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>
      </div>
    </div>
  )
}