"use client";

import { useRouter } from "next/navigation";
import { Pagination } from "@nextui-org/react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

export const PaginationItem = ({
  totalPages,
  currentPage,
}: PaginationProps) => {
  const router = useRouter();

  const handlePageChange = (page: number) => {
    router.push(`?page=${page}`);
  };

  return (
    <nav className="flex justify-end items-center pb-4">
      <Pagination
        loop
        showControls
        color={"primary"}
        total={totalPages}
        initialPage={currentPage}
        onChange={handlePageChange}
      />
    </nav>
  );
};
