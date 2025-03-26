"use client"
import { useTotalDataStore } from "@/store/data-total";

export const DescriptionPart = () => {

    const total = useTotalDataStore((state) => state.total)

    return (
        <div className="mx-0 mt-[20px] mb-[20px]">
            <span className="text-white text-[14px] xl:text-[20px]">
                Всего в инвентаре по CS:GO найдено&nbsp;
                <span className="text-[#4DAEFC] font-semibold">{total}&nbsp;</span>
                скинов
                <br /> (
                <span className="text-[#4DAEFC] font-semibold">{total}&nbsp;</span>
                различных редкостей):
            </span>
        </div>
    );
};
