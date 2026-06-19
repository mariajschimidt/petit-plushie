import { Mail, Phone, MapPin, Heart } from "lucide-react"

export default function Contato() {
  return (
    <main className="min-h-screen bg-[#FCFAF8] py-8 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Cabeçalho */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex justify-center mb-3 sm:mb-4">
            <Heart className="text-[#C98E8E] fill-[#F5D7D7] sm:w-8 sm:h-8" size={24} />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#8B5E63] mb-3 sm:mb-4">
            Entre em Contato
          </h1>

          <p className="text-sm sm:text-base text-[#7D6D70] max-w-2xl mx-auto px-2">
            Ficaremos felizes em ajudar você. Seja para dúvidas,
            sugestões ou para conversar sobre nossas pelúcias,
            nossa equipe está sempre disponível.
          </p>
        </div>

        {/* Grid de Informações e Formulário */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-10 sm:mb-14">

          {/* Informações */}
          <div className="bg-white rounded-2xl sm:rounded-3xl md:rounded-[32px] p-6 sm:p-8 md:p-10 border border-[#F0E4DF] shadow-sm">

            <h2 className="text-2xl sm:text-2xl md:text-3xl font-serif text-[#8B5E63] mb-6 sm:mb-8">
              Fale com a Petit Plushiê
            </h2>

            <div className="space-y-6 sm:space-y-8">

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#F8ECE8] p-2 sm:p-3 rounded-xl sm:rounded-2xl flex-shrink-0">
                  <Mail className="text-[#8B5E63] w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                <div className="min-w-0">
                  <h3 className="font-semibold text-sm sm:text-base text-[#4B3A3D]">
                    E-mail
                  </h3>
                  <p className="text-xs sm:text-sm text-[#7D6D70] break-all">
                    contato@petitplushie.com.br
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#F8ECE8] p-2 sm:p-3 rounded-xl sm:rounded-2xl flex-shrink-0">
                  <Phone className="text-[#8B5E63] w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                <div className="min-w-0">
                  <h3 className="font-semibold text-sm sm:text-base text-[#4B3A3D]">
                    WhatsApp
                  </h3>
                  <p className="text-xs sm:text-sm text-[#7D6D70]">
                    (00) 00000-0000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#F8ECE8] p-2 sm:p-3 rounded-xl sm:rounded-2xl flex-shrink-0">
                  <MapPin className="text-[#8B5E63] w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                <div className="min-w-0">
                  <h3 className="font-semibold text-sm sm:text-base text-[#4B3A3D]">
                    Nossa Sede
                  </h3>
                  <p className="text-xs sm:text-sm text-[#7D6D70]">
                    Rua das Pelúcias, 123 - Bairro Fofo, São Paulo - SP
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-6 sm:mt-8 md:mt-10 bg-[#FDF6F3] rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 border border-[#F3E2DD]">
              <p className="text-[#8B5E63] font-medium text-sm sm:text-base">
                Atendimento humanizado
              </p>
              <p className="text-xs sm:text-sm text-[#7D6D70] mt-2">
                Respondemos todas as mensagens em até 24 horas úteis.
              </p>
            </div>

          </div>

          {/* Formulário */}
          <div className="bg-white rounded-2xl sm:rounded-3xl md:rounded-[32px] p-6 sm:p-8 md:p-10 border border-[#F0E4DF] shadow-sm">

            <h2 className="text-2xl sm:text-2xl md:text-3xl font-serif text-[#8B5E63] mb-6 sm:mb-8">
              Envie uma mensagem
            </h2>

            <form className="space-y-4 sm:space-y-5">
              <input
                type="text"
                placeholder="Seu nome"
                className="w-full rounded-xl sm:rounded-2xl border border-[#E8D8D2] px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base outline-none focus:border-[#C98E8E] focus:ring-2 focus:ring-[#F5D7D7] transition"
              />

              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full rounded-xl sm:rounded-2xl border border-[#E8D8D2] px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base outline-none focus:border-[#C98E8E] focus:ring-2 focus:ring-[#F5D7D7] transition"
              />

              <textarea
                rows={5}
                placeholder="Escreva sua mensagem..."
                className="w-full rounded-xl sm:rounded-2xl border border-[#E8D8D2] px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base resize-none outline-none focus:border-[#C98E8E] focus:ring-2 focus:ring-[#F5D7D7] transition"
              />

              <button
                type="submit"
                className="w-full py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-[#8B5E63] text-white font-medium text-sm sm:text-base transition hover:opacity-90 hover:scale-[1.02] active:scale-95 duration-200"
              >
                Enviar mensagem 💌
              </button>
            </form>

          </div>

        </div>

        <div className="bg-white rounded-2xl sm:rounded-3xl md:rounded-[32px] p-4 sm:p-6 border border-[#F0E4DF] shadow-sm overflow-hidden">
          <div className="w-full h-[300px] sm:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden isolation-blur">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20442385.127455857!2d-3.3256157499999953!3d47.67498705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!2f403!3m3!1m2!1s0x46ed1f308a4f4d71%3A0x1d50a7c4f0687f5d!2zRXVyb3Bh!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Localização Petit Plushiê - Europa"
              className="grayscale-[20%] contrast-[90%]"
            ></iframe>
          </div>
        </div>

      </div>
    </main>
  )
}