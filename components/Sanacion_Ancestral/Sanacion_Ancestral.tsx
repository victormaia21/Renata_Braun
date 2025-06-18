import Image from "next/image";

export default function Sanacion_Ancestral() {
    return (
        <section className="lg:flex pl-24 pr-24 pt-15 pb-15">
            <div className="grid justify-end gap-3 items-center lg:w-3/5">
                <h1 className="text-[#360066] text-5xl font-[1000] text-center lg:text-right mr-3">Sanación Ancestral</h1>
                <Image src="/img/4.png" alt="" width={1200} height={1200} className="lg:ml-22 -translate-y-20 mt-20"/>
            </div>
            <div className="flex flex-col ml-12 lg:mt-16 lg:w-2/5  w-full">
                <h2 className="text-[#360066] font-[900] text-3xl">Libera tu linaje. Ilumina tu alma.</h2>
                <p className="text-xl font-[900] mt-2">Este taller online te guía a liberar memorias kármicas, patrones repetitivos, emociones atrapadas y bloqueos heredados que han pasado de generación en generación.</p>
                <p className="text-xl font-[900]">A través de herramientas como ThetaHealing, visualización guiada y reprogramación energética, Renata Braun te acompaña a cortar lazos de dolor, escasez, pérdida y sufrimiento, para dar paso a una nueva realidad de paz, abundancia y propósito.</p>
                <button className="bg-[#CB0482] text-white text-4xl font-[900] pt-5 pb-5 mt-3 rounded-4xl cursor-pointer">¡Quiero Inscribirme!</button>
            </div>
        </section>
    )
}