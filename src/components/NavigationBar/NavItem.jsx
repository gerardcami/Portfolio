import { Tooltips } from "astro-tooltips";

export const NavItem = ({ href, tooltip, onClick, children, isMobile }) => {
  // Check if the children is an <img> element
  const isImage = children.type && children.type === "img";

  const handleClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior

    // If `href` is a target for an element (like #profile)
    if (href && href !== "#start") {
      const target = document.querySelector(href); // Select the target element

      // Smooth scroll to the target element
      if (target) {
        target.scrollIntoView({
          behavior: "smooth", // This enables smooth scrolling
          block: "start", // Scroll to the start of the element
        });
      }
    } else {
      // If it's for the top of the page (href = "#"), scroll to the top
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scrolling to the top of the page
      });
    }

    // Call any additional onClick behavior if passed
    if (onClick) onClick(e);
  };

  return (
    <li onClick={handleClick} className="list-none">
      {isMobile ? (
        <div className="text-xl hover:scale-110 hover:cursor-pointer transform transition-all">
          <span className="flex items-center justify-center">{children}</span>
        </div>
      ) : (
        <div className="relative group">
          <div
            className={`relative flex lg:aspect-square h-14 transform items-center justify-center overflow-hidden rounded-full border border-[#fafafa19] bg-[#fafafa10] shadow-md transition-transform hover:z-10 hover:scale-110 hover:cursor-pointer hover:bg-[#fafafa20] hover:shadow-xl focus:outline-none ${
              !isImage ? "p-3" : ""
            }`}
          >
            <span className="flex items-center justify-center">{children}</span>
          </div>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:block group-hover:opacity-100">
            {tooltip}
          </div>
        </div>
      )}
    </li>
  );
};
