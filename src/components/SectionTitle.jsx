export const SectionTitle = ({ title }) => {
  return (
    <h2 className="font-sm relative flex w-full items-center gap-4 font-header text-[16px] font-bold tracking-wider text-gray-200 md:text-[24px] lg:text-[30px]">
      <span className="flex items-center">{title}</span>
      <span
        className="h-0.5 flex-1 bg-gradient-to-r from-[#fafafa2c] to-transparent"
        aria-hidden="true"
      ></span>
    </h2>
  );
};
