
import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import { sampleProducts } from "../../data/products";
import type { IProduct } from "../../types/products";

export function useFilteredProducts() {
    const [searchParams] = useSearchParams();
    const products = sampleProducts as IProduct[];

    const categoria = searchParams.get("categoria")?.toLowerCase();
    const tipoMoto = searchParams.get("tipoMoto")?.toLowerCase();
    const busqueda = searchParams.get("busqueda")?.toLowerCase();

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const matchesCategoria = categoria
                ? product.type?.toLowerCase() === categoria
                : true;

            const matchesTipoMoto = tipoMoto
                ? product.bike?.some((b) => b.toLowerCase() === tipoMoto)
                : true;

            const matchesBusqueda = busqueda
                ? product.name.toLowerCase().includes(busqueda)
                : true;

            return matchesCategoria && matchesTipoMoto && matchesBusqueda;
        });
    }, [products, categoria, tipoMoto, busqueda]);

    return filteredProducts;
}
