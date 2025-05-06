"use client";

import type { CompanyResponse } from "@/types";

import { useEffect } from "react";
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { useCompanyStore } from "@/store";

type Props = {
  children: React.ReactNode;
  initialData: CompanyResponse | null;
};

export default function Providers({ children, initialData }: Props) {
  const { setCompanyData } = useCompanyStore();

  useEffect(() => {
    setCompanyData(initialData);
  }, [initialData, setCompanyData]);

  return (
    <HeroUIProvider>
      <ToastProvider
        placement="bottom-center"
        maxVisibleToasts={2}
        toastProps={{
          size: "lg",
          radius: "none",
          variant: "solid",
          color: "primary",
          timeout: 5000,
        }}
      />
      {children}
    </HeroUIProvider>
  );
}
