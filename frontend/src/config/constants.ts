export const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error("API base URL is not defined in .env");
}

export const API_URL_LOCAL = "http://localhost:3000/api";

export const COMPANY_NAME = "Atlanta Ink";
export const COMPANY_DESCRIPTION = `
Trust our experts for your next tattoo. With years of experience and a
passion for detail, we’re here to bring your vision to life with
precision and professionalism. Experience the difference of
well-crafted art.
`;

export const USE_API = false;
export const PAGE_SIZE = 10;

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
  { id: 3, href: "/products", label: "Products" },
  { id: 4, href: "/applicants/apply", label: "Applicants" },
];

export const MENU_ITEMS = [
  { id: 1, href: "/artists", label: "Artists" },
  { id: 2, href: "/prices", label: "Prices" },
  { id: 3, href: "/products", label: "Products" },
  { id: 4, href: "/applicants/apply", label: "Applicants" },
  { id: 4, href: "/bookings", label: "Bookings" },
];

export const SCHEDULE_LIST = [
  {
    id: 1,
    day: "Monday",
    schedule: "09:00 AM to 10:30 PM",
  },
  {
    id: 2,
    day: "Tuesday",
    schedule: "09:00 AM to 10:30 PM",
  },
  {
    id: 3,
    day: "Wednesday",
    schedule: "09:00 AM to 10:30 PM",
  },
  {
    id: 4,
    day: "Thursday",
    schedule: "09:00 AM to 10:30 PM",
  },
  {
    id: 5,
    day: "Friday",
    schedule: "09:00 AM to 10:30 PM",
  },
  {
    id: 6,
    day: "Saturday",
    schedule: "10:00 AM to 10:30 PM",
  },
  {
    id: 7,
    day: "Sunday",
    schedule: "Closed",
  },
];
