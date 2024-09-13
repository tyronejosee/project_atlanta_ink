import { ICategory, IProduct } from "@/types/global";

export const products: IProduct[] = [
  {
    id: "cfe0e91c-63c0-49b7-acc2-be42f6de1fc2",
    name: "Temporary Dragon Tattoo",
    slug: "temporary-dragon-tattoo",
    sku: "TEM-192ASD",
    description: "Temporary dragon tattoo with vibrant details and long-lasting colors.",
    price: 15.99,
    currency: "usd",
    image: "/images/temporary-dragon-tattoo.jpg",
    category: "Temporary Tattoos",
    stock: 50,
    is_featured: false,
    updated_at: new Date().toISOString(),
    created_at: new Date().toISOString()
  },
]

export const categories: ICategory[] = [
  {
    id: "e17e6244-5fce-4c6f-a7b4-72d19727a940",
    name: "Temporary Tattoos"
  },
  {
    id: "9eaf25a8-888b-40e9-978b-f68351904ebb",
    name: "Inks"
  },
  {
    id: "6b578b7e-c778-46c3-ab4a-2a9858dcec17",
    name: "Equipment"
  },
  {
    id: "d383cd59-be80-4b9f-9a90-b79e45bfceff",
    name: "Aftercare"
  },
  {
    id: "f0e274e6-689e-4384-b371-105397e95d83",
    name: "Stencils"
  },
  {
    id: "82145b33-5894-41fe-990e-b62c49637198",
    name: "Needles"
  },
  {
    id: "36895248-fb4c-4d78-8e4f-7db8d9932659",
    name: "Practice"
  },
  {
    id: "11540464-709e-44a9-a715-00c2290d44e8",
    name: "Hygiene"
  },
  {
    id: "9df0be48-2821-4a58-8329-7a6c0aaa6ff3",
    name: "Designs"
  }
];
