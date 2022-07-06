import { useEffect, useState } from "react";
import { ProductType } from "../models/Product";
import { getFilterFields } from "../Utils/getFilterFileds";

export const useFilterFields = (products: ProductType[]) => {
    const [filterfields, setFilteredFileds] = useState<{
        brands: any[];
        idealFors: any[];
        sizes: any[];
    }>({
        brands: [],
        idealFors: [],
        sizes: [],
    });
    useEffect(() => {
        setFilteredFileds(getFilterFields(products));
    }, [products]);
    return filterfields;
};
