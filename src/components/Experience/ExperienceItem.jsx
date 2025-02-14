import { useEffect, useRef, useState } from "react";
import { TimelineEntry } from "../TimelineEntry";

export const ExperienceItem = ({ experience }) => {
  const itemRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!itemRef.current) return;
      const { top, height } = itemRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const progressValue = Math.min(
        1,
        Math.max(0, (viewportHeight / 2 - top) / (height / 2))
      );

      setProgress(progressValue);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <li
      ref={itemRef}
      className="group flex gap-[30px] text-sm transition-colors"
    >
      {/* Línea de progreso con indicador */}
      <div className="mt-[40px] hidden flex-col items-center gap-[55px] md:flex">
        {/* Indicador de inicio (punto) */}
        <div className="aspect-square rounded-full bg-white md:w-[6px] lg:w-[8px]"></div>

        {/* Barra de progreso */}
        <div className="relative h-full rounded-full bg-[#fafafa10] md:w-[4px] lg:w-[8px]">
          <div
            className="rounded-full bg-emphasis transition-all"
            style={{
              height: `${progress * 100}%`,
            }}
          ></div>
        </div>
      </div>

      {/* Contenido de la experiencia */}
      <a
        href={experience.entityLink}
        target="_blank"
        rel="noopener noreferrer"
        className="p- block w-full rounded-2xl p-4 hover:bg-[#fafafa10] md:p-6"
      >
        <TimelineEntry entry={experience} isCard={true} />
      </a>
    </li>
  );
};
