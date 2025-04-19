// Applicants
export type ApplicantValues = {
  name: string;
  email: string;
  phone: string;
  cv: FileList;
  message: string;
};

// Artists
export type StyleResponse = {
  id: string;
  name: string;
  updated_at: string;
  created_at: string;
};

export type ArtistResponse = {
  id: string;
  name: string;
  image?: string;
  instagram?: string;
  whatsapp?: string;
  description?: string;
  slug: string;
  styles: StyleResponse[];
  is_team: boolean;
  updated_at: string;
  created_at: string;
};

// Bookings
export type BookingValues = {
  firstName: string;
  lastName: string;
  phone: string;
  notes: string;
  artist: string;
  budget: string;
  placement: string;
  hasWorkInProgress: boolean;
  firstTimeSession: boolean;
  file: FileList;
};

export type BookingQueryParams = {
  artist?: string;
  firstName?: string;
  firstTime?: boolean;
};

// Company
export type CompanyResponse = {
  name: string;
  description: string;
  instagram: string;
  youtube: string;
  twitch: string;
  tiktok: string;
  whatsapp: string;
  rights: string;
  location: string;
};

export type PriceResponse = {
  id: string;
  name: string;
  description: string;
  price_range: string;
  is_featured: boolean;
};

export type FaqResponse = {
  id: string;
  question: string;
  answer: string;
};

export type ServiceResponse = {
  id: string;
  name: string;
  image?: string;
  description: string;
};

// Products
export type BrandResponse = {
  id: string;
  name: string;
};

export type CategoryResponse = {
  id: string;
  name: string;
};

export type ProductResponse = {
  id: string;
  name: string;
  slug: string;
  sku: string;
  brand: string;
  description?: string;
  price: number;
  currency: string;
  image?: string;
  category: string;
  stock: number;
  is_featured: boolean;
  updated_at: string;
  created_at: string;
};

export type ProductQueryParams = {
  sort_by?: string;
  search?: string;
  category?: string;
  brand?: string;
  page?: number;
  page_size?: number;
};

// Tattoos
export type TattooResponse = {
  id: string;
  name: string;
  slug: string;
  image: string;
  artist: string;
};

export type TattooImage = {
  image: string;
};
