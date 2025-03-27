import { Product } from "@/types/product";
import { ProductCard } from "@/components/shared";
// import { useSortingStore } from "@/store/sorting";
// import { useMemo } from "react";
// import { useFilterStore } from "@/store/filters";

interface ProductsProps {
    data: Product[];
}

export const ProductsCards = ({ data }: ProductsProps) => {
    // Сортировка (потом вынести в отдельны компонент)
    // const sorting = useSortingStore((state) => state.sorting);

    // const sortedData = useMemo(() => {
    //     const clonedData = [...data];
    //     if (sorting === "По возрастанию") {
    //         return clonedData.sort((a, b) => a.price - b.price);
    //     } else if (sorting === "По убыванию") {
    //         return clonedData.sort((a, b) => b.price - a.price);
    //     }

    //     return clonedData;
    // }, [data, sorting]);

    // Фильтрация (разбить на отдельный компонент в последствии)

    // const filter = useFilterStore((state) => state.filter);

    // const filterData = useMemo(() => {
    //     const clonedData = [...data];

    //     if (filter === "common") {
    //         return clonedData.filter((item) => item.rare === "common");
    //     } else if (filter === "rare") {
    //         return clonedData.filter((item) => item.rare === "rare");
    //     } else if (filter === "epic") {
    //         return clonedData.filter((item) => item.rare === "epic");
    //     } else if (filter === "legendary") {
    //         return clonedData.filter((item) => item.rare === "legendary");
    //     } else if (filter === "mythic") {
    //         return clonedData.filter((item) => item.rare === "mythic");
    //     } else {
    //         return clonedData;
    //     }
    // }, [data, filter]);

    return (
        <>
            {data.map((item) => (
                <ProductCard key={item.id} item={item} />
            ))}
        </>
    );
};
