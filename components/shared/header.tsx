"use client";
import Image from "next/image";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button, PreloaderAuthentication } from "@/components/ui";

export const Header = () => {
    const { data, status } = useSession();

    if (status === "loading") {
        return <PreloaderAuthentication />;
    }

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
                    >
                        Войти через Github
                    </Button>
                ) : (
                    <div>
                        <Button onClick={() => signOut({ callbackUrl: "/" })}>
                            {data?.user?.name}. Выйти?
                        </Button>
                    </div>
                )}
            </nav>
        </header>
    );
};
