import { LucideCat, LucideDog, LucideUser } from "lucide-react";

export const aboutMe = {
  title: <h3>Soy Gerard Camí, desarrollador frontend</h3>,
  text: (
    <>
      <p>
        Me especializo en la creación de interfaces web{" "}
        <strong>dinámicas</strong> y <strong>eficientes</strong>. He trabajado
        en proyectos tanto personales como escolares, incluyendo{" "}
        <b>plataformas web</b> y <b>aplicaciones móviles</b>. Me apasiona{" "}
        <strong>aprender nuevas tecnologías</strong> y{" "}
        <b>mejorar mis habilidades</b> en el{" "}
        <strong>desarrollo frontend</strong>.
      </p>
      <p>
        Actualmente, busco <b>oportunidades</b> para seguir{" "}
        <strong>creciendo profesionalmente</strong> y aportar mis{" "}
        <b>conocimientos</b> en entornos de{" "}
        <strong>trabajo colaborativos</strong>.
      </p>
    </>
  ),
};

export const education = [
  {
    title: "Grado Superior en Desarrollo de Aplicaciones Multiplataforma",
    entity: "Educem II",
    entityLink: "https://www.educem.com/",
    location: "Granollers, España",
    startDate: "2022-09",
    endDate: "2024-06",
    description: (
      <p>
        Graduado en <strong>Educem II</strong>, donde adquirí un{" "}
        <strong>conocimiento integral</strong> de los{" "}
        <b>aspectos teóricos y prácticos</b> del{" "}
        <strong>desarrollo de aplicaciones</strong>. Esto incluyó no solo el{" "}
        <strong>desarrollo full stack</strong>, sino también{" "}
        <b>programación orientada a objetos</b>, <b>arquitectura de software</b>
        , <b>gestión de bases de datos</b> y otras <b>áreas relevantes</b>.
      </p>
    ),
  },
];

export const gallery = [
  {
    id: 0,
    image: "/img/about/avatar-full.svg",
    icon: <LucideUser />,
    alt: "My Avatar",
  },
  {
    id: 1,
    image: "/img/about/dogs.webp",
    icon: <LucideDog />,
    alt: "My Dogs",
  },
  {
    id: 2,
    image: "/img/about/cats.webp",
    icon: <LucideCat />,
    alt: "My Cats",
  },
];
