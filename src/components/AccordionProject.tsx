"use client";
import React, { useState } from "react";
import { Collapse } from "react-collapse";
import Project from "./Project";
import MGClogo from "../assets/projects/mgc/mgclogonovo.png";
import Beiselogo from "../assets/projects/beiseuatomoveis/beise.png";
import JokenpoLogo from "../assets/projects/jokenpo/jokenpologo.svg";

interface AcordionProps {
  title: string;
  subtitle: string;
  name: string;
}

export default function AccordionProject({
  title,
  subtitle,
  name,
}: AcordionProps) {
  const [open, setOpen] = useState(true);

  return (
    <div className="rounded-t-lg bg-secondary min-h-[100px] mb-5 w-full text-center md:px-5">
      <button
        onClick={() => setOpen(!open)}
        className="group relative rounded-[15px] px-5 py-4 text-primary font-bold text-2xl w-full"
        type="button"
        data-te-collapse-init
        aria-expanded="true"
      >
        {title}
      </button>
      <h5 className="text-grey text-md pl-5">{subtitle}</h5>
      <Collapse isOpened={open}>
        <Project
          desc=" O Management Cars foi desenvolvido para atender a uma necessidade real
          identificada na loja de carros do meu pai. Ao observar a falta de
          automatização na organização das despesas, vendas e controle de
          estoque, propus uma solução tecnológica. Juntos, discutimos e criamos
          uma aplicação que resolvesse esses problemas. No sistema, os carros
          são cadastrados e conectados à API da F.I.P.E., permitindo a captura
          do preço médio de cada veículo. Além disso, as despesas são
          registradas e os preços dos carros são calculados com base em uma
          margem de lucro estabelecida. A aplicação também possibilita o
          cadastro de vendas, contribuindo para a organização do estoque. Além
          disso, gera gráficos e relatórios relevantes para análise e
          acompanhamento do desempenho do negócio."
          stacks="Principais Stacks: React, Typescript, Firebase"
          logo={MGClogo.src}
          name={"mgc"}
          link={"https://www.mgc-app.com"}
        />
        <Project
          desc="O sistema de gestão, o Management Cars, já possuía todos os dados necessários previamente populados. 
          Com isso, foi possível vinculá-los a um showroom online, totalmente gerenciado pelo MGC. Esse showroom virtual
           proporciona uma experiência completa aos clientes, permitindo que eles encontrem os carros disponíveis na loja e, 
           inclusive, entrem em contato diretamente. Ao explorar o showroom online, os clientes têm acesso a uma ampla variedade
            de veículos prontamente disponíveis para visualização. Eles podem navegar pelas diferentes opções, utilizando filtros
             e recursos de busca para encontrar o carro que atenda às suas necessidades e preferências específicas. Foi minha primeira
             experiência com o nextjs. Tive que aplicar junto a programação estratégias de SEO e colocar ele bem colocado nas pesquisas atraves do Google Search Console."
          stacks="Principais Stacks: NextJs, MUI, Typescript"
          logo={Beiselogo.src}
          name="beiseuatomoveis"
          link="https://www.beiseautomoveis.com.br"
        />
        <Project
          desc="O projeto Jokenpo reinventa o clássico jogo de Pedra, Papel e Tesoura em uma aplicação interativa, permitindo duelos entre jogadores. Cada participante escolhe entre pedra, papel ou tesoura, com o vencedor determinado pelas regras tradicionais. Este jogo digital se destaca com recursos adicionais como skins personalizáveis, um marketplace para negociações, um leaderboard para competições e leilões de skins. A economia do jogo gira em torno dos Jokens, uma moeda virtual, que pode ser movimentada via BNB com a Metamask. O Jokenpo é mais do que um jogo: é uma plataforma interativa que combina nostalgia e inovação, desafiando jogadores contra amigos ou o computador em um ambiente familiar, porém renovado. O projeto é completo, desde o banco de dados, backend, frontend e até design."
          stacks="Principais Stacks: Vuejs, Socket.io, Express, Typescript, Vuetify, PostgreSQL"
          logo={JokenpoLogo.src}
          name="jokenpo"
          link="https://jokenpo.online"
        />
      </Collapse>
    </div>
  );
}
