import { aboutMe, education } from "../../data/aboutData";
import { ImageSelection } from "./ImageSelection";
import { TimelineEntry } from "../TimelineEntry";
import { TrackCard } from "./TrackCard";
import { GraduationCap, PersonStanding } from "lucide-react";
import { SectionTitle } from "../SectionTitle";

export const About = () => {
  return (
    <section id="about">
      <SectionTitle title="Sobre mí" />
      <div className="my-[50px] grid grid-cols-1 grid-rows-[repeat(12,100px)] gap-[15px] text-base md:grid-cols-3 md:grid-rows-[repeat(7,100px)]">
        {/* Introduction about me */}
        <article className=":gap-6 col-start-1 row-span-4 row-start-5 flex flex-col gap-3 overflow-hidden rounded-2xl border border-[#fafafa19] p-4 pb-0 md:col-span-2 md:row-span-5 md:row-start-1 md:p-[40px]">
          <header className="flex flex-row-reverse justify-between gap-4 opacity-80 md:flex-row md:items-center md:justify-normal">
            <PersonStanding size={24} />
            <h3 className="text-header font-bold">
              Soy Gerard Camí, desarrollador frontend
            </h3>
          </header>
          <div className="flex flex-col gap-2 text-pretty md:gap-4">
            {aboutMe.text}
          </div>
          <picture className="relative p-[16%]">
            <img
              src="/img/about/codeimage.svg"
              alt="My Values"
              loading="lazy"
              className="absolute inset-0 opacity-70 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0.5),transparent)]"
              width={720}
              height={405}
            />
          </picture>
        </article>
        {/* Gallery */}
        <article className="group relative col-span-1 row-span-4 row-start-1 flex overflow-hidden rounded-2xl border border-[#fafafa19] md:col-start-3">
          <ImageSelection />
        </article>
        {/* Music */}
        <article className="col-span-1 row-span-1 row-start-9 rounded-2xl border border-[#fafafa19] md:col-start-3 md:row-start-5">
          <TrackCard />
        </article>
        {/* Education */}
        <article className="col-start-1 row-span-4 row-start-10 rounded-2xl border border-[#fafafa19] p-4 md:col-span-3 md:row-span-10 md:row-start-6 md:p-[40px]">
          <header className="flex flex-row-reverse items-center justify-between gap-4 opacity-80 md:flex-row md:justify-normal">
            <GraduationCap size={24} />
            <h3 className="text-header font-bold">Educación</h3>
          </header>
          <ul className="mt-6">
            {education.map((item, i) => (
              <li key={i} className="flex">
                <TimelineEntry entry={item} />
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};
