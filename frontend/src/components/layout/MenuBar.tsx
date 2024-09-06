"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
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
import { Bird } from 'lucide-react';

import { menuItems, socialLinks } from "@/utils/constants";
import { Instagram, YouTube, Twitch } from "../icons";

export const MenuBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
        <Link color="foreground" href={"/"}>
          <NavbarBrand>
            <Bird />
            <span className="font-bold ml-2">
              DST
            </span>
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href={"/artists"}>
            Artists
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#contact" aria-current="page">
            Price
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={"/contact"}>
            Contact
          </Link>
        </NavbarItem>
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
            href="/contact"
            className="bg-primary text-neutral-light font-medium rounded-none"
          >
            Contact Us
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.id}>
            <Link
              className="w-full"
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar >
  );
}

// ! TODO: Review, pass to props
// export async function getServerSideProps() {
//   const res = await fetch('http://localhost:8000/company/');
//   const socialLinks = await res.json();

//   return {
//     props: { socialLinks },
//   };
// }
