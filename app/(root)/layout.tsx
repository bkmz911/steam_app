import { Header, Footer } from "@/components/shared";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Steam App | Главная",
    description:
        "Service that allows you to find out the inventory value of each game from your Steam account.",
};

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
