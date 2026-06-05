import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "COMPRASEG 2026",
  description: "Congresso Nacional de Compras da Segurança Pública",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={cn(inter.variable, "font-sans antialiased bg-background text-foreground")}
        suppressHydrationWarning
        style={{ backgroundColor: "#031439" }}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
