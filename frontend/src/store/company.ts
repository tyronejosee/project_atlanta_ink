import { create } from "zustand";

interface CompanyState {
  companyData: {
    name: string;
    logo: string | null;
    description: string;
    facebook: string;
    instagram: string;
    tiktok: string;
    rights: string;
    location: string;
  } | null;
  setCompanyData: (data: CompanyState["companyData"]) => void;
}

export const useCompanyStore = create<CompanyState>((set) => ({
  companyData: null,
  setCompanyData: (data) => set({ companyData: data }),
}));
