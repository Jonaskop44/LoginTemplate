"use client";

import { HeroUIProvider } from "@heroui/react";
import NextTopLoader from "nextjs-toploader";
import { FC, ReactNode } from "react";
import { Toaster } from "sonner";

interface StyleProviderProps {
  children: ReactNode;
}

const StyleProvider: FC<StyleProviderProps> = ({ children }) => {
  return (
    <>
      <HeroUIProvider>
        <NextTopLoader showSpinner={false} color="#006bff" />
        {children}
        <Toaster position="bottom-right" richColors />
      </HeroUIProvider>
    </>
  );
};

export default StyleProvider;
