"use client";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
export default function TopBar() {
  return (
    <div className="grid gap-y-10 md:gap-10 gap-x-1 grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 font-medium text-center mb-10">
      <div className="col-span-full md:col-span-2 lg:col-span-4 text-left">
        <h1 className="text-white font-bold text-4xl">
          Bruno <span className="text-grey"> Henrique Beise</span>
        </h1>
      </div>
      <a href={`https://wa.link/uy1t2s`} target="blank">
        <div className="rounded-[10px] px-2 py-3 bg-bg shadow-animation">
          <h4 className="text-white text-sm">
            <span>
              Whatsapp <WhatsAppIcon />
            </span>
          </h4>
        </div>
      </a>
      <a href={`https://www.linkedin.com/in/brunobeise/`} target="blank">
        <div className="rounded-[10px] px-3 py-3 bg-bg shadow-animation">
          <h4 className="text-white text-sm">
            <span>
              Linkedin <LinkedInIcon />
            </span>
          </h4>
        </div>
      </a>
      <a href={`https://www.instagram.com/bruno_beise/`} target="blank">
        <div className="rounded-[10px] px-3 py-3 bg-bg shadow-animation">
          <h4 className="text-white text-sm">
            <span>
              Instagram <InstagramIcon />
            </span>
          </h4>
        </div>
      </a>
      <a href={`https://github.com/brunobeise`} target="blank">
        <div className="rounded-[10px] px-3 py-3 bg-bg shadow-animation">
          <h4 className="text-white text-sm">
            <span>
              Github <GitHubIcon />
            </span>
          </h4>
        </div>
      </a>
    </div>
  );
}
