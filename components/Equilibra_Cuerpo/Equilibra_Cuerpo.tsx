import Image from "next/image";
import { PiSun } from "react-icons/pi";

export default function Equilibra_Cuerpo() {
    return (
        <section className="lg:flex pt-24 pb-24 lg:w-4/5 lg:justify-center">
            <div className=" flex relative justify-center w-full items-center lg:w-3/5 xl:justify-end">
                <div className="z-0 relative top-0 left-0 w-[40em] ">
                    <Image src="/img/6.png" alt="" width={3000} height={3000}  unoptimized/>
                    <div className="w-[20em] z-1000 absolute top-1/2 left-1/2 translate-y-1/2 -translate-1/6">
                        <Image src="/img/7.png" alt="" width={2500} height={2500} unoptimized/>
                    </div>
                </div>
                
            </div>
            <div className="w-full flex flex-col items-center text-left mt-48 lg:w-2/5 xl:items-start ">
                <h1 className="text-[#97807d] font-[900] text-5xl w-4/5">Equilibra tu cuerpo, alma y espíritu </h1>
                <p className="w-4/5 mt-3 text-sm text-[]">Una terapia energética significa localizar los bloqueos energéticos que se originan por los pensamientos y emociones, para poder limpiar la energía densa y armonizar tu energía (chakras y campos energéticos).</p>
                <ul className="mt-4 flex flex-col gap-5 items-baseline pl-8 pr-8 xl:pl-0 xl:pr-0">
                    <li className="flex items-center gap-1.5 font-[600] text-2xl"><PiSun /> Limpia Energetica</li>
                    <li className="flex items-center gap-1.5 font-[600] text-2xl"><PiSun /> Preparación Energética para Procedimientos Quirúrgicos</li>
                    <li className="flex items-center gap-1.5 font-[600] text-2xl"><PiSun /> Trabajar las Emociones de la Enfermedad en el Cuerpo</li>
                    <li className="flex items-center gap-1.5 font-[600] text-2xl"><PiSun /> Liberación del Trauma Epigenético Ancestral</li>
                    <li className="flex items-center gap-1.5 font-[600] text-2xl"><PiSun /> Desarrollo de Intuición y de Sentidos Psíquicos</li>
                    <li className="flex items-center gap-1.5 font-[600] text-2xl"><PiSun /> Liberación del Trauma para lograr el Embarazo</li>
                    <li className="flex items-center gap-1.5 font-[600] text-2xl"><PiSun /> Trabajo con Adolescentes</li>
                    <li className="flex items-center gap-1.5 font-[600] text-2xl"><PiSun /> Alineación de Chakras y Equilibrio Energético Toroidal</li>
                </ul>
                <div className="flex justify-center w-full">
                    <button className="bg-[#CB0482] text-white mt-7 w-4/5 h-14 text-4xl font-bold rounded-4xl cursor-pointer">Reservar Cita</button>
                </div>
            </div>
        </section>
    )
}