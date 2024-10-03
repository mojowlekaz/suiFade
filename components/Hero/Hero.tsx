import Image from "next/image";
import Link from "next/link";
import React from "react";

const socials = [
  {
    img: "/x.svg",
    alt: "x",
    href: "x.com/fadeonsui",
  },
  {
    img: "/tg.svg",
    alt: "tg",
    href: "discord.com",
  },
];

export default function Hero() {
  return (
    <div className="h-screen">
      <div
        style={{
          backgroundImage: `url('/bg1.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          width: "100%",
        }}
        className="pt-60 md:pt-40"
      >
        <div className="md:space-y-10 gap-y-14 md:gap-y-0 flex flex-col items-center justify-center h-full text-center ">
          <div className="flex flex-row md:space-x-40 space-x-10">
            <h1 className="font-exq text-white text-[64px] md:text-[128px] lg:text-[150px] font-[400] leading-[28px] md:leading-[150px] tracking-wider">
              {" "}
              F
            </h1>
            <h1 className="font-exq text-white text-[64px] md:text-[128px] lg:text-[150px] font-[400] leading-[28px] md:leading-[150px] tracking-wider">
              A
            </h1>
            <h1 className="font-exq text-white text-[64px] md:text-[128px] lg:text-[150px] font-[400] leading-[28px] md:leading-[150px] tracking-wider">
              D
            </h1>
            <h1 className="font-exq text-white text-[64px] md:text-[128px] lg:text-[150px] font-[400] leading-[28px] md:leading-[150px] tracking-wider">
              E
            </h1>
          </div>
          <div>
            <div className="gap-32 md:space-y-10  flex md:gap-5 flex-col">
              <h1 className="text-[#EB1313] font-exq md:text-[108px] lg:text-[128px] text-[40px] font-[400] md:leading-[128px] leading-[28px] tracking-wider">
                {" "}
                APOCALYPSE
              </h1>

              <div className="lg:w-[994px] md:w-[800px] w-full flex flex-row items-center flex-wrap justify-center">
                {" "}
                <h1 className="text-white font-zombie uppercase text-[15px] lg:text-[32px] md:text-[22px] font-[400] leading-[24.34px] md:leading-[51px] mr-2">
                  Introducing
                </h1>
                <h1 className="text-[#EB1313] font-zombie uppercase text-[15px] lg:text-[32px] md:text-[22px] font-[400] leading-[24.34px] md:leading-[51px] mr-2">
                  FAIR (AESTHETIC) DEFI EXPERIMENT,
                </h1>
                <h1 className="text-white font-zombie uppercase text-[15px] lg:text-[32px] md:text-[22px] font-[400] leading-[24.34px] md:leading-[51px] mr-2">
                  the
                </h1>
                <h1 className="text-[#82CE02] font-zombie uppercase text-[15px] lg:text-[32px] md:text-[22px] font-[400] leading-[24.34px] md:leading-[51px] mr-2">
                  next-gen meme coin
                </h1>
                <h1 className="text-white font-zombie uppercase text-[15px] lg:text-[32px] md:text-[22px] font-[400] leading-[24.34px] md:leading-[51px] mr-2">
                  designed
                </h1>
                <h1 className="text-[#EB1313] font-zombie uppercase text-[15px] lg:text-[32px] md:text-[22px] font-[400] leading-[24.34px] md:leading-[51px] mr-2">
                  to propel you into the
                </h1>
                <h1 className="text-[#82CE02] font-zombie uppercase text-[15px] lg:text-[32px] md:text-[22px] font-[400] leading-[24.34px] md:leading-[51px]">
                  future of digital finance.
                </h1>
              </div>
            </div>
          </div>
          <h1 className="text-white font-zombie md:text-[108px] lg:text-[128px] text-[40px] font-[400] md:leading-[128px] leading-[28px] tracking-wider">
            a reset to a new dawn
          </h1>
        </div>
        {/* <div className="md:flex hidden justify-center items-center pt-8">
          <p className="text-white text-[15px] leading-[28px] font-[400]">
            2024 © FADE APOCALYPSE{" "}
          </p>
        </div>
        <div className="flex justify-center items-center pt-8 flex-row space-x-3 md:hidden">
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
        </div> */}
        {/* <div className="absolute top-0 left-0 w-full h-full bg-[#D9D9D940]"></div> */}
      </div>
      {/* <div className="bg-red-700 h-full">ewpjewpo</div> */}
    </div>
  );
}
