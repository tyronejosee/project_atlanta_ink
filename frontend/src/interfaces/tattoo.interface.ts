export interface ITattoo {
  id: string;
  name: string;
  slug: string;
  image?: string | null;
  artist: string;
}

export interface ITattooImage {
  image: string;
}
