"use client";

import { useGamesStore } from "@/store/data-games";
import Image from "next/image";

const className = "w-auto h-[136px] rounded-[14px] cursor-pointer",
    images = [
        {
            src: "/cs2_logo.webp",
            width: 279,
            height: 136,
            alt: "cs2",
            className,
        },
        {
            src: "/dota2_logo.webp",
            width: 237,
            height: 136,
            alt: "dota2",
            className,
        },
        {
            src: "/rust_logo.webp",
            width: 136,
            height: 136,
            alt: "rust",
            className,
        },
        {
            src: "/TF2_logo.webp",
            width: 237,
            height: 136,
            alt: "tf2",
            className,
        },
    ];

export const Games = () => {
    const game = useGamesStore((state) => state.game).toLocaleLowerCase(),
    setGame = useGamesStore((state) => state.setGame)

    return (
        <div className="flex justify-center flex-wrap gap-5 mt-10">
            <div className="relative">
                <Image
                    src="/all_games.webp"
                    width={251}
                    height={140}
                    alt="all_games"
                    className="w-auto h-[140px] rounded-[14px]"
                />
                <span className="uppercase text-white text-[26px] font-bold absolute w-[147px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    Все игры
                </span>
            </div>
            {images.map((image) => {
                return (
                    <Image
                        key={image.alt}
                        src={image.src}
                        width={image.width}
                        height={image.height}
                        alt={image.alt}
                        className={`${image.className} ${
                            game === image.alt && "border-[4px] border-[#3C73DD]"
                        }`}
                        onClick={() => setGame(image.alt)}
                    />
                );
            })}
        </div>
    );
};
