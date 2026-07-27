import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { I18nProvider } from "@/lib/i18n/context";
import { MouseTrail } from "@/components/ui/mouse-trail";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Igor Lira",
    template: "%s | Igor Lira",
  },
  description:
    "Portfólio de Igor Lira — Desenvolvedor Backend em Java, Spring e tecnologias web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProvider>
            <MouseTrail />
            {children}
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
