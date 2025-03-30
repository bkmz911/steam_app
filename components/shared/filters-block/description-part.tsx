"use client";
import { useGamesStore } from "@/store/data-games";
import { useTotalDataStore } from "@/store/data-total";
import { useFilterStore } from "@/store/filters";
import { getRareStyle } from "@/utils/rare-styles";
import { useSession } from "next-auth/react";

export const DescriptionPart = () => {
    
    const { data } = useSession(),
        total = useTotalDataStore((state) => state.total),
        game = useGamesStore((state) => state.game).toUpperCase(),
        rare = useFilterStore((state) => state.filter),
        rareClass = getRareStyle(rare);

    return (
        <div className="mx-0">
            <span className="text-white text-[14px] xl:text-[20px]">
                Всего в инвентаре по {game} найдено&nbsp;
                <span className="text-[#4DAEFC] font-semibold">
                    {data ? total : 0}&nbsp;
                </span>
                предметов
                <br /> (<span className={`${rareClass}`}>{rare}</span>:&nbsp;
                <span className="text-[#4DAEFC] font-semibold">{data ? total: 0}</span>
                ):
            </span>
        </div>
    );
};
