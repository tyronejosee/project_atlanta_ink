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
  Button,
} from "@heroui/react";
import { Bird } from "lucide-react";
import { Instagram, YouTube, Twitch } from "@/components";
import { useCompanyStore } from "@/store";
import {
  COMPANY_NAME,
  MENU_ITEMS,
  NAV_ITEMS,
  NAV_CTA,
} from "@/config/constants";

export const MenuBar = () => {
  const { companyData } = useCompanyStore();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

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
  const isHomePage = pathname === "/";

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      isBordered={isHomePage ? shouldBlur : true}
      isBlurred={shouldBlur}
      className={`fixed z-50 transition-colors duration-300 ${
        shouldBlur ? "" : "bg-transparent blur-0"
      }`}
    >
      <NavbarContent>
        <Link color="foreground" href="/">
          <NavbarBrand>
            <Bird />
            <span className="font-bold ml-2">{COMPANY_NAME.toUpperCase()}</span>
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
                className={
                  isActive ? "font-bold text-primary" : "hover:font-bold"
                }
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
            href={companyData?.youtube}
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTube />
          </a>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <a
            href={companyData?.twitch}
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
            color="primary"
            className="text-neutral-light font-medium"
          >
            {NAV_CTA.label}
          </Button>
        </NavbarItem>

        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarMenu>
        {MENU_ITEMS.map((item) => {
          const isActive = pathname === item.href;

          return (
            <NavbarMenuItem key={item.id}>
              <Link
                href={item.href}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={
                  isActive ? "font-bold text-primary" : "hover:font-bold"
                }
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
};
