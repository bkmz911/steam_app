import { PaginationButton, PaginationSteps } from "@/components/shared";
import { PaginationProps } from "@/types/base-pagination";
import { getPaginationRange } from "@/utils/pagination-range";

export const PaginationBlock = ({
    setCurrentPage,
    currentPage,
    totalPages,
}: Omit<PaginationProps, "pages">) => {
    const pages = getPaginationRange(totalPages, currentPage, 2);

    return (
        <div className="bg-[#212327] px-[20px] 2xl:px-[600px] 2xl:my-[55px]">
            <div className="flex items-center justify-center gap-5 2xl:gap-[50px] py-[15px]">
                <PaginationButton
                    setCurrentPage={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    src="/pagination-arrow-prev.svg"
                />
                <PaginationSteps
                    pages={pages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                <PaginationButton
                    setCurrentPage={() => setCurrentPage((prev) => prev + 1)}
                    src="/pagination-arrow-next.svg"
                    disabled={currentPage === totalPages}
                />
            </div>
        </div>
    );
};
