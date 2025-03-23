import { PaginationStepsProps } from "@/types/base-pagination";

export const PaginationSteps = ({
    pages,
    currentPage,
    setCurrentPage,
}: PaginationStepsProps) => {
    return (
        <>
            {pages.map((page, index) => {
                if (typeof page === "string") {
                    return (
                        <span
                            key={`dots-${index}`}
                            className="text-[#8c8d90] hover:text-gray-300 duration-200 text-[14px] 2xl:text-[26px] cursor-pointer"
                        >
                            ...
                        </span>
                    );
                }
                return (
                    <span
                        key={page}
                        className={`text-[14px] 2xl:text-[26px] cursor-pointer ${
                            currentPage === page
                                ? "text-[#4DAEFC]"
                                : "text-[#8c8d90] hover:text-gray-300 duration-200"
                        }`}
                        onClick={() => setCurrentPage(page)}
                    >
                        {page}
                    </span>
                );
            })}
        </>
    );
};
