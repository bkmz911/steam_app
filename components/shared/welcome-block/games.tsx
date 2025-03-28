"use client"

import Image from "next/image";
import { usePathname } from "next/navigation";

const className = "w-auto h-[136px] rounded-[14px]",
    images = [
        {
            src: "/cs2_logo.webp",
            width: 279,
            height: 136,
            alt: "cs_logo",
            className,
        },
        {
            src: "/dota2_logo.webp",
            width: 237,
            height: 136,
            alt: "dota_logo",
            className,
        },
        {
            src: "/rust_logo.webp",
            width: 136,
            height: 136,
            alt: "rust_logo",
            className,
        },
        {
            src: "/TF2_logo.webp",
            width: 237,
            height: 136,
            alt: "tf_logo",
            className,
        },
    ];

export const Games = () => {

    const pathname = usePathname()

    console.log(pathname)

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
            {images.map((image, index) => (
                <Image
                    key={index}
                    src={image.src}
                    width={image.width}
                    height={image.height}
                    alt={image.alt}
                    className={image.className}
                />
            ))}
        </div>
    );
};
