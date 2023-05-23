"use client";
import React, { useState } from "react";
import { Collapse } from "react-collapse";
import AccordionText from "./AccordionText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faCodeCompare,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";

interface AcordionProps {
  title: string;
  subtitle: string;
  type: string;
}

export default function AccordionStack({
  title,
  subtitle,
  type,
}: AcordionProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-t-lg p-5 bg-gradient min-h-[100px] mb-5 shadow-animation">
      <h2 className="mb-0 font-bold text-2xl" id="headingOne">
        <button
          onClick={() => setOpen(!open)}
          className="group relative flex w-full items-center rounded-[15px] px-5 py-4 text-left text-primary"
          type="button"
          data-te-collapse-init
          data-te-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          {title}
          {type === `frontend` && (
            <FontAwesomeIcon icon={faCode} className="absolute right-4 top-4" />
          )}
          {type === `backend` && (
            <FontAwesomeIcon
              icon={faCodeCompare}
              className="absolute right-4 top-4"
            />
          )}
          {type === `bancodedados` && (
            <FontAwesomeIcon
              icon={faDatabase}
              className="absolute right-4 top-4"
            />
          )}
        </button>
      </h2>
      <h5 className="text-grey text-md pl-5">{subtitle}</h5>
      <Collapse isOpened={open}>
        {type === `frontend` && (
          <div className="px-5 py-4 text-white">
            <h3 className="font-medium mb-3">
              Sou especializado em desenvolvimento frontend, criando interfaces
              de usuário atraentes e responsivas. Utilizo as seguintes
              tecnologias e ferramentas:
            </h3>
            <AccordionText text="TypeScript como linguagem principal para desenvolvimento frontend, fornecendo recursos de tipagem estática e facilitando a manutenção do código." />
            <AccordionText text="React e Next.js como principais bibliotecas/frameworks para criação de aplicações web modernas e performáticas." />
            <AccordionText text="Utilização do MUI (Material-UI), Bootstrap e Tailwind CSS para a criação de interfaces de usuário estilizadas e responsivas." />
          </div>
        )}
        {type === `backend` && (
          <div className="px-5 py-4 text-white">
            <h3 className="font-medium mb-3">
              Possuo experiência em desenvolvimento backend utilizando Node.js,
              criando lógica de negócios e APIs robustas. Utilizo as seguintes
              tecnologias e ferramentas:
            </h3>
            <AccordionText text="Node.js como plataforma principal para desenvolvimento backend, aproveitando sua eficiência e escalabilidade." />
            <AccordionText text="TypeScript para desenvolvimento backend, fornecendo recursos de tipagem estática e facilitando a manutenção do código." />
            <AccordionText text="Socket.IO para comunicação em tempo real, permitindo a implementação de recursos como chats em tempo real e notificações push." />
            <AccordionText text="Criação de APIs RESTful utilizando frameworks como Express.js, facilitando o roteamento de solicitações e o tratamento de dados." />
            <AccordionText text="Implementação de autenticação e autorização usando JWT (JSON Web Tokens)." />
            <AccordionText text="TypeORM como ORM para mapear e manipular bancos de dados relacionais, facilitando a interação com o banco de dados e consultas." />
            <AccordionText text="Uso de ferramentas de versionamento de código, como Git, para controle de versão e colaboração em equipe." />
          </div>
        )}
        {type === `bancodedados` && (
          <div className="px-5 py-4 text-white">
            <h3 className="font-medium mb-3">
              Tenho experiência em trabalhar com bancos de dados tanto
              relacionais quanto não relacionais. Utilizo as seguintes
              tecnologias e ferramentas:
            </h3>
            <AccordionText text="PostgreSQL como banco de dados relacional, aproveitando sua robustez e recursos avançados de SQL." />
            <AccordionText text="Firebase como banco de dados não relacional, proporcionando uma solução escalável e de alta disponibilidade para aplicações web e móveis." />
            <AccordionText text="Redis para cache de dados, permitindo um acesso rápido e eficiente a informações frequentemente acessadas." />
            <AccordionText text="Modelagem de bancos de dados relacionais utilizando conceitos de normalização e relacionamento entre tabelas." />
            <AccordionText text="DBeaver como ferramenta de consulta e administração de bancos de dados, facilitando a escrita de consultas SQL e a visualização dos dados." />
            <AccordionText text="Familiaridade com as melhores práticas de segurança em bancos de dados, garantindo a confidencialidade e integridade dos dados armazenados." />
            <AccordionText text="Uso de ferramentas de versionamento de código, como Git, para controle de versão e colaboração em equipe." />
          </div>
        )}
      </Collapse>
    </div>
  );
}
