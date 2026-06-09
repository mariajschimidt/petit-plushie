import Carrossel from "@/components/Carrossel"
import CardProduto from "@/components/CardProduto"
import produtos from "../../produtos.json"
import { Heart, ShieldCheck, Truck, MessageCircle, BadgeCheck } from "lucide-react"

export default function Home() {

  const produtosEmDestaque = produtos.filter((produto) => produto.destaque === true)

  return (
    <div className="w-full min-h-screen bg-[#fdf8f6] pb-16">

      {/* Carrossel de Banner no Topo */}
      <Carrossel />

      {/* Cabeçalho da Seção de Destaque */}
      <div className="text-center mt-14 mb-10 px-4">
        <Heart className="w-6 h-6 mx-auto mb-3 text-[#c98e8e] stroke-[1.5]" />
        <h1 className="text-4xl font-serif font-bold text-[#733E43] tracking-tight">
          Produtos em destaque
        </h1>
        <p className="text-[#a08080] mt-2 text-sm">
          Os materiais mais procurados e organizados para sua rotina
        </p>
      </div>

      {/* Grid Responsivo para os Cards:
          1 coluna no celular | 2 colunas no tablet | 3 colunas em telas grandes
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {produtosEmDestaque.map((produto) => (
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

      {/* Barra de Diferenciais */}
      <div className="max-w-6xl mx-auto px-4 mt-14">
        <div className="bg-[#fdf0eb] rounded-2xl px-6 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="flex items-start gap-3">
            <BadgeCheck className="w-6 h-6 text-[#733E43] flex-shrink-0 stroke-[1.5] mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-[#733E43]">Materiais premium</p>
              <p className="text-xs text-[#a08080] mt-0.5">Selecionados com carinho</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-[#733E43] flex-shrink-0 stroke-[1.5] mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-[#733E43]">Pagamento seguro</p>
              <p className="text-xs text-[#a08080] mt-0.5">Ambiente 100% protegido</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Truck className="w-6 h-6 text-[#733E43] flex-shrink-0 stroke-[1.5] mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-[#733E43]">Entrega para todo o Brasil</p>
              <p className="text-xs text-[#a08080] mt-0.5">Frete rápido e rastreável</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MessageCircle className="w-6 h-6 text-[#733E43] flex-shrink-0 stroke-[1.5] mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-[#733E43]">Atendimento humano</p>
              <p className="text-xs text-[#a08080] mt-0.5">Estamos aqui para ajudar</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}
