import { TimelineHeader } from "./TimelineHeader";
import { TimelineDescription } from "./TimelineDescription";
import { TimelineTags } from "./TimelineTags";

export const TimelineEntry = ({ entry, isCard }) => {
  return (
    <article className="flex w-full flex-col gap-[30px] text-base group">
      <TimelineHeader entry={entry} isCard={isCard} />
      <TimelineDescription description={entry.description} />
      {entry.tags && <TimelineTags tags={entry.tags} />}
    </article>
  );
};
