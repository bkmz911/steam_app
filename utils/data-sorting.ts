import { Product } from "@/types/product"

export function dataSortingDecrease (data: Product[]) {
    return data.sort((a, b) => b.price - a.price)
}

export function dataSortingIncrease(data: Product[]) {
    return data.sort((a, b) => a.price - b.price)
}