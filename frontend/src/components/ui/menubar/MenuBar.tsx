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
import { MENU_ITEMS, NAV_ITEMS, NAV_CTA, COMPANY_NAME } from "@/config/constants";
import { Instagram, YouTube, Twitch } from "@/components";
import { useCompanyStore } from "@/store";

export const MenuBar = () => {
  const { companyData } = useCompanyStore();
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

  const shouldBlur = isScrolled || isMenuOpen;

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      isBordered={shouldBlur}
      isBlurred={shouldBlur}
      className={`fixed z-50 transition-colors duration-300 ${shouldBlur ? "" : "bg-transparent blur-0"}`}
    >
      <NavbarContent>
        <Link color="foreground" href="/">
          <NavbarBrand>
            <Bird />
            <span className="font-bold ml-2">
              {companyData?.name || COMPANY_NAME}
            </span>
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {NAV_ITEMS.map((item) => {
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
            href={companyData?.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTube />
          </a>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <a
            href={companyData?.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitch />
          </a>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <a
            href={companyData?.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Button
            as={Link}
            href={NAV_CTA.href}
            className="bg-primary text-neutral-light font-medium rounded-xl"
          >
            {NAV_CTA.label}
          </Button>
        </NavbarItem>

        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarMenu
        className={`${shouldBlur ? "" : "bg-transparent blur-0"}`}
      >
        {MENU_ITEMS.map((item) => {
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
