import { SetStateAction } from "react";

interface BasePgainationProps {
    currentPage: number;
    setCurrentPage: (value: SetStateAction<number>) => void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface PaginationProps extends BasePgainationProps {
    pages: (number | string)[];
    totalPages: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface PaginationStepsProps extends BasePgainationProps {
    pages: (number | string)[];
}
