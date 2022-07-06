import { PriceSorts } from "../models/Filter";
import { IdealFor, Sizes } from "../models/Product";

export type FilterActionTypes =
    | { type: "ADD_BRAND"; payload: string }
    | { type: "REMOVE_BRAND"; payload: string }
    | { type: "ADD_IDEAL_FOR"; payload: IdealFor }
    | { type: "REMOVE_IDEAL_FOR"; payload: IdealFor }
    | { type: "ADD_SIZE"; payload: Sizes }
    | { type: "REMOVE_SIZE"; payload: Sizes }
    | { type: "SET_PRICE_SORT"; payload: PriceSorts }
    | { type: "CLEAR FILTER" };
