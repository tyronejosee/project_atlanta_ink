"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button, } from "@nextui-org/react";
import { Bird } from 'lucide-react';
import { Instagram, YouTube, Twitch } from "../icons";

export const MenuBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Artists",
    "Price",
    "Products",
    "Contact",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="xl" className="fixed z-50">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <Link color="foreground" href={"/"}>
          <NavbarBrand>
            <Bird />
            <p className="font-bold ml-2">DST</p>
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#artists">
            Artists
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#contact" aria-current="page">
            Price
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href={"/contact"}>
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <a
            href="https://www.youtube.com/#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTube />
          </a>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <a
            href="https://www.twitch.tv/#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitch />
          </a>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <a
            href="https://www.instagram.com/#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} href="#" variant="flat" className="dark:bg-primary dark:text-neutral-dark rounded-none">
            Contact Us
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
