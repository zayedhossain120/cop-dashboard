import Providers from "@/lib/Providers";
import React from "react";
import "./globals.css";
import Header from "@/components/shared/Header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Providers>
      <html lang="en">
        <body>
          <Header />
          {children}
        </body>
      </html>
    </Providers>
  );
};

export default layout;
