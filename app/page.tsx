import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Dores from "@/components/Dores";
import Metodologia from "@/components/Metodologia";
import Pilares from "@/components/Pilares";
import Sobre from "@/components/Sobre";
import Depoimentos from "@/components/Depoimentos";
import FormularioContato from "@/components/FormularioContato";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Dores />
        <Metodologia />
        <Sobre />
        <Pilares />
        <Depoimentos />
        <FormularioContato />
      </main>
      <Footer />
    </>
  );
}