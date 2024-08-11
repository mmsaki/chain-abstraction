import React from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Providers from "./Providers";

function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <main className="flex flex-col h-screen">
        <Navigation />
        {children}
        <Footer />
      </main>
    </Providers>
  );
}

export default Main;
