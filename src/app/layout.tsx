import Footer from "@/components/footer";
import Header from "@/components/header";
import { type_second } from "@/functions/fonts";
import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Notific Next",
  description: "Site de vagas e oportunidades UFAL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={type_second.variable}>
        <div className="App">
          <Header />
          <main className="AppBody">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
