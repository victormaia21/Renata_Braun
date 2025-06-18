import Image from "next/image";

export default function De_Wall_Street() {
    return (
        <section className="flex flex-col-reverse xl:flex-row gap-12 px-4 md:px-12 pt-12 pb-12 w-full items-center">
            <div className="w-full xl:w-1/2 flex justify-center items-center">
                <Image 
                    src="/img/2.png" 
                    width={800} 
                    height={800}
                    alt="Renata Braun" 
                    className="w-full max-w-md sm:max-w-lg xl:max-w-xl 2xl:max-w-2xl h-auto object-contain"
                />
            </div>

            <article className="w-full xl:w-1/2 text-center xl:text-left">
                <h1 className="text-[#97807d] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    {'“DE WALL STREET A LA SANACIÓN“'}
                </h1>
                <p className="font-poppins text-base sm:text-lg lg:text-xl mt-6 text-[#898989]">
                    Después de dos décadas en el mundo financiero en Nueva York, sentí un llamado profundo: guiar a otros hacia su sanación.
                    Desde 2005, he acompañado a miles de personas como pionera de ThetaHealing en México y LATAM, ofreciendo más de 900 cursos y sesiones.
                </p>
                <p className="text-base sm:text-lg lg:text-xl mt-4 text-[#898989]">
                    Me formé en física cuántica, mecánica cuántica, PNL, Reiki e hipnosis, y me considero una chamana intuitiva al servicio del equilibrio físico, emocional y espiritual.
                    Mi misión es ayudarte a reconectar con tu verdadera esencia.
                </p>
            </article>
        </section>
    );
}
