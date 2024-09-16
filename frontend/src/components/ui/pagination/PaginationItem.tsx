"use client"

import { Pagination } from "@nextui-org/react";

export const PaginationItem = () => {
  return (
    <nav className="mt-auto flex justify-center items-center py-4">
      <Pagination
        loop
        showControls
        color={"primary"}
        total={5}
        initialPage={1}
      />
    </nav>
  )
}
