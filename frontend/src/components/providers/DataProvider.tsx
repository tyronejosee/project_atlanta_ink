"use client";

import React, { useEffect } from "react";
import { useCompanyStore } from "@/store";
import { ICompany } from "@/interfaces";

interface DataProviderProps {
  initialData: ICompany | null;
  children: React.ReactNode;
}

export function DataProvider({ initialData, children }: DataProviderProps) {
  const { setCompanyData } = useCompanyStore();

  useEffect(() => {
    setCompanyData(initialData);
  }, [initialData, setCompanyData]);

  return <>{children}</>;
}
