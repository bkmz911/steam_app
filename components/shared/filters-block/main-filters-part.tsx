import Image from "next/image";
import React from "react";

const filters = [
    {
        textFilter: "Все",
    },
    {
        textFilter: "Все",
    },
    {
        textFilter: "Сетка",
    },
    {
        textFilter: "Одиночный",
    },
];

export const MainFiltersPart = () => {
    return (
        <div className="flex items-center gap-[10px]">
            {filters.map((filter, index) => (
                <div
                    className="mt-[10px] px-[15px] bg-[#2c3035] border-gray-600 border-2 rounded-md w-[165px] md:w-[235px] lg:w-[400px] xl:w-[190px] h-[30px] xl:h-[50px] mx-auto text-[13px] flex justify-center items-center"
                    key={index}
                >
                    <span className="text-white text-[12px] xl:text-[18px]">
                        {filter.textFilter}
                    </span>
                    <img src="/arrow.svg" alt="arrow" className="ml-[5px]" />
                </div>
            ))}
            <Image
                src="/basket.svg"
                width={55}
                height={53}
                alt="basket"
                className="w-11 h-11 xl:w-auto xl:h-auto"
            />
        </div>
    );
};
