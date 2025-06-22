import { ProductCard } from "./productCard";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
