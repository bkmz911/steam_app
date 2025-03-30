"use client";
import { useFilterStore } from "@/store/filters";
import { useSortingStore } from "@/store/sorting";
import { FilterBlock } from "@/components/shared";

const priceFilterContent = ["По возрастанию", "По убыванию"];
const rareFilterContent = [
    "Все",
    "Обычный",
    "Редкий",
    "Эпический",
    "Легендарный",
    "Мифический",
];

export const MainFiltersPart = () => {
    const setActiveSorting = useSortingStore((state) => state.setSorting);
    const setActiveFilter = useFilterStore((state) => state.setFilter);

    return (
        <div className="flex items-center gap-[10px] mt-[15px] xl:mt-0">

            {/* Меню для сортировки по цене */}
            <FilterBlock mainText="Цена" filterContent={priceFilterContent} setActiveItem={setActiveSorting} />

            {/* Меню для фильтрации по редкости */}
            <FilterBlock mainText="Редкость" filterContent={rareFilterContent} setActiveItem={setActiveFilter}/>

            {/* Реализация корзины - (на будушее) */}
        </div>
    );
};
