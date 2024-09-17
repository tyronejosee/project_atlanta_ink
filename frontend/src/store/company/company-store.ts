import { ICompany } from "@/interfaces";
import { create } from "zustand";

interface CompanyState {
  companyData: ICompany | null;
  setCompanyData: (data: CompanyState["companyData"]) => void;
}

export const useCompanyStore = create<CompanyState>((set) => ({
  companyData: null,
  setCompanyData: (data) => set({ companyData: data }),
}));
