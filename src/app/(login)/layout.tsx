import type { Metadata } from "next";
import { Inter } from "next/font/google";

import HeaderPage from "@/components/shared/Header/Header";
import FooterPage from "@/components/shared/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Login | Blood Donation Campaign",
  description: "Blut to the main page of the Blood Donation Campaign",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <body className={`${inter.className} bg-white `}>
          <HeaderPage />
          {children}
          <FooterPage />
        </body>
  );
}
