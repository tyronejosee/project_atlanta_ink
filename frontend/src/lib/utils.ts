import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomItems<T>(items: T[], count: number): T[] {
  const shuffled = [...items].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, items.length));
}

export const validatePhone = (value: string) => {
  const phonePattern = /^\+1404\d{7}$/;
  return value === "" || phonePattern.test(value) || "Invalid phone number";
};

export const validateBullet = (value?: string) => {
  if (value === undefined || value === "") {
    return true;
  }

  return /^\d+(\.\d{1,2})?$/.test(value) || "Invalid budget format";
};

export const validateFileSize = (fileList?: FileList | undefined): boolean => {
  if (fileList && fileList.length > 0) {
    const file = fileList[0];
    const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    const isTypeValid = allowedTypes.includes(file.type);
    const isSizeValid = file.size <= 2 * 1024 * 1024;
    return isTypeValid && isSizeValid;
  }
  return true;
};
