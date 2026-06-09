import { Mail, Phone, MapPin, Heart } from "lucide-react"

export default function Contato() {
  return (
    <main className="min-h-screen bg-[#FCFAF8] py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Heart className="text-[#C98E8E] fill-[#F5D7D7]" size={30} />
          </div>

          <h1 className="text-5xl font-serif text-[#8B5E63] mb-4">
            Entre em Contato
          </h1>

          <p className="text-[#7D6D70] max-w-xl mx-auto">
            Ficaremos felizes em ajudar você. Seja para dúvidas,
            sugestões ou para conversar sobre nossas pelúcias,
            nossa equipe está sempre disponível.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Informações */}
          <div className="bg-white rounded-[32px] p-10 border border-[#F0E4DF] shadow-sm">

            <h2 className="text-3xl font-serif text-[#8B5E63] mb-8">
              Fale com a Petit Plushiê
            </h2>

            <div className="space-y-8">

              <div className="flex items-start gap-4">
                <div className="bg-[#F8ECE8] p-3 rounded-2xl">
                  <Mail className="text-[#8B5E63]" />
                </div>

                <div>
                  <h3 className="font-semibold text-[#4B3A3D]">
                    E-mail
                  </h3>

                  <p className="text-[#7D6D70]">
                    contato@petitplushie.com.br
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#F8ECE8] p-3 rounded-2xl">
                  <Phone className="text-[#8B5E63]" />
                </div>

                <div>
                  <h3 className="font-semibold text-[#4B3A3D]">
                    WhatsApp
                  </h3>

                  <p className="text-[#7D6D70]">
                    (00) 00000-0000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#F8ECE8] p-3 rounded-2xl">
                  <MapPin className="text-[#8B5E63]" />
                </div>

                <div>
                  <h3 className="font-semibold text-[#4B3A3D]">
                    Localização
                  </h3>

                  <p className="text-[#7D6D70]">
                    Enviamos para todo o Brasil
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-10 bg-[#FDF6F3] rounded-3xl p-6 border border-[#F3E2DD]">
              <p className="text-[#8B5E63] font-medium">
                Atendimento humanizado
              </p>

              <p className="text-[#7D6D70] mt-2">
                Respondemos todas as mensagens
                em até 24 horas úteis.
              </p>
            </div>

          </div>

          {/* Formulário */}
          <div className="bg-white rounded-[32px] p-10 border border-[#F0E4DF] shadow-sm">

            <h2 className="text-3xl font-serif text-[#8B5E63] mb-8">
              Envie uma mensagem
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Seu nome"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-[#E8D8D2]
                  px-5
                  py-4
                  outline-none
                  focus:border-[#C98E8E]
                "
              />

              <input
                type="email"
                placeholder="Seu e-mail"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-[#E8D8D2]
                  px-5
                  py-4
                  outline-none
                  focus:border-[#C98E8E]
                "
              />

              <textarea
                rows={6}
                placeholder="Escreva sua mensagem..."
                className="
                  w-full
                  rounded-2xl
                  border
                  border-[#E8D8D2]
                  px-5
                  py-4
                  resize-none
                  outline-none
                  focus:border-[#C98E8E]
                "
              />

              <button
                type="submit"
                className="
                  w-full
                  py-4
                  rounded-2xl
                  bg-[#8B5E63]
                  text-white
                  font-medium
                  transition
                  hover:opacity-90
                  hover:scale-[1.02]
                "
              >
                Enviar mensagem 💌
              </button>

            </form>

          </div>

        </div>

      </div>
    </main>
  )
}