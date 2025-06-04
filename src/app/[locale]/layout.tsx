import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import { Lato } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "next-themes";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Milena Sol Aron",
  description: "My personal website and portfolio as a Software Developer.",
};

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang="en" className={lato.className} suppressHydrationWarning>
      <Script id="ms_clarity">
        {`
          (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "rhiu1bv5a5");
        `}
      </Script>
      <body className="min-h-screen grid grid-rows-[auto_1fr_auto]">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
