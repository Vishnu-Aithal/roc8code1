import { FilterType } from "../../models/Filter";
import { IdealFor, Sizes } from "../../models/Product";
import { FilterActionTypes } from "../../Reducers/FilterActionTypes";
import { CheckBox } from "./CheckBox";
import { FilterSectionTitle } from "./FilterSectionTitle";
import { RadioButton } from "./RadioButtons";

interface props {
    filterState: FilterType;
    filterDispatch: React.Dispatch<FilterActionTypes>;
    brands: string[];
    sizes: Sizes[];
    idealFors: IdealFor[];
}

export const Filter: React.FC<props> = ({
    filterDispatch,
    filterState,
    brands,
    sizes,
    idealFors,
}) => {
    return (
        <aside className="h-full overflow-y-auto flex flex-col min-w-fit w-56 p-4 items-start bg-white text-zinc-700 flex-shrink-0">
            <div className="flex items-center">
                <FilterSectionTitle>sort by price</FilterSectionTitle>
                <button
                    className="ml-6 uppercase font-bold cursor-pointer text-blue-600 hover:underline"
                    onClick={() => filterDispatch({ type: "CLEAR FILTER" })}>
                    Clear
                </button>
            </div>
            <RadioButton
                label="High To Low"
                name="price"
                id="high-to-low"
                checked={filterState.sortByPrice === "high-to-low"}
                onChange={(e) =>
                    e.target.checked &&
                    filterDispatch({
                        type: "SET_PRICE_SORT",
                        payload: "high-to-low",
                    })
                }
            />
            <RadioButton
                label="Low To High"
                name="price"
                id="low-to-high"
                checked={filterState.sortByPrice === "low-to-high"}
                onChange={(e) =>
                    e.target.checked &&
                    filterDispatch({
                        type: "SET_PRICE_SORT",
                        payload: "low-to-high",
                    })
                }
            />
            <FilterSectionTitle>brands</FilterSectionTitle>
            {brands.map((brand) => (
                <CheckBox
                    key={brand}
                    label={brand}
                    id={brand}
                    checked={filterState.brand.includes(brand)}
                    onChange={(e) =>
                        e.target.checked
                            ? filterDispatch({
                                  type: "ADD_BRAND",
                                  payload: brand,
                              })
                            : filterDispatch({
                                  type: "REMOVE_BRAND",
                                  payload: brand,
                              })
                    }
                />
            ))}
            <FilterSectionTitle>sizes</FilterSectionTitle>
            {sizes.map((size) => (
                <CheckBox
                    key={size}
                    label={size}
                    id={size}
                    checked={filterState.size.includes(size)}
                    onChange={(e) =>
                        e.target.checked
                            ? filterDispatch({
                                  type: "ADD_SIZE",
                                  payload: size,
                              })
                            : filterDispatch({
                                  type: "REMOVE_SIZE",
                                  payload: size,
                              })
                    }
                />
            ))}
            <FilterSectionTitle>Ideal For</FilterSectionTitle>
            {idealFors.map((idealFor) => (
                <CheckBox
                    key={idealFor}
                    label={idealFor}
                    id={idealFor}
                    checked={filterState.idealFor.includes(idealFor)}
                    onChange={(e) =>
                        e.target.checked
                            ? filterDispatch({
                                  type: "ADD_IDEAL_FOR",
                                  payload: idealFor,
                              })
                            : filterDispatch({
                                  type: "REMOVE_IDEAL_FOR",
                                  payload: idealFor,
                              })
                    }
                />
            ))}
        </aside>
    );
};
