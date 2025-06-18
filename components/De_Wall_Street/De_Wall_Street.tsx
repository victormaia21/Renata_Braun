import Image from "next/image";

export default function De_Wall_Street() {
    return (
        <section className="flex pl-6 pr-6 pt-12 pb-12">
            <div className="w-7/8 justify-center items-center 2xl:flex 2xl:w-full 2xl:justify-center">
                <article className="flex flex-col 2xl:w-2/5 text-center">
                    <h1 className="text-[#97807d] text-7xl font-bold">{'“DE WALL STREET A LA SANACIÓN“'}</h1>
                    <p className="font-poppins text-xl mt-6 text-[#898989]">Después de dos décadas en el mundo financiero en Nueva York, sentí un llamado profundo: guiar a otros hacia su sanación. Desde 2005, he acompañado a miles de personas como pionera de ThetaHealing en México y LATAM, ofreciendo más de 900 cursos y sesiones.
                    </p>
                    <p className="text-xl mt-1 text-[#898989]">Me formé en física cuántica, mecánica cuántica, PNL, Reiki e hipnosis, y me considero una chamana intuitiva al servicio del equilibrio físico, emocional y espiritual. Mi misión es ayudarte a reconectar con tu verdadera esencia.</p>
                </article>
                <div className="flex w-full justify-center items-center 2xl:w-1/2">
                    <Image 
                        src="/img/2.png" 
                        width={1500} 
                        height={1500}
                        alt=""
                        className="2xl:-translate-x-1/4 ml-12"
                    />
                </div>
            </div>
        </section>
    )
}