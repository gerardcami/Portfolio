import { ArrowUpRight } from "lucide-react";

export const StackSection = ({ section }) => {
  return (
    <section className="mb-6">
      <h3 className="text-title mb-8 font-semibold text-white">
        {section.title}
      </h3>
      <ul
        className={`grid auto-rows-fr gap-4 md:grid-cols-3 ${section.title === "Workstation" ? "grid-cols-1 lg:grid-cols-3" : "grid-cols-2 lg:grid-cols-5"} auto-rows`}
      >
        {section.items.map((item) => (
          <li key={item.name}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-[#fafafa19] bg-[#fafafa10] p-4 transition-all"
            >
              <picture className="flex h-[50px] w-[50px] items-center justify-center">
                <img
                  src={item.image}
                  alt={`${item.name} logo`}
                  className="h-full w-full object-contain"
                />
              </picture>
              <h4 className="text-center text-base font-medium text-white lg:text-md">
                {item.name}
              </h4>
              <p className="hidden text-center text-sm text-gray-400">
                {item.description}
              </p>

              <div className="absolute right-2 top-2 rounded-full border border-[#fafafa4c] p-1 text-[#fafafa4c] transition-all group-hover:bg-[#fafafa2d]">
                <ArrowUpRight size={15} />
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
