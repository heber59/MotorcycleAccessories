import MediaCarousel from "../../components/generals/carousel";
import { Button } from "../../components/generals/Shopbutton";
import { CartOrderDrawer } from "../../components/generals/cartOrderDrawer";
import { useHome } from "../../hooks/home/useHome";
import { ProductFilters } from "../../components/home/productsFilter";

const Home = () => {
  const { showModal, toggleModal } = useHome();
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
        <CartOrderDrawer
          isOpen={showModal}
          onClose={toggleModal}
        ></CartOrderDrawer>
        <MediaCarousel items={mediaItems}></MediaCarousel>
      </div>
      <div className="flex  justify-between mt-8 px-20 pb-10">
        <ProductFilters />
        <div className="h-30 w-50 pt-10">
          <Button onClick={toggleModal}>ver tu pedido</Button>
        </div>
      </div>
    </>
  );
};
export { Home };
