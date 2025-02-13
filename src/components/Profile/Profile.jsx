import { WorkStatusIndicator } from "./WorkStatusIndicator";
import { SocialLinks } from "../SocialLinks";
import { links } from "../../data/socialLinks";

export const Profile = () => (
  <section id="start" className="my-16 text-base sm:my-32">
    <div className="items-center justify-around md:flex md:flex-row-reverse">
      <header>
        <h1 className="sr-only">Gerard Camí</h1>
        <div className="w-[80px] rounded-full bg-zinc-100 object-cover p-0.5 md:w-[200px] dark:bg-zinc-800">
          <img
            className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800"
            src="/avatar.svg"
            alt="Gerard Camí's Avatar"
          />
        </div>
      </header>
      <div className="space-y-4">
        <div className="mt-2 opacity-90">
          <span className="font-header text-2xl font-bold tracking-wide">
            Gerard Camí
          </span>
          <div className="mt-1 opacity-80">
            Desarrollador frontend especializado en React.
            <br />
            Actualmente en busca de empleo.
          </div>
        </div>

        <WorkStatusIndicator status="looking" />
        <SocialLinks links={links} />
      </div>
    </div>
  </section>
);
