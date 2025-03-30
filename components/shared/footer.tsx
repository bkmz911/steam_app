import Image from "next/image";
import { FooterLogo } from "../ui/footer-logo";

export const Footer = () => {
    return (
        <footer className="bg-[#191c22] px-[15px] 2xl:px-[90px] w-full">
            <div className="flex pt-[70px] justify-between">
                <Image
                    src="/logo.svg"
                    width={100}
                    height={35}
                    alt="logo"
                    className="w-[85px] xl:w-[135px] h-[26px] xl:h-[40px]"
                />
                <div className="pb-[50px] xl:flex xl:items-center;">
                    <span className="text-white text-[14px] xl:text-[20px] font-semibold xl:mr-[12px]">
                        Связаться с нами:
                    </span>
                    <div className="flex justify-end mt-[10px] xl:ml-[12px] xl:mt-0">
                        <FooterLogo
                            src="/tg.svg"
                            alt="tg"
                            className="mr-[15px] w-[26px] xl:w-[42px] h-[26px] xl:h-[42px]"
                            href={"https://t.me/Bkmz911"}
                        />
                        <FooterLogo
                            src="/vk.svg"
                            alt="vk"
                            className="w-[26px] xl:w-[42px] h-[26px] xl:h-[42px]"
                            href={"https://vk.com/ilusha.chaan"}
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};
