import { Mail, Linkedin, Github, Scroll } from "lucide-react";

export const links = [
  {
    url: "https://www.linkedin.com/in/gerard-camí",
    icon: <Linkedin className="box-content p-2 text-gray-400" />,
    tooltip: "LinkedIn",
  },
  {
    url: "https://github.com/gerardcami",
    icon: <Github className="box-content p-2 text-gray-400" />,
    tooltip: "GitHub",
  },
  {
    url: "mailto:gerardcamigay@gmail.com",
    icon: <Mail className="box-content p-2 text-gray-400" />,
    tooltip: "Email",
  },
  {
    url: "/cv-gerardcami.pdf",
    icon: <Scroll className="box-content p-2 text-gray-400" />,
    tooltip: "Currículum",
  },
  /* {
    url: "https://bento.me/yourprofile",
    icon: (
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        className="box-content p-2 text-gray-400"
        data-astro-cid-ivsf4auf=""
        data-icon="simple-icons:bento"
      >
        {" "}
        <symbol id="ai:simple-icons:bento">
          <path
            fill="currentColor"
            d="M0 10.435c0-.256.051-.512.153-.758c.233-.56.854-1.046 2.095-2.018l6.206-4.856c1.241-.972 1.862-1.458 2.577-1.64c.63-.16 1.308-.16 1.938 0c.715.183 1.336.668 2.577 1.64l6.206 4.856c1.241.972 1.862 1.458 2.095 2.018c.102.246.153.502.153.758v3.13c0 .256-.051.512-.153.758c-.233.56-.854 1.046-2.095 2.017l-6.206 4.857c-1.241.972-1.862 1.457-2.577 1.64c-.63.16-1.308.16-1.938 0c-.715-.183-1.336-.668-2.577-1.64L2.248 16.34C1.007 15.37.386 14.883.153 14.323A2 2 0 0 1 0 13.565zm9.34-3.238l.887.694c.62.485.93.728 1.289.82c.315.08.653.08.968 0c.358-.092.668-.335 1.29-.82l.886-.694c.62-.486.93-.729 1.047-1.009a.98.98 0 0 0 0-.758c-.116-.28-.427-.523-1.047-1.008l-.887-.694c-.62-.486-.93-.729-1.289-.82a2 2 0 0 0-.968 0c-.358.091-.668.334-1.29.82l-.886.694c-.62.485-.93.728-1.047 1.008a.98.98 0 0 0 0 .758c.116.28.427.523 1.047 1.009m5.91 4.625l.887.694c.62.486.931.729 1.29.82c.314.08.653.08.968 0c.358-.091.668-.334 1.288-.82l.887-.694c.62-.485.931-.728 1.047-1.008a.98.98 0 0 0 0-.758c-.116-.28-.426-.523-1.047-1.009l-.887-.694c-.62-.485-.93-.728-1.288-.82a2 2 0 0 0-.969 0c-.358.092-.668.335-1.289.82l-.886.694c-.621.486-.931.729-1.047 1.009a.98.98 0 0 0 0 .758c.116.28.426.523 1.047 1.008Zm-11.82 0l6.797 5.32c.62.486.93.728 1.289.82c.315.08.653.08.968 0c.358-.092.668-.334 1.29-.82l.886-.694c.62-.486.93-.729 1.047-1.009a.97.97 0 0 0 0-.758c-.116-.28-.427-.523-1.047-1.008l-6.797-5.32c-.62-.485-.931-.728-1.29-.82a2 2 0 0 0-.968 0c-.358.092-.668.335-1.288.82l-.887.694c-.62.486-.931.729-1.047 1.009a.98.98 0 0 0 0 .758c.116.28.426.523 1.047 1.008"
          ></path>
        </symbol>
        <use xlinkHref="#ai:simple-icons:bento"></use>{" "}
      </svg>
    ),
    tooltip: "Bento",
  }, */
];

export const contactLinks = [
  {
    url: "https://www.linkedin.com/in/gerard-camí",
    icon: <Linkedin className="box-content p-2 text-gray-400" />,
    tooltip: "LinkedIn",
  },
  {
    url: "https://discord.com/users/420287225700417536",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="24"
        height="24"
        strokeWidth="2"
        className="box-content p-2 text-gray-400"
      >
        <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
        <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
        <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3"></path>
        <path d="M7 16.5c3.5 1 6.5 1 10 0"></path>
      </svg>
    ),
    tooltip: "Discord",
  },
  {
    url: "mailto:gerardcamigay@gmail.com",
    icon: <Mail className="box-content p-2 text-gray-400" />,
    tooltip: "gerardcamigay@gmail.com",
  },
];
