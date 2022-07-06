import React from "react";

export const FilterSectionTitle: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    return (
        <h3 className="text-lg font-semibold uppercase text-gray-700 my-3">
            {children}
        </h3>
    );
};
