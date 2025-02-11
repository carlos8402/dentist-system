import { Carousel } from "../../components/carousel";
import { Footer } from "../../components/footer";
import { Modal } from "../../components/modal";
import { Navbar } from "../../components/navbar";
import FormularioDentista from "../../components/schedule/dentist-form";
import { Contact } from "../contact";
import { Differential } from "../differential";
import { Services } from "../services";

export function Home() {
  return (
    <div id="home">
      <Modal />
      <Navbar />
      <div className="lg:relative bg-white">
        <Carousel />
        <FormularioDentista />
      </div>
      <section id="differential">
        <Differential />
      </section>

      <section id="services">
        <Services />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
