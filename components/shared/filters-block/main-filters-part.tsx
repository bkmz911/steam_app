"use client"
import { useFilterStore } from "@/store/filters";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const filters = [
    {
        textFilter: "Цена (без скидки)",
        filterContent: ["По возрастанию", "По убыванию"],
    },
    {
        textFilter: "Цена (со скидкой)",
        filterContent: ["По возрастанию", "По убыванию"],
    },
];

export const MainFiltersPart = () => {

    const setActiveFilter = useFilterStore((state) => state.setFilter)

    return (
        <div className="flex items-center gap-[10px]">
            {filters.map((filter) => (
                <Menu
                    key={filter.textFilter}
                    as="div"
                    className="relative inline-block text-left"
                >
                    <div>
                        <MenuButton className="bg-[#2c3035] cursor-pointer inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-white text-[12px] xl:text-[18px] shadow-xs hover:bg-gray-600 rounded-[6px] border-gray-600 border-2">
                            {filter.textFilter}
                            <img
                                src="/arrow.svg"
                                alt="arrow"
                                className="ml-[5px]"
                            />
                        </MenuButton>
                    </div>

                    <MenuItems
                        transition
                        className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-[#2c3035] border-gray-600 border-2 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                    >
                        <div className="py-1">
                            {filter.filterContent?.map((item) => (
                                <MenuItem key={item}>
                                    <p onClick={() => setActiveFilter(item)} className="cursor-pointer block px-4 py-2 text-sm text-white text-[12px] xl:text-[18px] data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                                        {item}
                                    </p>
                                </MenuItem>
                            ))}
                        </div>
                    </MenuItems>
                </Menu>
            ))}

            {/* Фун-нал с корзиной на перспективу */}

            {/* <Image
                src="/basket.svg"
                width={55}
                height={53}
                alt="basket"
                className="w-11 h-11 xl:w-auto xl:h-auto"
            /> */}
        </div>
    );
};
