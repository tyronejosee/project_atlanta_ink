"use client";

import { useRouter } from "next/navigation";
import { Pagination } from "@heroui/react";

type Props = {
  totalPages: number;
  currentPage: number;
};

export const PaginationItem = ({ totalPages, currentPage }: Props) => {
  const router = useRouter();

  const handlePageChange = (page: number) => {
    router.push(`?page=${page}`);
  };

  return (
    <nav className="flex justify-end items-center pb-4">
      <Pagination
        loop
        radius="none"
        showControls
        color={"primary"}
        total={totalPages}
        initialPage={currentPage}
        onChange={handlePageChange}
      />
    </nav>
  );
};
