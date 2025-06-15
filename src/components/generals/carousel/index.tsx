import { useState } from "react";

interface MediaItem {
  src: string;
  mediaType: "image" | "gif" | "video";
  alt?: string;
}

interface MediaCarouselProps {
  items: MediaItem[];
}

const MediaCarousel: React.FC<MediaCarouselProps> = ({ items }) => {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrent((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentItem = items[current];
  const firstItem = current === 0;
  return (
    <section className="w-full h-[70vh] relative overflow-hidden">
      {currentItem.mediaType === "video" ? (
        <video
          src={currentItem.src}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      ) : (
        <img
          src={currentItem.src}
          alt={currentItem.alt || ""}
          className="w-full h-full object-cover"
        />
      )}

      {firstItem && (
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h2 className="text-white text-4xl font-bold">
            Destacados de la semana
          </h2>
        </div>
      )}
      <button
        onClick={prev}
        className="group absolute top-0 left-0 h-full w-1/5 flex items-center justify-start px-4 z-10 cursor-pointer"
      >
        <div className="absolute top-0 left-0 h-full w-[240px] bg-gradient-to-r from-black/80 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
        <span className="text-white text-6xl font-bold z-10">{"<"}</span>
      </button>

      <button
        onClick={next}
        className="group absolute top-0 right-0 h-full w-1/5 flex items-center justify-end px-4 z-10 cursor-pointer"
      >
        <div className="absolute top-0 right-0 h-full w-[240px] bg-gradient-to-l from-black/80 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
        <span className="text-white text-6xl font-bold z-10">{">"}</span>
      </button>
    </section>
  );
};

export default MediaCarousel;
