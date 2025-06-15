import MediaCarousel from "../../components/generals/carousel";

import { ProductFilters } from "../../components/home/productsFilter";
import { PromoBanner } from "../../components/generals/promoBanner";
import NewsletterBanner from "../../components/generals/banner";

const Home = () => {
  const mediaItems = [
    {
      src: "/assets/multipleBikes.png",
      mediaType: "image" as const,
      alt: "Casco rojo",
    },
    { src: "/assets/motoVideo.mp4", mediaType: "video" as const },
    {
      src: "/assets/bikeStreet.png",
      mediaType: "gif" as const,
      alt: "GIF animado",
    },
  ];
  return (
    <>
      <div className="flex justify-center pt-5">
        <MediaCarousel items={mediaItems}></MediaCarousel>
      </div>
      <div className="flex  justify-around  px-8 py-8  gap-5">
        <ProductFilters />
        <PromoBanner
          imagenSrc={"assets/espejoDeportivo.jpg"}
          price={"30.000"}
          productId={0}
          productName={"espejoDeportivo"}
        ></PromoBanner>
      </div>

      <div className="flex justify-center">
        <NewsletterBanner />
      </div>
    </>
  );
};
export { Home };
