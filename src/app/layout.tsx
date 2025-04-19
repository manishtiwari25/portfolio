import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Portfolio - Manish Tiwari",
  description: "Showcasing my projects and skills",
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
