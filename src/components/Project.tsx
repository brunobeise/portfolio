/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Divider, Skeleton } from "@mui/material";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

interface ProjectProps {
  name: string;
  logo?: string;
  stacks: string;
  desc: string;
  link: string;
}

export default function Project({
  name,
  logo,
  desc,
  stacks,
  link,
}: ProjectProps) {
  const [imgs, setImgs] = useState<string[]>([]);
  useEffect(() => {
    let imgArr: string[] = [];
    try {
      imgArr.push(require(`../assets/projects/${name}/1.gif`).default.src);
    } catch {}
    try {
      imgArr.push(require(`../assets/projects/${name}/1.jpg`).default.src);
    } catch {}
    try {
      imgArr.push(require(`../assets/projects/${name}/2.jpg`).default.src);
    } catch {}
    try {
      imgArr.push(require(`../assets/projects/${name}/3.jpg`).default.src);
    } catch {}
    try {
      imgArr.push(require(`../assets/projects/${name}/4.jpg`).default.src);
    } catch {}
    try {
      imgArr.push(require(`../assets/projects/${name}/5.jpg`).default.src);
    } catch {}
    console.log(imgArr);

    setImgs(imgArr);
  }, [name]);

  function extrairDominio(url: string) {
    var dominio = url.replace(/^(?:https?:\/\/)?(?:www\.)?([^\/]+)/i, "$1");
    return dominio;
  }

  return (
    <>
      <div className="grid md:grid-cols-2 mt-10 gap-5">
        <div className="text-center px-5">
          {logo && (
            <Image
              className="mb-5"
              width={200}
              height={200}
              style={{ display: "inline" }}
              alt="Manegement Cars"
              src={logo}
            />
          )}
          <h2 className="text-white text-md">
            {desc}
            <br /> <br />
            {stacks}
            <br /> <br />
            <a target="blank" className="font-medium" href={link}>
              {extrairDominio(link)} <OpenInNewIcon />
            </a>
          </h2>
        </div>
        <div>
          {imgs.length > 0 ? (
            <Carousel>
              {imgs.map((img) => (
                <div
                  className="px-3 md:px-0"
                  key={img}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={img}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              ))}
            </Carousel>
          ) : (
            <Skeleton className="w-full h-full" />
          )}
        </div>
      </div>
      <Divider className="w-full text-white my-5" sx={{ bgcolor: "grey" }} />
    </>
  );
}
