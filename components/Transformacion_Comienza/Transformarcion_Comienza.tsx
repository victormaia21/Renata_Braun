import Image from "next/image";

export default function Transformarcion_Comienza() {
    return (
        <section className="lg:w-7/8 m-auto text-center flex flex-col justify-center items-center gap-3 pt-12 pb-12">
            <h1 className="text-4xl lg:text-5xl text-[#767676] font-[900] uppercase">Tu transformación comienza aquí</h1>
            <p className="text-xl">Descubre cómo puedes liberar bloqueos desde el subconsciente y vivir una transformación real.</p>
            <Image src="/img/3.png" alt="" width={800} height={800} className="mt-5 w-1/2 lg:w-2/3"/>
            <button className="bg-[#CB0482] text-white w-1/2 text-3xl font-[900] pt-3 pb-3 rounded-4xl">AGENDAR TERAPIA</button>
        </section>
    )
}