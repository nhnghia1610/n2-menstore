import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "../globals.css";
import Navbar from "@/components/Navbar";
import ToasterProvider from "@/lib/providers/ToasterProvider";
import Footer from "@/components/layout/Footer";
import { viVN } from '@clerk/localizations';
import Wrapper from "@/components/layout/Wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "N2 Men Store",
  description: "N2 Men Store page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider localization={viVN}>
          <ToasterProvider />
          {/* Wrapper with flex to ensure footer stays at bottom */}
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Wrapper>
                {children}
              </Wrapper>
            </main>
            <Footer />
          </div>
        </ClerkProvider>
      </body>
    </html>
  );
}
