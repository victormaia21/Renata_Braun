export default function Renata_Braun_Header() {
    return (
        <section className='bg-[url("/img/1.png")] bg-cover bg-center bg-no-repeat w-full h-screen'>
            <header className={`text-white h-14 bg-cover`}>
                <div className="flex w-1/2 h-full justify-center items-center">
                    <ul className="flex gap-6">
                        <li className="cursor-pointer borde border-solid hover:border-[1px] border-white">Sobre mi</li>
                        <li className="cursor-pointer">Cursos</li>
                        <li className="cursor-pointer">Clases</li>
                        <li className="cursor-pointer">Tienda</li>
                        <li className="cursor-pointer">Contacto</li>
                    </ul>
                </div>
                <div className="w-1/2"></div>
            </header>
            <div className="h-full flex flex-col justify-end -translate-y-48 items-center">
                <div className="grid w-5/6 sm:w-3/6 gap-8">
                    <p className="font-cocomat text-white text-3xl">
                    Sanadora Cuántica | Pionera de ThetaHealing en México y LATAM +40 años guiando almas hacia su sanación física, emocional y espiritual
                    </p>
                    <div className="flex justify-center">
                        <button className="bg-[#CB0482] text-white w-full h-14 text-4xl font-bold rounded-4xl cursor-pointer">RESERVAR CITA</button>
                    </div>
                </div>
            </div>
        </section>
    )
}