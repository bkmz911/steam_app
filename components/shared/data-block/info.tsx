import Image from "next/image";
import React from "react";

export const InfoBlock = () => {
    return (
        <div className="my-10 text-center">
            <Image
                src="/info.svg"
                width={60}
                height={60}
                alt="info"
                className="w-[36px] h-[36px] md:w-[54px] md:h-[54px] mx-auto"
            />
            <h2 className="text-[16px] md:text-[32px] text-white font-semibold mt-[10px] md:mt-[20px]">
                Вы не авторизованы!
            </h2>
            <span className="inline-block text-[13px] md:text-[20px] text-[#95979a] font-semibold mt-[10px] md:mt-[20px] w-[160px] md:w-[340px]">
                Войдите в систему, чтобы просматривать предметы.
            </span>
        </div>
    );
};
