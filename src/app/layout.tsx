import { type_second } from "@/functions/fonts";
import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Notific Next",
  description: "Site de vagas e oportunidades UFAL",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={type_second.variable}>{children}</body>
    </html>
  );
}
