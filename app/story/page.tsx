"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

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

const messages = [
  <>
    <p>
      In a world where blockchains ruled the digital realm, humanity teetered on
      the edge of destruction. Memecoins had once brought excitement, but over
      time, they became riddled with false promises, broken systems, and an
      invisible virus spreading through every transaction.
    </p>
    <p>
      The old blockchains had grown unstable, their weaknesses festering beneath
      layers of code. A mysterious force corrupted the virtual economy,
      infecting users with greed, trapping them in cycles of meaningless
      speculation. Society fell into chaos. The digital virus seeped into
      everyday life, turning people into mindless consumers, obsessed with
      accumulating tokens that no longer had real value. They became digital
      zombies—wandering through endless networks, seeking fortune in an era of
      diminishing returns.
    </p>
  </>,
  <>
    <p>
      The world was falling apart, both in the physical and virtual planes. And
      then, from the ashes of the old, FADE emerged. FADE wasn’t just another
      memecoin. It was something different, a virus designed for true freedom—a
      Fair Aesthetic DeFi Experiment fueled by the rise of the Sui blockchain.
    </p>
    <p>
      Whispers of its existence spread, a rumor of a virus that could rewrite
      the code, heal the fractured digital landscape, and wipe out the zombified
      chains that had once controlled everything.
    </p>
  </>,
  <>
    <p>
      Sui’s blockchain was like nothing the world had seen before: scalable,
      secure, fast, and most importantly, immune to the corruption that plagued
      its predecessors. As FADE spread across networks, it did not destroy—it
      liberated.
    </p>
    <p>
      It gave back control to the people, reintroducing fairness into a space
      where greed had long taken hold. FADE was a virus, but not one to be
      feared. It was the cure, a cleansing force meant to purge the infected
      systems. With each transaction, FADE rewrote the rules, breaking the
      chains of mindless speculation and hollow promises. It didn’t just change
      the code; it changed the game. FADE was the harbinger of a new era.
    </p>
  </>,
  <>
    <p>
      As the FADE virus spread, the digital zombies awoke from their slumber.
      Freed from the confines of greed and false hope, they embraced the new
      order built on trust and transparency.
    </p>
    <p>
      The apocalypse had arrived, but it wasn’t the end. It was the beginning of
      a revolution powered by the Sui blockchain, and FADE was its symbol—a
      memecoin turned virus, spreading freedom to every corner of the
      decentralized world.
    </p>
    <p>
      In this new age, FADE was not just a memecoin, but a beacon of what could
      be—a world where value wasn’t just created, but shared fairly. A virus for
      the future, not of destruction, but of hope.
    </p>
  </>,
];

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextMessage = () => {
    if (currentIndex < messages.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Function to go to the previous message
  const prevMessage = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };
  return (
    <div
      className="h-full lg:min-h-screen"
      // style={{
      //   background: "linear-gradient(to bottom, black 90%, #444343 10%)",
      // }}
    >
      <div
        style={{
          backgroundImage: `url('/bg1.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className=" justify-center items-center flex  min-h-screen w-full"
      >
        <div className=" flex  flex-row items-center justify-between">
          <button
            className=" bg-transparent text-white p-2"
            onClick={prevMessage}
          >
            <Image
              src="/leftarrow.svg"
              width={100}
              height={100}
              alt="leftarrow"
            />
          </button>

          <div className="flex justify-center items-center">
            <div className="border-2 border-black md:h-[668px] md:w-[700px] lg:h-[668px] lg:w-[900px] xl:w-[1066px] flex flex-col justify-center items-center relative">
              <div className="h-full flex justify-center items-center">
                <h1 className="text-center lg:text-[40px] md:text-[30px] text-white uppercase font-[400] xl:leading-[58px] md:leading-[48px] font-shlop">
                  {messages[currentIndex]}
                </h1>
              </div>
            </div>
            <button
              className=" bg-transparent text-white p-2"
              onClick={nextMessage}
            >
              <Image
                src="/rightarrow.svg"
                width={100}
                height={100}
                alt="rightarrow"
              />
            </button>
          </div>
        </div>
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
    </div>
  );
}
