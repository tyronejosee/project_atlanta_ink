export const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error("API base URL is not defined in .env");
}

export const DEFAULT_IMAGE = "/images/no-image.webp";

export const COMPANY_NAME = "Company Name"

export const NAV_CTA = { label: "Book Now", href: "/bookings" }

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

export const PRODUCT_FILTER_CHOICES = [
  { key: 1, value: "popularity", label: "Popularity" },
  { key: 2, value: "latest", label: "Latest" },
  { key: 3, value: "price_low", label: "Price: Low to high" },
  { key: 4, value: "price_high", label: "Pprice: Hight to low" },
];

export const NAV_ITEMS = [
  { id: 1, href: "/artists", label: "Artists" },
  { id: 2, href: "/prices", label: "Prices" },
  { id: 1, href: "/products", label: "Products" },
];

export const MENU_ITEMS = [
  { id: 1, label: "Homepage", href: "/" },
  { id: 2, label: "Artists", href: "/artists" },
  { id: 3, label: "Prices", href: "/prices" },
  { id: 4, label: "Products", href: "/products" },
  { id: 5, label: "Bookings", href: "/bookings" },
];

export const TATTOO_EXAMPLE = [
  "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560785/gwojsaglfb78ubmqgqzc.webp",
  "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560726/qfmmxblvlctpjtkrg0km.jpg",
  "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560785/gwojsaglfb78ubmqgqzc.webp",
  "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560726/qfmmxblvlctpjtkrg0km.jpg",
  "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560785/gwojsaglfb78ubmqgqzc.webp",
  "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560726/qfmmxblvlctpjtkrg0km.jpg",
  "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560785/gwojsaglfb78ubmqgqzc.webp",
  "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560726/qfmmxblvlctpjtkrg0km.jpg",
  "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560785/gwojsaglfb78ubmqgqzc.webp",
  "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560726/qfmmxblvlctpjtkrg0km.jpg",
  "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560785/gwojsaglfb78ubmqgqzc.webp",
  "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560726/qfmmxblvlctpjtkrg0km.jpg",
  "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560785/gwojsaglfb78ubmqgqzc.webp",
  "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560726/qfmmxblvlctpjtkrg0km.jpg",
  "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560785/gwojsaglfb78ubmqgqzc.webp",
  "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560726/qfmmxblvlctpjtkrg0km.jpg",
  "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560785/gwojsaglfb78ubmqgqzc.webp",
  "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560726/qfmmxblvlctpjtkrg0km.jpg",
  "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560785/gwojsaglfb78ubmqgqzc.webp",
  "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560726/qfmmxblvlctpjtkrg0km.jpg",
  "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560785/gwojsaglfb78ubmqgqzc.webp",
  "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560726/qfmmxblvlctpjtkrg0km.jpg",
  "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560785/gwojsaglfb78ubmqgqzc.webp",
  "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560726/qfmmxblvlctpjtkrg0km.jpg",
  "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1725560785/gwojsaglfb78ubmqgqzc.webp"
]
