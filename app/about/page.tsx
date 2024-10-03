import React from "react";

export default function page() {
  return (
    <div>
      <div className="h-full lg:min-h-screen">
        <div
          style={{
            backgroundImage: `url('/bg1.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="pt-10 min-h-screen w-full"
        >
          <h1 className="font-zombie text-[60px] text-white">About us</h1>
        </div>
      </div>
    </div>
  );
}
