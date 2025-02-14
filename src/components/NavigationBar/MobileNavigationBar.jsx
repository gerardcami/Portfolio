import { useState, useEffect, useCallback } from "react";
import { NavItem } from "./NavItem";
import { Briefcase, Layers, Mail, User, Menu, X } from "lucide-react";

export const MobileNavigationBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Estado para manejar la posición de deslizar (para cerrar el menú)
  const [startTouch, setStartTouch] = useState(0);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu
  };

  // Manejar el inicio del toque (para detectar deslizar)
  const handleTouchStart = (e) => {
    setStartTouch(e.touches[0].clientX); // Obtener la posición inicial del toque
  };

  // Manejar el movimiento del toque (para detectar si el usuario desliza hacia la derecha)
  const handleTouchMove = useCallback(
    (e) => {
      if (startTouch && e.touches[0].clientX > startTouch + 50) {
        setMobileMenuOpen(false); // Cerrar el menú si el usuario desliza hacia la derecha
      }
    },
    [startTouch]
  ); // useCallback asegura que esta función no cambie en cada render

  // Usamos el useEffect para agregar los listeners de touch
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Solo agregar los listeners cuando el menú esté abierto
      window.addEventListener("touchstart", handleTouchStart);
      window.addEventListener("touchmove", handleTouchMove);

      // Bloquear el scroll en el body
      document.body.style.overflow = "hidden";
    } else {
      // Eliminar los listeners cuando el menú esté cerrado
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);

      // Restaurar el scroll en el body
      document.body.style.overflow = "auto";
    }

    // Limpiar el efecto al desmontar
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);

      // Restaurar el scroll en el body
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen, handleTouchMove]); // Aquí incluimos handleTouchMove como dependencia

  return (
    <div className="relative">
      {/* Mobile menu toggle button */}
      {!isMobileMenuOpen && (
        <div className="fixed bottom-4 right-4 z-30 flex items-center justify-center rounded-full border border-[#fafafa19] bg-[#fafafa10] p-4 lg:hidden">
          <button onClick={toggleMobileMenu}>
            <Menu className="h-8 w-8 text-white" />
          </button>
        </div>
      )}

      {/* Mobile menu content */}
      <div
        className={`fixed left-0 top-0 z-20 h-full w-full transform bg-black bg-opacity-50 transition-transform md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Div para simular el área interactiva a la izquierda */}
        {isMobileMenuOpen && (
          <div className="absolute left-0 top-1/2 h-[25%] w-1 -translate-y-1/2 transform cursor-pointer rounded-r-lg bg-[#fafafa]" />
        )}

        <div className="flex h-full flex-col items-center justify-center bg-[#1a1a1a] bg-opacity-90 py-10">
          {/* Menu content: centered */}
          <div className="flex w-full flex-col items-center justify-center gap-8">
            <NavItem href="#start" isMobile={true}>
              Inicio
            </NavItem>
            <NavItem href="#experience" isMobile={true}>
              Experiencia
            </NavItem>
            <NavItem href="#about" isMobile={true}>
              Sobre mí
            </NavItem>
            <NavItem href="#stack" isMobile={true}>
              Stack
            </NavItem>
            <NavItem href="#contact" isMobile={true}>
              Contacto
            </NavItem>
          </div>

          {/* Close button (X) placed at the bottom */}
          <div className="absolute bottom-4 z-40 flex w-full justify-center">
            <button onClick={toggleMobileMenu}>
              <X className="h-8 w-8 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
