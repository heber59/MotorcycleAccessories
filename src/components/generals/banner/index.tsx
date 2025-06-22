import { useState } from "react";
import { MotoLogo } from "../../animated/motoLogo";

interface NewsletterBannerProps {
  smallScreen: boolean;
}


const NewsletterBanner = ({ smallScreen }: NewsletterBannerProps) => {
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [isRiding, setIsRiding] = useState(false);
  const [crash, setCrash] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setMensaje("Por favor, ingresa un correo válido.");
      setCrash(true);
      setTimeout(() => setCrash(false), 500);
      return;
    }

    setMensaje("¡Gracias por suscribirte!");
    setEmail("");

    setIsRiding(true);
    setTimeout(() => {
      setIsRiding(false);
    }, 1000);
  };

  return (
    <section
      className={`flex ${smallScreen ? "w-full" : "w-[80vw] rounded-xl"
        } flex-row items-center justify-around bg-gradient-to-r 
      from-black to-gray-300 text-white px-6 my-6 shadow-md`}
    >
      <div className="flex flex-col py-4 gap-12">
        <h2 className="text-2xl font-bold">Recibe las últimas noticias</h2>
        <form onSubmit={handleSubmit}>
          <div className="w-full flex flex-row items-center gap-4">
            <input
              type="text"
              placeholder="Ingresa tu correo electrónico"
              className="px-4 py-2 w-60 h-14 rounded-md text-black 
              border border-gray-300 focus:outline-none
              
               focus:ring-2 focus:ring-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="flex justify-center w-16 h-12 border border-transparent hover:border-black bg-gray-300 p-auto shadow ml-10 flex-col items-center text-black rounded-md"
            >
              <span className="relative text-black text-sm pointer-events-none">
                enviar
              </span>
            </button>

            <MotoLogo isRiding={isRiding} crash={crash} />
          </div>
        </form>

        {mensaje && (
          <p className="text-sm text-white text-center mt-3">{mensaje}</p>
        )}
      </div>

      <img
        src={"/assets/helmetOnBike.png"}
        alt={"moto llamativa"}
        className="h-80 object-contain"
      />
    </section>
  );
};

export default NewsletterBanner;
