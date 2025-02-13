export const WorkStatusIndicator = ({ status, className = " " }) => {
  const statuses = {
    looking: { text: "Disponible para trabajar", color: "bg-[#a3e635]" },
    open: { text: "Abierto a ofertas", color: "bg-[#fbbf24]" },
    working: { text: "Trabajando actualmente", color: "bg-[#3b82f6]" },
    notOpen: { text: "No disponible", color: "bg-[#ff5f5f]" },
  };

  const { text, color } = statuses[status] || {
    text: "Estado desconocido",
    color: "bg-neutral-500",
  };

  return (
    <div className={`${className}`}>
      <span className="inline-flex items-center rounded-md border border-[#FFFFFF1A] px-2 py-0 text-xs font-semibold">
        <span className="mr-1 flex h-3 w-3 items-center">
          <span
            className={`absolute h-2 w-2 animate-ping rounded-full opacity-75 ${color}`}
          ></span>
          <span className={`relative h-2 w-2 rounded-full ${color}`}></span>
        </span>
        {text}
      </span>
    </div>
  );
};
