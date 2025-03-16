import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui";

export const Header = () => {
    return (
        <header className="bg-[#2C3035]">
            <nav className="flex justify-between items-center py-4 xl:py-5 px-4 xl:px-25">
                <Image src="/logo.svg" width={100} height={35} alt="logo" />
                <Link href="#">
                    <Button text="Войти через Google" />
                </Link>
            </nav>
        </header>
    );
};
