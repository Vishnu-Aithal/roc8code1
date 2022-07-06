import "./App.css";
import { Card } from "./components/Card";
import { Filter } from "./components/Filter/Filter";
import { Header } from "./components/Header";
import { useFilterFields } from "./custom-hooks/useFilterFileds";
import { useProductFilter } from "./custom-hooks/useProductFilter";
import data from "./data/products";
import { ProductType } from "./models/Product";

const App = () => {
    const { filteredProducts, filterState, filterDispatch } = useProductFilter(
        data.products as ProductType[]
    );
    const filterfields = useFilterFields(data.products as ProductType[]);
    return (
        <div className="App bg-gray-300 h-screen overflow-auto flex flex-col">
            <Header />
            <div className="flex p-3 shadow-sm mt-2 bg-gray-300 gap-2 overflow-y-auto flex-grow">
                <Filter
                    {...{ ...filterfields }}
                    filterDispatch={filterDispatch}
                    filterState={filterState}
                />
                <div className="flex flex-wrap flex-grow gap-2 bg-white p-6 overflow-y-auto ">
                    {filteredProducts.map((product) => (
                        <Card key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;
