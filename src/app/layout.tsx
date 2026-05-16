import type { Metadata } from "next";
import { Bebas_Neue } from 'next/font/google'
import './globals.css';

export const metadata: Metadata = {
  title: "G.O.A.T.",
  description: "Luthier Barcelona",
};

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`h-full antialiased ${bebasNeue.variable}`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
