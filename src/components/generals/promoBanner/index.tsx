import { useAddToCart } from "../../../hooks/manageProductsToCard/addProducts/useAddProducts";
import type { ProductCardProps } from "../../../types/products/productContainer";
import { Button } from "../Shopbutton";



const PromoBanner = (props: ProductCardProps) => {
  const { product } = props;

  const handleAddToCart = useAddToCart(product);
  return (
    <div className="bg-gradient-to-r from-[rgb(162,76,76)] to-[rgb(255,0,0)]  text-white py-10 px-6 rounded-xl my-6 shadow-2xl">
      <div className="grid grid-cols-[140px_1fr] items-center justify-between gap-6">
        <div className="flex flex-col gap-6 h-full">
          <h2 className="text-3xl font-bold mb-2">Nuevo Producto</h2>
          <Button
            onClick={handleAddToCart}
            className="bg-gray-800  font-bold py-2 px-6 rounded-full shadow hover:bg-black hover:text-white transition-colors"
          >
            Agregar por ${product.price}
          </Button>
        </div>
        <img
          src={product.image}
          alt={product.description}
          className="w-80 h-40 object-contain"
        />
      </div>
    </div>
  );
};

export { PromoBanner };
