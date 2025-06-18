export default function Renata_Braun_Header() {
    return (
        <section className='bg-[url("/img/1.png")] bg-cover bg-center bg-no-repeat w-full h-screen relative'>
            <header className="text-white h-14 flex justify-between items-center px-4 sm:px-8 bg-black/30 backdrop-blur-sm">
                <div className="flex items-center">
                    <ul className="flex gap-4 sm:gap-6 text-sm sm:text-base">
                        <li className="cursor-pointer border border-transparent hover:border-white">Sobre mi</li>
                        <li className="cursor-pointer hover:underline">Cursos</li>
                        <li className="cursor-pointer hover:underline">Clases</li>
                        <li className="cursor-pointer hover:underline">Tienda</li>
                        <li className="cursor-pointer hover:underline">Contacto</li>
                    </ul>
                </div>
            </header>

            <div className="absolute bottom-10 left-0 w-full flex justify-center px-4">
                <div className="grid w-full max-w-2xl gap-6 text-center">
                    <p className="font-cocomat text-white text-xl sm:text-2xl md:text-3xl leading-relaxed">
                        Sanadora Cuántica | Pionera de ThetaHealing en México y LATAM +40 años guiando almas hacia su sanación física, emocional y espiritual
                    </p>
                    <div className="flex justify-center">
                        <button className="bg-[#815138] text-white px-6 h-12 sm:h-14 text-xl sm:text-2xl font-bold rounded-full cursor-pointer">
                            RESERVAR CITA
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
