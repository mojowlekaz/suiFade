"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathname = usePathname();

  const NavMenu = [
    {
      path: "Story",
      href: "/story",
    },
    {
      path: "Fadepaper",
      href: "/fadepaper",
    },
    {
      path: "Products",
      href: "/products",
    },
    {
      path: "About us",
      href: "/about",
    },
  ];

  const socials = [
    {
      img: "/x.svg",
      alt: "x",
      href: "https://x.com/fadeonsui?s=21",
    },
    {
      img: "/tg.svg",
      alt: "tg",
      href: "https://t.me/fadeonsui",
    },
  ];

  return (
    // <div className="bg-[#D9D9D940] h-full">
    <div className="bg-black px-[20px] md:h-full flex md:justify-between md:flex-row md:items-center md:px-[30px] ">
      <Link href={"/"}>
        <div className="items-center flex flex-row gap-2">
          <Image
            src="/logo.svg"
            className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-full lg:h-full"
            width={100}
            height={100}
            alt="logo"
          />
          <h1 className="font-zombie text-white md:text-[34px] lg:text-[64px] leading-[28px] font-[400] pt-5 hidden md:block">
            FADE
          </h1>
        </div>
      </Link>
      <div className="flex flex-row md:space-x-5 justify-between w-full md:w-auto items-center">
        {NavMenu.map((menu, index) => {
          const isActive = pathname === menu.href;
          return (
            <Link key={index} href={menu.href}>
              <p
                className={`font-exq font-[400] text-[15px] md:text-[27px]  lg:text-[32px] leading-[28px] ${
                  isActive ? "text-outline text-white" : "text-white"
                }`}
              >
                {menu.path}
              </p>
            </Link>
          );
        })}
      </div>
      <div className="md:flex md:flex-row space-x-3 hidden">
        {socials.map((social, index) => (
          <Link
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={social.img} width={30} height={30} alt={social.alt} />
          </Link>
        ))}
      </div>
    </div>
    // </div>
  );
}
