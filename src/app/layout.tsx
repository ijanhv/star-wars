import type { Metadata } from "next";
import {  Saira } from "next/font/google";
import "./globals.css";

const saira = Saira({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Star Wars Movie Explorer",
  description:
    "Explore the epic Star Wars saga with detailed movie information, characters, planets, and starships.",
  keywords: [
    "Star Wars",
    "movies",
    "films",
    "SWAPI",
    "characters",
    "planets",
    "starships",
  ],
  authors: [{ name: "Star Wars Explorer Team" }],
  openGraph: {
    title: "Star Wars Movie Explorer",
    description:
      "Explore the epic Star Wars saga with detailed movie information",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={saira.className}>
        <div className="fixed inset-0 z-0 bg-black">
          <div
            className="absolute inset-0"
            style={{
              background: `
                    radial-gradient(2px 2px at 20px 30px, white, transparent),
                    radial-gradient(2px 2px at 40px 70px, white, transparent),
                    radial-gradient(1px 1px at 90px 40px, white, transparent),
                    radial-gradient(1px 1px at 130px 80px, white, transparent),
                    radial-gradient(2px 2px at 160px 30px, white, transparent),
                    radial-gradient(1px 1px at 200px 90px, white, transparent),
                    radial-gradient(2px 2px at 240px 50px, white, transparent),
                    radial-gradient(1px 1px at 280px 20px, white, transparent),
                    radial-gradient(1px 1px at 320px 60px, white, transparent),
                    radial-gradient(2px 2px at 360px 80px, white, transparent)
                  `,
              backgroundRepeat: "repeat",
              backgroundSize: "400px 100px",
              animation: "starfield 20s linear infinite",
            }}
          ></div>
        </div>
        {children}
      </body>
    </html>
  );
}
