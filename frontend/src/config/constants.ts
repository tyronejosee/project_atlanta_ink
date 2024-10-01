export const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error("API base URL is not defined in .env");
}

export const COMPANY_NAME = "Atlanta Ink";

export const COMPANY_DESCRIPTION = `
Trust our experts for your next tattoo. With years of experience and a
passion for detail, we’re here to bring your vision to life with
precision and professionalism. Experience the difference of
well-crafted art.
`;

export const DEFAULT_IMAGE = "/images/no-image.webp";

export const NAV_CTA = { label: "Book Now", href: "/bookings" };

export const SORT_CHOICES = [
  { key: "latest", label: "Latest Products" },
  { key: "oldest", label: "Oldest Products" },
  { key: "lowest_price", label: "Lowest Price" },
  { key: "highest_price", label: "Highest Price" },
];

export const PLACEMENT_CHOICES = [
  { key: "arm", label: "Arm" },
  { key: "leg", label: "Leg" },
  { key: "back", label: "Back" },
  { key: "chest", label: "Chest" },
  { key: "abdomen", label: "Abdomen" },
  { key: "side", label: "Side" },
  { key: "foot", label: "Foot" },
  { key: "hand", label: "Hand" },
  { key: "neck", label: "Neck" },
  { key: "other", label: "Other" },
];

export const NAV_ITEMS = [
  { id: 1, href: "/artists", label: "Artists" },
  { id: 2, href: "/prices", label: "Prices" },
  { id: 1, href: "/products", label: "Products" },
  { id: 1, href: "/applicants/apply", label: "Applicants" },
];

export const MENU_ITEMS = [
  { id: 1, label: "Homepage", href: "/" },
  { id: 2, label: "Artists", href: "/artists" },
  { id: 3, label: "Prices", href: "/prices" },
  { id: 4, label: "Products", href: "/products" },
  { id: 5, label: "Bookings", href: "/bookings" },
];

export const TATTOO_EXAMPLE_OBJ = [
  {
    id: 1,
    name: "Tattoo Design 1",
    image:
      "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560785/gwojsaglfb78ubmqgqzc.webp",
    artist: "Artist Name 1",
  },
  {
    id: 2,
    name: "Tattoo Design 2",
    image:
      "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560726/qfmmxblvlctpjtkrg0km.jpg",
    artist: "Artist Name 2",
  },
  {
    id: 3,
    name: "Tattoo Design 3",
    image:
      "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560785/gwojsaglfb78ubmqgqzc.webp",
    artist: "Artist Name 1",
  },
  {
    id: 4,
    name: "Tattoo Design 4",
    image:
      "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560726/qfmmxblvlctpjtkrg0km.jpg",
    artist: "Artist Name 2",
  },
  {
    id: 5,
    name: "Tattoo Design 5",
    image:
      "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560785/gwojsaglfb78ubmqgqzc.webp",
    artist: "Artist Name 1",
  },
  {
    id: 6,
    name: "Tattoo Design 6",
    image:
      "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560726/qfmmxblvlctpjtkrg0km.jpg",
    artist: "Artist Name 2",
  },
  {
    id: 7,
    name: "Tattoo Design 7",
    image:
      "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560785/gwojsaglfb78ubmqgqzc.webp",
    artist: "Artist Name 1",
  },
  {
    id: 8,
    name: "Tattoo Design 8",
    image:
      "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560726/qfmmxblvlctpjtkrg0km.jpg",
    artist: "Artist Name 2",
  },
  {
    id: 9,
    name: "Tattoo Design 9",
    image:
      "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560785/gwojsaglfb78ubmqgqzc.webp",
    artist: "Artist Name 1",
  },
  {
    id: 10,
    name: "Tattoo Design 10",
    image:
      "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560726/qfmmxblvlctpjtkrg0km.jpg",
    artist: "Artist Name 2",
  },
  {
    id: 11,
    name: "Tattoo Design 11",
    image:
      "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560785/gwojsaglfb78ubmqgqzc.webp",
    artist: "Artist Name 1",
  },
  {
    id: 12,
    name: "Tattoo Design 12",
    image:
      "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560726/qfmmxblvlctpjtkrg0km.jpg",
    artist: "Artist Name 2",
  },
  {
    id: 13,
    name: "Tattoo Design 13",
    image:
      "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560785/gwojsaglfb78ubmqgqzc.webp",
    artist: "Artist Name 1",
  },
  {
    id: 14,
    name: "Tattoo Design 14",
    image:
      "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560726/qfmmxblvlctpjtkrg0km.jpg",
    artist: "Artist Name 2",
  },
  {
    id: 15,
    name: "Tattoo Design 15",
    image:
      "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560785/gwojsaglfb78ubmqgqzc.webp",
    artist: "Artist Name 1",
  },
  {
    id: 16,
    name: "Tattoo Design 16",
    image:
      "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560726/qfmmxblvlctpjtkrg0km.jpg",
    artist: "Artist Name 2",
  },
  {
    id: 17,
    name: "Tattoo Design 17",
    image:
      "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560785/gwojsaglfb78ubmqgqzc.webp",
    artist: "Artist Name 1",
  },
  {
    id: 18,
    name: "Tattoo Design 18",
    image:
      "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560726/qfmmxblvlctpjtkrg0km.jpg",
    artist: "Artist Name 2",
  },
  {
    id: 19,
    name: "Tattoo Design 19",
    image:
      "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560785/gwojsaglfb78ubmqgqzc.webp",
    artist: "Artist Name 1",
  },
  {
    id: 20,
    name: "Tattoo Design 20",
    image:
      "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560726/qfmmxblvlctpjtkrg0km.jpg",
    artist: "Artist Name 2",
  },
];
