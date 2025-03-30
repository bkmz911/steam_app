import Image from "next/image";
import React, { ButtonHTMLAttributes } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface PaginationButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    setCurrentPage: () => void;
    src: string;
}

export const PaginationButton = ({
    setCurrentPage,
    src,
    ...others
}: PaginationButtonProps) => {
    return (
        <button
            onClick={() => setCurrentPage()}
            className="cursor-pointer hover:scale-125 duration-100"
            {...others}
        >
            <Image
                src={src}
                width={20}
                height={12.35}
                alt="pagination_arrow"
                className="w-3 2xl:w-6 h-3 2xl:h-6"
            />
        </button>
    );
};
