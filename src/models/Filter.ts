import { IdealFor, Sizes } from "./Product";

export interface FilterType {
    brand: string[];
    size: Sizes[];
    idealFor: IdealFor[];
    sortByPrice: PriceSorts | null;
}

export type PriceSorts = "high-to-low" | "low-to-high";
