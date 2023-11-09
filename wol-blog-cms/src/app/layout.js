import { Inter } from "next/font/google";
import "./globals.css";
import NextThemeProvider from "@/providers/NextThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wolverine Blog CMS",
  description: "An app for easily creating blog posts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextThemeProvider>{children}</NextThemeProvider>
      </body>
    </html>
  );
}
