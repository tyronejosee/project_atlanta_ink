"use client";

import Link from "next/link";
import { WhatsApp } from "@/components";

export const WhatsAppButton = () => {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER || "";
  const message = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || "";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <button className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 hover:bg-green-600 rounded-xl">
        <WhatsApp />
      </button>
    </Link>
  );
};
