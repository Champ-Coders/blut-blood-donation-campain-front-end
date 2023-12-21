import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Providers from "@/lib/Providers";
import HeaderPage from "@/components/shared/Header/Header";
import FooterPage from "@/components/shared/Footer/Footer";
import LiveChatButton from "@/components/Live-Chat/LiveChatButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blut | Blood Donation Campaign",
  description: "Blut to the main page of the Blood Donation Campaign",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={`${inter.className} bg-white `}>
          <HeaderPage />
          {children}
          <FooterPage />
          {/* floating icon */}

          <LiveChatButton/>
        </body>
      </html>
    </Providers>
  );
}
