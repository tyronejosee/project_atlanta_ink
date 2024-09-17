export interface ICompany {
  name: string;
  description: string;
  instagram: string;
  youtube: string;
  twitch: string;
  tiktok: string;
  whatsapp: string;
  rights: string;
  location: string;
}

export interface IFaq {
  id: string;
  question: string;
  answer: string;
}

export interface IService {
  id: string;
  name: string;
  image?: string;
  description: string;
}
