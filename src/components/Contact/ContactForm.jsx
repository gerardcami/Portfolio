import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";

export const ContactForm = () => {
  useEffect(() => emailjs.init("kAM_W34wko6xKWyiD"), []);

  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  const [loading, setLoading] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState(""); // 'success' | 'error' | ''

  // Expresiones regulares para validación
  const nameRegex = /^[a-zA-ZÀ-ÿ\s]{3,50}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const subjectRegex = /^[a-zA-Z0-9À-ÿ\s,.!?]{5,100}$/;
  const messageRegex = /^.{10,1000}$/;

  const validateField = (field, value) => {
    switch (field) {
      case "name":
        return nameRegex.test(value) ? "" : "Nombre inválido (mín. 3 letras)";
      case "email":
        return emailRegex.test(value) ? "" : "Email inválido";
      case "subject":
        return subjectRegex.test(value)
          ? ""
          : "Asunto inválido (mín. 5 caracteres)";
      case "message":
        return messageRegex.test(value) ? "" : "Mensaje demasiado corto";
      default:
        return "";
    }
  };

  const handleChange = () => {
    const newErrors = {
      name: validateField("name", nameRef.current.value),
      email: validateField("email", emailRef.current.value),
      subject: validateField("subject", subjectRef.current.value),
      message: validateField("message", messageRef.current.value),
    };

    setErrors(newErrors);
    setFormValid(Object.values(newErrors).every((error) => error === ""));
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = "service_a2g0o9g";
    const templateId = "template_pwfrxhf";

    try {
      await emailjs.send(serviceId, templateId, {
        from_name: nameRef.current.value,
        from_email: emailRef.current.value,
        subject: subjectRef.current.value,
        message: messageRef.current.value,
      });

      setStatus("success");
      setTimeout(() => setStatus(""), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus(""), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      onChange={handleChange}
      className={`relative space-y-4 overflow-hidden rounded-xl border border-[#fafafa2c] bg-[#fafafa10] p-6 text-gray-300 shadow-lg md:space-y-6 md:p-10 ${status === "success" ? "before:absolute before:bottom-0 before:left-0 before:z-[-1] before:h-[70%] before:w-full before:bg-gradient-to-t before:from-green-600 before:to-transparent before:transition-all before:duration-500 before:content-['']" : ""} ${status === "error" ? "before:absolute before:bottom-0 before:left-0 before:z-[-1] before:h-[90%] before:w-full before:bg-gradient-to-t before:from-red-600 before:to-transparent before:transition-all before:duration-500 before:content-['']" : ""} `}
    >
      <fieldset className="grid gap-4 md:grid-cols-2 md:gap-6">
        <legend className="sr-only">Información de contacto</legend>

        <div className="col-span-1">
          <label htmlFor="name" className="mb-2 block font-medium">
            Nombre
          </label>
          <input
            ref={nameRef}
            type="text"
            id="name"
            className="w-full rounded-xl border border-[#fafafa2c] bg-[#fafafa10] p-3 text-white focus:outline-none focus:ring-2 focus:ring-emphasis"
            required
            onBlur={() => handleBlur("name")}
          />
          {touched.name && errors.name && (
            <p className="mt-1 text-sm text-red-400">{errors.name}</p>
          )}
        </div>

        <div className="col-span-1">
          <label htmlFor="email" className="mb-2 block font-medium">
            Email
          </label>
          <input
            ref={emailRef}
            type="email"
            id="email"
            className="w-full rounded-xl border border-[#fafafa2c] bg-[#fafafa10] p-3 text-white focus:outline-none focus:ring-2 focus:ring-emphasis"
            required
            onBlur={() => handleBlur("email")}
          />
          {touched.email && errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email}</p>
          )}
        </div>
      </fieldset>

      <fieldset>
        <legend className="sr-only">Detalles del mensaje</legend>

        <div className="mb-6">
          <label htmlFor="subject" className="mb-2 block font-medium">
            Asunto
          </label>
          <input
            ref={subjectRef}
            type="text"
            id="subject"
            className="w-full rounded-xl border border-[#fafafa2c] bg-[#fafafa10] p-3 text-white focus:outline-none focus:ring-2 focus:ring-emphasis"
            required
            onBlur={() => handleBlur("subject")}
          />
          {touched.subject && errors.subject && (
            <p className="mt-1 text-sm text-red-400">{errors.subject}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block font-medium">
            Mensaje
          </label>
          <textarea
            ref={messageRef}
            id="message"
            rows="5"
            className="w-full rounded-xl border border-[#fafafa2c] bg-[#fafafa10] p-3 text-white focus:outline-none focus:ring-2 focus:ring-emphasis"
            required
            onBlur={() => handleBlur("message")}
          ></textarea>
          {touched.message && errors.message && (
            <p className="mt-1 text-sm text-red-400">{errors.message}</p>
          )}
        </div>
      </fieldset>

      <div className="flex flex-col gap-4 md:flex-row">
        <button
          disabled={!formValid || loading}
          type="submit"
          className={`w-full rounded-xl px-6 py-4 font-bold text-white transition duration-300 ${formValid ? "bg-emphasis hover:bg-opacity-60" : "cursor-not-allowed bg-gray-600"} `}
        >
          {loading ? "Enviando..." : "🚀 Enviar mensaje"}
        </button>
        <button
          type="reset"
          className="w-full rounded-xl border border-[#fafafa2c] bg-[#fafafa10] px-6 py-4 font-bold text-white transition duration-300 hover:bg-[#fafafa19]"
        >
          🔄 Limpiar
        </button>
      </div>
    </form>
  );
};
