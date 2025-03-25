import { Product } from "@/types/product";
import { ProductCard } from "@/components/shared";

interface ProductsProps {
    data: Product[];
}

export const ProductsCards = ({ data }: ProductsProps) => {

    const newData = data.sort((a, b) => b.price - a.price)
    console.log(newData)

    return (
        <>
            {data.map((item) => {
                return <ProductCard key={item.id} item={item} />;
            })}
        </>
    );
};
