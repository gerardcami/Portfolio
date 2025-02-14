import { ArrowUpRight } from "lucide-react";

function capitalizeFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export const TimelineHeader = ({ entry, isCard }) => {
  return (
    <header className="flex flex-col gap-[10px]">
      <h3>
        {!isCard ? (
          <a
            href={entry.entityLink}
            target="_blank"
            className="text-title flex justify-between gap-2 font-bold hover:text-emphasis group-hover:text-emphasis md:items-center md:justify-normal"
          >
            <div className="flex flex-col md:flex-row md:gap-2">
              <span>{entry.title}</span>
              <span className="hidden md:block">·</span>
              <span>{entry.entity}</span>
            </div>
            <ArrowUpRight
              className="transition-transform duration-300 group-hover:translate-x-[4px] group-hover:translate-y-[-4px]"
              size={20}
            />
          </a>
        ) : (
          <div className="text-title flex justify-between gap-2 font-bold md:items-center md:justify-normal group-hover:text-emphasis">
            <div className="flex flex-col md:flex-row md:gap-2">
              <span>{entry.title}</span>
              <span className="hidden md:block">·</span>
              <span>{entry.entity}</span>
            </div>
            <ArrowUpRight
              className="transition-transform duration-300 group-hover:translate-x-[4px] group-hover:translate-y-[-4px]"
              size={20}
            />
          </div>
        )}
      </h3>

      <div className="flex flex-col font-semibold text-[#fafafa80] md:flex-row md:items-center md:gap-2">
        <span>{entry.location}</span>
        <span className="hidden md:block">|</span>
        <span>
          <time dateTime={entry.startDate}>
            {capitalizeFirstLetter(
              new Intl.DateTimeFormat("es-ES", {
                month: "long",
                year: "numeric",
              }).format(new Date(entry.startDate))
            )}
          </time>
          <span> - </span>
          <time dateTime={entry.endDate}>
            {entry.endDate
              ? capitalizeFirstLetter(
                  new Intl.DateTimeFormat("es-ES", {
                    month: "long",
                    year: "numeric",
                  }).format(new Date(entry.endDate))
                )
              : "Actualidad"}
          </time>
        </span>
      </div>
    </header>
  );
};
