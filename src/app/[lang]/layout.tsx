import type { Metadata } from "next";
import { Bebas_Neue } from 'next/font/google'

import './globals.css';

export const metadata: Metadata = {
  title: "G.O.A.T.",
  description: "Luthier Barcelona",
  icons: {
    icon: '/favicon.ico'
  }
};

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
});

export async function generateStaticParams() {
  return [{ lang: 'cat' }, { lang: 'en' }, { lang: 'es' }]
}

export default async function RootLayout(props: LayoutProps<'/[lang]'>) {
  const { children, params } = props;
  const { lang } = await params

  return (
    <html lang={lang}
      className={`h-full antialiased ${bebasNeue.variable}`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
