import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/shared";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["cyrillic"],
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    title: "Steam App | Главная",
    description:
        "Service that allows you to find out the inventory value of each game from your Steam account.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${montserrat.className} antialiased min-h-screen bg-[#212327]`}
            >
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
