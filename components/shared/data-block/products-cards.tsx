import { Product } from "@/types/product";
import { ProductCard } from "@/components/shared";
import { Error } from "@/components/ui";

interface ProductsProps {
    data: Product[];
}

export const ProductsCards = ({ data }: ProductsProps) => {
    return (
        <>
            {data.length !== 0 ? (
                data.map((item) => <ProductCard key={item.id} item={item} />)
            ) : (
                <Error
                    mainText="Ничего не найдено"
                    subText="По выбранным фильтрам нет результатов. Попробуйте изменить критерии или вернитесь на предыдущую страницу."
                />
            )}
        </>
    );
};
