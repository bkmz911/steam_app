"use client";

import { Product } from "@/types/product";
import { useEffect, useState } from "react";
import { getProducts } from "@/services/get-products";
import {
    Error,
    PaginationBlock,
    Preloader,
    ProductsCards,
} from "@/components/shared";
import { useSortingStore } from "@/store/sorting";
import { useTotalDataStore } from "@/store/data-total";
import { useFilterStore } from "@/store/filters";

export function DataBlock() {
    const [data, setData] = useState<Product[]>([]),
        setTotal = useTotalDataStore((state) => state.setTotal),
        [currentPage, setCurrentPage] = useState(1),
        [totalPages, setTotalPages] = useState(1),
        [isLoading, setIsLoading] = useState(false),
        [error, setError] = useState<Error | null>(null),
        limitPage = 18,
        sortOrder =
            useSortingStore((state) => state.sorting) === "По возрастанию"
                ? "asc"
                : "desc",
        rare = useFilterStore((state) => state.filter)

    useEffect(() => {
        getProducts({
            currentPage,
            limitPage,
            setData,
            setTotalPages,
            setIsLoading,
            setError,
            sortOrder,
            setTotal,
            rare
        });
    }, [currentPage, setTotal, sortOrder, rare]);

    return (
        <>
            {error ? (
                <Error error={error} />
            ) : (
                <>
                    <div className="flex items-center justify-center flex-wrap gap-2 2xl:gap-[20px] mx-4 2xl:mx-[100px]">
                        {isLoading ? (
                            <Preloader />
                        ) : (
                            <ProductsCards data={data} />
                        )}
                    </div>
                    <PaginationBlock
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                        totalPages={totalPages}
                    />
                </>
            )}
        </>
    );
}
