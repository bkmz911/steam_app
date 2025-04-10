import React from "react";
import { Headband, MainText, Games } from "@/components/shared/";

export const WelcomeBlock = () => {
    return (
        <section className="bg-[url(/BG_CS_mobile.webp)] bg-top bg-contain bg-no-repeat md:bg-[url(/BG_CS_desktop.webp)] md:bg-cover md:bg-center md:bg-no-repeat">
            <Headband />
            <MainText />
            <Games />
        </section>
    );
};
