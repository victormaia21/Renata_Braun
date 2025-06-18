import Image from "next/image";

export default function Transformarcion_Comienza() {
    return (
        <section className="w-full px-4 md:px-8 py-12 flex flex-col justify-center items-center gap-6 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#97807d] font-extrabold uppercase">
                Tu transformación comienza aquí
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-[#898989] max-w-3xl">
                Descubre cómo puedes liberar bloqueos desde el subconsciente y vivir una transformación real.
            </p>

            <Image
                src="/img/3.png"
                alt="Transformación"
                width={800}
                height={800}
                className="w-full max-w-md sm:max-w-lg lg:max-w-2xl mt-4 h-auto object-contain"
            />

            <button className="bg-[#815138] text-white text-lg sm:text-2xl lg:text-3xl font-extrabold py-3 px-8 rounded-full w-full max-w-sm">
                AGENDAR TERAPIA
            </button>
        </section>
    );
}
