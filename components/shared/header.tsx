"use client";
import Image from "next/image";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui";

export const Header = () => {
    const { data } = useSession();

    return (
        <header className="bg-[#2C3035]">
            <nav className="flex justify-between items-center py-4 xl:py-5 px-4 xl:px-25">
                <Image src="/logo.svg" width={100} height={35} alt="logo" />
                {!data ? (
                    <Button
                        onClick={() =>
                            signIn("github", {
                                callbackUrl: "/",
                                redirect: true,
                            })
                        }
                        className="w-[140px] xl:w-[260px] h-[36px] xl:h-[56px] bg-[#3c73dd] rounded-lg xl:rounded-2xl text-white uppercase text-[10px] xl:text-[16px] shadow-button font-semibold cursor-pointer"
                    >
                        Войти через Github
                    </Button>
                ) : (
                    <div>
                        <Button
                            onClick={() => signOut({ callbackUrl: "/" })}
                            className="w-[140px] xl:w-[260px] h-[36px] xl:h-[56px] bg-[#3c73dd] rounded-lg xl:rounded-2xl text-white uppercase text-[10px] xl:text-[16px] shadow-button font-semibold cursor-pointer"
                        >
                            Выйти? {data?.user?.name}
                        </Button>
                    </div>
                )}
            </nav>
        </header>
    );
};
