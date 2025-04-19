import type { CompanyResponse } from "@/types";

import { create } from "zustand";

type CompanyState = {
  companyData: CompanyResponse | null;
  setCompanyData: (data: CompanyState["companyData"]) => void;
};

export const useCompanyStore = create<CompanyState>((set) => ({
  companyData: null,
  setCompanyData: (data) => set({ companyData: data }),
}));
