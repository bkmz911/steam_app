import { Product } from "@/types/product";
import { ProductCard } from "@/components/shared";
import { useFilterStore } from "@/store/filters";
import { dataSortingDecrease, dataSortingIncrease } from "@/utils/data-sorting";

interface ProductsProps {
    data: Product[];
}

export const ProductsCards = ({ data }: ProductsProps) => {

    const filter = useFilterStore((state) => state.filter)

    return (
        <>

        {/* Доделать фун-нал фильтрации данных */}

        {/* {filter === "По возрастанию" ? dataSortingIncrease(data) : dataSortingDecrease(data)} */}
            {data.map((item) => {
                return <ProductCard key={item.id} item={item} />;
            })}
        </>
    );
};
