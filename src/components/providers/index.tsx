import type { ReactNode } from "react";

import { ThemeProvider } from "./theme-provider";

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
}

export { useTheme } from "@/hooks/use-theme";
