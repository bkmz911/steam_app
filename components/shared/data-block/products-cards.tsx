import { Product } from "@/types/product";
import { ProductCard } from "@/components/shared";

interface ProductsProps {
    data: Product[];
}

export const ProductsCards = ({ data }: ProductsProps) => {
    return (
        <>
            {data.map((item) => {
                return <ProductCard key={item.id} item={item} />;
            })}
        </>
    );
};
