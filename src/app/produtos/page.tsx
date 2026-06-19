"use client"

import { useState } from "react"
import CardProduto from "../../components/CardProduto"
import produtos from "../../../produtos.json"
import { Heart, ShieldCheck, Truck, Gift, Search, RotateCcw } from "lucide-react"

// Definição da tipagem das propriedades dos produtos
interface ProdutoProps {
  id: string | number;
  title: string;
  description: string;
  price: number;
  imageSrc: string;
  destaque: boolean;
  categoria?: string;
}

export default function Produtos() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos")
  const [ordenacaoPreco, setOrdenacaoPreco] = useState("relevante")
  const [menuOrdenacaoAberto, setMenuOrdenacaoAberto] = useState(false)

  // Função para limpar todos os campos e restaurar os estados iniciais
  const limparFiltros = () => {
    setSearchTerm("")
    setCategoriaSelecionada("Todos")
    setOrdenacaoPreco("relevante")
    setMenuOrdenacaoAberto(false)
  }

  // Filtragem combinada por busca textual e categoria
  const produtosFiltrados = (produtos as ProdutoProps[]).filter((produto) => {
    const correspondeTexto =
      produto.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      produto.description.toLowerCase().includes(searchTerm.toLowerCase())

    const correspondeCategoria =
      categoriaSelecionada === "Todos" || produto.categoria === categoriaSelecionada

    return correspondeTexto && correspondeCategoria
  })

  // Ordenação dos dados filtrados com base no preço
  const produtosOrdenados = [...produtosFiltrados].sort((a, b) => {
    if (ordenacaoPreco === "menor-preco") {
      return a.price - b.price
    }
    if (ordenacaoPreco === "maior-preco") {
      return b.price - a.price
    }
    return 0
  })

  // Função para obter o total de produtos cadastrados em cada categoria
  const obterTotalCategoria = (categoria: string) => {
    if (categoria === "Todos") {
      return produtos.length
    }
    return (produtos as ProdutoProps[]).filter((p) => p.categoria === categoria).length
  }

  // Lista de categorias oficiais ajustada para a Petit Plushiê
  const listaCategorias = ["Todos", "Animais", "Comidinhas & Bebidas", "Botânica", "Temáticos"]

  return (
    <main className="w-full min-h-screen bg-[#FCFAF8] pb-24">

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-8 sm:py-20 text-center">

          <div className="flex justify-center mb-5">
            <div className="bg-[#F8ECE8] p-3 rounded-full">
              <Heart
                size={24}
                className="fill-[#D8A5A5] text-[#C98E8E]"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-serif text-[#8B5E63] mb-5">
            Nossas Pelúcias
          </h1>

          <p className="max-w-2xl mx-auto text-[#7D6D70] text-lg">
            Descubra companheiros fofinhos criados para levar
            conforto, carinho e muita imaginação para todos os momentos.
          </p>

          <div className="mt-10 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#F8ECE8] text-[#8B5E63] font-medium">
            ✨ {produtosFiltrados.length === produtos.length 
               ? `${produtos.length} produtos disponíveis` 
               : `${produtosFiltrados.length} de ${produtos.length} encontrados`}
          </div>

        </div>
      </section>

      {/* Benefícios */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="bg-white rounded-[32px] border border-[#F0E4DF] shadow-sm p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4">
            <Truck className="text-[#8B5E63]" />
            <div>
              <p className="font-semibold text-[#4B3A3D]">Entrega para todo Brasil</p>
              <p className="text-sm text-[#7D6D70]">Rápida e segura</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <ShieldCheck className="text-[#8B5E63]" />
            <div>
              <p className="font-semibold text-[#4B3A3D]">Compra protegida</p>
              <p className="text-sm text-[#7D6D70]">Ambiente 100% seguro</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Gift className="text-[#8B5E63]" />
            <div>
              <p className="font-semibold text-[#4B3A3D]">Feitas para presentear</p>
              <p className="text-sm text-[#7D6D70]">Muito carinho em cada detalhe</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bloco de Controles e Filtros Integrado */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="bg-white p-6 rounded-[24px] border border-[#F0E4DF] shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">

            {/* Campo de pesquisa de texto com cores combinando */}
            <div className="relative flex-1 max-w-md">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-[#7D6D70]">
                <Search className="h-5 w-5" />
              </span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Pesquisar pelúcias..."
                className="w-full pl-11 pr-4 py-3 bg-[#FCFAF8] border border-[#E8D8D2] rounded-xl text-[#4B3A3D] placeholder:text-[#A89699] focus:outline-none focus:ring-2 focus:ring-[#F5D7D7] focus:border-[#C98E8E] focus:bg-white transition-all text-sm"
              />
            </div>

            {/* Controles de ordenação por preço customizados */}
            <div className="flex items-center gap-4 flex-wrap">
              <label className="text-sm font-medium text-[#4B3A3D]">
                Ordenar por:
              </label>
              
              {/* Menu Dropdown Customizado */}
              <div className="relative">
                {/* Botão que abre/fecha o menu */}
                <button
                  type="button"
                  onClick={() => setMenuOrdenacaoAberto(!menuOrdenacaoAberto)}
                  className="flex items-center justify-between w-44 bg-[#FCFAF8] border border-[#E8D8D2] text-[#4B3A3D] text-sm rounded-xl pt-2.5 pb-2.5 pl-4 pr-3 focus:outline-none focus:ring-2 focus:ring-[#F5D7D7] focus:border-[#C98E8E] transition-all cursor-pointer text-left font-medium"
                >
                  <span>
                    {ordenacaoPreco === "relevante" && "Mais relevantes"}
                    {ordenacaoPreco === "menor-preco" && "Menor preço"}
                    {ordenacaoPreco === "maior-preco" && "Maior preço"}
                  </span>
                  <svg 
                    className={`h-4 w-4 text-[#8B5E63] transition-transform duration-200 ${menuOrdenacaoAberto ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Opções Flutuantes do Menu */}
                {menuOrdenacaoAberto && (
                  <>
                    {/* Camada invisível de fundo para fechar ao clicar fora */}
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setMenuOrdenacaoAberto(false)}
                    />
                    
                    <div className="absolute right-0 mt-2 w-44 bg-white border border-[#F0E4DF] rounded-xl shadow-md py-1.5 z-20 overflow-hidden">
                      <button
                        type="button"
                        onClick={() => {
                          setOrdenacaoPreco("relevante");
                          setMenuOrdenacaoAberto(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                          ordenacaoPreco === "relevante" 
                            ? "bg-[#F8ECE8] text-[#8B5E63] font-semibold" 
                            : "text-[#4B3A3D] hover:bg-[#FCFAF8] hover:text-[#8B5E63]"
                        }`}
                      >
                        Mais relevantes
                      </button>
                      
                      <button
                        type="button"
                        onClick={() => {
                          setOrdenacaoPreco("menor-preco");
                          setMenuOrdenacaoAberto(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                          ordenacaoPreco === "menor-preco" 
                            ? "bg-[#F8ECE8] text-[#8B5E63] font-semibold" 
                            : "text-[#4B3A3D] hover:bg-[#FCFAF8] hover:text-[#8B5E63]"
                        }`}
                      >
                        Menor preço
                      </button>
                      
                      <button
                        type="button"
                        onClick={() => {
                          setOrdenacaoPreco("maior-preco");
                          setMenuOrdenacaoAberto(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                          ordenacaoPreco === "maior-preco" 
                            ? "bg-[#F8ECE8] text-[#8B5E63] font-semibold" 
                            : "text-[#4B3A3D] hover:bg-[#FCFAF8] hover:text-[#8B5E63]"
                        }`}
                      >
                        Maior preço
                      </button>
                    </div>
                  </>
                )}
              </div>

              {/* Botão para limpar filtros ativos */}
              {(searchTerm !== "" || categoriaSelecionada !== "Todos" || ordenacaoPreco !== "relevante") && (
                <button
                  onClick={limparFiltros}
                  className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#8B5E63] hover:text-[#4B3A3D] border border-[#E8D8D2] bg-white hover:bg-[#FDF6F3] rounded-xl transition-all cursor-pointer"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  Limpar filtros
                </button>
              )}
            </div>

          </div>

          {/* Filtros rápidos de categorias fofas com badges customizados */}
          <div className="flex gap-2 flex-wrap mt-6 pt-6 border-t border-[#FDF6F3]">
            {listaCategorias.map((categoria) => {
              const isActive = categoriaSelecionada === categoria
              const totalItens = obterTotalCategoria(categoria)
              return (
                <button
                  key={categoria}
                  onClick={() => setCategoriaSelecionada(categoria)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer flex items-center gap-2 border ${
                    isActive
                      ? "bg-[#8B5E63] text-white border-[#8B5E63] shadow-xs"
                      : "bg-[#FCFAF8] text-[#7D6D70] border-[#E8D8D2] hover:bg-[#F8ECE8] hover:text-[#8B5E63]"
                  }`}
                >
                  <span>{categoria}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full transition-all ${
                      isActive ? "bg-white/20 text-white" : "bg-[#F8ECE8] text-[#8B5E63]"
                    }`}
                  >
                    {totalItens}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Coleção de Produtos */}
      <section className="max-w-7xl mx-auto px-6">

        <div className="mb-8 text-center sm:text-left">
          <h2 className="text-4xl font-serif text-[#8B5E63] mb-2">
            Coleção Completa
          </h2>
          <p className="text-[#7D6D70] text-sm">
            {produtosOrdenados.length === 1
              ? "1 companhia fofinha encontrada"
              : `${produtosOrdenados.length} companhias fofinhas encontradas`}
          </p>
        </div>

        {/* Grade de exibição dinâmica */}
        {produtosOrdenados.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
            {produtosOrdenados.map((produto) => (
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
        ) : (
          /* Estado Vazio Amigável se nenhum filtro bater */
          <div className="w-full bg-white border border-[#F0E4DF] rounded-[32px] p-16 text-center shadow-sm">
            <span className="text-4xl mb-4 block">🔍</span>
            <h3 className="text-xl font-serif text-[#8B5E63] mb-2">
              Nenhuma pelúcia foi encontrada
            </h3>
            <p className="text-[#7D6D70] text-sm mb-6 max-w-sm mx-auto">
              Não localizamos nenhuma fofura com o termo "{searchTerm}" na categoria "{categoriaSelecionada}".
            </p>
            <button
              onClick={limparFiltros}
              className="px-6 py-3 bg-[#8B5E63] text-white rounded-xl text-sm font-medium hover:opacity-90 transition-all cursor-pointer shadow-xs"
            >
              Ver todas as pelúcias
            </button>
          </div>
        )}

      </section>

      {/* Rodapé Decorativo */}
      <section className="mt-24 px-6">
        <div className="max-w-5xl mx-auto bg-[#F9F0EC] rounded-[32px] p-10 text-center border border-[#F0E4DF]">
          <h3 className="text-3xl font-serif text-[#8B5E63] mb-4">
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