"use client";

import { useEffect } from "react";
import { useCompanyStore } from "@/store";


interface DataProviderProps {
  initialData: {
    name: string;
    logo: string | null;
    description: string;
    facebook: string;
    instagram: string;
    tiktok: string;
    rights: string;
    location: string;
  } | null;
  children: React.ReactNode;
}

export function DataProvider({ initialData, children }: DataProviderProps) {
  const { setCompanyData } = useCompanyStore();

  useEffect(() => {
    setCompanyData(initialData);
  }, [initialData, setCompanyData]);

  return <>{children}</>;
}
