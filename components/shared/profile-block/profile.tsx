import { AvatarPart, DownloadFilePart } from "@/components/shared";

export const ProfileBlock = () => {
    return (
        <section>
            <div className="mt-[20px] xl:mt-[50px] bg-[#2c3035] rounded-xl xl:flex xl:justify-between w-auto mx-[16px] 2xl:mx-[225px] p-3 xl:p-[40px]">
                <AvatarPart />
                <DownloadFilePart />
            </div>
        </section>
    );
};
