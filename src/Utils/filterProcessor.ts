import { FilterType } from "../models/Filter";
import { ProductType } from "../models/Product";

export const filterProcessor = (
    products: ProductType[],
    filter: FilterType
): ProductType[] => {
    let filteredProducts = [...products];

    if (filter.brand.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
            filter.brand.includes(product.brand)
        );
    }

    if (filter.idealFor.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
            filter.idealFor.includes(product.idealFor)
        );
    }
    if (filter.size.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
            filter.size.includes(product.size)
        );
    }
    if (filter.sortByPrice) {
        if (filter.sortByPrice === "high-to-low") {
            filteredProducts.sort((a, b) => +b.price - +a.price);
        } else {
            filteredProducts.sort((a, b) => +a.price - +b.price);
        }
    }

    return filteredProducts;
};
