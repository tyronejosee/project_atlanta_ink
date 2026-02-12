import type { Metadata } from "next";

import { ApplyPageClient } from "./container";

export const metadata: Metadata = {
  title: "Apply for Job - Atlanta Ink Tattoo Studio",
  description:
    "Submit your application to work at our tattoo studio. Fill out the form and well get in touch with you for future opportunities.",
};

export default function ApplyPage() {
  return <ApplyPageClient />;
}
