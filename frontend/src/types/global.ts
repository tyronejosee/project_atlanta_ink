export interface IStyle {
  id: string;
  name: string;
  updated_at: string;
  created_at: string;
}

export interface IArtist {
  id: string;
  name: string;
  image?: string;
  instagram?: string;
  whatsapp?: string;
  description?: string;
  slug: string;
  styles: IStyle[];
  is_team: boolean;
  updated_at: string;
  created_at: string;
}


export interface IFaq {
  id: string;
  question: string;
  answer: string;
}

export interface IBookingValues {
  firstName: string;
  lastName: string;
  phone: string;
  notes: string;
  budget: string;
  placement: string;
  hasWorkInProgress: boolean;
  firstTimeSession: boolean;
  file: FileList;
}