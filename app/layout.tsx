import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "600", "800", "900"],
});

export const metadata: Metadata = {
  title: "Chain Abstraction",
  description: "Payments with EIP3770 compatible addresses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col h-screen">
          <Navigation>{children}</Navigation>
          <Footer />
        </main>
      </body>
    </html>
  );
}
