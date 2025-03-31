"use client";

import { Product } from "@/types/product";
import { useEffect, useState } from "react";
import { getProducts } from "@/services/get-products";
import { InfoBlock, PaginationBlock, ProductsCards } from "@/components/shared";
import { Error, PreloaderData } from "@/components/ui";
import { useSortingStore } from "@/store/sorting";
import { useTotalDataStore } from "@/store/data-total";
import { useFilterStore } from "@/store/filters";
import { useGamesStore } from "@/store/data-games";
import { useInventoryCostStore } from "@/store/inventory-cost";
import { useSession } from "next-auth/react";
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
        rare = useFilterStore((state) => state.filter),
        currentGame = useGamesStore((state) => state.game),
        setInventoryCost = useInventoryCostStore((state) => state.setCost),
        { data: session } = useSession();

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
            rare,
            currentGame,
            setInventoryCost,
        });
    }, [currentPage, setTotal, sortOrder, rare, currentGame, setInventoryCost]);

    return (
        <>
            {error ? (
                <Error error={error} />
            ) : session ? (
                <>
                    <div className="flex items-center justify-center flex-wrap gap-2 2xl:gap-[20px] mx-4 2xl:mx-[100px] mt-[20px]">
                        {isLoading ? (
                            <PreloaderData />
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
            ) : (
                <InfoBlock />
            )}
        </>
    );
}
