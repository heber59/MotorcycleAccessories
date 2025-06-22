
import { useCallback } from "react";
import { useCart } from "../../../context/cartContext";
import type { IProduct } from "../../../types/products";

const useAddToCart = (product: IProduct) => {
    const { addToCart } = useCart();

    return useCallback(() => {
        addToCart({ ...product, id: Number(product.id) });
    }, [addToCart, product]);
}
export { useAddToCart };