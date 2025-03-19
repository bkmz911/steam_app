import Image from "next/image";

export const Headband = () => {
    return (
        <>
            <Image
                src="/dota_headband_v2.webp"
                width={1470}
                height={735}
                alt="headband_dota2"
                className="rounded-[20px] w-[340px] sm:w-[500px] md:w-[700px] xl:w-[1000px] 2xl:w-[1470px] mt-[50px] mx-auto"
            />
        </>
    );
};
