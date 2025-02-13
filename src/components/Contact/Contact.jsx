import { contactLinks } from "../../data/socialLinks";
import { SocialLinks } from "../SocialLinks";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center py-16 text-base"
    >
      <header className="mb-10 text-center">
        <h2 className="text-header font-bold text-white">📩 ¡Hablemos!</h2>
      </header>

      <div className="flex max-w-2xl flex-col items-center gap-10 text-center text-gray-300">
        <p>
          Si necesitas ayuda, tienes alguna <strong>consulta</strong> o estás
          interesado en <strong>trabajar conmigo</strong>, estaré encantado de
          escucharte. Ya sea para <strong>colaborar en un proyecto</strong>,{" "}
          <strong>resolver dudas</strong> o discutir una{" "}
          <strong>oportunidad laboral</strong>, no dudes en contactarme{" "}
          <strong>a través de cualquiera de los siguientes canales</strong>.
        </p>
        <SocialLinks links={contactLinks} />
      </div>

      <div className="my-10 flex w-full max-w-md items-center text-gray-400">
        <span className="h-0.5 flex-1 bg-[#fafafa2c]"></span>
        <span className="px-4 text-sm font-bold">O</span>
        <span className="h-0.5 flex-1 bg-[#fafafa2c]"></span>
      </div>

      <div className="w-full max-w-lg space-y-10">
        <p className="text-center">
          Si lo prefieres, rellena este <strong>formulario</strong> y me pondré
          en contacto contigo <strong>lo antes posible</strong>.
        </p>

        <ContactForm />
      </div>
    </section>
  );
};
