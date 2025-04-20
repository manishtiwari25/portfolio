import type { Metadata } from "next";
import "../styles/globals.css";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="minecraft-world bg-green-200 font-pixel min-h-screen text-gray-800"
      >
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
