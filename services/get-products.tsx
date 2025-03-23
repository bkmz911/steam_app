import { Product } from "@/types/product";
import { Dispatch, SetStateAction } from "react";

const API_URL = "http://localhost:3001";

interface ProductsProps {
    setData: (data: Product[]) => void;
    currentPage: number;
    limitPage: number;
    setTotalPages: (total: number) => void;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
    setError: Dispatch<SetStateAction<Error | null>>;
}

export async function getProducts({
    setData,
    currentPage,
    limitPage,
    setTotalPages,
    setIsLoading,
    setError,
}: ProductsProps): Promise<void> {
    setIsLoading(true);
    try {
        const response = await fetch(
                `${API_URL}/items?page=${currentPage}&limit=${limitPage}`
            ),
            data = await response.json();
        setData(data.items);
        setTotalPages(Math.ceil(data.total / limitPage));
    } catch (error) {
        setError(error as Error);
    } finally {
        setIsLoading(false);
    }
}
