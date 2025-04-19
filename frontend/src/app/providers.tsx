"use client";

import type { CompanyResponse } from "@/types";

import { useEffect } from "react";
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { UserRound } from "lucide-react";
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
        toastProps={{
          radius: "lg",
          variant: "bordered",
          timeout: 5000,
          classNames: {
            base: "absolute z-[9999] w-72 h-20 bottom-6 right-6",
          },
          icon: <UserRound />,
        }}
        maxVisibleToasts={4}
      />
      {children}
    </HeroUIProvider>
  );
}
