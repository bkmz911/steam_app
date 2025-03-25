import { Product } from "@/types/product"

interface DataSortingProps {
    data: Product[]
}

export function dataSorting (data: DataSortingProps) {
    return data.sort((a, b) => b.price - a.price)
}