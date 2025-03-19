import { Button } from "@/components/ui";

export const DownloadFilePart = () => {
    return (
        <div className="flex justify-center items-center static mx-auto xl:mx-0 w-[300px] sm:w-[350px] xl:w-auto flex-wrap xl:block xl:relative">
            <p className="text-[#6e7174] text-[14px] xl:text-[20px] font-semibold text-center">
                Скачать стоимость инвентаря в{" "}
                <span className="text-white">txt формате:</span>
            </p>
            <Button className="static xl:absolute right-0 mt-3 xl:mt-5">
                Скачать
            </Button>
        </div>
    );
};
