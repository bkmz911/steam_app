"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavLink = {
    label: string;
    href: string;
};

type Props = {
    navLinks: NavLink[];
};

export default function Navigation({ navLinks }: Props) {
    const pathname = usePathname();

    return (
        <>
            {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                    <Link
                        key={link.label}
                        href={link.href}
                        className={`${isActive && "text-blue-600"} text-black`}
                    >
                        {link.label}
                    </Link>
                );
            })}
        </>
    );
}
