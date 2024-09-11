export const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error("API base URL is not defined in .env");
}


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

export const DEFAULT_IMAGE = "/images/no-image.webp";

export const navCTA = { label: "Contact Us", href: "/contact" }
export const navBrand = "Atlanta Ink"

export const navItems = [
  { id: 1, href: "/artists", label: "Artists" },
  { id: 2, href: "/prices", label: "Prices" },
  { id: 3, href: "/contact", label: "Contact" },
  { id: 4, href: "/test", label: "Test" },
];

export const menuItems = [
  { id: 1, label: "Artists", href: "/artists" },
  { id: 2, label: "Prices", href: "/prices" },
  { id: 3, label: "Products", href: "/products" },
  { id: 4, label: "Contact", href: "/contact" },
];

export const socialLinks = {
  instagram: "https://www.instagram.com/user",
  youtube: "https://www.youtube.com/channel",
  twitch: "https://www.twitch.tv/channel",
};

export const serviceItems = [
  {
    id: "85043ae9-44ac-488b-b494-f65b2bfa5a90",
    name: "Tattoo Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nihil inventore dolores possimus non saepe provident.",
    image: "/images/piercing.webp"
  },
  {
    id: "52b6e974-fb5f-4eb5-9140-866a21ff5a11",
    name: "Realistic Tattoo",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nihil inventore dolores possimus non saepe provident.",
    image: "/images/piercing.webp"
  },
  {
    id: "9d8dd3f9-7711-4e62-91fa-2031a3fbc51d",
    name: "Tribal Tattoo",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nihil inventore dolores possimus non saepe provident.",
    image: "/images/piercing.webp"
  },
  {
    id: "888a3ae3-df0a-477d-b930-cb59c4266b9e",
    name: "Handpoke Tattoo",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nihil inventore dolores possimus non saepe provident.",
    image: "/images/piercing.webp"
  },
  {
    id: "75f951cc-9778-4363-b4b9-6071841e63cf",
    name: "Piercing",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nihil inventore dolores possimus non saepe provident.",
    image: "/images/piercing.webp"
  },
  {
    id: "30fcad37-746e-4fba-a04a-b7124cd39322",
    name: "Tattoo Removal",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nihil inventore dolores possimus non saepe provident.",
    image: "/images/piercing.webp"
  },
];

export const tattoosExample = [
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
