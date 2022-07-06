import { IdealFor, ProductType, Sizes } from "../models/Product";

export const getFilterFields = (products: ProductType[]) => {
    const brands = products.reduce(
        (brands, product) =>
            brands.includes(product.brand)
                ? brands
                : [...brands, product.brand],
        [] as string[]
    );
    const idealFors = products.reduce(
        (idealFors, product) =>
            idealFors.includes(product.idealFor)
                ? idealFors
                : [...idealFors, product.idealFor],
        [] as IdealFor[]
    );
    const sizes = products.reduce(
        (sizes, product) =>
            sizes.includes(product.size) ? sizes : [...sizes, product.size],
        [] as Sizes[]
    );
    return { brands, sizes, idealFors };
};
