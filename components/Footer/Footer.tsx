import React from "react";
import Image from "next/image";
import Link from "next/link";

const socials = [
  {
    img: "/x.svg",
    alt: "X",
    href: "https://x.com/fadeonsui",
  },
  {
    img: "/tg.svg",
    alt: "Telegram",
    href: "https://discord.com", // Updated to a valid Discord link (you may want to specify a channel)
  },
];

export default function Footer() {
  return (
    <div>
      {/* Desktop Footer */}
      <div className="hidden md:flex justify-center bg-[#444343] items-center pt-8">
        <p className="text-white text-[15px] leading-[28px] font-[400] font-mono">
          2024 © FADE APOCALYPSE
        </p>
      </div>

      {/* Mobile Footer */}
      <div className="flex justify-center bg-[#444343] items-center pt-8 flex-row space-x-3 md:hidden">
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
  );
}
