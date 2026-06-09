import CardProduto from "../../components/CardProduto"
import produtos from "../../../produtos.json"
import { Heart, ShieldCheck, Truck, Gift } from "lucide-react"

export default function Produtos() {
  return (
    <main className="w-full min-h-screen bg-[#FCFAF8] pb-24">

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">

          <div className="flex justify-center mb-5">
            <div className="bg-[#F8ECE8] p-3 rounded-full">
              <Heart
                size={24}
                className="fill-[#D8A5A5] text-[#C98E8E]"
              />
            </div>
          </div>

          <h1
            className="
              text-5xl
              md:text-6xl
              font-serif
              text-[#8B5E63]
              mb-5
            "
          >
            Nossas Pelúcias
          </h1>

          <p
            className="
              max-w-2xl
              mx-auto
              text-[#7D6D70]
              text-lg
            "
          >
            Descubra companheiros fofinhos criados para levar
            conforto, carinho e muita imaginação para todos os momentos.
          </p>

          <div
            className="
              mt-10
              inline-flex
              items-center
              gap-2
              px-5
              py-3
              rounded-full
              bg-[#F8ECE8]
              text-[#8B5E63]
              font-medium
            "
          >
            ✨ {produtos.length} produtos disponíveis
          </div>

        </div>
      </section>

      {/* Benefícios */}
      <section className="max-w-7xl mx-auto px-6 mb-16">

        <div
          className="
            bg-white
            rounded-[32px]
            border
            border-[#F0E4DF]
            shadow-sm
            p-8
            grid
            grid-cols-1
            md:grid-cols-3
            gap-8
          "
        >

          <div className="flex items-center gap-4">
            <Truck className="text-[#8B5E63]" />
            <div>
              <p className="font-semibold text-[#4B3A3D]">
                Entrega para todo Brasil
              </p>
              <p className="text-sm text-[#7D6D70]">
                Rápida e segura
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <ShieldCheck className="text-[#8B5E63]" />
            <div>
              <p className="font-semibold text-[#4B3A3D]">
                Compra protegida
              </p>
              <p className="text-sm text-[#7D6D70]">
                Ambiente 100% seguro
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Gift className="text-[#8B5E63]" />
            <div>
              <p className="font-semibold text-[#4B3A3D]">
                Feitas para presentear
              </p>
              <p className="text-sm text-[#7D6D70]">
                Muito carinho em cada detalhe
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* Produtos */}
      <section className="max-w-7xl mx-auto px-6">

        <div className="mb-10 text-center">
          <h2
            className="
              text-4xl
              font-serif
              text-[#8B5E63]
              mb-3
            "
          >
            Coleção Completa
          </h2>

          <p className="text-[#7D6D70]">
            Escolha sua próxima companhia favorita ❤️
          </p>
        </div>

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-8
          "
        >
          {produtos.map((produto) => (
            <CardProduto
              key={produto.id}
              id={produto.id}
              title={produto.title}
              description={produto.description}
              price={produto.price}
              imageSrc={produto.imageSrc}
              destaque={produto.destaque}
            />
          ))}
        </div>

      </section>

      {/* Rodapé Decorativo */}
      <section className="mt-24 px-6">
        <div
          className="
            max-w-5xl
            mx-auto
            bg-[#F9F0EC]
            rounded-[32px]
            p-10
            text-center
            border
            border-[#F0E4DF]
          "
        >
          <h3
            className="
              text-3xl
              font-serif
              text-[#8B5E63]
              mb-4
            "
          >
            Feitas para abraçar 🧸
          </h3>

          <p className="text-[#7D6D70] max-w-2xl mx-auto">
            Cada pelúcia da Petit Plushiê é escolhida com carinho,
            trazendo conforto, fofura e momentos especiais para
            crianças e adultos.
          </p>
        </div>
      </section>

    </main>
  )
}