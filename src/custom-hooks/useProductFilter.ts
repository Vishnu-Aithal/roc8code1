import { useEffect, useReducer, useState } from "react";
import { ProductType } from "../models/Product";
import { filterReducer, initialState } from "../Reducers/filterReducer";
import { filterProcessor } from "../Utils/filterProcessor";

export const useProductFilter = (products: ProductType[]) => {
    const [filterState, filterDispatch] = useReducer(
        filterReducer,
        initialState
    );

    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        setFilteredProducts(filterProcessor(products, filterState));
    }, [filterState, products]);

    return { filteredProducts, filterState, filterDispatch };
};
