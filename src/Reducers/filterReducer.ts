import { FilterType } from "../models/Filter";
import { FilterActionTypes } from "./FilterActionTypes";

export const initialState: FilterType = {
    brand: [],
    idealFor: [],
    size: [],
    sortByPrice: null,
};

export const filterReducer = (
    state: FilterType = initialState,
    action: FilterActionTypes
): FilterType => {
    switch (action.type) {
        case "CLEAR FILTER":
            return { ...initialState };
        case "ADD_BRAND":
            return { ...state, brand: [...state.brand, action.payload] };
        case "REMOVE_BRAND":
            return {
                ...state,
                brand: state.brand.filter((brand) => brand !== action.payload),
            };
        case "ADD_SIZE":
            return { ...state, size: [...state.size, action.payload] };
        case "REMOVE_SIZE":
            return {
                ...state,
                size: state.size.filter((size) => size !== action.payload),
            };
        case "ADD_IDEAL_FOR":
            return { ...state, idealFor: [...state.idealFor, action.payload] };
        case "REMOVE_IDEAL_FOR":
            return {
                ...state,
                idealFor: state.idealFor.filter(
                    (idealFor) => idealFor !== action.payload
                ),
            };
        case "SET_PRICE_SORT":
            return { ...state, sortByPrice: action.payload };

        default:
            return state;
    }
};
