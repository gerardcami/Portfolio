import { Briefcase } from "lucide-react";
import { experiences } from "../../data/workExperiences";
import { ExperienceItem } from "./ExperienceItem";
import { SectionTitle } from "../SectionTitle";

// Componente que representa cada experiencia con su propia barra de progreso e indicador de inicio

export const Experience = () => {
  return (
    <section id="experience">
      <SectionTitle
        title="Dónde he trabajado"
        icon={<Briefcase size="100%" />}
      />

      <ul className="my-[25px] flex flex-col gap-[15px] md:my-[50px] md:ml-5">
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} experience={experience} />
        ))}
      </ul>
    </section>
  );
};
