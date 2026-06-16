"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Produtos", href: "/produtos" },
  { label: "Contato", href: "/contato" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Força o componente a entender que já foi montado no cliente.
  // Isso elimina QUALQUER erro de diferença entre Servidor e Cliente (Hydration).
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full bg-[#FCFAF8]/90 backdrop-blur-md border-b border-[#EADDD8] h-24" />
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FCFAF8]/90 backdrop-blur-md border-b border-[#EADDD8]">
      <div className="max-w-7xl mx-auto h-24 px-4 sm:px-6 lg:px-10 flex items-center justify-between">

        {/* Mobile Menu Button */}
        <button 
          type="button"
          className="md:hidden p-2 text-[#8B5E63] hover:bg-[#F8ECE8] rounded-full transition z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link href="/" className="block transition hover:scale-[1.02] mx-auto md:mx-0">
          <div className="text-center md:text-left">
            <span className="block text-xl sm:text-2xl font-serif text-[#8B5E63]">
              Petit Plushiê
            </span>
            <span className="block text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#B59B95]">
              Feitas para abraçar
            </span>
          </div>
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative text-sm font-medium text-[#7D6D70] transition-all duration-300 hover:text-[#8B5E63] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-[#C98E8E] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Ações */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button type="button" className="hidden sm:flex h-10 w-10 rounded-full bg-[#F8ECE8] items-center justify-center text-[#8B5E63] hover:bg-[#F3E2DD] transition" aria-label="Buscar">
            <Search size={18} />
          </button>

          <button type="button" className="hidden sm:flex h-10 w-10 rounded-full bg-[#F8ECE8] items-center justify-center text-[#8B5E63] hover:bg-[#F3E2DD] transition" aria-label="Perfil">
            <User size={18} />
          </button>

          <button type="button" className="relative h-10 w-10 rounded-full bg-[#F8ECE8] flex items-center justify-center text-[#8B5E63] hover:bg-[#F3E2DD] transition" aria-label="Carrinho">
            <ShoppingBag size={18} />
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-[#C98E8E] text-white text-[10px] font-bold flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>

      {/* Navegação Mobile (Dropdown) */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#FCFAF8] border-b border-[#EADDD8] shadow-xl flex flex-col py-6 px-6 gap-4 z-40">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-lg font-medium text-[#7D6D70] hover:text-[#8B5E63] py-2 border-b border-[#EADDD8]/50 last:border-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          
          <div className="flex flex-col gap-2 mt-2 pt-4 border-t border-[#EADDD8]">
            <button type="button" className="flex items-center gap-3 text-[#7D6D70] hover:text-[#8B5E63] py-2 w-full text-left">
              <Search size={20} /> <span className="text-sm font-medium">Buscar</span>
            </button>
            <button type="button" className="flex items-center gap-3 text-[#7D6D70] hover:text-[#8B5E63] py-2 w-full text-left">
              <User size={20} /> <span className="text-sm font-medium">Minha Conta</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}