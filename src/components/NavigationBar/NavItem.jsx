import { Tooltips } from "astro-tooltips";

export const NavItem = ({ href, tooltip, onClick, children }) => {
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
    <li
      title={tooltip}
      data-tooltip-placement="top"
      className={`relative flex aspect-square h-14 transform items-center justify-center overflow-hidden rounded-full border border-[#fafafa19] bg-[#fafafa10] shadow-md transition-transform hover:z-10 hover:scale-110 hover:cursor-pointer hover:bg-[#fafafa20] hover:shadow-xl focus:outline-none ${
        !isImage ? "p-3" : ""
      }`}
      onClick={handleClick} // Attach the click event to the entire li
    >
      <span className="flex items-center justify-center">{children}</span>
    </li>
  );
};
