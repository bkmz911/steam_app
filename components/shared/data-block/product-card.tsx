import { Product } from "@/types/product";
import { getRareStyle } from "@/utils/rare-styles";

interface ProductProps {
    item: Product;
}

export const ProductCard = ({ item }: ProductProps) => {
    const rareClass = getRareStyle(item.rare);

    return (
        <div className="w-[167px] 2xl:w-[270px] h-[288px] rounded-lg mt-[20px]">
            <img
                src={item.avatar}
                className="mx-auto w-full h-[178px] rounded-t-lg"
                alt={item.name}
            />
            <div className="w-[167px] 2xl:w-[270px] h-[70px] 2xl:h-[110px] bg-[#404245] rounded-b-lg">
                <span className="text-[13px] 2xl:text-[20px] text-white block text-center pt-[10px] font-medium tracking-wide">
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
