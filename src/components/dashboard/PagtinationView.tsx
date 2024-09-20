import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import { Link } from "react-router-dom";
export function PaginationView({
  pages,
  current,
}: {
  pages: number;
  current: number;
}) {
  return (
    <Pagination>
      <PaginationContent>
        {current - 1 >= 1 && (
          <Link to={"/dashboard"} state={{ page: current - 1 }}>
            <PaginationItem>
              <PaginationPrevious />
            </PaginationItem>
          </Link>
        )}
        {Array(pages)
          .fill(null)
          .map((_, index) => (
            <PaginationItem key={index}>
              <Link to={"/dashboard"} state={{ page: index + 1 }}>
                <PaginationLink
                  className={`${index + 1 == current ? "bg-[#251926]" : ""}`}
                  isActive={index + 1 == current}
                >
                  {index + 1}
                </PaginationLink>
              </Link>
            </PaginationItem>
          ))}
        {current + 1 <= pages && (
          <Link to={"/dashboard"} state={{ page: current + 1 }}>
            <PaginationItem>
              <PaginationNext />
            </PaginationItem>
          </Link>
        )}
      </PaginationContent>
    </Pagination>
  );
}
