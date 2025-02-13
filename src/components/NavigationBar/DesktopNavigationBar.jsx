import { useState } from "react";
import { NavItem } from "./NavItem";
import avatar from "/avatar.svg"; // Assuming avatar image
import { Briefcase, Layers, Mail, User } from "lucide-react";

export const DesktopNavigationBar = () => {
  // Estado para el elemento seleccionado
  const [selectedItem, setSelectedItem] = useState("#start");

  // Manejar el clic en un ítem de navegación
  const handleNavClick = (href) => {
    setSelectedItem(href);
  };

  return (
    <nav className="hidden w-full max-w-[1120px] items-center justify-between rounded-xl border border-[#fafafa30] bg-[#fafafa30] px-4 py-2 lg:flex">
      <ul className="flex gap-6">
        <NavItem
          href="#start"
          tooltip="Inicio"
          onClick={() => handleNavClick("#start")}
          // Añadir clases condicionales para el fondo y escala
          className={
            selectedItem === "#start" ? "scale-105 bg-[#fafafa30]" : ""
          }
        >
          <img src={avatar} alt="Profile" />
        </NavItem>
        <NavItem
          href="#experience"
          tooltip="Experiencia"
          onClick={() => handleNavClick("#experience")}
          className={
            selectedItem === "#experience" ? "scale-105 bg-[#fafafa30]" : ""
          }
        >
          <Briefcase />
        </NavItem>
        <NavItem
          href="#about"
          tooltip="Sobre mí"
          onClick={() => handleNavClick("#about")}
          className={
            selectedItem === "#about" ? "scale-105 bg-[#fafafa30]" : ""
          }
        >
          <User />
        </NavItem>
        <NavItem
          href="#stack"
          tooltip="Stack"
          onClick={() => handleNavClick("#stack")}
          className={
            selectedItem === "#stack" ? "scale-105 bg-[#fafafa30]" : ""
          }
        >
          <Layers />
        </NavItem>
        <NavItem
          href="#contact"
          tooltip="Contacto"
          onClick={() => handleNavClick("#contact")}
          className={
            selectedItem === "#contact" ? "scale-105 bg-[#fafafa30]" : ""
          }
        >
          <Mail />
        </NavItem>
      </ul>
    </nav>
  );
};
