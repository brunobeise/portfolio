/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import typescriptLogo from "../assets/images/typescript.png";
import reactLogo from "../assets/images/react.png";
import nodeLogo from "../assets/images/node.png";
import Nextjs from "../assets/images/Next.js.png";

interface TechCircle {
  logo: string;
}

export default function TechCircle({ logo }: TechCircle) {
  return (
    <>
      {logo === `react` && (
        <div
          style={{ width: `28%` }}
          className="rounded-full p-4 lg:p-5 bg-bg absolute bottom-5 circle-animation blackshadow shadow-animation"
        >
          <img src={reactLogo.src} />
        </div>
      )}
      {logo === `node` && (
        <div className="rounded-full p-3 lg:p-5 w-1/4  bg-bg absolute left-5 circle-animation blackshadow shadow-animation">
          <img src={nodeLogo.src} />
        </div>
      )}
      {logo === `type` && (
        <div className="rounded-full p-4 lg:p-5 w-1/5 bg-bg absolute right-0 bottom-5 circle-animation blackshadow shadow-animation">
          <img src={typescriptLogo.src} />
        </div>
      )}
      {logo === `next` && (
        <div className="rounded-full p-2 lg:p-2 w-1/6 bg-bg absolute bottom-28 left-10 circle-animation blackshadow shadow-animation">
          <img src={Nextjs.src} />
        </div>
      )}
      <div className="rounded-full w-2 h-2 bg-primary absolute right-0 bottom-28 circle-animation" />
    </>
  );
}
