export interface ProductType {
    id: number;
    name: string;
    price: string;
    size: Sizes;
    brand: string;
    idealFor: IdealFor;
    image: {
        src: string;
        alt: string;
    };
}

export type Sizes = "M" | "L" | "S" | "XL";

export type IdealFor = "Men" | "Women" | "Kids";
