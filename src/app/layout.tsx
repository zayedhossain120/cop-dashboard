import Providers from "@/lib/Providers";
import React from "react";
import "./globals.css";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Providers>
      <html lang="en">
        <body>{children}</body>
      </html>
    </Providers>
  );
};

export default layout;
