import { ProductList } from "../../components/generals/productList";
import { useFilteredProducts } from "../../hooks/productsPage/useProductsFilter";

const Products = () => {
  const productsFiltereed = useFilteredProducts();
  return (
    <div className="p-6">
      <ProductList products={productsFiltereed} />
    </div>
  );
};

export { Products };
