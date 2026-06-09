import Link from "next/link";
import Image from "next/image";
import { Search, User, ShoppingBag } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Produtos", href: "/produtos" },
  { label: "Contato", href: "/contato" },
];

export default function Header() {
  return (
    <header
      className="
        sticky
        top-0
        z-50
        w-full
        bg-[#FCFAF8]/90
        backdrop-blur-md
        border-b
        border-[#EADDD8]
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          h-24
          px-6
          lg:px-10
          flex
          items-center
          justify-between
        "
      >
        {/* Logo */}
        <Link
          href="/"
          className="
            flex
            items-center
            gap-3
            transition
            hover:scale-[1.02]
          "
        >
          <div className="hidden sm:block">
            <h1
              className="
                text-2xl
                font-serif
                text-[#8B5E63]
              "
            >
              Petit Plushiê
            </h1>

            <p
              className="
                text-xs
                tracking-[0.25em]
                uppercase
                text-[#B59B95]
              "
            >
              Feitas para abraçar
            </p>
          </div>
        </Link>

        {/* Navegação */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="
                relative
                text-sm
                font-medium
                text-[#7D6D70]
                transition-all
                duration-300
                hover:text-[#8B5E63]
                after:absolute
                after:left-0
                after:-bottom-2
                after:h-[2px]
                after:w-0
                after:bg-[#C98E8E]
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Ações */}
        <div className="flex items-center gap-3">

          <button
            className="
              h-10
              w-10
              rounded-full
              bg-[#F8ECE8]
              flex
              items-center
              justify-center
              text-[#8B5E63]
              hover:bg-[#F3E2DD]
              transition
            "
          >
            <Search size={18} />
          </button>

          <button
            className="
              h-10
              w-10
              rounded-full
              bg-[#F8ECE8]
              flex
              items-center
              justify-center
              text-[#8B5E63]
              hover:bg-[#F3E2DD]
              transition
            "
          >
            <User size={18} />
          </button>

          <button
            className="
              relative
              h-10
              w-10
              rounded-full
              bg-[#F8ECE8]
              flex
              items-center
              justify-center
              text-[#8B5E63]
              hover:bg-[#F3E2DD]
              transition
            "
          >
            <ShoppingBag size={18} />

            <span
              className="
                absolute
                -top-1
                -right-1
                h-5
                w-5
                rounded-full
                bg-[#C98E8E]
                text-white
                text-[10px]
                font-bold
                flex
                items-center
                justify-center
              "
            >
              0
            </span>
          </button>

        </div>
      </div>
    </header>
  );
}