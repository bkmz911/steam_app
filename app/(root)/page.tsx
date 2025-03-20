import { WelcomeBlock, ProfileBlock } from "@/components/shared";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <WelcomeBlock />
            <div className="h-6 bg-[#191c21] mt-[50px]"></div>
            <ProfileBlock />
            <section className="mt-[15px] xl:mt-[35px] xl:flex xl:justify-between xl:items-center xl:mx-[90px]">
                <div className="mx-0 mt-[20px] mb-[20px]">
                    <span className="text-white text-[14px] xl:text-[20px]">
                        Всего в инвентаре по CS:GO найдено&nbsp;
                        <span className="text-[#4DAEFC] font-semibold">
                            1090&nbsp;
                        </span>
                        скинов
                        <br /> (
                        <span className="text-[#4DAEFC] font-semibold">
                            500&nbsp;
                        </span>
                        платные):
                    </span>
                </div>

                <div className="flex items-center gap-[10px]">
                    <div className="mt-[10px] px-[15px] bg-[#2c3035] border-gray-600 border-2 rounded-md w-[165px] md:w-[235px] lg:w-[400px] xl:w-[190px] h-[30px] xl:h-[50px] mx-auto text-[13px] flex justify-center items-center">
                        <span className="text-white xl:text-[18px]">Все</span>
                        <img
                            src="/arrow.svg"
                            alt="arrow"
                            className="ml-[5px]"
                        />
                    </div>
                    <div className="mt-[10px] px-[15px] bg-[#2c3035] border-gray-600 border-2 rounded-md w-[165px] md:w-[235px] lg:w-[400px] xl:w-[190px] h-[30px] xl:h-[50px] mx-auto text-[13px] flex justify-center items-center">
                        <span className="text-white xl:text-[18px]">Все</span>
                        <img
                            src="/arrow.svg"
                            alt="arrow"
                            className="ml-[5px]"
                        />
                    </div>
                    <div className="mt-[10px] px-[15px] bg-[#2c3035] border-gray-600 border-2 rounded-md w-[165px] md:w-[235px] lg:w-[400px] xl:w-[190px] h-[30px] xl:h-[50px] mx-auto text-[13px] flex justify-center items-center">
                        <span className="text-white xl:text-[18px]">Сетка</span>
                        <img
                            src="/arrow.svg"
                            alt="arrow"
                            className="ml-[5px]"
                        />
                    </div>
                    <div className="mt-[10px] px-[15px] bg-[#2c3035] border-gray-600 border-2 rounded-md w-[165px] md:w-[235px] lg:w-[400px] xl:w-[190px] h-[30px] xl:h-[50px] mx-auto text-[13px] flex justify-center items-center">
                        <span className="text-white xl:text-[18px]">
                            Одиночный
                        </span>
                        <img
                            src="/arrow.svg"
                            alt="arrow"
                            className="ml-[5px]"
                        />
                    </div>
                    <Image
                        src="/basket.svg"
                        width={55}
                        height={53}
                        alt="basket"
                    />
                </div>
            </section>
        </>
    );
}
