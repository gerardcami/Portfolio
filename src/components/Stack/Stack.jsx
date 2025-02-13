import { SectionTitle } from "../SectionTitle";
import { stackData } from "../../data/stackData";
import { StackSection } from "./StackSection";

export const Stack = () => {
  return (
    <section id="stack">
      <SectionTitle title="Stack" />
      <ul className="mx-4 my-[25px] flex flex-col gap-[50px] md:mx-8 md:my-[50px]">
        {stackData.map((stackSection) => (
          <StackSection key={stackSection.title} section={stackSection} />
        ))}
      </ul>
    </section>
  );
};
