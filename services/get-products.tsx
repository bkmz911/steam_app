import { Product } from "@/types/product";
import { Dispatch, SetStateAction } from "react";

const API_URL = "/api";

interface ProductsProps {
    setData: (data: Product[]) => void;
    currentPage: number;
    limitPage: number;
    setTotalPages: (total: number) => void;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
    setError: Dispatch<SetStateAction<Error | null>>;
    sortOrder: string;
    setTotal: (totalPages: number) => void;
    rare: string;
    currentGame: string;
    setInventoryCost: (cost: number) => void;
}

export async function getProducts({
    setData,
    currentPage,
    limitPage,
    setTotalPages,
    setIsLoading,
    setError,
    sortOrder,
    setTotal,
    rare,
    currentGame,
    setInventoryCost,
}: ProductsProps): Promise<void> {
    setIsLoading(true);
    try {
        const response = await fetch(
                `${API_URL}/${currentGame}?page=${currentPage}&limit=${limitPage}&sort=${sortOrder}&rare=${rare}`
            ),
            data = await response.json();
        setData(data.items);
        setTotal(data.total);
        setInventoryCost(data.inventoryCost);
        setTotalPages(Math.ceil(data.total / limitPage));
    } catch (error) {
        setError(error as Error);
    } finally {
        setIsLoading(false);
    }
}
