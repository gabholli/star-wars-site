export interface PaginateProps {
    totalPages: number
    pageNumber: number
    pageSize: number
    pageGroup: number
    setPageGroup: (pageGroup: number) => void
}