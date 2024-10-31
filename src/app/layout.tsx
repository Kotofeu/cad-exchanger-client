import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";

import './global.css'

export const metadata: Metadata = {
  title: 'Главная страница',
  description: "Это приложение создано с использованием Next.js в качестве тестового задания для CAD Exchanger.",
  keywords: "Next.js, React, тестовое задание, CAD Exchanger",
  authors: {
    name: 'Данил Петров',
    url: 'https://t.me/daniiilp'
  },
  openGraph: {
    title: "Тестовое задание CAD Exchanger",
    description: "Это приложение создано с использованием Next.js в качестве тестового задания для CAD Exchanger.",
    url: "https://cad-exchanger-client-kotofeus-projects.vercel.app/",
    siteName: "Тестовое задание CAD Exchanger",
    locale: "ru_RU",
    type: "website",
    images: [{
      url: 'https://fost.ws/soft/wp-content/uploads/2023/03/cad-exchanger-3-17-0-build-16601-crack-2023_6414a3a5bc95d.jpeg',
      alt: 'Тестовое задание CAD Exchanger'
    }]
  },
  twitter: {
    card: "summary_large_image",
    site: "@elonmusk",
    title: "Тестовое задание CAD Exchanger",
    description: "Это приложение создано с использованием Next.js в качестве тестового задания для CAD Exchanger.",
    images: [{
      url: 'https://fost.ws/soft/wp-content/uploads/2023/03/cad-exchanger-3-17-0-build-16601-crack-2023_6414a3a5bc95d.jpeg',
      alt: 'Тестовое задание CAD Exchanger'
    }]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <main>
          <StyledComponentsRegistry>
            <Header />
            {children}
            <Footer />
          </StyledComponentsRegistry>
        </main>
      </body>
    </html >
  );
}
