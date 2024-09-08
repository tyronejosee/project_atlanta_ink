import { Logo, Instagram, YouTube, Twitch } from "../icons";
import { socialLinks } from "@/utils/constants";

export const Footer = () => {
  return (
    <footer className="mt-auto bg-neutral-darkgrey">
      <div className="max-w-screen-xl mx-auto text-center py-8 space-y-4">
        <div className="text-sm text-neutral-gray max-w-screen-md mx-auto">
          <p>This site is a personal project and does not represent a real service. All information and content displayed here are fictitious and used solely for educational and demonstration purposes.</p>
        </div>
        <div className="text-neutral-gray border-t-2 border-primary pt-4">
          <p>&copy; {new Date().getFullYear()} Created with ❤️ by <span className="hover:underline hover:text-primary">Tyrone José</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
