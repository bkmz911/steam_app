import { getRareStyle } from "@/utils/rare-styles";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

interface FilterProps {
    mainText: string
    filterContent: string[]
    setActiveItem: (item: string) => void
}

export const FilterBlock = ({mainText, filterContent, setActiveItem}: FilterProps) => {
    return (
        <>
        <Menu as="div" className="relative inline-block text-left">
                <div>
                    <MenuButton className="bg-[#2c3035] cursor-pointer inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-white text-[12px] xl:text-[18px] shadow-xs hover:bg-gray-600 rounded-[6px] border-gray-600 border-2">
                        {mainText}
                        <img
                            src="/arrow.svg"
                            alt="arrow"
                            className="ml-[5px]"
                        />
                    </MenuButton>
                </div>
                <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 max-w-[200px] origin-top-right rounded-md bg-[#2c3035] border-gray-600 border-2 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden"
                >
                    <div className="py-1">
                        {filterContent.map((item) => {
                            const itemClass = getRareStyle(item);
                            return (
                                <MenuItem key={item}>
                                    <p
                                        onClick={() => setActiveItem(item)}
                                        className={`${itemClass} whitespace-nowrap cursor-pointer block px-4 py-2 text-sm text-[12px] xl:text-[18px] data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden`}
                                    >
                                        {item}
                                    </p>
                                </MenuItem>
                            );
                        })}
                    </div>
                </MenuItems>
            </Menu>
    </>
    )
    
}