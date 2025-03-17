import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/shared";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["cyrillic"],
    weight: ["400", "500", "600", "700", "800"],
});

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
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
