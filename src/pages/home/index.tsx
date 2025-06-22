import MediaCarousel from "../../components/generals/carousel";

import { ProductFilters } from "../../components/home/productsFilter";
import { PromoBanner } from "../../components/generals/promoBanner";
import NewsletterBanner from "../../components/generals/banner";
import useMediaQuery from "../../hooks/mediaQuery/useMediaQuery";
import { sampleProducts } from "../../data/products";
import type { IProduct } from "../../types/products";

const Home = () => {
  const products = sampleProducts as IProduct[];
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
  const tableScreen = useMediaQuery("(max-width: 1250px)");
  return (
    <>
      <div className="flex justify-center pt-5">
        <MediaCarousel items={mediaItems}></MediaCarousel>
      </div>
      <div className="flex  justify-around  px-8 py-8  gap-5">
        <ProductFilters />
        <PromoBanner
          product={products[8]}
        ></PromoBanner>
      </div>

      <div className="flex justify-center">
        <NewsletterBanner smallScreen={tableScreen} />
      </div>
    </>
  );
};
export { Home };
