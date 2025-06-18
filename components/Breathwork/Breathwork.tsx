import Image from "next/image";

export default function Breathwork() {
  return (
    <section className="flex flex-col xl:flex-row gap-10 px-6 xl:px-24 py-10">
      {/* Bloco da Imagem */}
      <div className="w-full xl:w-3/5 flex flex-col items-center xl:items-end">
        <h1 className="text-[#97807d] text-5xl font-[1000] text-center xl:text-right mb-6 xl:mr-16">
          Breathwork
        </h1>
        <div className="w-full max-w-[1000px] relative">
          <Image
            src="/img/5.png"
            alt="Imagem breathwork"
            width={3000}
            height={3000}
            className="w-full h-auto object-contain xl:ml-12"
            unoptimized
          />
        </div>
      </div>

      {/* Bloco de Texto */}
      <div className="w-full xl:w-2/5 flex flex-col items-center xl:items-start justify-center mt-6 xl:mt-0">
        <h2 className="text-[#aba79a] font-[900] text-3xl text-center xl:text-left">
          Respira profundo. Libera. Despierta.
        </h2>
        <p className="text-xl font-[900] mt-2 text-justify text-[#898989]">
          Vive una experiencia vivencial transformadora junto a Renata Braun. A través de técnicas de respiración consciente, meditaciones guiadas y sobreoxigenación, accederás a estados expandidos de conciencia, liberarás bloqueos emocionales profundos y conectarás con tu sabiduría interna.
        </p>
        <p className="text-xl font-[900] mt-2 text-justify text-[#898989]">
          Ideal para quienes buscan una purificación energética real, conexión espiritual y visiones profundas.
        </p>
        <button className="bg-[#815138] text-white text-2xl font-[900] py-3 px-6 mt-6 rounded-3xl cursor-pointer">
          Reservar mi Lugar
        </button>
      </div>
    </section>
  );
}
