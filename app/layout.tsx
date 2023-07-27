"use client";

import React, { useEffect, useCallback } from "react";
import ToasterProvider from "@/providers/ToasterProvider";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ModalProvider from "@/providers/ModalProvider";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Gallery of Glosses",
  description: "Explore Glosses and Manuscripts",
};

export const revalidate = 0;

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  useEffect(() => {
    const handleOnMouseMove = (e: React.MouseEvent<HTMLElement>) => {
      const target = e.currentTarget;

      if (!(target instanceof Element)) {
        return;
      }

      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      target.style.setProperty("--mouse-x", `${x}px`);
      target.style.setProperty("--mouse-y", `${y}px`);
    };

    const cards = document.querySelectorAll(".main");
    cards.forEach((card) => {
      card.addEventListener("mousemove", handleOnMouseMove as any); // For some reason, it wasn't accepting MouseEvent as a typescript type
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleOnMouseMove as any);
      });
    };
  }, []);

  return (
    <html lang="en">
      <body>
        <ToasterProvider />
        <ModalProvider />
        <Navbar>
          <div className="main">{children}</div>
          <Footer />
        </Navbar>
      </body>
    </html>
  );
};

export default RootLayout;
