import Image from "next/image";

interface ErrorProps {
    error?: Error | null;
    mainText?: string
    subText: string
}

export const Error = ({ error, mainText, subText }: ErrorProps) => {
    return (
        <div className="relative w-[320px] lg:w-[880px] h-[166px] lg:h-[335px] bg-[#2c3035] rounded-xl my-[30px] mx-auto">
            <Image
                src={"/error.svg"}
                width={60}
                height={60}
                alt="error"
                className="mx-auto relative top-[25px] lg:top-[30px] w-[30px] lg:w-[60px] h-[30px] lg:h-[60px]"
            />
            <h2 className="text-center text-white text-[16px] lg:text-[32px] font-semibold pt-[35px] lg:pt-[50px]">
                {error ? error?.message : mainText}
            </h2>
            <span className="block text-[13px] lg:text-[26px] lg:w-[600px] lg:mx-auto text-center text-[#6e7073] px-[10px] mt-[10px] lg:mt-[15px]">
                {subText}
            </span>
        </div>
    );
};
