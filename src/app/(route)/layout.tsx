import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Providers from "@/lib/Providers";

import HeaderPage from "@/components/shared/Header/Header";
import FooterPage from "@/components/shared/Footer/Footer";
import LiveChatButton from "@/components/Live-Chat/LiveChatButton";


import AnimatedCursor from "react-animated-cursor";

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
          <AnimatedCursor
            innerSize={38}
            outerSize={28}
            // color="193, 11, 111"
            color="234, 6, 43"
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
            clickables={[
              "a",
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              "label[for]",
              "select",
              "textarea",
              "button",
              ".link",
            ]}
          />

          <HeaderPage />
          {children}
          <FooterPage />
          {/* floating icon */}

          <LiveChatButton />
        </body>
      </html>
    </Providers>
  );
}
