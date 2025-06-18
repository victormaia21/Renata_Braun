import Image from "next/image";

export default function Sanacion_Ancestral() {
    return (
        <section className="flex flex-col lg:flex-row px-4 md:px-8 py-12 gap-12 items-center">
            <div className="w-full lg:w-3/5 flex flex-col items-center lg:items-end gap-6">
                <h1 className="text-[#97807d] text-3xl sm:text-4xl lg:text-5xl font-black text-center lg:text-right">
                    Sanación Ancestral
                </h1>
                <Image
                    src="/img/4.png"
                    alt="Sanación Ancestral"
                    width={1200}
                    height={1200}
                    className="w-full max-w-md sm:max-w-lg lg:max-w-xl object-contain"
                />
            </div>

            <div className="w-full lg:w-2/5 flex flex-col justify-center gap-4">
                <h2 className="text-[#aba79a] text-2xl sm:text-3xl font-extrabold">
                    Libera tu linaje. Ilumina tu alma.
                </h2>
                <p className="text-base sm:text-lg lg:text-xl font-semibold text-[#898989]">
                    Este taller online te guía a liberar memorias kármicas, patrones repetitivos, emociones atrapadas y bloqueos heredados que han pasado de generación en generación.
                </p>
                <p className="text-base sm:text-lg lg:text-xl font-semibold text-[#898989]">
                    A través de herramientas como ThetaHealing, visualización guiada y reprogramación energética, Renata Braun te acompaña a cortar lazos de dolor, escasez, pérdida y sufrimiento, para dar paso a una nueva realidad de paz, abundancia y propósito.
                </p>
                <button className="bg-[#815138] text-white text-lg sm:text-2xl lg:text-3xl font-extrabold py-4 px-6 rounded-full mt-4">
                    ¡Quiero Inscribirme!
                </button>
            </div>
        </section>
    );
}
