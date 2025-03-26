import { Product } from "@/types/product";
import { ProductCard } from "@/components/shared";
import { useFilterStore } from "@/store/filters";
// import { dataSortingDecrease, dataSortingIncrease } from "@/utils/data-sorting";
import { useMemo } from "react";

interface ProductsProps {
    data: Product[];
}

export const ProductsCards = ({ data }: ProductsProps) => {
    const filter = useFilterStore((state) => state.filter);
    const sortedData = useMemo(() => {
        const clonedData = [...data];
        if (filter === "По возрастанию") {
            return clonedData.sort((a, b) => a.price - b.price);
        } else if (filter === "По убыванию") {
            return clonedData.sort((a, b) => b.price - a.price);
        }

        return clonedData;
    }, [data, filter]);

    return (
        <>
            {sortedData.map((item) => (
                <ProductCard key={item.id} item={item} />
            ))}
        </>
    );
};
