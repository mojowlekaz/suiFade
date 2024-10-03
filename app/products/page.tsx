import React from "react";

export default function page() {
  const Cardcontent = [
    {
      title: "shorts",
      description: (
        <>
          Video sharing social app similar to web2 version Tiktok with added
          features like Creator Tipping, Opinion bets and lots more utilizing
          $Fade to facilitate transactions like opinions bet, creator tips with
          comments also restricted to holders of $FADE or related NFTs to
          prevent spams.
        </>
      ),
      time: "Beta Test in Q4 2024",
    },
    {
      title: "APOCALYPSE GRAVEYARD",
      description: (
        <>
          2D Game featuring Chess and Dungeon battle a world boss where every
          players has a fair chance with a little tip boost for Experiment Zero
          NFT Holders, a zombie themed game utilizing $FADE for boss fights and
          chess game
        </>
      ),
      time: "Alpha Test in Q4 2024",
    },
    {
      title: "ORB-FADE",
      description: (
        <>
          Orb4Fade is a native quest2earn platform on sui where $FADE infested
          can participate in social and onchain quests to earn partners or $FADE
          token
        </>
      ),
      time: "Coming H1 2025",
    },
    {
      title: "experiment zero",
      description: (
        <>
          Experiment Zero is a 555 only collection of $FADE Virus Infested
          Zombified Characters bring the new dawn after the end of an
          Apocalypse. EZ will be a free mint, WL Only , and +50% over allocated
          to ensure minted out by only those who are deserving
        </>
      ),
      time: "Coming Q4 2024/Q1 2023",
    },
  ];

  return (
    <div className="h-full lg:min-h-screen">
      <div
        style={{
          backgroundImage: `url('/bg1.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="pt-10 min-h-screen w-full"
      >
        <div className="flex flex-col justify-center items-center min-h-screen">
          <h1 className="font-exq text-white text-center md:text-[54px] lg:text-[54px] font-[400] leading-[28px]">
            POWERING THE FUTURE OF ONCHAIN ECONOMY
          </h1>

          <div className="flex flex-row flex-wrap gap-5 justify-center items-center pt-20 px-[30px] md:px-0">
            {Cardcontent.map((project, index) => (
              <div
                key={index}
                className="grid rounded-[20px] border-2 border-[#06F0FF] bg-[#06F0FF26] h-[504px] md:w-[344px] w-full justify-center items-center"
              >
                <p
                  className={`uppercase  text-center text-[64px] font-[400] leading-[28px] font-mickey ${
                    project.title === "shorts"
                      ? "text-[#06F0FF]"
                      : project.title === "APOCALYPSE GRAVEYARD"
                      ? "text-[#2B56ED]"
                      : project.title === "ORB-FADE"
                      ? "text-white"
                      : project.title === "experiment zero"
                      ? "text-[#000000]"
                      : ""
                  }`}
                >
                  {project.title}
                </p>
                <p className="font-normal text-white font-acme">
                  {project.description}
                </p>
                <p className="font-[400] text-white font-acme text-[15px] leading-[28px]">
                  {project.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
