import { ProductList } from "../../components/generals/productList";
import { sampleProducts } from "../../data/products";

const Products = () => {
  return (
    <div className="p-6">
      <ProductList products={sampleProducts} />
    </div>
  );
};

export { Products };
