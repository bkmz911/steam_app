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

export function DataBlock() {
    const [data, setData] = useState<Product[]>([]),
        [currentPage, setCurrentPage] = useState(1),
        [totalPages, setTotalPages] = useState(1),
        [isLoading, setIsLoading] = useState(false),
        [error, setError] = useState<Error | null>(null),
        limitPage = 18;

    useEffect(() => {
        getProducts({
            currentPage,
            limitPage,
            setData,
            setTotalPages,
            setIsLoading,
            setError,
        });
    }, [currentPage]);


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
