import { gallery } from "../../data/aboutData";

export const Selector = ({ currentItem, onSelectedItem }) => {
  return (
    <div className="flex w-[175px] items-center justify-center gap-6 rounded-full border border-[#fafafa1a] px-4 py-3 backdrop-blur-md">
      {gallery.map((item) => (
        <button
          key={item.id}
          onClick={() => onSelectedItem(item)}
          className={`rounded-xl p-1 transition-all duration-300 ease-in-out ${
            currentItem.id === item.id
              ? "scale-110 bg-[#fafafa2f]"
              : "scale-100 bg-transparent"
          }`}
        >
          {item.icon}
        </button>
      ))}
    </div>
  );
};
