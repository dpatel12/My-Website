import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import Head from 'next/head';
import Script from 'next/script'


const inter = Inter({ subsets: ["latin"] });

declare global {
  interface Window {
    dataLayer: any[];
  }
}


export const metadata: Metadata = {
  title: "Danyaal's Portfolio",
  description: "Danyaal Patel's portfolio showcasing my projects, work experiences, and skills",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any"/>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-PQ6FN6YXQR"/>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-PQ6FN6YXQR');
        `}
        </Script>
      </Head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
