import Breathwork from "@/components/Breathwork/Breathwork";
import Conectar from "@/components/Conectar/Conectar";
import De_Wall_Street from "@/components/De_Wall_Street/De_Wall_Street";
import Equilibra_Cuerpo from "@/components/Equilibra_Cuerpo/Equilibra_Cuerpo";
import Próximos_Talleres from "@/components/Próximos_Talleres/Próximos_Talleres";
import Renata_Braun_Header from "@/components/renata_braun_header/Renata_Braun_Header";
import Sanacion_Ancestral from "@/components/Sanacion_Ancestral/Sanacion_Ancestral";
import Sobre from "@/components/Sobre/Sobre";
import Terapia_Transformacion from "@/components/Terapia_Transformacion/Terapia_Transformacion";
import Testimonios from "@/components/Testimonios/Testimonios";
import Transformarcion_Comienza from "@/components/Transformacion_Comienza/Transformarcion_Comienza";
import Link from "next/link";
import { FaSquareWhatsapp } from "react-icons/fa6";


export default function Home() {
  return (
    <div className="pb-24 relative">
      <Renata_Braun_Header />
      <De_Wall_Street />
      <Transformarcion_Comienza />
      <Próximos_Talleres />
      <Sanacion_Ancestral />
      <Breathwork />
      <Terapia_Transformacion />
      <Equilibra_Cuerpo />
      <Testimonios />
      <Sobre />
      <Conectar />
      <Link href="*" className="fixed bottom-5 right-5 text-7xl cursor-pointer" target="_blank">
        <FaSquareWhatsapp className="text-[#25D366]"/>
      </Link>
    </div>
  );
}
