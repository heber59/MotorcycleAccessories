import { useCart } from "../../../context/cartContext";

interface PromoBannerProps {
  imagenSrc: string;
  price: string;
  altImg?: string;
  productId: number;
  productName: string;
}

const PromoBanner: React.FC<PromoBannerProps> = ({
  imagenSrc,
  price,
  altImg = "Promoción",
  productId,
  productName,
}) => {
  const { addToCart } = useCart();

  const handleAddPromoToCart = () => {
    addToCart({
      id: productId,
      name: productName,
      price: Number(price),
      image: imagenSrc,
    });
  };

  return (
    <div className="bg-gradient-to-r from-red-600 to-orange-400 text-white py-10 px-6 rounded-xl my-6 shadow-2xl">
      <div className="grid grid-cols-[140px_1fr] items-center justify-between gap-6">
        <div className="flex flex-col gap-6 h-full">
          <h2 className="text-3xl font-bold mb-2">Nuevo Producto</h2>
          <button
            onClick={handleAddPromoToCart}
            className="bg-gray-300 text-red-700 font-bold py-2 px-6 rounded-full shadow hover:bg-black hover:text-white transition-colors"
          >
            Agregar por ${price}
          </button>
        </div>
        <img
          src={imagenSrc}
          alt={altImg}
          className="w-80 h-40 object-contain"
        />
      </div>
    </div>
  );
};

export { PromoBanner };
