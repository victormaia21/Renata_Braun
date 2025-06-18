import Image from "next/image";

export default function Sobre() {
    return (
        <section className="flex pl-6 pr-6 pt-12 pb-12">
        <div className="w-7/8 justify-center items-center 2xl:flex 2xl:w-full 2xl:justify-center">
            <article className="flex flex-col 2xl:w-2/5 text-center">
                <h1 className="text-7xl font-bold">Sobre Renata Braun</h1>
                <ul className="list-disc text-left ml-16 mt-7 text-2xl font-[500]">
                    <li>Pionera en ThetaHealing en México y LATAM</li>
                    <li>+40 años de experiencia</li>
                    <li>+900 cursos y terapias impartidas</li>
                    <li>Experta en física cuántica, hipnosis, PNL y Reiki</li>
                    <li>Chamana intuitiva y guía energética</li>
                </ul>
                <button className="bg-[#CB0482] mt-10 text-white w-full pt-1 pb-1 text-4xl font-bold rounded-4xl cursor-pointer">Lee su entrevista completa</button>
            </article>
            <div className="flex w-full justify-center items-center 2xl:w-1/2">
                <Image 
                    src="/img/8.png" 
                    width={2500} 
                    height={2500}
                    alt=""
                    className="2xl:-translate-x-1/4 ml-12"
                />
            </div>
        </div>
    </section>
    )
}