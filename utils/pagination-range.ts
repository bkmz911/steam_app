export function getPaginationRange(
    totalPages: number,
    currentPage: number,
    delta = 2
): (number | string)[] {
    if (totalPages <= 1) return [1];
    if (totalPages <= delta * 2 + 1) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const startPage = Math.max(currentPage - delta, 2),
        endPage = Math.min(currentPage + delta, totalPages - 1);

    const pages: (number | string)[] = [1];

    if (startPage > 2) {
        pages.push("...");
    }

    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    if (endPage < totalPages - 1) {
        pages.push("...");
    }

    pages.push(totalPages);

    return pages;
}
