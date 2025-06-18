import Image from "next/image";

export default function Testimonios() {
    return (
        <section className="pt-24 pb-24 pr-12 pl-12">
            <h4 className="text-[#360066] text-center text-2xl">Testimonios</h4>
            <h2 className="text-[#767676] text-center mt-6 text-4xl w-3/4 m-auto font-[900]">Conoce las historias de pacientes que atravesaron su proceso de Transformación conmigo</h2>
            <div 
            className="grid grid-cols-fluid gap-3 mt-10" 
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(10em, 1fr))",
                gap: "1rem",
            }}>
                <div>
                    <Image src="/img/floresta.jpg" width={2200} height={1200} alt="" className="rounded-2xl"/>
                </div>
                <div>
                    <Image src="/img/floresta.jpg" width={2200} height={1200} alt="" className="rounded-2xl"/>
                </div>
                <div>
                    <Image src="/img/floresta.jpg" width={2200} height={1200} alt="" className="rounded-2xl"/>
                </div>
                <div>
                    <Image src="/img/floresta.jpg" width={2200} height={1200} alt="" className="rounded-2xl"/>
                </div>
            </div>
        </section>
    )
}