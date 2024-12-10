import { WorkStatusIndicator } from "./WorkStatusIndicator";
import { SocialLinks } from "./SocialLinks";
import { links } from "../../data/socialLinks";

export const Profile = () => (
  <section className="mt-16 px-12 sm:mt-32">
    <header>
      <h1 className="sr-only">Gerard Camí</h1>
      <div className="block w-16 rounded-full bg-zinc-100 object-cover p-0.5 dark:bg-zinc-800">
        <img
          className="w-16 rounded-full bg-zinc-100 object-cover dark:bg-zinc-800"
          src="/avatar.svg"
          alt="Gerard Camí's Avatar"
        />
      </div>
    </header>
    <div className="mt-2 text-base text-neutral-700 dark:text-white/80">
      <span className="text-2xl font-bold text-neutral-900 dark:text-white">
        Gerard Camí
      </span>
      <br />
      Desarrollador frontend especializado en React.
      <br />
      Actualmente en busca de empleo.
    </div>
    <WorkStatusIndicator status="looking" className="mt-4" />
    <SocialLinks links={links} className="mt-4" />
  </section>
);