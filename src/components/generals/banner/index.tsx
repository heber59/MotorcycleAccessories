import { useState } from "react";
import { MotoLogo } from "../../animated/motoLogo";

const NewsletterBanner = () => {
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setMensaje("Por favor, ingresa un correo válido.");
      return;
    }

    setMensaje("¡Gracias por suscribirte!");
    setEmail("");
  };

  return (
    <section
      className="flex w-[80vw] flex-row items-center justify-around bg-gradient-to-r 
     from-black to-gray-300 text-white  px-6 rounded-xl my-6 shadow-md"
    >
      <div className="flex  flex-col py-4 gap-12">
        <h2 className="text-2xl font-bold">Recibe las últimas noticias</h2>
        <form onSubmit={handleSubmit}>
          <div className="w-full flex flex-row items-center  gap-4">
            <input
              type="email"
              placeholder="Ingresa tu correo electrónico"
              className="px-4 py-2 w-60 h-12 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="w-30 h-14 bg-white shadow ml-10  flex flex-col items-center text-black rounded-md"
            >
              <MotoLogo />
              enviar
            </button>
          </div>
        </form>

        {mensaje && (
          <p className="text-sm text-white text-center mt-3">{mensaje}</p>
        )}
      </div>
      <img
        src={"/assets/helmetOnBike.png"}
        alt={"moto llamativa"}
        className="w- h-80 object-contain"
      />
    </section>
  );
};

export default NewsletterBanner;
