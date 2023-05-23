"use client";
import Image from "next/image";
import foto from "@/assets/images/perfillogo.png";
import TechCircle from "@/components/TechCircle";
import Acordion from "@/components/AccordionStack";
import TopBar from "@/components/TopBar";
import LaunchIcon from "@mui/icons-material/Launch";
import AccordionProject from "@/components/AccordionProject";
import AccordionStack from "@/components/AccordionStack";

export default function Home() {
  return (
    <>
      <div className="container max-w-screen-2xl">
        <div className="bg-secondary m-5 pt-10 px-5 md:p-10 lg:px-20 text-white">
          <TopBar />
          <div className="grid grid-cols-1 md:grid-cols-3 flex justify-items-center items-center">
            <div className="md:col-span-2 relative mb-5">
              <h1 className="font-medium text-3xl  md:text-5xl lg:text-7xl mb-2 md:mb-4 text-shadow-animation">
                Desenvolvedor Web Full Stack
              </h1>
              <h1 className="font-medium text-2xl sm:text-3xl md:text-5xl lg:text-6xl xs:text-8xl  mb-4 md:mb-8"></h1>
              <h2 className="text-grey text-md md:text-xl lg:text-2xl w-4/5">
                Apto a construir aplicações interativas em todas as etapas do
                processo.
              </h2>

              <div className="mt-10 flex gap-5">
                <div className="rounded-md bg-primary w-min py-1 px-3 ">
                  <p className="font-medium">React</p>
                </div>
                <div className="rounded-md bg-primary w-min py-1 px-3 ">
                  <p className="font-medium">NodeJs</p>
                </div>

                <div className="rounded-md bg-primary w-min py-1 px-3 ">
                  <p className="font-medium">Typescript</p>
                </div>
              </div>
            </div>
            <div className="col-1 relative mt-10">
              <div className="w-full absolute aspect-square rounded-full slide-animation  left-0">
                {" "}
                <TechCircle logo={`react`} />
                <TechCircle logo={`node`} />
                <TechCircle logo={`type`} />
                <TechCircle logo={`next`} />
              </div>
              <Image
                priority
                alt="Bruno Beise"
                width={400}
                height={300}
                src={foto.src}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 p-5 md:p-10">
          <div className="md:px-10">
            <AccordionStack
              title="FrontEnd"
              subtitle="Criação de interfaces atraentes com React e Next.js."
              type="frontend"
            />
            <AccordionStack
              type="backend"
              title="BackEnd"
              subtitle="Desenvolvimento com Node.js."
            />
            <AccordionStack
              type="bancodedados"
              title="Banco de Dados"
              subtitle="Modelagem, consultas e otimização com PostgreSQL e Firebase."
            />
          </div>
          <div className="text-center">
            <h2 className="text-white text-3xl font-medium mb-5 text-shadow-animation">
              Bem-vindo(a) ao meu portfólio!
            </h2>
            <h4 className="text-white font-medium text-xl mb-5 text-shadow-animation">
              Sou desenvolvedor web full stack pela{" "}
              <a className="font-medium hover:cursor-pointer">
                Growdev <LaunchIcon />
              </a>
            </h4>
            <h3 className="text-white text-xl">
              Durante o curso, participei de diversos projetos, tanto do curso
              quanto pessoais, aprimorando minhas capacidades técnicas. Estou
              empolgado para mostrar o que sou capaz de criar. Explore meu
              portfólio e veja alguns dos projetos que realizei. Trabalhei em
              uma variedade de desafios, aplicando meus conhecimentos em
              desenvolvimento web para criar soluções funcionais e intuitivas.
              Estou pronto para enfrentar novos desafios e colaborar em seu
              próximo projeto. Vamos trabalhar juntos para transformar suas
              ideias em realidade!
            </h3>
          </div>
        </div>
        <div>
          <AccordionProject
            subtitle="Projetos feitos por conta ou sob demanda."
            title="Projetos pessoais"
            name="mgc"
          />
        </div>
      </div>
    </>
  );
}
