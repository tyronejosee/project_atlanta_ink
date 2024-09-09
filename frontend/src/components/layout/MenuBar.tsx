"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button
} from "@nextui-org/react";
import { Bird } from "lucide-react";
import { menuItems, navItems, socialLinks, navCTA, navBrand } from "@/utils/constants";
import { Instagram, YouTube, Twitch } from "../icons";

export const MenuBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname()

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      isBlurred={isScrolled}
      className={`fixed z-50 transition-colors duration-300 ${isScrolled ? "" : "bg-transparent blur-0"
        }`}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <Link color="foreground" href="/">
          <NavbarBrand>
            <Bird />
            <span className="font-bold ml-2">
              {navBrand}
            </span>
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <NavbarItem key={item.id}>
              <Link
                href={item.href}
                className={isActive ? "font-bold text-primary" : "hover:font-bold"}
              >
                {item.label}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <a
            href={socialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTube />
          </a>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <a
            href={socialLinks.twitch}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitch />
          </a>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
        </NavbarItem>

        <NavbarItem>
          <Button
            as={Link}
            href={navCTA.href}
            className="bg-primary text-neutral-light font-medium rounded-none"
          >
            {navCTA.label}
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu >
        {menuItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <NavbarMenuItem key={item.id}>
              <Link
                href={item.href}
                className={isActive ? "font-bold text-primary" : "hover:font-bold"}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar >
  );
}
