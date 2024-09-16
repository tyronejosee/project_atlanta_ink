"use client"

import { usePathname } from "next/navigation";
import { HR } from "@/components";
import { useCompanyStore } from "@/store";


export const Footer = () => {
  const { companyData } = useCompanyStore();
  const pathname = usePathname();

  if (pathname.startsWith("/products")) {
    return null;
  }

  return (
    <footer className="mt-auto bg-neutral-darkgrey">
      <div className="max-w-screen-xl mx-auto text-center py-8 space-y-4">
        <div className="text-sm text-neutral-gray max-w-screen-md mx-auto">
          <p>This site is a personal project and does not represent a real service. All information and content displayed here are fictitious and used solely for educational and demonstration purposes.</p>
        </div>
        <HR />
        <div className="text-neutral-gray">
          <p>&copy; {new Date().getFullYear()} {companyData?.rights}</p>
        </div>
      </div>
    </footer>
  );
};