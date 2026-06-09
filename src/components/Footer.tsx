import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#EADDD8] bg-[#F9F0EC]">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col items-center text-center gap-4">

          <h2 className="text-2xl font-serif text-[#8B5E63]">
            Petit Plushiê
          </h2>

          <p className="max-w-md text-[#7D6D70] text-sm">
            Pelúcias feitas para abraçar, colecionar e criar
            memórias especiais.
          </p>

          <div className="flex gap-6 text-sm text-[#7D6D70]">
            <Link
              href="/"
              className="hover:text-[#8B5E63] transition"
            >
              Home
            </Link>

            <Link
              href="/produtos"
              className="hover:text-[#8B5E63] transition"
            >
              Produtos
            </Link>

            <Link
              href="/contato"
              className="hover:text-[#8B5E63] transition"
            >
              Contato
            </Link>
          </div>

          <div className="w-full max-w-md border-t border-[#EADDD8] pt-4 mt-2">
            <p className="text-xs text-[#8A7B7B]">
              © {currentYear} Petit Plushiê. Todos os direitos reservados.
            </p>

            <p className="text-xs text-[#8A7B7B] mt-2">
              Feito por <span className="font-medium">Maria Júllia</span>
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}