import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recipe App",
  description: "Simple application with recipes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
