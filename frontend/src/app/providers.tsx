"use client";

import { useEffect } from "react";
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { UserRound } from "lucide-react";
import { useCompanyStore } from "@/store";
import { ICompany } from "@/interfaces";

interface Props {
  children: React.ReactNode;
  initialData: ICompany | null;
}

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
