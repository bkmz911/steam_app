import type { Metadata } from "next";
import { Headband, MainText, Games } from "@/components/shared";
import Image from "next/image";
import { Button } from "@/components/ui";

export default function Home() {
    return (
        <>
            <section className="bg-[url(/BG_CS_mobile.webp)] bg-top bg-contain bg-no-repeat md:bg-[url(/BG_CS_desktop.webp)] md:bg-cover md:bg-center md:bg-no-repeat">
                <Headband />
                <MainText />
                <Games />
                
            </section>
            <section>
                <div className="mt-[20px] xl:mt-[50px] bg-[#2c3035] rounded-xl xl:flex xl:justify-between w-[1470px] mx-auto">

                    <div className="flex justify-center items-center">
                        <Image src="/avatar.webp" width={120} height={120} alt="avatar" className="w-[120px] h-[120px]"/>
                        <div className="ml-5">
                            <h2 className="text-[20px] xl:text-[26px] text-white font-semibold">Obivan Kenobi</h2>
                            <span className="mt-[10px] xl:mt-[20px] text-[14px] xl:text-[20px] text-[#6e7174] font-semibold">Стоимость инвентаря по <span className="text-white font-semibold">CS:GO :</span></span><br/>
                            <span className="text-[#4DAEFC] text-[20px] xl:text-[32px] font-semibold">54645 ₽ </span>
                        </div>
                    </div>

                    <div>
                        <p className="text-[#6e7174] text-[14px] xl:text-[20px] font-semibold text-center">Скачать стоимость инвентаря в <span className="text-white">txt формате:</span></p>
                        <Button>Скачать</Button>
                    </div>

                </div>
            </section>
        </>
    );
}
