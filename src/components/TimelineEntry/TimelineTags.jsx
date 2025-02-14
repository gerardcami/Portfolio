export const TimelineTags = ({ tags }) => {
  return (
    <footer>
      <ul className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li
            key={tag.name}
            className="flex items-center justify-center gap-2 rounded-full bg-[#fafafa10] px-4 py-1"
          >
            {tag.icon}
            <span>{tag.name}</span>
          </li>
        ))}
      </ul>
    </footer>
  );
};
