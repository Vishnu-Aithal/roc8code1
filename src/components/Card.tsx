import { ProductType } from "../models/Product";

export const Card: React.FC<{ product: ProductType }> = ({ product }) => {
    return (
        <div className="flex flex-col w-80 h-80 border shadow-md p-2 items-start">
            <img
                className="w-full h-2/4 object-cover mb-2"
                src={product.image.src}
                alt={product.image.alt}
            />
            <p className="uppercase mr-auto text-gray-600 font-semibold">
                {product.brand}
            </p>
            <p className="text-lg text-gray-800 font-bold">{product.name}</p>
            <p className="text-lg font-bold text-gray-700">
                {`Price - ${product.price} ₹`}
            </p>
            <p className="font-semibold">{`Size - ${product.size}`}</p>
            <p>{`Ideal For - ${product.idealFor}`}</p>
        </div>
    );
};
