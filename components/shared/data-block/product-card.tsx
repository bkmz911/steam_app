/* eslint-disable @next/next/no-img-element */
import { Product } from "@/types/product";
import { getRareStyle } from "@/utils/rare-styles";
import plug from "../../../public/plug.webp";

interface ProductProps {
    item: Product;
}

export const ProductCard = ({ item }: ProductProps) => {
    const rareClass = getRareStyle(item.rare);

    return (
        <div className="w-[167px] 2xl:w-[270px] h-[180px] 2xl:h-[288px] rounded-lg">
            <img
                src={item.avatar}
                onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = plug.src;
                  }}
                className="mx-auto w-full h-[109px] 2xl:h-[178px] rounded-t-lg"
                alt={item.name}
            />
            <div className="w-[167px] 2xl:w-[270px] h-[70px] 2xl:h-[110px] bg-[#404245] rounded-b-lg">
                <span className="text-[13px] 2xl:text-[20px] text-white block text-center pt-[5px] 2xl:pt-[10px] font-medium tracking-wide">
                    {item.name}
                </span>
                <div className="flex justify-between pt-[18px] px-[10px] 2xl:px-[16px]">
                    <span className="text-white text-[14px] 2xl:text-[20px] font-semibold">
                        $ {item.price.toFixed(2)}
                    </span>
                    <span
                        className={`${rareClass} text-[14px] 2xl:text-[20px] font-semibold`}
                    >
                        {item.rare}
                    </span>
                </div>
            </div>
        </div>
    );
};
