"use client";
import { ThemeProvider } from "next-themes";
import theme from "@/styles/theme";

const NextThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default NextThemeProvider;
