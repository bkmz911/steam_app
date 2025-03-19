import Image from "next/image";
import React from "react";

export const AvatarPart = () => {
    return (
        <div className="flex justify-center items-center">
            <Image
                src="/avatar.webp"
                width={150}
                height={150}
                alt="avatar"
                className="w-[100px] xl:w-[150px] h-[100px] xl:h-[150px]"
            />
            <div className="ml-2 xl:ml-5">
                <h2 className="text-[20px] xl:text-[26px] text-white font-semibold leading-5 xl:leading-[30px]">
                    Obivan Kenobi
                </h2>
                <p className="mt-1 xl:mt-[20px] text-[14px] xl:text-[20px] text-[#6e7174] font-[500] leading-5 xl:leading-[30px]">
                    Стоимость инвентаря по{" "}
                    <span className="text-white font-semibold">CS:GO :</span>
                </p>
                <p className="text-[#4DAEFC] text-[20px] xl:text-[32px] leading-[30px] font-semibold mt-0 xl:mt-[10px]">
                    54645 ₽{" "}
                </p>
            </div>
        </div>
    );
};
