import TechCircle from "@/components/TechCircle";
import "./globals.css";
import "./animations.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bruno Henrique Beise",
  description: "Desenvolvedor Web Full Stack",
  icons: "@/assets/images/ico.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={(inter.className, `font-source-code-pro`)}>
        {children}
      </body>
    </html>
  );
}
