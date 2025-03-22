"use client";
import Image from "next/image";

import { signIn } from "next-auth/react";

export const Header = () => {
    return (
        <header className="bg-[#2C3035]">
            <nav className="flex justify-between items-center py-4 xl:py-5 px-4 xl:px-25">
                <Image src="/logo.svg" width={100} height={35} alt="logo" />
                {/* <Link href="#"> */}
                <button
                    onClick={() =>
                        signIn("github", { callbackUrl: "/", redirect: true })
                    }
                    id="button"
                    className="w-[140px] xl:w-[260px] h-[36px] xl:h-[56px] bg-[#3c73dd] rounded-lg xl:rounded-2xl text-white uppercase text-[10px] xl:text-[16px] shadow-button font-semibold"
                >
                    Войти чреез стим
                </button>
                {/* </Link> */}
            </nav>
        </header>
    );
};
