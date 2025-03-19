import { WelcomeBlock, ProfileBlock } from "@/components/shared";

export default function Home() {
    return (
        <>
            <WelcomeBlock />
            <div className="h-6 bg-[#191c21] mt-[50px]"></div>
            <ProfileBlock />
        </>
    );
}
