import { ArrowUpRight } from "lucide-react";
import { TimelineHeader } from "./TimelineEntry/TimelineHeader";
import { TimelineDates } from "./TimelineEntry/TimelineDates";
import { TimelineDescription } from "./TimelineEntry/TimelineDescription";
import { TimelineTags } from "./TimelineEntry/TimelineTags";

export const TimelineEntry = ({ entry, isCard }) => {
  return (
    <article className="flex w-full flex-col gap-[30px] text-base group">
      <TimelineHeader entry={entry} isCard={isCard} />
      <TimelineDescription description={entry.description} />
      {entry.tags && <TimelineTags tags={entry.tags} />}
    </article>
  );
};
