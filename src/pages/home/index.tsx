import { MotoLogo } from "../../components/motoLogo";

const Home = () => {
  return (
    <section className="flex justify-center p-6">
      <h1 className="text-3xl font-bold">
        Los mejores accesorios para tu moto
      </h1>
      <MotoLogo></MotoLogo>
    </section>
  );
};
export { Home };
