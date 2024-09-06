import { Logo, Instagram, YouTube, Twitch } from "../icons";
import { socialLinks } from "@/utils/constants";

export const Footer = () => {
  return (
    <footer className="bg-neutral-darkgrey py-4">
      <div className="max-w-screen-xl mx-auto text-center py-8 space-y-4">
        <div className="flex justify-center">
          <Logo />
        </div>
        <div className="flex justify-center space-x-4">
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
          <a
            href={socialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTube />
          </a>
          <a
            href={socialLinks.twitch}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitch />
          </a>
        </div>
        <div className="text-sm text-neutral-gray max-w-screen-md mx-auto">
          <p>This site is a personal project and does not represent a real service. All information and content displayed here are fictitious and used solely for educational and demonstration purposes.</p>
        </div>
        <div className="text-neutral-gray border-t-2 border-primary pt-4">
          <p>&copy; {new Date().getFullYear()} Created with ❤️ by <a href="#" className="hover:underline hover:text-primary">Tyrone José</a>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
