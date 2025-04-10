"use client";
import { useGamesStore } from "@/store/data-games";
import { useInventoryCostStore } from "@/store/inventory-cost";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

export const AvatarPart = () => {
    const { data } = useSession(),
        game = useGamesStore((state) => state.game).toUpperCase(),
        inventoryCost = useInventoryCostStore((state) => state.cost);

    return (
        <div className="flex justify-center items-center">
            <Image
                src={data?.user?.image ?? "/avatar.webp"}
                width={150}
                height={150}
                alt="avatar"
                className="w-[100px] xl:w-[150px] h-[100px] xl:h-[150px] rounded-[14px]"
            />
            <div className="ml-2 xl:ml-5">
                <h2 className="text-[20px] xl:text-[26px] text-white font-semibold leading-5 xl:leading-[30px]">
                    {data?.user?.name ?? "Obivan Kenobi"}
                </h2>
                <p className="xl:mt-[10px] text-[14px] xl:text-[20px] text-[#6e7174] font-[500] leading-5 xl:leading-[30px]">
                    Стоимость инвентаря по
                    <span className="text-white font-semibold">
                        &nbsp;{game}:
                    </span>
                </p>
                <p className="text-[#4DAEFC] text-[20px] xl:text-[32px] leading-[30px] font-semibold mt-0 xl:mt-[10px]">
                    {data ? inventoryCost : 0} $
                </p>
            </div>
        </div>
    );
};
